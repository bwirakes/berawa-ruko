'use client'

import React, { useState } from 'react'
import { MessageCircle, Download } from 'lucide-react'
import { useTranslations, useLocale } from '@/lib/translations'

const WA_NUMBER = '6281385828138'
const BROCHURE = '/berawa-1053-brochure.pdf'

const LeadForm = () => {
  const t = useTranslations()
  const locale = useLocale()
  const [name, setName] = useState('')
  const [concept, setConcept] = useState('')
  const [phone, setPhone] = useState('')
  const [unit, setUnit] = useState('')

  const downloadBrochure = () => {
    const a = document.createElement('a')
    a.href = BROCHURE
    a.download = 'BERAWA-1053-Brochure.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const unitLabel = unit || t('LeadForm.unitAny')
    const msg =
      locale === 'id'
        ? `Halo, saya ${name || '-'}. Saya tertarik menyewa di Berawa 1053.\nKonsep: ${concept || '-'}\nUnit: ${unitLabel}\nWhatsApp saya: ${phone || '-'}`
        : `Hi, I'm ${name || '-'}. I'm interested in leasing at Berawa 1053.\nConcept: ${concept || '-'}\nUnit: ${unitLabel}\nMy WhatsApp: ${phone || '-'}`
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
    downloadBrochure()
  }

  const inputCls =
    'w-full bg-brand-white border border-brand-gold/40 px-4 py-3 text-sm font-light text-brand-black placeholder:text-brand-black/40 focus:border-brand-gold focus:outline-none transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-left">
      <input
        className={inputCls}
        placeholder={t('LeadForm.name')}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className={inputCls}
        placeholder={t('LeadForm.concept')}
        value={concept}
        onChange={(e) => setConcept(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <select
          className={inputCls}
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          aria-label={t('LeadForm.unit')}
        >
          <option value="">{t('LeadForm.unit')}</option>
          <option value="90 sqm">90 sqm</option>
          <option value="100 sqm">100 sqm</option>
          <option value="135 sqm">135 sqm</option>
          <option value={t('LeadForm.unitAny')}>{t('LeadForm.unitAny')}</option>
        </select>
        <input
          className={inputCls}
          placeholder={t('LeadForm.phone')}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          inputMode="tel"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-brand-gold text-brand-black py-4 px-6 text-sm font-semibold tracking-wide uppercase flex items-center justify-center gap-2 hover:bg-brand-maroon hover:text-brand-white transition-all duration-300 transform hover:scale-105 border-2 border-brand-gold hover:border-brand-maroon"
      >
        <MessageCircle className="w-4 h-4" />
        {t('LeadForm.submit')}
      </button>
      <button
        type="button"
        onClick={downloadBrochure}
        className="w-full text-brand-forest-green text-xs font-light tracking-wide uppercase flex items-center justify-center gap-2 py-2 hover:text-brand-gold transition-colors"
      >
        <Download className="w-4 h-4" />
        {t('LeadForm.download')}
      </button>
    </form>
  )
}

export default LeadForm
