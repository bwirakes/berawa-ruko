'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import type { SiteLocale } from '@/lib/land'
import styles from './LandPage.module.css'

type Labels = { site: string; uses: string; location: string; evidence: string; brief: string }

export default function LandHeader({ locale, labels, sectionBase = '' }: { locale: SiteLocale; labels: Labels; sectionBase?: string }) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const items = [
    [`${sectionBase}#site`, labels.site],
    [`${sectionBase}#possibilities`, labels.uses],
    [`${sectionBase}#location`, labels.location],
  ]

  useEffect(() => {
    if (!open) return
    menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className={styles.header}>
      <nav className={`${styles.wrap} ${styles.nav}`} aria-label={locale === 'id' ? 'Navigasi utama' : 'Primary navigation'}>
        <Link className={styles.brand} href={`/${locale}/land`} aria-label="BERAWA 1053 land lease">
          <Image src="/Icon_Gold.png" alt="" width={56} height={40} className={styles.brandLogo} />
          <span className={styles.brandText}>BERAWA 1053<small>{locale === 'id' ? 'Lahan 25 are' : '25-are land'}</small></span>
        </Link>
        <div className={styles.desktopNav}>
          {items.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          <LanguageSwitcher />
          <a className={styles.navCta} href={`${sectionBase}#enquire`}>{labels.brief}</a>
        </div>
        <div className={styles.mobileActions}>
          <LanguageSwitcher />
          <button ref={triggerRef} type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="land-mobile-menu" onClick={() => setOpen(!open)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className={styles.mobileMenu} id="land-mobile-menu" ref={menuRef}>
          {items.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className={styles.mobileBrief} href={`${sectionBase}#enquire`} onClick={() => setOpen(false)}>{labels.brief}</a>
        </div>
      )}
    </header>
  )
}
