'use client'

import { FormEvent, useState } from 'react'
import { Mail, MessageCircle } from 'lucide-react'
import { useTrackingFunctions } from '@/hooks/use-analytics'
import type { SiteLocale } from '@/lib/land'
import styles from './LandPage.module.css'

type Fields = {
  name: string
  company: string
  concept: string
  timeline: string
  timelineOptions: readonly string[]
}

export default function LandEnquiry({
  locale,
  fields,
  send,
  email,
  note,
}: {
  locale: SiteLocale
  fields: Fields
  send: string
  email: string
  note: string
}) {
  const [error, setError] = useState('')
  const { trackFormSubmission, trackContactAttempt } = useTrackingFunctions()

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const company = String(data.get('company') || '').trim()
    const concept = String(data.get('concept') || '').trim()
    const timeline = String(data.get('timeline') || '').trim()
    if (!name || !company || !concept || !timeline) {
      setError(locale === 'id' ? 'Lengkapi semua kolom sebelum melanjutkan.' : 'Complete every field before continuing.')
      event.currentTarget.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(':invalid')?.focus()
      return
    }
    setError('')
    trackFormSubmission('berawa_25_brochure')
    trackContactAttempt('form')
    const message = locale === 'id'
      ? `Halo, saya ${name} dari ${company}. Saya tertarik dengan lahan di BERAWA 1053. Rencana: ${concept}. Waktu keputusan: ${timeline}. Mohon kirim brosur.`
      : `Hi, I'm ${name} from ${company}. I'm interested in the land at BERAWA 1053. Intended use: ${concept}. Decision timeline: ${timeline}. Please send the brochure.`
    const popup = window.open(`https://wa.me/6281385828138?text=${encodeURIComponent(message)}`, '_blank')
    if (popup) popup.opener = null
    else setError(locale === 'id' ? 'WhatsApp tidak dapat dibuka. Gunakan tautan email di bawah.' : 'WhatsApp could not open. Use the email link below.')
  }

  return (
    <form className={styles.form} onSubmit={submit} noValidate>
      <div className={styles.formRow}>
        <label><span>{fields.name}</span><input name="name" autoComplete="name" required aria-invalid={Boolean(error)} aria-describedby={error ? 'land-form-error' : undefined} /></label>
        <label><span>{fields.company}</span><input name="company" autoComplete="organization" required aria-invalid={Boolean(error)} aria-describedby={error ? 'land-form-error' : undefined} /></label>
      </div>
      <label><span>{fields.concept}</span><textarea name="concept" rows={4} required aria-invalid={Boolean(error)} aria-describedby={error ? 'land-form-error' : undefined} /></label>
      <label>
        <span>{fields.timeline}</span>
        <select name="timeline" defaultValue="" required aria-invalid={Boolean(error)} aria-describedby={error ? 'land-form-error' : undefined}>
          {fields.timelineOptions.map((option, index) => <option key={option} value={index === 0 ? '' : option} disabled={index === 0}>{option}</option>)}
        </select>
      </label>
      {error && <p className={styles.formError} role="alert" id="land-form-error">{error}</p>}
      <button className={`${styles.button} ${styles.primaryButton}`} type="submit"><MessageCircle aria-hidden="true" />{send}</button>
      <a className={styles.emailLink} href="mailto:info@berawastores.com?subject=BERAWA%2025%20land%20brochure"><Mail aria-hidden="true" />{email}</a>
      <p className={styles.formNote}>{note}</p>
    </form>
  )
}
