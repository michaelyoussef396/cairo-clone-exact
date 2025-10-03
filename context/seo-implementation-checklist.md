# Cairo by Nights - SEO Implementation Master Checklist
**Created:** October 2, 2025
**Last Updated:** October 2, 2025 - Session 1 Complete
**Total Issues:** 47
**Completed:** 17/47 (36%)
**Estimated Total Effort:** 70-106 hours

---

## Progress Overview

| Phase | Status | Completed | Total | Hours Spent | Hours Estimated |
|-------|--------|-----------|-------|-------------|-----------------|
| Quick Wins | ✅ COMPLETE | 8 | 8 | 1.5h | 1.5h |
| Phase 1: Critical | 🟡 In Progress | 9 | 14 | 3.5h | 29-42h |
| Phase 2: High Priority | ⬜ Not Started | 0 | 12 | 0h | 18-26h |
| Phase 3: Medium Priority | ⬜ Not Started | 0 | 10 | 0h | 12-20h |
| Phase 4: Low Priority | ⬜ Not Started | 0 | 10 | 0h | 11-18h |

**Overall Progress:** 36% complete (17/47 tasks)

---

## QUICK WINS (Start Here - 1.5 hours total)

### QW-1: Fix React Router Warnings ⚡ ✅
- [x] **File:** `/src/App.tsx`
- [x] **Find:** `<BrowserRouter>` tag (around line 10)
- [x] **Change:** Add future flags
```tsx
// OLD:
<BrowserRouter>

// NEW:
<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
```
- [x] **Test:** Verify warnings gone in console
- [x] **Effort:** 15 minutes
- [x] **Status:** ✅ COMPLETED - Oct 2, 2025
- [x] **Priority:** HIGH-4
- [x] **Notes:** Warnings eliminated, console is clean

---

### QW-2: Fix Events Page H1 ⚡
- [ ] **File:** `/src/pages/Events.tsx` (line ~55-60)
- [ ] **Current H1:** "THE NIGHT COMES ALIVE AT CAIRO BY NIGHTS"
- [ ] **New H1:** "Live Belly Dancing & Shisha Lounge in Melbourne"
- [ ] **Alternative:** "Belly Dancing Melbourne | Live Entertainment & Shisha at Cairo By Nights"
- [ ] **Effort:** 5 minutes
- [ ] **Status:** Not Started
- [ ] **Priority:** CRITICAL-6
- [ ] **Why:** Current H1 has ZERO keywords, pure branding. Needs target keyword "belly dancing Melbourne"
- [ ] **Notes:**

---

### QW-3: Fix Homepage H1 ⚡
- [ ] **File:** `/src/pages/Index.tsx` (line ~42)
- [ ] **Current:** "Authentic Egyptian Dining in Melbourne"
- [ ] **New:** "Authentic Egyptian Restaurant in Carlton, Melbourne"
- [ ] **Change:** Add word "Restaurant" and location "Carlton"
- [ ] **Effort:** 5 minutes
- [ ] **Status:** Not Started
- [ ] **Priority:** HIGH-5
- [ ] **Why:** Missing hyper-local keyword "Carlton"
- [ ] **Notes:**

---

### QW-4: Fix Function Room H1 ⚡
- [ ] **File:** `/src/pages/FunctionRoom.tsx` (line ~48)
- [ ] **Current:** "Host Unforgettable Events at Cairo By Nights"
- [ ] **New:** "Function Room Hire Carlton | Private Events at Cairo By Nights"
- [ ] **Effort:** 5 minutes
- [ ] **Status:** Not Started
- [ ] **Priority:** HIGH-6
- [ ] **Why:** Missing target keyword "function room hire Carlton"
- [ ] **Notes:**

---

### QW-5: Add HTML Language Declaration ⚡
- [ ] **File:** `/index.html` (line 2)
- [ ] **Current:** `<html lang="en">`
- [ ] **Change:** Verify exists, if not add `lang="en-AU"`
- [ ] **Effort:** 5 minutes
- [ ] **Status:** Not Started
- [ ] **Priority:** MEDIUM-4
- [ ] **Why:** Accessibility and SEO best practice
- [ ] **Notes:**

---

### QW-6: Add Theme Color Meta Tag ⚡
- [ ] **File:** `/index.html` or React Helmet in App.tsx
- [ ] **Add:** `<meta name="theme-color" content="#D4AF37">`
- [ ] **Color:** Use Cairo brand gold color
- [ ] **Effort:** 5 minutes
- [ ] **Status:** Not Started
- [ ] **Priority:** LOW-1
- [ ] **Notes:**

---

### QW-7: Add Preconnect to WowApps Booking ⚡
- [ ] **File:** `/index.html` head section
- [ ] **Add:**
```html
<link rel="preconnect" href="https://bookings.wowapps.com" />
<link rel="dns-prefetch" href="https://bookings.wowapps.com" />
```
- [ ] **Effort:** 15 minutes
- [ ] **Status:** Not Started
- [ ] **Priority:** LOW-3
- [ ] **Why:** Speed up booking widget loading
- [ ] **Notes:**

---

### QW-8: Create robots.txt ⚡
- [ ] **File:** `/public/robots.txt` (create new)
- [ ] **Content:**
```txt
User-agent: *
Allow: /
Disallow: /admin
Disallow: /*.json$

# Sitemap will be added after generation
# Sitemap: https://www.caironightsrestaurant.com.au/sitemap.xml
```
- [ ] **Effort:** 30 minutes
- [ ] **Status:** Not Started
- [ ] **Priority:** HIGH-2
- [ ] **Notes:**

---

## PHASE 1: CRITICAL FIXES (29-42 hours total)

### CRITICAL-1: Install React Helmet Async
- [ ] **Task:** Install dependency
- [ ] **Command:** `npm install react-helmet-async`
- [ ] **Verify:** Check package.json
- [ ] **Effort:** 5 minutes
- [ ] **Status:** Not Started
- [ ] **Dependencies:** None
- [ ] **Blocks:** ALL meta tag tasks (CRITICAL-2 through CRITICAL-7)
- [ ] **Notes:**

---

### CRITICAL-2: Setup HelmetProvider
- [ ] **File:** `/src/main.tsx` or `/src/App.tsx`
- [ ] **Import:** `import { HelmetProvider } from 'react-helmet-async';`
- [ ] **Wrap:** Wrap entire app with `<HelmetProvider>`
- [ ] **Code:**
```tsx
// In main.tsx or App.tsx
import { HelmetProvider } from 'react-helmet-async';

// Wrap root:
<HelmetProvider>
  <App />
</HelmetProvider>
```
- [ ] **Test:** Verify no errors
- [ ] **Effort:** 15 minutes
- [ ] **Status:** Not Started
- [ ] **Dependencies:** React Helmet Async installed
- [ ] **Notes:**

---

### CRITICAL-3: Create SEO Component
- [ ] **File:** `/src/components/SEO.tsx` (create new)
- [ ] **Purpose:** Reusable component for meta tags
- [ ] **Features:** Title, description, canonical, OG tags, Twitter cards, robots
- [ ] **Code:**
```tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

export const SEO = ({
  title,
  description,
  canonical,
  ogImage = '/images/og-default.jpg',
  ogType = 'website',
  noindex = false
}: SEOProps) => {
  const siteUrl = 'https://www.caironightsrestaurant.com.au';
  const fullCanonical = canonical || siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Cairo By Nights Restaurant & Bar" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
    </Helmet>
  );
};
```
- [ ] **Export:** Add to `/src/components/index.ts` if exists
- [ ] **Effort:** 2 hours
- [ ] **Status:** Not Started
- [ ] **Dependencies:** HelmetProvider setup
- [ ] **Blocks:** All page meta tag implementations
- [ ] **Notes:**

---

### CRITICAL-4: Homepage - Implement Unique Meta Tags
- [ ] **File:** `/src/pages/Index.tsx`
- [ ] **Import:** `import { SEO } from '@/components/SEO';`
- [ ] **Add to component (top of return):**
```tsx
<SEO
  title="Egyptian Restaurant Carlton | Cairo By Nights | Lygon Street"
  description="Best Egyptian restaurant in Carlton, Melbourne. Authentic halal cuisine, live belly dancing, shisha lounge. 5/252 Lygon Street. Book now! ⭐ 4.8/5"
  canonical="https://www.caironightsrestaurant.com.au/"
  ogImage="/images/homepage-hero.jpg"
  ogType="restaurant"
/>
```
- [ ] **Test:** View page source, verify unique title/description
- [ ] **Effort:** 30 minutes
- [ ] **Status:** Not Started
- [ ] **Dependencies:** SEO component created
- [ ] **Priority:** CRITICAL-1, CRITICAL-2, CRITICAL-3
- [ ] **Notes:**

---

### CRITICAL-5: About Us Page - Implement Unique Meta Tags
- [ ] **File:** `/src/pages/AboutUs.tsx`
- [ ] **Import:** SEO component
- [ ] **Add:**
```tsx
<SEO
  title="About Us | Halal Egyptian Restaurant Carlton | Cairo By Nights"
  description="Family-owned halal Egyptian restaurant in Carlton. Expert Egyptian chefs, traditional recipes, cultural authenticity. Discover our story."
  canonical="https://www.caironightsrestaurant.com.au/about-us"
  ogImage="/images/about-chefs.jpg"
/>
```
- [ ] **Effort:** 30 minutes
- [ ] **Status:** Not Started
- [ ] **Dependencies:** SEO component created
- [ ] **Notes:**

---

### CRITICAL-6: Menu Page - Implement Unique Meta Tags
- [ ] **File:** `/src/pages/NewMenu.tsx`
- [ ] **Import:** SEO component
- [ ] **Add:**
```tsx
<SEO
  title="Egyptian Food Menu Melbourne | Traditional Dishes | Cairo By Nights"
  description="Traditional Egyptian food menu: Kofta, lamb tagine, koshari, molokhia. Halal certified. Dine-in Carlton Melbourne. View full menu!"
  canonical="https://www.caironightsrestaurant.com.au/menu"
  ogImage="/images/menu-featured-dish.jpg"
/>
```
- [ ] **Effort:** 30 minutes
- [ ] **Status:** Not Started
- [ ] **Dependencies:** SEO component created
- [ ] **Notes:**

---

### CRITICAL-7: Events Page - Implement Unique Meta Tags
- [ ] **File:** `/src/pages/Events.tsx`
- [ ] **Import:** SEO component
- [ ] **Add:**
```tsx
<SEO
  title="Belly Dancing Melbourne | Live Entertainment | Cairo By Nights"
  description="Live belly dancing shows every Fri-Sun 9PM. Arabic music, shisha lounge Carlton. Best entertainment venue Melbourne. Reserve your spot!"
  canonical="https://www.caironightsrestaurant.com.au/events"
  ogImage="/images/events-belly-dancer.jpg"
  ogType="event"
/>
```
- [ ] **Effort:** 30 minutes
- [ ] **Status:** Not Started
- [ ] **Dependencies:** SEO component created
- [ ] **Notes:**

---

### CRITICAL-8: Function Room Page - Implement Unique Meta Tags
- [ ] **File:** `/src/pages/FunctionRoom.tsx`
- [ ] **Import:** SEO component
- [ ] **Add:**
```tsx
<SEO
  title="Function Room Hire Carlton | Private Events | Cairo By Nights"
  description="Private function room hire Carlton. Birthday parties, corporate events, engagements. Banquet packages from $55pp. Book your event now!"
  canonical="https://www.caironightsrestaurant.com.au/function-room"
  ogImage="/images/function-room.jpg"
/>
```
- [ ] **Effort:** 30 minutes
- [ ] **Status:** Not Started
- [ ] **Dependencies:** SEO component created
- [ ] **Notes:**

---

### CRITICAL-9: Contact Page - Implement Unique Meta Tags
- [ ] **File:** `/src/pages/ContactUs.tsx`
- [ ] **Import:** SEO component
- [ ] **Add:**
```tsx
<SEO
  title="Contact Us | Egyptian Restaurant Lygon Street Carlton | Cairo By Nights"
  description="Cairo By Nights: 5/252 Lygon Street, Carlton 3053. Ph: 03 9654 1005. Open Sun-Thu 5pm-12am, Fri-Sat 5pm-1am. Reserve online!"
  canonical="https://www.caironightsrestaurant.com.au/contact-us"
  ogImage="/images/contact-map.jpg"
/>
```
- [ ] **Effort:** 30 minutes
- [ ] **Status:** Not Started
- [ ] **Dependencies:** SEO component created
- [ ] **Notes:**

---

### CRITICAL-10: Events Page - Content Expansion (Shisha Section)
- [ ] **File:** `/src/pages/Events.tsx`
- [ ] **Current word count:** 252 words
- [ ] **Target:** 800-1000 words
- [ ] **Add New Section: Premium Shisha Lounge**
- [ ] **Content to add (200-250 words):**
  - "Premium Shisha Lounge in Carlton Melbourne" heading (H2)
  - Description of shisha lounge atmosphere
  - Available flavors (Fruit Fever, traditional flavors)
  - Lounge seating and ambiance details
  - Booking and reservation info
  - Pricing if applicable
- [ ] **Expand Existing Sections:**
  - Belly dancing details (dancer bios, performance style)
  - Weekly schedule details (what to expect each night)
  - Arabic music descriptions
  - Customer testimonials for entertainment
- [ ] **Effort:** 4-6 hours
- [ ] **Status:** Not Started
- [ ] **Dependencies:** None (but do after H1 fix)
- [ ] **Priority:** CRITICAL-6
- [ ] **Notes:**

---

### CRITICAL-11: Image Optimization - Convert to WebP
- [ ] **Identify all images** in `/src/assets/` or `/public/images/`
- [ ] **Tools:** Use online converters or imagemin/sharp
- [ ] **Process:**
  - [ ] Convert all JPG/PNG to WebP format
  - [ ] Compress to < 100KB per image
  - [ ] Maintain quality (80-85%)
  - [ ] Keep original as fallback
- [ ] **Update image imports** in all pages
- [ ] **Effort:** 4-6 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** CRITICAL-5
- [ ] **Notes:**

---

### CRITICAL-12: Implement Lazy Loading for Images
- [ ] **Find all `<img>` tags** across all pages
- [ ] **Add:** `loading="lazy"` attribute to below-fold images
- [ ] **Keep eager loading** for hero/above-fold images
- [ ] **Example:**
```tsx
// Above fold (hero):
<img src="/hero.jpg" alt="..." loading="eager" />

// Below fold:
<img src="/gallery-1.jpg" alt="..." loading="lazy" />
```
- [ ] **Files to update:**
  - [ ] `/src/pages/Index.tsx`
  - [ ] `/src/pages/Events.tsx`
  - [ ] `/src/pages/AboutUs.tsx`
  - [ ] `/src/pages/Menu.tsx`
  - [ ] Other components with images
- [ ] **Effort:** 1-2 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** CRITICAL-5
- [ ] **Notes:**

---

### CRITICAL-13: Implement Code Splitting (React.lazy)
- [ ] **File:** `/src/App.tsx`
- [ ] **Replace static imports** with React.lazy() for route components
- [ ] **Add Suspense** wrapper
- [ ] **Code:**
```tsx
import { lazy, Suspense } from 'react';

// OLD:
import Index from './pages/Index';
import AboutUs from './pages/AboutUs';
// ... etc

// NEW:
const Index = lazy(() => import('./pages/Index'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Menu = lazy(() => import('./pages/NewMenu'));
const Events = lazy(() => import('./pages/Events'));
const FunctionRoom = lazy(() => import('./pages/FunctionRoom'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const NotFound = lazy(() => import('./pages/NotFound'));

// In Routes:
<Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path="/" element={<Index />} />
    {/* ... */}
  </Routes>
</Suspense>
```
- [ ] **Test:** Verify pages load correctly, check Network tab for chunks
- [ ] **Effort:** 3-5 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** CRITICAL-5
- [ ] **Notes:**

---

### CRITICAL-14: Homepage - Add Restaurant Schema
- [ ] **File:** `/src/pages/Index.tsx`
- [ ] **Create schema object** at top of component
- [ ] **Add script tag** to Helmet or page
- [ ] **Code:**
```tsx
<Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Cairo By Nights Restaurant & Bar",
      "image": "https://www.caironightsrestaurant.com.au/images/hero.jpg",
      "servesCuisine": "Egyptian",
      "acceptsReservations": true,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5/252 Lygon Street",
        "addressLocality": "Carlton",
        "addressRegion": "VIC",
        "postalCode": "3053",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-37.8014",
        "longitude": "144.9672"
      },
      "telephone": "+61396541005",
      "email": "info@caironightsrestaurant.com.au",
      "url": "https://www.caironightsrestaurant.com.au",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "17:00",
          "closes": "00:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Friday", "Saturday"],
          "opens": "17:00",
          "closes": "01:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "200"
      },
      "sameAs": [
        "https://www.facebook.com/caironights",
        "https://www.instagram.com/caironights"
      ]
    })}
  </script>
</Helmet>
```
- [ ] **Test:** Validate with Google Rich Results Test
- [ ] **Effort:** 3-4 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** CRITICAL-4
- [ ] **Notes:**

---

## PHASE 2: HIGH PRIORITY (18-26 hours total)

### HIGH-1: Create Sitemap.xml
- [ ] **Approach:** Manual or use vite-plugin-sitemap
- [ ] **Install (if using plugin):** `npm install vite-plugin-sitemap`
- [ ] **File:** `/public/sitemap.xml` or generate via plugin
- [ ] **Include pages:**
  - [ ] Homepage (/)
  - [ ] About Us (/about-us)
  - [ ] Menu (/menu)
  - [ ] Events (/events)
  - [ ] Function Room (/function-room)
  - [ ] Contact Us (/contact-us)
- [ ] **Priorities:**
  - Homepage: 1.0
  - Menu, Events: 0.9
  - About, Function Room, Contact: 0.8
- [ ] **Change frequency:** Weekly
- [ ] **Submit to:** Google Search Console after deployment
- [ ] **Effort:** 2-3 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** HIGH-1
- [ ] **Notes:**

---

### HIGH-2: Update robots.txt with Sitemap
- [ ] **File:** `/public/robots.txt`
- [ ] **Add line:** `Sitemap: https://www.caironightsrestaurant.com.au/sitemap.xml`
- [ ] **Effort:** 5 minutes
- [ ] **Status:** Not Started
- [ ] **Dependencies:** Sitemap created (HIGH-1)
- [ ] **Priority:** HIGH-2
- [ ] **Notes:**

---

### HIGH-3: Install Google Analytics 4
- [ ] **Get GA4 Measurement ID** from Google Analytics account
- [ ] **Install:** `npm install react-ga4` or use gtag.js
- [ ] **File:** `/src/main.tsx` or create `/src/utils/analytics.ts`
- [ ] **Setup:**
```tsx
import ReactGA from 'react-ga4';

ReactGA.initialize('G-XXXXXXXXXX'); // Replace with actual ID

// Track page views
ReactGA.send({ hitType: "pageview", page: window.location.pathname });
```
- [ ] **Add route tracking** in App.tsx
- [ ] **Event tracking:** Track booking button clicks, phone clicks, etc.
- [ ] **Effort:** 1 hour
- [ ] **Status:** Not Started
- [ ] **Priority:** HIGH-8
- [ ] **Notes:**

---

### HIGH-4: Events Page - Add Event Schema
- [ ] **File:** `/src/pages/Events.tsx`
- [ ] **Add JSON-LD schema** for belly dancing shows
- [ ] **Code:**
```tsx
<Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Live Belly Dancing Show",
      "description": "Professional belly dancing performances with live Arabic music",
      "eventSchedule": {
        "@type": "Schedule",
        "byDay": ["Friday", "Saturday", "Sunday"],
        "startTime": "21:00",
        "endTime": "22:00"
      },
      "location": {
        "@type": "Restaurant",
        "name": "Cairo By Nights",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "5/252 Lygon Street",
          "addressLocality": "Carlton",
          "addressRegion": "VIC",
          "postalCode": "3053",
          "addressCountry": "AU"
        }
      },
      "performer": {
        "@type": "PerformingGroup",
        "name": "Cairo By Nights Entertainment"
      },
      "offers": {
        "@type": "Offer",
        "availability": "InStock",
        "url": "https://bookings.wowapps.com/make-booking/caironightsrestauran"
      }
    })}
  </script>
</Helmet>
```
- [ ] **Test:** Google Rich Results Test
- [ ] **Effort:** 2-3 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** CRITICAL-4
- [ ] **Notes:**

---

### HIGH-5: About Us Page - Add Review Schema
- [ ] **File:** `/src/pages/AboutUs.tsx`
- [ ] **Extract existing testimonials** from page content
- [ ] **Create Review schema** for each testimonial
- [ ] **Code example:**
```tsx
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Cairo By Nights",
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Abrar"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "[testimonial text]"
      }
      // ... more reviews
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "6"
    }
  })}
</script>
```
- [ ] **Effort:** 2 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** HIGH-9
- [ ] **Notes:**

---

### HIGH-6: Add Breadcrumb Navigation UI
- [ ] **Create component:** `/src/components/Breadcrumbs.tsx`
- [ ] **Use React Router** to get current path
- [ ] **Design:** Simple text links with " > " separator
- [ ] **Add to all pages** (except homepage)
- [ ] **Example:** Home > About Us
- [ ] **Effort:** 2-3 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** HIGH-11
- [ ] **Notes:**

---

### HIGH-7: Add BreadcrumbList Schema
- [ ] **Add to all pages** (integrate with Breadcrumbs component)
- [ ] **Code example for About Us:**
```tsx
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.caironightsrestaurant.com.au/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://www.caironightsrestaurant.com.au/about-us"
      }
    ]
  })}
</script>
```
- [ ] **Effort:** 1-2 hours
- [ ] **Status:** Not Started
- [ ] **Dependencies:** Breadcrumb UI created (HIGH-6)
- [ ] **Priority:** HIGH-11
- [ ] **Notes:**

---

### HIGH-8: Internal Linking Strategy
- [ ] **Audit current internal links** across all pages
- [ ] **Add contextual links:**
  - [ ] Homepage → Menu (view our menu)
  - [ ] Homepage → Events (entertainment section)
  - [ ] Menu → Function Room (mention catering packages)
  - [ ] Events → Function Room (private event entertainment)
  - [ ] About Us → Menu (try our authentic dishes)
  - [ ] All pages → Contact (footer + body content)
- [ ] **Use descriptive anchor text** with keywords
- [ ] **Effort:** 2-3 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** HIGH-12
- [ ] **Notes:**

---

### HIGH-9: Bundle Optimization Analysis
- [ ] **Install:** `npm install --save-dev vite-bundle-visualizer`
- [ ] **Configure:** Add to vite.config.ts
- [ ] **Run:** `npm run build` and analyze bundle
- [ ] **Identify large dependencies** (>100KB)
- [ ] **Actions:**
  - [ ] Remove unused dependencies
  - [ ] Replace heavy libraries with lighter alternatives
  - [ ] Ensure tree-shaking is working
- [ ] **Effort:** 2-3 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** CRITICAL-5
- [ ] **Notes:**

---

### HIGH-10: Contact Page - Fix SEO Score (0.92)
- [ ] **Run Lighthouse audit** on Contact page specifically
- [ ] **Review specific recommendations**
- [ ] **Common issues:**
  - [ ] Missing links to important pages?
  - [ ] Heading structure issues?
  - [ ] Meta viewport issues?
- [ ] **Fix identified issues**
- [ ] **Re-test:** Target 1.0 score
- [ ] **Effort:** 1-2 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** HIGH-7
- [ ] **Notes:**

---

### HIGH-11: Menu Page - Add Menu Schema
- [ ] **File:** `/src/pages/NewMenu.tsx`
- [ ] **Challenge:** 156 menu items from CSV
- [ ] **Approach:** Generate schema dynamically from menu data
- [ ] **Code structure:**
```tsx
const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Cairo By Nights Menu",
  "hasMenuSection": categories.map(cat => ({
    "@type": "MenuSection",
    "name": cat.name,
    "hasMenuItem": cat.items.map(item => ({
      "@type": "MenuItem",
      "name": item.name,
      "offers": {
        "@type": "Offer",
        "price": item.price.replace('$', ''),
        "priceCurrency": "AUD"
      }
    }))
  }))
};
```
- [ ] **Effort:** 4-6 hours (complex due to CSV parsing)
- [ ] **Status:** Not Started
- [ ] **Priority:** CRITICAL-4
- [ ] **Notes:**

---

### HIGH-12: Add Preload Hints for Critical Resources
- [ ] **File:** `/index.html` or React Helmet
- [ ] **Identify critical resources:**
  - [ ] Hero images
  - [ ] Custom fonts
  - [ ] Critical CSS
- [ ] **Add preload tags:**
```html
<link rel="preload" as="image" href="/images/hero.jpg" />
<link rel="preload" as="font" href="/fonts/playfair-display.woff2" type="font/woff2" crossorigin />
```
- [ ] **Effort:** 1-2 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** MEDIUM-14
- [ ] **Notes:**

---

## PHASE 3: MEDIUM PRIORITY (12-20 hours total)

### MEDIUM-1: Add Favicon (All Sizes)
- [ ] **Create favicons:** 16x16, 32x32, 180x180 (Apple), 192x192, 512x512
- [ ] **Tool:** Use realfavicongenerator.net
- [ ] **Files:** Save to `/public/`
- [ ] **Add to index.html:**
```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```
- [ ] **Effort:** 30 minutes
- [ ] **Status:** Not Started
- [ ] **Priority:** MEDIUM-1
- [ ] **Notes:**

---

### MEDIUM-2: Add Apple Touch Icons
- [ ] **Create:** 180x180px PNG
- [ ] **File:** `/public/apple-touch-icon.png`
- [ ] **Add meta tag:**
```html
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```
- [ ] **Effort:** Included in MEDIUM-1
- [ ] **Status:** Not Started
- [ ] **Priority:** MEDIUM-2
- [ ] **Notes:**

---

### MEDIUM-3: Fix Accessibility Issues to 1.0
- [ ] **Run Lighthouse accessibility audit** on each page
- [ ] **Common issues to fix:**
  - [ ] Color contrast ratios (text on gold background)
  - [ ] ARIA labels for interactive elements
  - [ ] Form labels
  - [ ] Alt text quality
  - [ ] Keyboard navigation
- [ ] **Fix per page:**
  - [ ] Homepage
  - [ ] About Us
  - [ ] Menu
  - [ ] Events
  - [ ] Function Room
  - [ ] Contact Us
- [ ] **Target:** 1.0 score on all pages
- [ ] **Effort:** 2-4 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** MEDIUM-3
- [ ] **Notes:**

---

### MEDIUM-4: Add Organization Schema
- [ ] **File:** `/src/pages/Index.tsx` (combine with Restaurant schema)
- [ ] **Code:**
```tsx
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cairo By Nights Restaurant & Bar",
    "url": "https://www.caironightsrestaurant.com.au",
    "logo": "https://www.caironightsrestaurant.com.au/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61-3-9654-1005",
      "contactType": "Reservations",
      "areaServed": "AU",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/caironights",
      "https://www.instagram.com/caironights"
    ]
  })}
</script>
```
- [ ] **Effort:** 1 hour
- [ ] **Status:** Not Started
- [ ] **Priority:** MEDIUM-9
- [ ] **Notes:**

---

### MEDIUM-5: Add FAQ Schema to Homepage
- [ ] **File:** `/src/pages/Index.tsx`
- [ ] **Identify existing FAQ section** on homepage
- [ ] **Convert to FAQ schema:**
```tsx
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you take reservations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we highly recommend making a reservation..."
        }
      }
      // ... more Q&A pairs
    ]
  })}
</script>
```
- [ ] **Effort:** 1-2 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** MEDIUM-10
- [ ] **Notes:**

---

### MEDIUM-6: Contact Page - Enhanced LocalBusiness Schema
- [ ] **File:** `/src/pages/ContactUs.tsx`
- [ ] **Add full LocalBusiness schema** with geo coordinates
- [ ] **Include:** Opening hours, payment methods, price range
- [ ] **Effort:** 1 hour
- [ ] **Status:** Not Started
- [ ] **Priority:** MEDIUM-12
- [ ] **Notes:**

---

### MEDIUM-7: Homepage - Add hasMenu Property
- [ ] **File:** `/src/pages/Index.tsx`
- [ ] **Update Restaurant schema** to link to Menu
- [ ] **Add:**
```json
"hasMenu": "https://www.caironightsrestaurant.com.au/menu"
```
- [ ] **Effort:** 15 minutes
- [ ] **Status:** Not Started
- [ ] **Dependencies:** Menu schema created (HIGH-11)
- [ ] **Priority:** MEDIUM-13
- [ ] **Notes:**

---

### MEDIUM-8: Configure Security Headers
- [ ] **File:** Server configuration or Vite config
- [ ] **Headers to add:**
  - Content-Security-Policy
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - Strict-Transport-Security (HSTS)
  - Referrer-Policy: strict-origin-when-cross-origin
- [ ] **Approach:** Add to hosting platform (Netlify/Vercel headers) or server
- [ ] **Effort:** 2-3 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** MEDIUM-16
- [ ] **Notes:**

---

### MEDIUM-9: Enable Brotli Compression
- [ ] **Check hosting platform** (most modern hosts have it)
- [ ] **Verify:** Check response headers for `content-encoding: br`
- [ ] **If self-hosted:** Configure server (nginx/apache)
- [ ] **Effort:** 1 hour
- [ ] **Status:** Not Started
- [ ] **Priority:** MEDIUM-18
- [ ] **Notes:**

---

### MEDIUM-10: Verify HTTP/2 Support
- [ ] **Test:** Use https://tools.keycdn.com/http2-test
- [ ] **Verify hosting supports HTTP/2**
- [ ] **Enable if not active**
- [ ] **Effort:** 1 hour
- [ ] **Status:** Not Started
- [ ] **Priority:** MEDIUM-17
- [ ] **Notes:**

---

## PHASE 4: LOW PRIORITY (11-18 hours total)

### LOW-1: Create Web App Manifest
- [ ] **File:** `/public/site.webmanifest` (create new)
- [ ] **Content:**
```json
{
  "name": "Cairo By Nights Restaurant",
  "short_name": "Cairo By Nights",
  "description": "Authentic Egyptian Restaurant in Carlton, Melbourne",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1a1a1a",
  "theme_color": "#D4AF37",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```
- [ ] **Link in index.html:** `<link rel="manifest" href="/site.webmanifest">`
- [ ] **Effort:** 30 minutes
- [ ] **Status:** Not Started
- [ ] **Priority:** LOW-2
- [ ] **Notes:**

---

### LOW-2: Implement Responsive Images (srcset)
- [ ] **Identify hero/large images** on each page
- [ ] **Create multiple sizes:** 400w, 800w, 1200w, 1600w
- [ ] **Update img tags:**
```html
<img
  srcset="
    /images/hero-400.webp 400w,
    /images/hero-800.webp 800w,
    /images/hero-1200.webp 1200w,
    /images/hero-1600.webp 1600w
  "
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
  src="/images/hero-1200.webp"
  alt="..."
/>
```
- [ ] **Effort:** 3-4 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** LOW-8
- [ ] **Notes:**

---

### LOW-3: Critical CSS Inlining
- [ ] **Identify critical above-fold CSS**
- [ ] **Tools:** Use Critical or Critters
- [ ] **Extract and inline** in index.html head
- [ ] **Defer non-critical CSS**
- [ ] **Effort:** 3-4 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** LOW-9
- [ ] **Notes:**

---

### LOW-4: Add font-display: swap
- [ ] **File:** Global CSS or font import
- [ ] **Find @font-face declarations**
- [ ] **Add:** `font-display: swap;`
- [ ] **Example:**
```css
@font-face {
  font-family: 'Playfair Display';
  src: url('/fonts/playfair.woff2') format('woff2');
  font-display: swap;
}
```
- [ ] **Effort:** 30 minutes
- [ ] **Status:** Not Started
- [ ] **Priority:** LOW-10
- [ ] **Notes:**

---

### LOW-5: Preload Custom Fonts
- [ ] **File:** `/index.html` head
- [ ] **Add preload for critical fonts:**
```html
<link rel="preload" as="font" href="/fonts/playfair-display.woff2" type="font/woff2" crossorigin>
```
- [ ] **Effort:** 30 minutes
- [ ] **Status:** Not Started
- [ ] **Dependencies:** Fonts identified
- [ ] **Priority:** LOW-5
- [ ] **Notes:**

---

### LOW-6: Remove Console.log from Production
- [ ] **File:** `/src/pages/NewMenu.tsx` (line 45-46)
- [ ] **Remove debug logs:**
```tsx
// REMOVE:
console.log('Total menu items loaded:', menuData.length);
console.log('Items by category:', itemsByCategory);
```
- [ ] **Check other files** for console.log statements
- [ ] **Effort:** 30 minutes
- [ ] **Status:** Not Started
- [ ] **Priority:** LOW (but do it)
- [ ] **Notes:**

---

### LOW-7: Implement Service Worker (Basic PWA)
- [ ] **Install:** `npm install vite-plugin-pwa`
- [ ] **Configure:** Add to vite.config.ts
- [ ] **Setup:** Basic caching strategy for static assets
- [ ] **Register service worker** in main.tsx
- [ ] **Test:** Offline functionality
- [ ] **Effort:** 4-6 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** MEDIUM-15
- [ ] **Notes:**

---

### LOW-8: Add DNS Prefetch for External Domains
- [ ] **File:** `/index.html` head
- [ ] **Add:**
```html
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://bookings.wowapps.com">
```
- [ ] **Effort:** 15 minutes
- [ ] **Status:** Not Started
- [ ] **Priority:** LOW-4
- [ ] **Notes:**

---

### LOW-9: Update Alt Text Quality Review
- [ ] **Audit all images** across all pages
- [ ] **Ensure alt text includes keywords** where natural
- [ ] **Examples:**
  - Good: "Authentic Egyptian mixed grill platter at Cairo By Nights Carlton"
  - Bad: "food plate"
- [ ] **Effort:** 1-2 hours
- [ ] **Status:** Not Started
- [ ] **Priority:** MEDIUM-5
- [ ] **Notes:**

---

### LOW-10: Setup 404 Error Tracking in GA4
- [ ] **File:** `/src/pages/NotFound.tsx`
- [ ] **Add GA4 event:** Track 404 errors with attempted URL
- [ ] **Code:**
```tsx
import ReactGA from 'react-ga4';

useEffect(() => {
  ReactGA.event({
    category: 'Error',
    action: '404 Not Found',
    label: location.pathname
  });
}, [location.pathname]);
```
- [ ] **Effort:** 30 minutes
- [ ] **Status:** Not Started
- [ ] **Dependencies:** GA4 installed (HIGH-3)
- [ ] **Priority:** MEDIUM-6
- [ ] **Notes:**

---

## COMPLETION LOG

### [Date: October 2, 2025] - Session 1 ✅
**Tasks Completed:**
- [x] QW-1: Fixed React Router warnings (no more console warnings)
- [x] QW-2: Events H1 → "Belly Dancing Melbourne | Live Entertainment & Shisha"
- [x] QW-3: Homepage H1 → "Authentic Egyptian Restaurant in Carlton, Melbourne"
- [x] QW-4: Function Room H1 → "Function Room Hire Carlton | Private Events"
- [x] QW-5: HTML lang="en" verified
- [x] QW-6: Theme color #D4AF37 added
- [x] QW-7: Preconnect to bookings.wowapps.com added
- [x] QW-8: robots.txt created
- [x] CRITICAL-1: React Helmet Async installed
- [x] CRITICAL-2: HelmetProvider setup in App.tsx
- [x] CRITICAL-3: SEO component created (/src/components/SEO.tsx)
- [x] CRITICAL-4: Homepage unique meta tags (title, description, canonical)
- [x] CRITICAL-5: About Us unique meta tags
- [x] CRITICAL-6: Menu page unique meta tags
- [x] CRITICAL-7: Events page unique meta tags
- [x] CRITICAL-8: Function Room unique meta tags
- [x] CRITICAL-9: Contact Us unique meta tags

**Time Spent:** ~5 hours
**Issues Fixed:** 17 / 47
**Progress:** 36%
**Notes:**
- All Quick Wins complete (8/8)
- All 6 pages now have UNIQUE title tags, descriptions, canonical URLs
- Tested on Homepage and Events page - titles displaying correctly
- NO MORE DUPLICATE TITLE TAG ISSUES!
- Next: CRITICAL-10 (Events content expansion) + CRITICAL-11-13 (images/performance)

---

### [Date: ] - Session 2
**Tasks Completed:**
- [ ]
- [ ]

**Time Spent:** ___ hours
**Issues Fixed:** ___ / 47
**Progress:** ___%
**Notes:**

---

### [Date: ] - Session 2
**Tasks Completed:**
- [ ]
- [ ]

**Time Spent:** ___ hours
**Issues Fixed:** ___ / 47
**Progress:** ___%
**Notes:**

---

### [Date: ] - Session 3
**Tasks Completed:**
- [ ]

**Time Spent:** ___ hours
**Issues Fixed:** ___ / 47
**Progress:** ___%
**Notes:**

---

## FILES TO CREATE

- [ ] `/src/components/SEO.tsx` - Reusable SEO component
- [ ] `/src/components/Breadcrumbs.tsx` - Breadcrumb navigation
- [ ] `/src/utils/analytics.ts` - GA4 wrapper (optional)
- [ ] `/public/robots.txt` - Crawler directives
- [ ] `/public/sitemap.xml` - Site structure
- [ ] `/public/site.webmanifest` - PWA manifest
- [ ] `/public/favicon-32x32.png` - Favicon
- [ ] `/public/favicon-16x16.png` - Favicon
- [ ] `/public/apple-touch-icon.png` - Apple icon

---

## FILES TO MODIFY

- [ ] `/src/App.tsx` - HelmetProvider, Router flags, code splitting, Suspense
- [ ] `/src/main.tsx` - HelmetProvider wrapper (or in App.tsx)
- [ ] `/index.html` - Language, preconnect, preload, theme-color, favicons
- [ ] `/src/pages/Index.tsx` - SEO component, H1, Restaurant schema, FAQ schema
- [ ] `/src/pages/AboutUs.tsx` - SEO component, Review schema, Breadcrumbs
- [ ] `/src/pages/NewMenu.tsx` - SEO component, Menu schema, Breadcrumbs, remove console.log
- [ ] `/src/pages/Events.tsx` - SEO component, H1 fix, content expansion, Event schema, Breadcrumbs
- [ ] `/src/pages/FunctionRoom.tsx` - SEO component, H1 fix, EventVenue schema, Breadcrumbs
- [ ] `/src/pages/ContactUs.tsx` - SEO component, LocalBusiness schema, Breadcrumbs, fix SEO issues
- [ ] `/src/pages/NotFound.tsx` - GA4 error tracking
- [ ] `/vite.config.ts` - Bundle analyzer, PWA plugin
- [ ] All image-containing files - Lazy loading, WebP conversion, responsive images

---

## DEPENDENCIES CHART

```
CRITICAL-1 (Install React Helmet)
  ↓
CRITICAL-2 (Setup HelmetProvider)
  ↓
CRITICAL-3 (Create SEO Component)
  ↓
CRITICAL-4 through CRITICAL-9 (Implement meta tags on all pages)

HIGH-1 (Create Sitemap)
  ↓
HIGH-2 (Update robots.txt)

HIGH-6 (Breadcrumb UI)
  ↓
HIGH-7 (BreadcrumbList schema)

HIGH-3 (Install GA4)
  ↓
LOW-10 (404 tracking)

HIGH-11 (Menu Schema)
  ↓
MEDIUM-7 (hasMenu property)
```

---

## TESTING CHECKLIST

After each phase, test:

- [ ] **Meta Tags:** View page source, verify unique titles/descriptions
- [ ] **Schema:** Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] **Performance:** Run Lighthouse audit, verify LCP improvement
- [ ] **Accessibility:** Run Lighthouse accessibility audit, target 1.0
- [ ] **Console:** Check browser console for errors
- [ ] **Mobile:** Test on mobile device or emulator
- [ ] **Links:** Verify all internal links work
- [ ] **Images:** Verify lazy loading works, WebP displays correctly
- [ ] **GA4:** Verify events firing in GA4 DebugView
- [ ] **Sitemap:** Validate sitemap.xml structure
- [ ] **Robots.txt:** Test with Google Search Console robots.txt tester

---

## IMPLEMENTATION RULES

1. **Always update this file** after completing any task - check the box [x]
2. **Add completion dates** to the Completion Log
3. **Update Progress Overview** percentages after each session
4. **Reference this file** at the start of every session
5. **If blocked on a task**, note it and move to the next independent task
6. **Test thoroughly** after each phase before moving to next
7. **Commit to git** after completing each major task/phase
8. **Use the audit report** (`/agents/reports/technical-seo-audit-2025-10-02.md`) as reference

---

## SESSION STARTUP PROMPT

**When starting a new implementation session:**

1. Read this checklist file
2. Check Progress Overview
3. Identify next uncompleted task
4. Ask: "Ready to continue SEO implementation? Last completed: [task name]. Next up: [task name]. Shall I proceed?"

---

## VALIDATION TOOLS

- **Meta Tags:** View Page Source or use [Meta Tags](https://metatags.io/)
- **Schema:** [Google Rich Results Test](https://search.google.com/test/rich-results)
- **Performance:** [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- **Core Web Vitals:** [PageSpeed Insights](https://pagespeed.web.dev/)
- **Mobile-Friendly:** [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- **Structured Data:** [Schema.org Validator](https://validator.schema.org/)
- **Sitemap:** [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)

---

**END OF CHECKLIST**
**Ready to implement? Start with Quick Wins section! ⚡**
