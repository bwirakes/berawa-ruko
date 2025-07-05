'use client'

import {
  trackEvent,
  trackButtonClick,
  trackFormSubmission,
  trackContactAttempt,
  trackConversion,
} from '@/lib/analytics'

/**
 * Hook to get analytics tracking functions
 * Works with @next/third-parties/google GoogleAnalytics component
 */
export function useTrackingFunctions() {
  return {
    trackEvent,
    trackButtonClick,
    trackFormSubmission,
    trackContactAttempt,
    trackConversion,
  }
} 