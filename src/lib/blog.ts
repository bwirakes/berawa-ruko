import type { SiteLocale } from './land'

export type ArticleSource = { label: string; url: string }
export type ArticleSection = { heading: string; paragraphs: string[] }
export type BlogArticle = {
  slug: string
  published: string
  updated: string
  readMinutes: number
  title: Record<SiteLocale, string>
  dek: Record<SiteLocale, string>
  eyebrow: Record<SiteLocale, string>
  sections: Record<SiteLocale, ArticleSection[]>
  sources: ArticleSource[]
  series?: { year: string; value: number; label: string }[]
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'bali-tourism-growth-2019-2025',
    published: '2026-07-18',
    updated: '2026-07-18',
    readMinutes: 6,
    eyebrow: { en: 'Tourism · 2019–2025', id: 'Pariwisata · 2019–2025' },
    title: { en: 'Bali tourism: from record arrivals to recovery and a new high', id: 'Pariwisata Bali: dari rekor kunjungan, pemulihan, hingga capaian baru' },
    dek: {
      en: 'Seven years of official arrival data show the scale of Bali’s recovery—and why the pandemic break matters when operators model future demand.',
      id: 'Data resmi selama tujuh tahun menunjukkan skala pemulihan Bali—serta pentingnya jeda pandemi saat operator memodelkan permintaan ke depan.',
    },
    series: [
      { year: '2019', value: 6275210, label: '6.28m' }, { year: '2020', value: 1069473, label: '1.07m' },
      { year: '2021', value: 51, label: '51' }, { year: '2022', value: 2155747, label: '2.16m' },
      { year: '2023', value: 5273258, label: '5.27m' }, { year: '2024', value: 6333360, label: '6.33m' },
      { year: '2025', value: 6948754, label: '6.95m' },
    ],
    sections: {
      en: [
        { heading: 'The long view', paragraphs: ['BPS Bali recorded 6,275,210 direct foreign arrivals in 2019. Border disruption then reduced the count to 1,069,473 in 2020 and just 51 in 2021. The series is a discontinuity, not a smooth growth curve.', 'Recovery accelerated from 2,155,747 arrivals in 2022 to 5,273,258 in 2023 and 6,333,360 in 2024. The 2024 total was 0.93% above the 2019 benchmark, calculated from BPS totals.'] },
        { heading: 'A new high in 2025', paragraphs: ['BPS reported 6,948,754 direct foreign arrivals in 2025, up 9.72% year over year and 10.73% above 2019. Australia represented 23.44% of the annual total. International flight departures through Ngurah Rai reached 39,115, up 7.72%.'] },
        { heading: 'What operators can—and cannot—conclude', paragraphs: ['The recovery supports a broad international-demand thesis for Bali businesses and English-first leasing materials. It does not measure Berawa footfall, domestic tourism, customer spend, tenant sales or land-price appreciation.', 'A 30-year site decision still needs local evidence: movement counts, access, parking, competition, catchment, concept economics and downside scenarios. Macro arrivals are context, not a revenue forecast.'] },
      ],
      id: [
        { heading: 'Gambaran jangka panjang', paragraphs: ['BPS Bali mencatat 6.275.210 kunjungan wisatawan asing langsung pada 2019. Gangguan perbatasan kemudian menurunkan jumlah menjadi 1.069.473 pada 2020 dan hanya 51 pada 2021. Rangkaian ini memiliki jeda besar, bukan kurva pertumbuhan yang mulus.', 'Pemulihan meningkat dari 2.155.747 kunjungan pada 2022 menjadi 5.273.258 pada 2023 dan 6.333.360 pada 2024. Berdasarkan perhitungan dari total BPS, angka 2024 berada 0,93% di atas 2019.'] },
        { heading: 'Capaian baru pada 2025', paragraphs: ['BPS melaporkan 6.948.754 kunjungan wisatawan asing langsung pada 2025, naik 9,72% dari tahun sebelumnya dan 10,73% di atas 2019. Australia menyumbang 23,44% dari total tahunan. Keberangkatan penerbangan internasional melalui Ngurah Rai mencapai 39.115, naik 7,72%.'] },
        { heading: 'Kesimpulan yang tepat', paragraphs: ['Pemulihan mendukung tesis permintaan internasional secara umum dan materi pemasaran berbahasa Inggris. Data ini tidak mengukur jumlah pengunjung Berawa, wisata domestik, belanja pelanggan, penjualan penyewa atau kenaikan harga lahan.', 'Keputusan lokasi 30 tahun tetap memerlukan bukti lokal: hitungan pergerakan, akses, parkir, kompetisi, catchment, ekonomi konsep dan skenario penurunan.'] },
      ],
    },
    sources: [
      { label: 'BPS Bali annual table, 2019–2024', url: 'https://bali.bps.go.id/id/statistics-table/1/MTkzIzE%3D/number-of-foreign-visitors-arriving-directly-by-nationality-to-bali-2019-2024.html' },
      { label: 'BPS Bali 2025 annual release', url: 'https://bali.bps.go.id/en/news/2026/02/02/347/bali-s-foreign-arrivals-jan-dec-2025-rise--with-australia-remaining-the-largest-contributor-overall-.html' },
      { label: 'BPS Bali December 2021 release', url: 'https://bali.bps.go.id/en/pressrelease/2022/02/02/717641/bali-province-tourism-development-december-2021.html' },
    ],
  },
  {
    slug: 'badung-economy-tourism-commercial-growth',
    published: '2026-07-18', updated: '2026-07-18', readMinutes: 7,
    eyebrow: { en: 'Badung economy · 2020–2024', id: 'Ekonomi Badung · 2020–2024' },
    title: { en: 'What drives Badung’s economy? Accommodation, dining and transport in the data', id: 'Apa yang menggerakkan ekonomi Badung? Data akomodasi, kuliner dan transportasi' },
    dek: { en: 'BPS industry data separates the tourism recovery from real-estate growth—and helps frame the commercial demand thesis more carefully.', id: 'Data industri BPS memisahkan pemulihan pariwisata dari pertumbuhan real estat—dan membantu menyusun tesis permintaan komersial secara lebih hati-hati.' },
    sections: {
      en: [
        { heading: 'Recovery was strong, but uneven', paragraphs: ['Badung’s real GRDP contracted 16.55% in 2020 and 6.74% in 2021. It then grew 9.97% in 2022, 11.29% in preliminary 2023 data and 5.94% in very preliminary 2024 data.', 'Those labels matter. BPS may revise the newest years, and current-price values combine changes in output and prices. Real-growth figures are the better basis for statements about economic expansion.'] },
        { heading: 'Accommodation and dining regained weight', paragraphs: ['Accommodation and food-service value added rose from IDR 10.415 trillion in 2021 to IDR 19.318 trillion in 2024 at current prices. Its share of Badung’s economy increased from 23.21% to 25.72%, while real growth reached 18.44% in 2022, 20.54% in 2023 and 10.47% in 2024.'] },
        { heading: 'Transport reflects the gateway recovery', paragraphs: ['Transport and storage moved from IDR 5.734 trillion in 2021 to IDR 21.361 trillion in 2024 at current prices. Real-estate value added, by contrast, recorded real growth of 2.47% in 2022, 0.58% in 2023 and 2.28% in 2024.', 'The difference is useful: tourism-facing sectors recovered sharply, but the official series does not demonstrate parcel-level rent or land-value appreciation in Berawa.'] },
        { heading: 'Commercial implication', paragraphs: ['A Berawa concept should be designed around an addressable customer and repeatable operator economics—not simply the word “growth.” Day-to-night uses, access and parking, a differentiated offer and resilience outside peak tourism periods matter more than macro headlines alone.'] },
      ],
      id: [
        { heading: 'Pemulihan kuat, tetapi tidak merata', paragraphs: ['PDRB riil Badung menyusut 16,55% pada 2020 dan 6,74% pada 2021. Ekonomi kemudian tumbuh 9,97% pada 2022, 11,29% dalam data sementara 2023 dan 5,94% dalam data sangat sementara 2024.', 'Label sementara tersebut penting. BPS dapat merevisi tahun terbaru, dan nilai harga berlaku menggabungkan perubahan volume dan harga.'] },
        { heading: 'Akomodasi dan kuliner kembali membesar', paragraphs: ['Nilai tambah akomodasi dan penyediaan makan minum meningkat dari Rp10,415 triliun pada 2021 menjadi Rp19,318 triliun pada 2024 atas dasar harga berlaku. Pangsanya naik dari 23,21% menjadi 25,72%.'] },
        { heading: 'Transportasi mencerminkan pemulihan gerbang Bali', paragraphs: ['Transportasi dan pergudangan bergerak dari Rp5,734 triliun pada 2021 menjadi Rp21,361 triliun pada 2024 atas dasar harga berlaku. Sementara itu, pertumbuhan riil real estat tercatat 2,47% pada 2022, 0,58% pada 2023 dan 2,28% pada 2024.', 'Perbedaan ini penting: sektor pariwisata pulih tajam, tetapi data resmi tidak membuktikan kenaikan sewa atau nilai lahan pada satu bidang di Berawa.'] },
        { heading: 'Implikasi komersial', paragraphs: ['Konsep di Berawa harus dirancang berdasarkan pelanggan yang jelas dan ekonomi operator yang berulang—bukan hanya kata “pertumbuhan.” Penggunaan sepanjang hari, akses, parkir, diferensiasi dan ketahanan di luar musim puncak lebih penting daripada judul makro.'] },
      ],
    },
    sources: [{ label: 'BPS Badung GRDP by Industry, 2020–2024', url: 'https://badungkab.bps.go.id/en/publication/2025/04/11/582f0b818c0f394f42b2494c/gross-regional-domestic-product-of-badung-regency-by-industry-2020-2024.html' }],
  },
  {
    slug: 'bali-airport-hotel-demand-berawa',
    published: '2026-07-18', updated: '2026-07-18', readMinutes: 6,
    eyebrow: { en: 'Gateway demand · 2019–2024', id: 'Permintaan gerbang · 2019–2024' },
    title: { en: 'Bali’s gateway economy: airport scale, hotel demand and the Berawa opportunity', id: 'Ekonomi gerbang Bali: skala bandara, permintaan hotel dan peluang Berawa' },
    dek: { en: 'Airport passenger scale and December hotel occupancy show recovery, seasonality and the limits of using island-wide data for one site.', id: 'Skala penumpang bandara dan okupansi hotel bulan Desember menunjukkan pemulihan, musim, dan batas penggunaan data seluruh pulau untuk satu lokasi.' },
    sections: {
      en: [
        { heading: 'A large gateway', paragraphs: ['Ngurah Rai served 23.9 million passengers in 2024, 12% more than in 2023, according to figures reproduced in BPS Badung’s industry publication. The same report says international passenger volume rose 22%. “Passengers served” should not be read as unique visitors: airport definitions can include arrivals, departures and transit movements.'] },
        { heading: 'December occupancy recovered', paragraphs: ['BPS recorded December star-hotel occupancy of 62.55% in 2019, 19.00% in 2020, 30.67% in 2021, 53.75% in 2022, 62.19% in 2023 and 63.71% in 2024.', 'December 2024 also recorded 551,100 direct foreign arrivals, with Australia contributing 24.78%. These are useful demand snapshots, but December is seasonal and the hotel measure covers Bali—not Berawa alone.'] },
        { heading: 'The long-term interpretation', paragraphs: ['The gateway has recovered at scale, supporting Bali’s overall visitor economy. A Berawa operator should still underwrite local access, congestion, competitor supply, resident demand and a concept’s ability to trade through quieter periods.', 'For the landowner, measured site evidence is more persuasive than broad superlatives: a seven-day movement study, surveyed frontage, parking and loading plan, verified zoning and utility capacity should sit beside macro data in the investor room.'] },
      ],
      id: [
        { heading: 'Gerbang berskala besar', paragraphs: ['Ngurah Rai melayani 23,9 juta penumpang pada 2024, 12% lebih banyak dari 2023, berdasarkan angka yang dimuat dalam publikasi industri BPS Badung. Laporan yang sama menyebut volume penumpang internasional naik 22%. “Penumpang yang dilayani” bukan jumlah pengunjung unik.'] },
        { heading: 'Okupansi Desember pulih', paragraphs: ['BPS mencatat okupansi hotel berbintang bulan Desember sebesar 62,55% pada 2019, 19,00% pada 2020, 30,67% pada 2021, 53,75% pada 2022, 62,19% pada 2023 dan 63,71% pada 2024.', 'Desember 2024 juga mencatat 551.100 kunjungan wisatawan asing langsung, dengan Australia menyumbang 24,78%. Data ini berguna sebagai cuplikan permintaan, tetapi Desember bersifat musiman dan ukuran hotel mencakup seluruh Bali.'] },
        { heading: 'Interpretasi jangka panjang', paragraphs: ['Gerbang Bali telah pulih dalam skala besar. Operator di Berawa tetap perlu menilai akses lokal, kemacetan, pasokan pesaing, permintaan penduduk dan kemampuan konsep untuk berdagang di musim yang lebih sepi.', 'Bagi pemilik lahan, bukti lokasi terukur lebih meyakinkan daripada klaim besar: studi pergerakan tujuh hari, lebar fasad terukur, rencana parkir dan loading, zonasi terverifikasi dan kapasitas utilitas.'] },
      ],
    },
    sources: [
      { label: 'BPS Badung GRDP by Industry, 2020–2024', url: 'https://badungkab.bps.go.id/en/publication/2025/04/11/582f0b818c0f394f42b2494c/gross-regional-domestic-product-of-badung-regency-by-industry-2020-2024.html' },
      { label: 'BPS Bali tourism overview, December 2024', url: 'https://bali.bps.go.id/en/pressrelease/2025/02/03/717939/-tourism-overview-in-bali-province-december-2024.html' },
    ],
  },
]

export function getArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug)
}
