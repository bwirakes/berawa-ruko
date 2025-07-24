/**
 * Google Tag Manager (GTM) utility functions.
 * This module provides helper functions for tracking events using Google Tag Manager.
 * It relies on the `<GoogleTagManager />` component from `@next/third-parties/google`.
 *
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#google-tag-manager
 */
import { sendGTMEvent } from '@next/third-parties/google'

/**
 * Track custom events using Google Tag Manager's dataLayer.
 * The event name and parameters should match the triggers and variables
 * configured in your Google Tag Manager container.
 *
 * @param {string} eventName The name of the event to track (e.g., 'button_click').
 * @param {Record<string, any>} [parameters] Additional data to send with the event.
 */
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
): void => {
  sendGTMEvent({
    event: eventName,
    ...parameters,
  })
}

/**
 * Track button clicks.
 *
 * @param {string} buttonName A name to identify the button.
 * @param {string} [location] The location of the button on the page (e.g., 'header', 'footer').
 */
export const trackButtonClick = (buttonName: string, location?: string): void => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location,
  })
}

/**
 * Track form submissions.
 *
 * @param {string} formName A name to identify the form.
 */
export const trackFormSubmission = (formName: string): void => {
  trackEvent('form_submit', {
    form_name: formName,
  })
}

/**
 * Track contact attempts.
 *
 * @param {'email' | 'phone' | 'form'} method The method used for contact.
 */
export const trackContactAttempt = (
  method: 'email' | 'phone' | 'form'
): void => {
  trackEvent('contact_attempt', {
    contact_method: method,
  })
}

/**
 * Track conversions.
 * For GTM, conversion tracking is typically handled by configuring conversion tags
 * that fire on specific trigger events (e.g., a 'purchase' event).
 * This function sends a generic 'conversion' event which can be used as a trigger.
 *
 * @param {string} conversionName A descriptive name for the conversion action.
 * @param {string} [transactionId] A unique identifier for the transaction.
 * @param {number} [value] The value of the conversion.
 * @param {string} [currency] The currency of the value (e.g., 'USD').
 */
export const trackConversion = (
  conversionName: string,
  transactionId?: string,
  value?: number,
  currency?: string
): void => {
  trackEvent('conversion', {
    conversion_name: conversionName,
    transaction_id: transactionId,
    value: value,
    currency: currency,
  })
} 