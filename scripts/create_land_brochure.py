from __future__ import annotations

from io import BytesIO
from pathlib import Path

from PIL import Image, ImageEnhance
from reportlab.graphics import renderPDF
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.graphics.shapes import Drawing
from reportlab.lib.colors import Color, HexColor, white
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph
from reportlab.lib.utils import ImageReader


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf" / "BERAWA-25-Land-Lease-Brochure.pdf"
TMP = ROOT / "tmp" / "pdfs"

PAGE_W, PAGE_H = A4
MARGIN = 16 * mm

FOREST = HexColor("#203832")
GOLD = HexColor("#B99244")
BLACK = HexColor("#000000")
INK = HexColor("#162622")
SOFT_INK = HexColor("#555957")
PAPER = HexColor("#F8F7F2")
LINE = HexColor("#D9C79F")
PALE_GOLD = HexColor("#F2EBDD")
WHITE_80 = Color(1, 1, 1, alpha=0.80)
WHITE_65 = Color(1, 1, 1, alpha=0.65)

SERIF = "Georgia"
SERIF_BOLD = "Georgia-Bold"
SANS = "Helvetica"
SANS_BOLD = "Helvetica-Bold"


def register_fonts() -> None:
    pdfmetrics.registerFont(
        TTFont(SERIF, "/System/Library/Fonts/Supplemental/Georgia.ttf")
    )
    pdfmetrics.registerFont(
        TTFont(SERIF_BOLD, "/System/Library/Fonts/Supplemental/Georgia Bold.ttf")
    )


def crop_image(path: Path, width: int, height: int, *, contrast: float = 1.0) -> ImageReader:
    image = Image.open(path).convert("RGB")
    target_ratio = width / height
    source_ratio = image.width / image.height
    if source_ratio > target_ratio:
        crop_width = int(image.height * target_ratio)
        left = (image.width - crop_width) // 2
        image = image.crop((left, 0, left + crop_width, image.height))
    else:
        crop_height = int(image.width / target_ratio)
        top = (image.height - crop_height) // 2
        image = image.crop((0, top, image.width, top + crop_height))
    if contrast != 1.0:
        image = ImageEnhance.Contrast(image).enhance(contrast)
    image = image.resize((width, height), Image.Resampling.LANCZOS)
    stream = BytesIO()
    image.save(stream, format="JPEG", quality=92)
    stream.seek(0)
    return ImageReader(stream)


def paragraph(
    c: canvas.Canvas,
    text: str,
    x: float,
    y_top: float,
    width: float,
    *,
    font: str = SANS,
    size: float = 10,
    leading: float = 15,
    color=INK,
    align: int = TA_LEFT,
) -> float:
    style = ParagraphStyle(
        "brochure",
        fontName=font,
        fontSize=size,
        leading=leading,
        textColor=color,
        alignment=align,
        spaceAfter=0,
        spaceBefore=0,
    )
    flowable = Paragraph(text, style)
    _, height = flowable.wrap(width, PAGE_H)
    flowable.drawOn(c, x, y_top - height)
    return height


def letterspaced(c: canvas.Canvas, text: str, x: float, y: float, size: float, color, tracking: float = 1.4) -> None:
    c.setFont(SANS_BOLD, size)
    c.setFillColor(color)
    cursor = x
    for char in text.upper():
        c.drawString(cursor, y, char)
        cursor += c.stringWidth(char, SANS_BOLD, size) + tracking


def logo(c: canvas.Canvas, x: float, y: float, *, inverse: bool = False) -> None:
    icon = ROOT / "public" / "Icon_Gold.png"
    c.drawImage(str(icon), x, y, width=25 * mm, height=13.3 * mm, mask="auto")
    c.setFont(SERIF, 16)
    c.setFillColor(GOLD)
    c.drawString(x + 29 * mm, y + 4.2 * mm, "BERAWA 1053")
    if inverse:
        c.setStrokeColor(Color(1, 1, 1, alpha=0.18))


def page_number(c: canvas.Canvas, page: int, color=SOFT_INK) -> None:
    c.setFont(SANS, 7.5)
    c.setFillColor(color)
    c.drawRightString(PAGE_W - MARGIN, 10 * mm, f"BERAWA 25  /  0{page}")


def draw_cover(c: canvas.Canvas) -> None:
    c.setFillColor(FOREST)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    logo(c, MARGIN, PAGE_H - 31 * mm, inverse=True)
    letterspaced(c, "Commercial land - Berawa", MARGIN, PAGE_H - 58 * mm, 8.5, GOLD)

    c.setFont(SERIF, 104)
    c.setFillColor(white)
    c.drawString(MARGIN, PAGE_H - 114 * mm, "25")
    c.setFont(SANS_BOLD, 25)
    c.setFillColor(GOLD)
    c.drawString(MARGIN + 65 * mm, PAGE_H - 105 * mm, "ARE")

    c.setFont(SERIF, 34)
    c.setFillColor(white)
    c.drawString(MARGIN, PAGE_H - 142 * mm, "For a long-term")
    c.setFillColor(GOLD)
    c.drawString(MARGIN, PAGE_H - 157 * mm, "Berawa concept.")

    paragraph(
        c,
        "A 2,500 sqm commercial land opportunity beside Mosto on Jalan Pantai Berawa.",
        MARGIN,
        PAGE_H - 170 * mm,
        135 * mm,
        size=12,
        leading=18,
        color=WHITE_80,
    )

    c.setStrokeColor(Color(185 / 255, 146 / 255, 68 / 255, alpha=0.65))
    c.line(MARGIN, 104 * mm, PAGE_W - MARGIN, 104 * mm)
    facts = [
        ("2,500 SQM", "TOTAL LAND AREA"),
        ("IDR 45 MILLION", "PER ARE / YEAR"),
        ("30 YEARS", "PROPOSED LEASEHOLD"),
    ]
    col_width = (PAGE_W - 2 * MARGIN) / 3
    for index, (value, label) in enumerate(facts):
        x = MARGIN + index * col_width
        c.setFont(SERIF, 15.5 if index != 1 else 13.5)
        c.setFillColor(white)
        c.drawString(x, 91 * mm, value)
        letterspaced(c, label, x, 83 * mm, 6.5, GOLD, tracking=0.8)

    map_strip = crop_image(
        ROOT / "public" / "land" / "berawa-25-satellite.png",
        1800,
        510,
        contrast=0.9,
    )
    c.drawImage(map_strip, 0, 0, width=PAGE_W, height=72 * mm)
    c.setFillColor(Color(0, 0, 0, alpha=0.40))
    c.rect(0, 0, PAGE_W, 72 * mm, fill=1, stroke=0)
    c.setFont(SANS, 7.5)
    c.setFillColor(WHITE_80)
    c.drawString(MARGIN, 11 * mm, "INDICATIVE SITE CONTEXT  /  JL. PANTAI BERAWA 1053, CANGGU, BALI")
    c.showPage()


def draw_plot_card(
    c: canvas.Canvas,
    x: float,
    y: float,
    w: float,
    h: float,
    label: str,
    sizes: list[int],
    widths: list[float],
) -> None:
    c.setFillColor(white)
    c.setStrokeColor(GOLD)
    c.setLineWidth(0.7)
    c.rect(x, y, w, h, fill=1, stroke=1)
    letterspaced(c, label, x + 8, y + h - 14, 6.5, FOREST, tracking=0.7)

    diagram_x = x + 8
    diagram_y = y + 22
    diagram_w = w - 16
    diagram_h = 24
    c.setFillColor(FOREST)
    c.rect(diagram_x, diagram_y, diagram_w, diagram_h, fill=1, stroke=0)

    gap = 2
    usable_w = diagram_w - 2 * gap
    west_w = usable_w * widths[0] / sum(widths)
    road_h = 7
    inner_y = diagram_y + gap
    inner_h = diagram_h - 2 * gap

    c.setFillColor(PAPER)
    c.setStrokeColor(GOLD)
    c.rect(diagram_x + gap, inner_y, west_w - gap, inner_h, fill=1, stroke=1)
    c.setFont(SERIF_BOLD, 9)
    c.setFillColor(FOREST)
    c.drawCentredString(diagram_x + gap + (west_w - gap) / 2, inner_y + inner_h / 2 - 2, str(sizes[0]))

    right_x = diagram_x + gap + west_w
    right_w = diagram_w - west_w - 2 * gap
    c.setFillColor(GOLD)
    c.rect(right_x, inner_y + inner_h - road_h, right_w, road_h, fill=1, stroke=0)
    c.setFont(SANS_BOLD, 5.0)
    c.setFillColor(FOREST)
    c.drawCentredString(right_x + right_w / 2, inner_y + inner_h - road_h + 1.8, "NORTH - PROPOSED 3 M ROAD")

    cell_y = inner_y
    cell_h = inner_h - road_h - gap
    remaining_widths = widths[1:]
    total_remaining = sum(remaining_widths)
    cursor = right_x
    for index, (size, relative_width) in enumerate(zip(sizes[1:], remaining_widths)):
        cell_w = right_w * relative_width / total_remaining
        c.setFillColor(PAPER)
        c.setStrokeColor(GOLD)
        c.rect(cursor, cell_y, cell_w - (gap if index < len(remaining_widths) - 1 else 0), cell_h, fill=1, stroke=1)
        c.setFont(SERIF_BOLD, 7.2)
        c.setFillColor(FOREST)
        c.drawCentredString(cursor + cell_w / 2, cell_y + cell_h / 2 - 2, str(size))
        cursor += cell_w

    c.setFont(SANS, 6.8)
    c.setFillColor(SOFT_INK)
    c.drawString(x + 8, y + 10, " + ".join(str(size) for size in sizes) + " ARE")


def draw_site_page(c: canvas.Canvas) -> None:
    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    logo(c, MARGIN, PAGE_H - 28 * mm)
    page_number(c, 2)

    letterspaced(c, "The site", MARGIN, PAGE_H - 50 * mm, 8, FOREST)
    c.setFont(SERIF, 30)
    c.setFillColor(FOREST)
    c.drawString(MARGIN, PAGE_H - 68 * mm, "The site,")
    c.setFillColor(GOLD)
    c.drawString(MARGIN + 42 * mm, PAGE_H - 68 * mm, "in context.")
    paragraph(
        c,
        "Beside Mosto on Jalan Pantai Berawa. Discuss the whole 25 are or a smaller target plot for a focused standalone concept.",
        MARGIN,
        PAGE_H - 78 * mm,
        160 * mm,
        size=10.5,
        leading=16,
        color=SOFT_INK,
    )

    map_x = MARGIN
    map_y = 111 * mm
    map_w = PAGE_W - 2 * MARGIN
    map_h = 91 * mm
    map_image = crop_image(
        ROOT / "public" / "land" / "berawa-25-satellite.png",
        1800,
        950,
        contrast=0.97,
    )
    c.setStrokeColor(GOLD)
    c.setLineWidth(1)
    c.rect(map_x - 1, map_y - 1, map_w + 2, map_h + 2, fill=0, stroke=1)
    c.drawImage(map_image, map_x, map_y, width=map_w, height=map_h)
    c.setFillColor(FOREST)
    c.rect(map_x, map_y, 51 * mm, 10 * mm, fill=1, stroke=0)
    letterspaced(c, "Indicative site view", map_x + 4 * mm, map_y + 3.5 * mm, 6.5, GOLD, tracking=0.7)

    paragraph(
        c,
        "Indicative location and outline only. Not a cadastral survey or evidence of legal boundaries, frontage, access, or right of way. Map imagery (c) Google.",
        MARGIN,
        105 * mm,
        PAGE_W - 2 * MARGIN,
        size=7.2,
        leading=10,
        color=SOFT_INK,
    )

    letterspaced(c, "Flexible by design", MARGIN, 88 * mm, 8, FOREST)
    paragraph(
        c,
        "Choose the scale that fits the concept.",
        MARGIN,
        82 * mm,
        160 * mm,
        font=SERIF,
        size=18,
        leading=22,
        color=FOREST,
    )

    card_gap = 5 * mm
    card_w = (PAGE_W - 2 * MARGIN - 2 * card_gap) / 3
    cards = [
        ("4 PLOTS", [7, 6, 6, 6], [26.90, 23.70, 24.35, 25.05]),
        ("5 PLOTS", [5, 5, 5, 5, 5], [19.14, 19.54, 19.97, 20.43, 20.92]),
        ("6 PLOTS", [5, 4, 4, 4, 4, 4], [19.14, 15.60, 15.87, 16.16, 16.46, 16.78]),
    ]
    for index, card in enumerate(cards):
        draw_plot_card(c, MARGIN + index * (card_w + card_gap), 34 * mm, card_w, 39 * mm, *card)

    paragraph(
        c,
        "Target plot sizes are gross planning concepts. Final areas, boundaries, access, road allocation, and layout remain subject to survey, due diligence, and owner approval.",
        MARGIN,
        29 * mm,
        PAGE_W - 2 * MARGIN,
        size=7.2,
        leading=10,
        color=SOFT_INK,
    )
    c.showPage()


def draw_pricing_table(c: canvas.Canvas, x: float, y_top: float, width: float) -> None:
    col1 = 30 * mm
    col2 = 61 * mm
    col3 = width - col1 - col2
    row_h = 9.2 * mm
    rows = [
        ("AREA", "ANNUAL", "30-YEAR BASE*"),
        ("4 are", "IDR 180,000,000", "IDR 5,400,000,000"),
        ("5 are", "IDR 225,000,000", "IDR 6,750,000,000"),
        ("6 are", "IDR 270,000,000", "IDR 8,100,000,000"),
        ("7 are", "IDR 315,000,000", "IDR 9,450,000,000"),
        ("25 are", "IDR 1,125,000,000", "IDR 33,750,000,000"),
    ]
    for row_index, row in enumerate(rows):
        y = y_top - (row_index + 1) * row_h
        c.setFillColor(FOREST if row_index == 0 else (white if row_index % 2 else PALE_GOLD))
        c.rect(x, y, width, row_h, fill=1, stroke=0)
        c.setStrokeColor(LINE)
        c.line(x, y, x + width, y)
        c.setFont(SANS_BOLD if row_index == 0 else SANS, 7.2 if row_index == 0 else 8.5)
        c.setFillColor(GOLD if row_index == 0 else INK)
        baseline = y + 4.1 * mm
        c.drawString(x + 4 * mm, baseline, row[0])
        c.drawString(x + col1 + 4 * mm, baseline, row[1])
        c.drawString(x + col1 + col2 + 4 * mm, baseline, row[2])
    c.setStrokeColor(GOLD)
    c.rect(x, y_top - len(rows) * row_h, width, len(rows) * row_h, fill=0, stroke=1)


def draw_qr(c: canvas.Canvas, url: str, x: float, y: float, size: float) -> None:
    c.setFillColor(white)
    c.rect(x, y, size, size, fill=1, stroke=0)
    qr = QrCodeWidget(url)
    bounds = qr.getBounds()
    qr_width = bounds[2] - bounds[0]
    qr_height = bounds[3] - bounds[1]
    scale = (size - 8) / max(qr_width, qr_height)
    qr.barFillColor = BLACK
    qr.barStrokeColor = BLACK
    drawing = Drawing(qr_width, qr_height)
    drawing.add(qr)
    c.saveState()
    c.translate(x + 4, y + 4)
    c.scale(scale, scale)
    renderPDF.draw(drawing, c, 0, 0)
    c.restoreState()
    c.linkURL(url, (x, y, x + size, y + size), relative=0)


def draw_terms_page(c: canvas.Canvas) -> None:
    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    logo(c, MARGIN, PAGE_H - 28 * mm)

    letterspaced(c, "Commercial terms", MARGIN, PAGE_H - 50 * mm, 8, FOREST)
    c.setFont(SERIF, 30)
    c.setFillColor(FOREST)
    c.drawString(MARGIN, PAGE_H - 68 * mm, "A clear basis")
    c.setFillColor(GOLD)
    c.drawString(MARGIN, PAGE_H - 82 * mm, "for discussion.")

    panel_y = PAGE_H - 132 * mm
    panel_h = 38 * mm
    c.setFillColor(GOLD)
    c.rect(MARGIN, panel_y, PAGE_W - 2 * MARGIN, panel_h, fill=1, stroke=0)
    letterspaced(c, "Indicative asking rate", MARGIN + 7 * mm, panel_y + 28 * mm, 7, FOREST, tracking=0.9)
    c.setFont(SERIF_BOLD, 27)
    c.setFillColor(BLACK)
    c.drawString(MARGIN + 7 * mm, panel_y + 13 * mm, "IDR 45,000,000")
    c.setFont(SANS_BOLD, 8.5)
    c.drawString(MARGIN + 7 * mm, panel_y + 6 * mm, "PER ARE / YEAR")
    c.setStrokeColor(Color(0, 0, 0, alpha=0.28))
    c.line(PAGE_W - 70 * mm, panel_y + 6 * mm, PAGE_W - 70 * mm, panel_y + 32 * mm)
    c.setFont(SERIF, 23)
    c.drawString(PAGE_W - 62 * mm, panel_y + 16 * mm, "30 years")
    c.setFont(SANS, 7.5)
    c.drawString(PAGE_W - 62 * mm, panel_y + 8 * mm, "PROPOSED LEASEHOLD")

    table_top = panel_y - 10 * mm
    draw_pricing_table(c, MARGIN, table_top, PAGE_W - 2 * MARGIN)
    paragraph(
        c,
        "*Calculated at a constant IDR 45,000,000 x stated gross area x 30 years. Annual figures are annualised equivalents, not a payment schedule. Extension, taxes, and withholding treatment are excluded.",
        MARGIN,
        table_top - 58 * mm,
        PAGE_W - 2 * MARGIN,
        size=7.2,
        leading=10,
        color=SOFT_INK,
    )

    notes_top = table_top - 71 * mm
    c.setStrokeColor(LINE)
    c.line(MARGIN, notes_top, PAGE_W - MARGIN, notes_top)
    third = (PAGE_W - 2 * MARGIN) / 3
    notes = [
        ("TERM", "30-year leasehold, subject to definitive documentation."),
        ("EXTENSION", "May be agreed in writing. No term, price, or right is automatic."),
        ("DUE DILIGENCE", "Verify title, area, access, zoning, utilities, and permitted use."),
    ]
    for index, (heading, body) in enumerate(notes):
        x = MARGIN + index * third
        letterspaced(c, heading, x, notes_top - 8 * mm, 6.8, FOREST, tracking=0.8)
        paragraph(c, body, x, notes_top - 12 * mm, third - 7 * mm, size=8.2, leading=11.5, color=SOFT_INK)

    paragraph(
        c,
        "Indicative marketing only; not a binding offer or legal, tax, valuation, or investment advice. Area, title, access, zoning, permitted use, availability, price, and lease terms remain subject to survey, due diligence, owner confirmation, and definitive documentation.",
        MARGIN,
        60 * mm,
        PAGE_W - 2 * MARGIN,
        size=7.4,
        leading=9.6,
        color=SOFT_INK,
    )

    footer_h = 51 * mm
    c.setFillColor(FOREST)
    c.rect(0, 0, PAGE_W, footer_h, fill=1, stroke=0)
    c.setFont(SERIF, 22)
    c.setFillColor(white)
    c.drawString(MARGIN, 41 * mm, "Request the site pack.")
    paragraph(
        c,
        "Share your preferred plot size and intended use to receive the indicative plan and arrange a site visit.",
        MARGIN,
        35 * mm,
        118 * mm,
        size=9,
        leading=13,
        color=WHITE_80,
    )
    c.setFont(SANS_BOLD, 8)
    c.setFillColor(GOLD)
    c.drawString(MARGIN, 17 * mm, "WHATSAPP  +62 813-8582-8138")
    c.setFont(SANS, 8)
    c.setFillColor(white)
    c.drawString(MARGIN, 11 * mm, "www.berawashops.com/land")

    whatsapp_url = (
        "https://wa.me/6281385828138?text="
        "Hi%2C%20I%27m%20interested%20in%20the%20BERAWA%2025%20land%20lease.%20"
        "Please%20share%20the%20site%20pack."
    )
    site_url = "https://www.berawashops.com/land"
    c.linkURL(whatsapp_url, (MARGIN, 15 * mm, MARGIN + 73 * mm, 21 * mm), relative=0)
    c.linkURL(site_url, (MARGIN, 9 * mm, MARGIN + 55 * mm, 14 * mm), relative=0)
    draw_qr(c, whatsapp_url, PAGE_W - MARGIN - 35 * mm, 11 * mm, 35 * mm)

    c.setFont(SANS, 6.5)
    c.setFillColor(WHITE_65)
    c.drawRightString(PAGE_W - MARGIN, 5 * mm, "BERAWA 25  /  03")
    c.showPage()


def build() -> Path:
    register_fonts()
    OUT.parent.mkdir(parents=True, exist_ok=True)
    TMP.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(OUT), pagesize=A4, pageCompression=1)
    pdf.setTitle("BERAWA 25 - Commercial Land Lease Brochure")
    pdf.setAuthor("BERAWA 1053")
    pdf.setSubject("25-are commercial land lease in Berawa, Canggu, Bali")
    draw_cover(pdf)
    draw_site_page(pdf)
    draw_terms_page(pdf)
    pdf.save()
    return OUT


if __name__ == "__main__":
    print(build())
