/**
 * Google Analytics utility functions
 * Works with @next/third-parties/google GoogleAnalytics component
 */

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
    dataLayer?: Object[]
  }
}

export const GA_TRACKING_ID = 'G-8JDJNTD4Z5'

/**
 * Check if Google Analytics is available
 */
export const isGAAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

/**
 * Track custom events
 */
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
): void => {
  if (isGAAvailable()) {
    window.gtag('event', eventName, parameters)
  }
}

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonName: string, location?: string): void => {
  trackEvent('click', {
    button_name: buttonName,
    location: location,
  })
}

/**
 * Track form submissions
 */
export const trackFormSubmission = (formName: string): void => {
  trackEvent('form_submit', {
    form_name: formName,
  })
}

/**
 * Track contact attempts
 */
export const trackContactAttempt = (method: 'email' | 'phone' | 'form'): void => {
  trackEvent('contact_attempt', {
    method: method,
  })
}

/**
 * Track conversions
 */
export const trackConversion = (conversionId: string, value?: number): void => {
  trackEvent('conversion', {
    send_to: conversionId,
    value: value,
  })
} 