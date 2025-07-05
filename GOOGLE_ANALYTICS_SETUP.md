# Google Analytics Setup Documentation

## Overview
This project has been configured with Google Analytics 4 (GA4) using the tracking ID `G-8JDJNTD4Z5`. The implementation uses the official **`@next/third-parties/google`** library, which is the recommended approach for Next.js applications.

## Implementation Details

### Official Next.js Third-Party Integration
This setup uses the official `@next/third-parties/google` package which:
- ✅ **Optimizes performance** with proper script loading strategies
- ✅ **Follows Next.js best practices** for third-party integrations
- ✅ **Handles server-side rendering** automatically
- ✅ **Provides better developer experience** with minimal configuration

## Files Created/Modified

### 1. Core Analytics Files
- **`src/lib/analytics.ts`** - Utility functions for tracking events
- **`src/hooks/use-analytics.ts`** - React hooks for analytics integration
- **`src/app/layout.tsx`** - Updated to include GA component
- **`package.json`** - Added `@next/third-parties` dependency

### 2. No Environment Variables Required
The Google Analytics ID is directly configured in the layout file for simplicity.

## Code Implementation

### Root Layout Integration
```tsx
// src/app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics gaId="G-8JDJNTD4Z5" />
      </body>
    </html>
  )
}
```

### Analytics Utilities
The `analytics.ts` file provides simplified tracking functions:
- **`trackEvent(name, parameters)`** - Track custom events
- **`trackButtonClick(name, location)`** - Track button interactions
- **`trackFormSubmission(formName)`** - Track form submissions
- **`trackContactAttempt(method)`** - Track contact attempts
- **`trackConversion(id, value)`** - Track conversions

### React Hook
- **`useTrackingFunctions()`** - Provides tracking functions for components

## Usage Examples

### 1. Track Button Clicks
```tsx
'use client'
import { useTrackingFunctions } from '@/hooks/use-analytics'

export default function ContactButton() {
  const { trackButtonClick } = useTrackingFunctions()
  
  const handleClick = () => {
    trackButtonClick('contact_cta', 'hero_section')
    // Your click logic
  }
  
  return <button onClick={handleClick}>Contact Us</button>
}
```

### 2. Track Form Submissions
```tsx
'use client'
import { useTrackingFunctions } from '@/hooks/use-analytics'

export default function ContactForm() {
  const { trackFormSubmission } = useTrackingFunctions()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    trackFormSubmission('contact_form')
    // Your form logic
  }
  
  return <form onSubmit={handleSubmit}>...</form>
}
```

### 3. Track Contact Attempts
```tsx
'use client'
import { useTrackingFunctions } from '@/hooks/use-analytics'

export default function ContactInfo() {
  const { trackContactAttempt } = useTrackingFunctions()
  
  const handleEmailClick = () => {
    trackContactAttempt('email')
    window.location.href = 'mailto:contact@example.com'
  }
  
  const handlePhoneClick = () => {
    trackContactAttempt('phone')
    window.location.href = 'tel:+1234567890'
  }
  
  return (
    <div>
      <button onClick={handleEmailClick}>Email Us</button>
      <button onClick={handlePhoneClick}>Call Us</button>
    </div>
  )
}
```

## Key Benefits of This Approach

### 1. **Performance Optimized**
- Scripts load after hydration for better performance
- Automatic optimization by Next.js team
- No manual script management required

### 2. **Simplified Setup**
- Single component import
- No custom components needed
- Minimal configuration

### 3. **Official Support**
- Maintained by the Next.js team
- Regular updates and improvements
- Better compatibility with future Next.js versions

### 4. **Automatic Page View Tracking**
- Page views are tracked automatically
- No need for manual page view tracking
- Works with Next.js App Router navigation

## Recommended Tracking Events

For a commercial property website, consider tracking:

### User Engagement
- **Page Views** - Automatically tracked by the component
- **Button Clicks** - Track CTA and navigation interactions
- **Form Submissions** - Track inquiry and contact forms

### Lead Generation
- **Contact Form Submissions** - Track inquiry forms
- **Phone Clicks** - Track phone number clicks
- **Email Clicks** - Track email address clicks

### Property Interest
- **Gallery Interactions** - Track image views and interactions
- **Location Clicks** - Track map and location interactions
- **Property Details** - Track section engagement

## Testing

### 1. Development Testing
```bash
npm run dev
```
- Open browser DevTools → Network tab → Filter by "gtag"
- Verify GA scripts are loading correctly

### 2. Production Testing
- Deploy to production
- Check Google Analytics Real-time reports
- Verify events are being tracked

### 3. Google Analytics Dashboard
- Monitor Real-time reports
- Set up conversion goals
- Configure custom events

## Advantages Over Custom Implementation

1. **Less Code** - No custom components needed
2. **Better Performance** - Optimized loading strategies
3. **Automatic Updates** - Maintained by Next.js team
4. **Future-Proof** - Follows official recommendations
5. **Easier Maintenance** - Simplified codebase

## Next Steps

1. **Set up Conversion Goals** in Google Analytics dashboard
2. **Add event tracking** to your Contact, Gallery, and other interactive components
3. **Configure Enhanced Ecommerce** if tracking property inquiries as conversions
4. **Monitor performance** in Google Analytics Real-time reports

## Support

For issues with this implementation:
1. Check [@next/third-parties documentation](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)
2. Review [Google Analytics 4 documentation](https://developers.google.com/analytics/devguides/collection/ga4)
3. Monitor Google Analytics real-time reports for verification

This implementation follows the official Next.js recommendations and provides a clean, maintainable solution for Google Analytics integration. 