import Image from 'next/image'
import Link from 'next/link'

const WHATSAPP_NUMBER = '6281385828138'
const DEFAULT_MESSAGE = "I'm interested in the Berawa commercial property"

function buildWhatsAppHref(number: string, message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${encoded}`
}

export function WhatsAppFloatingButton() {
  const href = buildWhatsAppHref(WHATSAPP_NUMBER, DEFAULT_MESSAGE)

  return (
    <Link
      href={href}
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
    >
      <span className="sr-only">Open WhatsApp chat</span>
      <Image
        src="/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png (1).webp"
        alt="WhatsApp"
        width={56}
        height={56}
        priority={false}
        className="h-14 w-14 rounded-full border border-green-500 bg-white/90 hover:scale-105 transition-transform duration-150 ease-out"
      />
    </Link>
  )
}

export default WhatsAppFloatingButton


