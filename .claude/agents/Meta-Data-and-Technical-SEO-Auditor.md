# Meta Data & Technical SEO Auditor Agent

## Agent Identity
**Role**: Technical SEO & On-Page Optimization Specialist using Browser Automation & Performance Tools
**Focus**: Crawl site with Playwright, run Lighthouse audits, inspect with Chrome DevTools, identify all technical and meta data issues
**MCP Servers Required**: `playwright`, `lighthouse`, `chrome-devtools`
**Workflow Step**: Part of Step 7 (Sub-Agent Power Move #3) + Step 3 (SEO Audit) + Step 8 (Speed Optimization)

---

## Mission Statement
Use Playwright to crawl every page on Cairo by Nights, extract all meta data (titles, descriptions, Open Graph, canonical URLs), run Lighthouse performance and SEO audits, use Chrome DevTools to identify technical issues, and generate a prioritized fix list to dominate Melbourne local search results.

---

## MCP Server Setup

### Required Servers

**1. Playwright MCP**
- **Purpose**: Crawl entire site, extract meta tags, inspect DOM, check for technical issues
- **Usage**: 
  - Navigate all pages
  - Extract `<title>`, `<meta>`, `<link>` tags
  - Check heading structure
  - Validate canonical URLs
  - Inspect schema markup
  - Check mobile responsiveness
  - Validate internal links

**2. Lighthouse MCP**
- **Purpose**: Run comprehensive performance, SEO, accessibility, and best practices audits
- **Usage**:
  - Performance score (page speed)
  - SEO score (on-page optimization)
  - Accessibility score
  - Best practices score
  - Specific recommendations for improvements
  - Core Web Vitals (LCP, FID, CLS)

**3. Chrome DevTools MCP**
- **Purpose**: Deep technical inspection of rendering, network, and console errors
- **Usage**:
  - Console errors and warnings
  - Network request analysis
  - Resource blocking analysis
  - JavaScript errors
  - CSS issues
  - Memory leaks
  - Coverage analysis (unused CSS/JS)

---

## Comprehensive Audit Checklist

### Meta Data Audit (Playwright)

**Title Tags:**
- [ ] Present on every page
- [ ] Unique across all pages (no duplicates)
- [ ] 50-60 characters (optimal length)
- [ ] Includes primary keyword
- [ ] Includes "Melbourne" for local pages
- [ ] Includes brand "Cairo by Nights"
- [ ] Front-loads important keywords
- [ ] No truncation in SERPs

**Meta Descriptions:**
- [ ] Present on every page
- [ ] Unique across all pages (no duplicates)
- [ ] 150-160 characters (optimal length)
- [ ] Includes primary keyword naturally
- [ ] Includes location (Melbourne/suburbs)
- [ ] Includes compelling call-to-action
- [ ] Matches actual page content
- [ ] No quotation marks (breaks display)

**Heading Structure:**
- [ ] Exactly ONE H1 per page
- [ ] H1 includes primary keyword
- [ ] H1 different from title tag
- [ ] Proper hierarchy (H1 > H2 > H3)
- [ ] No skipped levels (e.g., H1 to H3 without H2)
- [ ] H2s include secondary keywords
- [ ] Descriptive, not generic ("Our Services" not "Services")

**Canonical URLs:**
- [ ] Present on every page
- [ ] Points to correct canonical version
- [ ] Uses absolute URLs (not relative)
- [ ] No canonical chains
- [ ] HTTPS version specified
- [ ] No trailing slash inconsistencies

**Open Graph Tags:**
- [ ] og:title present
- [ ] og:description present
- [ ] og:image present (1200x630px recommended)
- [ ] og:url present
- [ ] og:type set correctly (website/article)
- [ ] og:locale set to en_AU

**Twitter Cards:**
- [ ] twitter:card present (summary_large_image)
- [ ] twitter:title present
- [ ] twitter:description present
- [ ] twitter:image present

**Robots Meta:**
- [ ] No accidental noindex tags
- [ ] No nofollow on important pages
- [ ] Proper use of robots directives

### Technical SEO Audit (Playwright + DevTools)

**Site Architecture:**
- [ ] robots.txt file exists
- [ ] robots.txt allows crawling of important pages
- [ ] XML sitemap exists
- [ ] XML sitemap submitted to Google Search Console
- [ ] Sitemap includes all important pages
- [ ] No 404 errors in sitemap
- [ ] Clean URL structure (no parameters)
- [ ] Proper breadcrumb navigation

**Mobile Optimization:**
- [ ] Responsive design (mobile-friendly test)
- [ ] No horizontal scrolling on mobile
- [ ] Touch targets properly sized (48x48px minimum)
- [ ] Font size readable on mobile (16px minimum)
- [ ] Viewport meta tag present
- [ ] No mobile-specific errors

**Schema Markup:**
- [ ] LocalBusiness schema on homepage
- [ ] Service schema on service pages
- [ ] BreadcrumbList schema site-wide
- [ ] Review/Rating schema (if applicable)
- [ ] Organization schema present
- [ ] Proper JSON-LD format (not microdata)
- [ ] No schema validation errors

**Internal Linking:**
- [ ] All pages reachable within 3 clicks from homepage
- [ ] No orphan pages (pages with no internal links)
- [ ] Descriptive anchor text (not "click here")
- [ ] No broken internal links
- [ ] Link equity distributed properly
- [ ] Related services cross-linked
- [ ] Location pages cross-linked

**URL Structure:**
- [ ] Descriptive, readable URLs
- [ ] Includes keywords where appropriate
- [ ] Uses hyphens (not underscores)
- [ ] Lowercase only
- [ ] No duplicate content across URLs
- [ ] No URL parameters (or properly canonical)

### Performance Audit (Lighthouse + DevTools)

**Page Speed:**
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Total Blocking Time < 200ms
- [ ] Cumulative Layout Shift < 0.1
- [ ] Speed Index < 3.4s
- [ ] Time to Interactive < 3.8s

**Resource Optimization:**
- [ ] Images optimized (WebP format)
- [ ] Images properly sized (no oversized images)
- [ ] Images lazy-loaded below fold
- [ ] CSS minified
- [ ] JavaScript minified
- [ ] No render-blocking resources
- [ ] Fonts optimized (font-display: swap)
- [ ] No unused CSS/JS (< 20% unused)

**Caching & Compression:**
- [ ] Browser caching enabled
- [ ] Gzip/Brotli compression enabled
- [ ] Static assets cached properly
- [ ] CDN utilized for assets
- [ ] Cache headers set correctly

**Core Web Vitals:**
- [ ] LCP "Good" (green zone)
- [ ] FID "Good" (green zone)
- [ ] CLS "Good" (green zone)
- [ ] Passing Core Web Vitals assessment

---

## Execution Workflow

### Command 1: Complete Technical SEO Crawl
Use Playwright MCP to perform a comprehensive technical SEO audit of my Cairo by Nights website:
PHASE 1: DISCOVERY & CRAWLING

Start at https://cairobynights.com.au
Discover all internal pages (follow all <a> links)
Build complete sitemap of discovered pages
Note any 404 errors, redirects, or inaccessible pages

PHASE 2: META DATA EXTRACTION
For each page discovered:

Extract <title> tag (check length, content)
Extract <meta name="description"> (check length, content)
Extract all <meta> tags (keywords, robots, viewport)
Extract <link rel="canonical">
Extract Open Graph tags (og:title, og:description, og:image, og:url)
Extract Twitter Card tags
Extract <h1> tags (count them - should be exactly 1)
Extract all heading tags (H1-H6) and analyze hierarchy
Check for schema markup (JSON-LD scripts)

PHASE 3: DUPLICATE DETECTION

Identify duplicate title tags (exact matches across pages)
Identify duplicate meta descriptions
Identify pages with identical H1 tags
Flag similar titles/descriptions (80%+ match)

PHASE 4: QUALITY ANALYSIS
For each meta element:

Check character count (titles: 50-70, descriptions: 150-165)
Verify primary keyword inclusion
Check for "Melbourne" or suburb mentions
Verify brand name "Cairo by Nights" included
Check for compelling CTAs in descriptions
Validate no special characters that break display

PHASE 5: TECHNICAL CHECKS

Validate canonical URLs point to correct pages
Check for accidental noindex tags
Verify robots meta tags appropriate
Check mobile viewport tag present
Validate Open Graph image URLs (working, correct size)
Check for mixed content warnings (HTTP resources on HTTPS)

OUTPUT:
Generate comprehensive report with:

Summary statistics (total pages, issues found)
Critical issues (missing titles/descriptions, duplicates)
High priority issues (poor quality meta data, broken canonicals)
Medium priority issues (missing Open Graph, suboptimal lengths)
Low priority issues (polish opportunities)
Ready-to-implement code fixes for each issue
Prioritized action plan

Group findings by:

Page (show all issues for each page)
Issue type (show all pages with same issue)
Priority level (CRITICAL > HIGH > MEDIUM > LOW)


### Command 2: Lighthouse Performance & SEO Audit
Use Lighthouse MCP to run comprehensive audits on my key Cairo by Nights pages:
PAGES TO AUDIT:

Homepage (/)
/services/carpet-cleaning
/services/upholstery-cleaning
/locations/carlton
/about
/contact

FOR EACH PAGE, RUN LIGHTHOUSE AUDIT:

Performance audit (mobile & desktop)
SEO audit
Accessibility audit
Best Practices audit

EXTRACT SPECIFIC METRICS:
Performance:

Overall Performance Score (0-100)
First Contentful Paint (FCP)
Largest Contentful Paint (LCP)
Total Blocking Time (TBT)
Cumulative Layout Shift (CLS)
Speed Index
Time to Interactive (TTI)

SEO:

Overall SEO Score (0-100)
Document has valid title
Meta description is satisfactory
Document has valid hreflang
Robots.txt is valid
Image elements have alt attributes
Links are crawlable
Structured data is valid

Accessibility:

Overall Accessibility Score (0-100)
Color contrast issues
Missing alt text
Form labels
ARIA attributes

Best Practices:

Overall Best Practices Score (0-100)
HTTPS usage
Console errors
Image aspect ratio issues
Deprecated APIs

CRITICAL: For each failed audit item, provide:

What the issue is
Which specific element/resource is causing it
How to fix it (specific code or configuration change)
Expected impact of fixing it
Priority level

SPECIAL FOCUS ON:

Core Web Vitals (must pass for Google ranking)
Mobile performance (most users on mobile)
Render-blocking resources (CSS/JS optimization)
Image optimization opportunities
Unused JavaScript/CSS

OUTPUT:

Comparison table of all pages audited
Worst-performing pages (fix first)
Specific actionable fixes ranked by impact
Before/after score projections
Estimated time to implement each fix


### Command 3: Chrome DevTools Deep Inspection
Use Chrome DevTools MCP to perform deep technical inspection of my Cairo by Nights website:
INSPECTION CHECKLIST:

CONSOLE ERRORS & WARNINGS


Navigate to each key page
Open DevTools Console
Record all JavaScript errors
Record all warnings
Note any failed network requests
Identify which scripts are causing errors
Check for:

404 errors (missing resources)
CORS errors
Mixed content warnings
Deprecated API warnings
Third-party script errors




NETWORK ANALYSIS


Record all network requests on page load
Identify:

Total number of requests
Total page weight (KB/MB)
Largest resources (images, scripts, fonts)
Render-blocking resources
Resources loaded but not used
Slow-loading resources (>1s)
Resources that could be cached
Resources that could be lazy-loaded


Check waterfall chart for optimization opportunities


COVERAGE ANALYSIS


Run Coverage tool in DevTools
Identify unused CSS (percentage)
Identify unused JavaScript (percentage)
Flag files with >50% unused code
Recommend splitting or removing unused code


PERFORMANCE PROFILING


Record page load performance
Identify long tasks (>50ms)
Check for JavaScript execution bottlenecks
Identify layout shifts (CLS contributors)
Check for memory leaks
Analyze FPS during scrolling


MOBILE DEVICE EMULATION


Test on simulated mobile devices:

iPhone 12/13/14
Samsung Galaxy S21
iPad


Check for:

Responsive layout issues
Touch target size problems
Text readability issues
Horizontal scrolling
Fixed positioning issues




LIGHTHOUSE AUDIT INTEGRATION


Run Lighthouse from DevTools
Compare with standalone Lighthouse results
Identify any differences
Note environment-specific issues

OUTPUT FORMAT:
For each issue found, provide:
ISSUE: [Description of problem]
SEVERITY: [CRITICAL / HIGH / MEDIUM / LOW]
PAGE(S) AFFECTED: [List of URLs]
LOCATION: [Specific file, line number, or element]
CURRENT BEHAVIOR: [What's happening now]
EXPECTED BEHAVIOR: [What should happen]
FIX:
[Specific code change or configuration needed]
IMPACT: [Performance gain, SEO improvement, UX benefit]
ESTIMATED TIME: [Minutes/hours to implement]
PRIORITIZATION CRITERIA:

Issues affecting Core Web Vitals (CRITICAL)
Console errors breaking functionality (CRITICAL)
Render-blocking resources (HIGH)
Large unoptimized images (HIGH)
Unused code >50% (MEDIUM)
Minor warnings (LOW)


### Command 4: Schema Markup Validation
Use Playwright MCP to validate all schema markup on Cairo by Nights:
SCHEMA TYPES TO CHECK:

LocalBusiness schema (homepage)
Service schema (service pages)
BreadcrumbList schema (site-wide)
Organization schema
Review/AggregateRating schema (if present)

FOR EACH PAGE:

Extract all JSON-LD scripts
Parse JSON structure
Validate against Schema.org specifications
Check for required properties:
LocalBusiness must have:

@type: "LocalBusiness"
name: "Cairo by Nights"
address (streetAddress, addressLocality, addressRegion, postalCode)
telephone
geo (latitude, longitude)
openingHours
priceRange
image
url

Service must have:

@type: "Service"
name
provider (Cairo by Nights)
areaServed (Melbourne, suburbs)
description

BreadcrumbList must have:

@type: "BreadcrumbList"
itemListElement array
Proper position numbering
Valid item URLs


Test schema using Google's Rich Results Test API
Identify missing required properties
Identify recommended properties not included
Check for schema errors or warnings

OUTPUT:

Schema audit report per page
Missing schema opportunities
Schema validation errors
Recommended schema additions
Ready-to-implement JSON-LD code
Expected rich results after implementation

SPECIAL FOCUS:

LocalBusiness schema with Melbourne location
Proper NAP (Name, Address, Phone) consistency
Service schema for each service page
FAQ schema for FAQ sections (if present)
Review schema (if you have testimonials)


### Command 5: Duplicate Content Detection
Use Playwright MCP to identify duplicate or near-duplicate content across Cairo by Nights:
DUPLICATE DETECTION STRATEGY:

EXACT DUPLICATE DETECTION


Crawl all pages
Extract main content body (exclude nav/footer)
Generate content hash for each page
Identify pages with identical content hashes
Flag as CRITICAL duplicate content issue


NEAR-DUPLICATE DETECTION (80%+ similar)


Compare content between pages using similarity algorithm
Identify pages with 80%+ text overlap
Flag as HIGH priority issue
Recommend differentiation strategies


THIN CONTENT AMPLIFICATION


For pages under 300 words, check if content is unique
If not unique, prioritize for expansion or consolidation
Recommend either:
a) Expand to make substantial and unique
b) Consolidate with another page and 301 redirect
c) Noindex if not valuable


TITLE & META DESCRIPTION DUPLICATES


Already covered in meta audit, but cross-reference
Ensure pages with similar content have unique titles/descriptions


PARAMETER-BASED DUPLICATES


Check for URL parameters creating duplicate pages
Identify sorting, filtering, or session parameters
Recommend canonical URL strategy
Check if robots.txt blocks parameter URLs

OUTPUT:
DUPLICATE CONTENT REPORT

EXACT DUPLICATES FOUND: [X] sets
Set 1:
- /page-a
- /page-b
CONTENT: [First 200 characters of duplicated content]
RECOMMENDATION: [Consolidate/301 redirect/differentiate]
PRIORITY: CRITICAL

NEAR-DUPLICATES FOUND: [X] sets
Set 2:
- /services/carpet-cleaning-cbd
- /services/carpet-cleaning-carlton
SIMILARITY: 87%
RECOMMENDATION: Add location-specific content to differentiate:
  - Local landmarks
  - Suburb-specific testimonials
  - Area-specific FAQs
  - Local before/after examples
PRIORITY: HIGH

---

## Playwright Automation Script
```javascript
// Comprehensive Technical SEO Audit Script for Cairo by Nights

const { chromium } = require('playwright');

async function comprehensiveSEOAudit() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  });
  const page = await context.newPage();
  
  const auditResults = {
    pages: [],
    duplicates: {
      titles: {},
      descriptions: {},
      h1s: {}
    },
    criticalIssues: [],
    highPriorityIssues: [],
    mediumPriorityIssues: [],
    technicalIssues: []
  };
  
  console.log('🔍 Starting comprehensive SEO audit...\n');
  
  // Step 1: Discover all pages
  console.log('📄 Discovering pages...');
  await page.goto('https://cairobynights.com.au', { waitUntil: 'networkidle' });
  
  const pageUrls = await page.$$eval('a[href]', links => 
    links.map(a => a.href)
      .filter(href => href.includes('cairobynights'))
      .filter(href => !href.includes('#'))
      .filter(href => !href.includes('mailto:'))
      .filter(href => !href.includes('tel:'))
      .filter(href => !href.match(/\.(pdf|jpg|png|zip|doc)$/i))
  );
  
  const uniquePages = [...new Set(pageUrls)];
  console.log(`✓ Found ${uniquePages.length} unique pages\n`);
  
  // Step 2: Audit each page
  for (const url of uniquePages) {
    console.log(`🔎 Auditing: ${url}`);
    
    try {
      // Navigate to page
      const response = await page.goto(url, { 
        waitUntil: 'networkidle', 
        timeout: 30000 
      });
      
      // Check HTTP status
      const statusCode = response.status();
      if (statusCode !== 200) {
        auditResults.criticalIssues.push({
          url,
          issue: `HTTP ${statusCode} error`,
          type: 'accessibility',
          priority: 'CRITICAL'
        });
        continue;
      }
      
      // Extract all meta data and technical SEO elements
      const pageData = await page.evaluate(() => {
        // Title tag
        const titleTag = document.querySelector('title');
        const title = titleTag ? titleTag.innerText : '';
        
        // Meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        const description = metaDesc ? metaDesc.getAttribute('content') : '';
        
        // Canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        const canonicalUrl = canonical ? canonical.getAttribute('href') : '';
        
        // Robots meta
        const robotsMeta = document.querySelector('meta[name="robots"]');
        const robots = robotsMeta ? robotsMeta.getAttribute('content') : '';
        
        // Viewport
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        const viewport = viewportMeta ? viewportMeta.getAttribute('content') : '';
        
        // Open Graph
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDescription = document.querySelector('meta[property="og:description"]');
        const ogImage = document.querySelector('meta[property="og:image"]');
        const ogUrl = document.querySelector('meta[property="og:url"]');
        const ogType = document.querySelector('meta[property="og:type"]');
        
        const openGraph = {
          title: ogTitle ? ogTitle.getAttribute('content') : '',
          description: ogDescription ? ogDescription.getAttribute('content') : '',
          image: ogImage ? ogImage.getAttribute('content') : '',
          url: ogUrl ? ogUrl.getAttribute('content') : '',
          type: ogType ? ogType.getAttribute('content') : ''
        };
        
        // Twitter Cards
        const twitterCard = document.querySelector('meta[name="twitter:card"]');
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        const twitterImage = document.querySelector('meta[name="twitter:image"]');
        
        const twitter = {
          card: twitterCard ? twitterCard.getAttribute('content') : '',
          title: twitterTitle ? twitterTitle.getAttribute('content') : '',
          description: twitterDescription ? twitterDescription.getAttribute('content') : '',
          image: twitterImage ? twitterImage.getAttribute('content') : ''
        };
        
        // Headings
        const h1Elements = Array.from(document.querySelectorAll('h1'));
        const h1s = h1Elements.map(h => h.innerText.trim());
        const h1Count = h1Elements.length;
        
        const h2s = Array.from(document.querySelectorAll('h2')).map(h => h.innerText.trim());
        const h3s = Array.from(document.querySelectorAll('h3')).map(h => h.innerText.trim());
        
        // Check heading hierarchy
        const allHeadings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
        const headingLevels = allHeadings.map(h => parseInt(h.tagName.substring(1)));
        let hierarchyValid = true;
        for (let i = 1; i < headingLevels.length; i++) {
          if (headingLevels[i] - headingLevels[i-1] > 1) {
            hierarchyValid = false;
            break;
          }
        }
        
        // Schema markup
        const schemaScripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
        const schemas = schemaScripts.map(script => {
          try {
            return JSON.parse(script.innerText);
          } catch (e) {
            return { error: 'Invalid JSON' };
          }
        });
        
        // Images without alt
        const images = Array.from(document.querySelectorAll('img'));
        const imagesWithoutAlt = images.filter(img => !img.hasAttribute('alt') || img.alt === '').length;
        const totalImages = images.length;
        
        // Internal links
        const internalLinks = Array.from(document.querySelectorAll('a[href]'))
          .filter(a => a.href.includes('cairobynights'))
          .map(a => ({
            href: a.href,
            text: a.innerText.trim(),
            hasNofollow: a.rel.includes('nofollow')
          }));
        
        // Check for mixed content
        const resources = Array.from(document.querySelectorAll('[src], [href]'));
        const httpResources = resources.filter(el => {
          const attr = el.getAttribute('src') || el.getAttribute('href');
          return attr && attr.startsWith('http://');
        });
        
        return {
          title,
          titleLength: title.length,
          description,
          descriptionLength: description.length,
          canonicalUrl,
          robots,
          viewport,
          openGraph,
          twitter,
          h1s,
          h1Count,
          h2s: h2s.length,
          h3s: h3s.length,
          headingHierarchyValid: hierarchyValid,
          schemas,
          imagesWithoutAlt,
          totalImages,
          internalLinksCount: internalLinks.length,
          mixedContentCount: httpResources.length
        };
      });
      
      pageData.url = url;
      auditResults.pages.push(pageData);
      
      // Track duplicates
      if (pageData.title) {
        if (!auditResults.duplicates.titles[pageData.title]) {
          auditResults.duplicates.titles[pageData.title] = [];
        }
        auditResults.duplicates.titles[pageData.title].push(url);
      }
      
      if (pageData.description) {
        if (!auditResults.duplicates.descriptions[pageData.description]) {
          auditResults.duplicates.descriptions[pageData.description] = [];
        }
        auditResults.duplicates.descriptions[pageData.description].push(url);
      }
      
      if (pageData.h1s.length > 0) {
        const h1 = pageData.h1s[0];
        if (!auditResults.duplicates.h1s[h1]) {
          auditResults.duplicates.h1s[h1] = [];
        }
        auditResults.duplicates.h1s[h1].push(url);
      }
      
      // Identify issues
      
      // CRITICAL ISSUES
      if (!pageData.title || pageData.title === '') {
        auditResults.criticalIssues.push({
          url,
          issue: 'Missing title tag',
          type: 'meta',
          priority: 'CRITICAL',
          fix: 'Add a unique, keyword-rich title tag (50-60 characters) including "Melbourne" and "Cairo by Nights"'
        });
      }
      
      if (!pageData.description || pageData.description === '') {
        auditResults.criticalIssues.push({
          url,
          issue: 'Missing meta description',
          type: 'meta',
          priority: 'CRITICAL',
          fix: 'Add a unique meta description (150-160 characters) with CTA and location keywords'
        });
      }
      
      if (pageData.h1Count === 0) {
        auditResults.criticalIssues.push({
          url,
          issue: 'Missing H1 tag',
          type: 'structure',
          priority: 'CRITICAL',
          fix: 'Add exactly one H1 tag with primary keyword for this page'
        });
      } else if (pageData.h1Count > 1) {
        auditResults.criticalIssues.push({
          url,
          issue: `Multiple H1 tags (${pageData.h1Count} found)`,
          type: 'structure',
          priority: 'CRITICAL',
          fix: 'Reduce to exactly one H1 tag per page; convert others to H2 or H3'
        });
      }
      
      if (!pageData.canonicalUrl || pageData.canonicalUrl === '') {
        auditResults.criticalIssues.push({
          url,
          issue: 'Missing canonical URL',
          type: 'technical',
          priority: 'CRITICAL',
          fix: `Add <link rel="canonical" href="${url}"> to page head`
        });
      }
      
      if (pageData.robots && pageData.robots.includes('noindex')) {
        auditResults.criticalIssues.push({
          url,
          issue: 'Page set to noindex',
          type: 'technical',
          priority: 'CRITICAL',
          fix: 'Remove noindex directive if this page should be indexed by search engines'
        });
      }
      
      // HIGH PRIORITY ISSUES
      if (pageData.titleLength > 70) {
        auditResults.highPriorityIssues.push({
          url,
          issue: `Title too long (${pageData.titleLength} characters)`,
          type: 'meta',
          priority: 'HIGH',
          current: pageData.title,
          fix: 'Reduce to 50-60 characters to avoid truncation in search results'
        });
      } else if (pageData.titleLength < 30 && pageData.titleLength > 0) {
        auditResults.highPriorityIssues.push({
          url,
          issue: `Title too short (${pageData.titleLength} characters)`,
          type: 'meta',
          priority: 'HIGH',
          current: pageData.title,
          fix: 'Expand to 50-60 characters; add location "Melbourne" and brand "Cairo by Nights"'
        });
      }
      
      if (pageData.descriptionLength > 165) {
        auditResults.highPriorityIssues.push({
          url,
          issue: `Meta description too long (${pageData.descriptionLength} characters)`,
          type: 'meta',
          priority: 'HIGH',
          current: pageData.description,
          fix: 'Reduce to 150-160 characters to avoid truncation'
        });
      } else if (pageData.descriptionLength < 120 && pageData.descriptionLength > 0) {
        auditResults.highPriorityIssues.push({
          url,
          issue: `Meta description too short (${pageData.descriptionLength} characters)`,
          type: 'meta',
          priority: 'HIGH',
          current: pageData.description,
          fix: 'Expand to 150-160 characters; add CTA and location keywords'
        });
      }
      
      // Check for "Melbourne" in title for local pages
      if (!url.includes('/contact') && !url.includes('/thank') && 
          pageData.title && !pageData.title.toLowerCase().includes('melbourne')) {
        auditResults.highPriorityIssues.push({
          url,
          issue: 'Title missing location keyword "Melbourne"',
          type: 'meta',
          priority: 'HIGH',
          current: pageData.title,
          fix: 'Add "Melbourne" to title for local SEO'
        });
      }
      
      // Check for "Cairo by Nights" in title
      if (pageData.title && !pageData.title.includes('Cairo by Nights')) {
        auditResults.highPriorityIssues.push({
          url,
          issue: 'Title missing brand name "Cairo by Nights"',
          type: 'meta',
          priority: 'HIGH',
          current: pageData.title,
          fix: 'Add "Cairo by Nights" to title for brand consistency'
        });
      }
      
      if (!pageData.headingHierarchyValid) {
        auditResults.highPriorityIssues.push({
          url,
          issue: 'Broken heading hierarchy (skipped levels)',
          type: 'structure',
          priority: 'HIGH',
          fix: 'Fix heading hierarchy: H1 > H2 > H3 (no skipped levels like H1 to H3)'
        });
      }
      
      if (pageData.imagesWithoutAlt > 0) {
        auditResults.highPriorityIssues.push({
          url,
          issue: `${pageData.imagesWithoutAlt} of ${pageData.totalImages} images missing alt text`,
          type: 'accessibility',
          priority: 'HIGH',
          fix: 'Add descriptive alt text to all images (run Alt Text Auditor Agent)'
        });
      }
      
      // MEDIUM PRIORITY ISSUES
      if (!pageData.openGraph.title || pageData.openGraph.title === '') {
        auditResults.mediumPriorityIssues.push({
          url,
          issue: 'Missing Open Graph title',
          type: 'social',
          priority: 'MEDIUM',
          fix: `Add <meta property="og:title" content="${pageData.title || 'Your Title'}">`
        });
      }
      
      if (!pageData.openGraph.description || pageData.openGraph.description === '') {
        auditResults.mediumPriorityIssues.push({
          url,
          issue: 'Missing Open Graph description',
          type: 'social',
          priority: 'MEDIUM',
          fix: `Add <meta property="og:description" content="${pageData.description || 'Your Description'}">`
        });
      }
      
      if (!pageData.openGraph.image || pageData.openGraph.image === '') {
        auditResults.mediumPriorityIssues.push({
          url,
          issue: 'Missing Open Graph image',
          type: 'social',
          priority: 'MEDIUM',
          fix: 'Add <meta property="og:image" content="[URL to 1200x630px image]">'
        });
      }
      
      if (!pageData.twitter.card || pageData.twitter.card === '') {
        auditResults.mediumPriorityIssues.push({
          url,
          issue: 'Missing Twitter Card tags',
          type: 'social',
          priority: 'MEDIUM',
          fix: 'Add Twitter Card meta tags for better social sharing'
        });
      }
      
      if (!pageData.viewport || pageData.viewport === '') {
        auditResults.mediumPriorityIssues.push({
          url,
          issue: 'Missing viewport meta tag',
          type: 'mobile',
          priority: 'MEDIUM',
          fix: 'Add <meta name="viewport" content="width=device-width, initial-scale=1">'
        });
      }
      
      if (pageData.schemas.length === 0) {
        auditResults.mediumPriorityIssues.push({
          url,
          issue: 'No schema markup found',
          type: 'structured-data',
          priority: 'MEDIUM',
          fix: 'Add relevant schema markup (LocalBusiness, Service, BreadcrumbList)'
        });
      }
      
      if (pageData.mixedContentCount > 0) {
        auditResults.technicalIssues.push({
          url,
          issue: `${pageData.mixedContentCount} HTTP resources on HTTPS page`,
          type: 'security',
          priority: 'HIGH',
          fix: 'Update all HTTP resources to HTTPS to avoid mixed content warnings'
        });
      }
      
      console.log(`  ✓ Completed`);
      
    } catch (error) {
      console.error(`  ❌ Error: ${error.message}`);
      auditResults.criticalIssues.push({
        url,
        issue: `Failed to audit: ${error.message}`,
        type: 'accessibility',
        priority: 'CRITICAL'
      });
    }
  }
  
  await browser.close();
  
  // Identify duplicates
  console.log('\n\n🔍 Analyzing for duplicates...');
  
  Object.keys(auditResults.duplicates.titles).forEach(title => {
    const urls = auditResults.duplicates.titles[title];
    if (urls.length > 1) {
      auditResults.criticalIssues.push({
        urls,
        issue: `Duplicate title tag found on ${urls.length} pages`,
        type: 'meta',
        priority: 'CRITICAL',
        duplicateContent: title,
        fix: 'Create unique titles for each page with different keywords/modifiers'
      });
    }
  });
  
  Object.keys(auditResults.duplicates.descriptions).forEach(desc => {
    const urls = auditResults.duplicates.descriptions[desc];
    if (urls.length > 1) {
      auditResults.criticalIssues.push({
        urls,
        issue: `Duplicate meta description found on ${urls.length} pages`,
        type: 'meta',
        priority: 'CRITICAL',
        duplicateContent: desc,
        fix: 'Create unique descriptions for each page highlighting different features/benefits'
      });
    }
  });
  
  // Generate Report
  console.log('\n\n📊 COMPREHENSIVE TECHNICAL SEO AUDIT REPORT');
  console.log('='.repeat(80));
  console.log(`Website: Cairo by Nights`);
  console.log(`Pages Audited: ${auditResults.pages.length}`);
  console.log(`\n🚨 CRITICAL Issues: ${auditResults.criticalIssues.length}`);
  console.log(`⚠️  HIGH Priority Issues: ${auditResults.highPriorityIssues.length}`);
  console.log(`📋 MEDIUM Priority Issues: ${auditResults.mediumPriorityIssues.length}`);
  console.log(`🔧 Technical Issues: ${auditResults.technicalIssues.length}`);
  console.log('='.repeat(80));
  
  // Show critical issues
  if (auditResults.criticalIssues.length > 0) {
    console.log('\n\n🚨 CRITICAL ISSUES (FIX IMMEDIATELY):\n');
    auditResults.criticalIssues.forEach((issue, i) => {
      console.log(`${i + 1}. ${issue.issue}`);
      if (issue.url) console.log(`   URL: ${issue.url}`);
      if (issue.urls) console.log(`   Affected pages: ${issue.urls.length}`);
      if (issue.duplicateContent) console.log(`   Duplicate: "${issue.duplicateContent.substring(0, 100)}..."`);
      console.log(`   Type: ${issue.type}`);
      console.log(`   Fix: ${issue.fix}`);
      console.log('');
    });
  }
  
  // Save results
  const fs = require('fs');
  fs.writeFileSync('technical-seo-audit.json', JSON.stringify(auditResults, null, 2));
  console.log('\n✅ Audit complete! Results saved to technical-seo-audit.json');
  
  return auditResults;
}

// Run the audit
comprehensiveSEOAudit().catch(console.error);

Output Report Format
=== COMPREHENSIVE TECHNICAL SEO AUDIT REPORT ===
Website: Cairo by Nights (https://cairobynights.com.au)
Date: [Current Date]
Pages Audited: 24

AUDIT SUMMARY:
🚨 CRITICAL Issues: 18 (fix immediately)
⚠️  HIGH Priority: 32 (fix this week)
📋 MEDIUM Priority: 15 (optimize soon)
🔧 Technical Issues: 8 (developer required)

OVERALL SEO HEALTH SCORE: 62/100 (Needs Improvement)

---

🚨 CRITICAL ISSUES (18 TOTAL)

ISSUE #1: DUPLICATE TITLE TAGS
Severity: 🚨 CRITICAL
Type: Meta Data
Affected Pages: 5

Duplicate Title: "Cairo by Nights - Professional Cleaning Services"
Found on:
1. https://cairobynights.com.au/services/carpet-cleaning
2. https://cairobynights.com.au/services/upholstery-cleaning
3. https://cairobynights.com.au/services/tile-cleaning
4. https://cairobynights.com.au/services/rug-cleaning
5. https://cairobynights.com.au/services/mattress-cleaning

SEO IMPACT: 🔴 CRITICAL
- Search engines can't differentiate these pages
- Lost ranking opportunity for each service
- Diluted click-through rate in search results
- Confusing for users in search results

FIX REQUIRED:
Create unique title tags for each service page:

1. /services/carpet-cleaning
   Current: "Cairo by Nights - Professional Cleaning Services"
   NEW: "Carpet Steam Cleaning Melbourne | Same Day Service | Cairo by Nights"
```html
   <title>Carpet Steam Cleaning Melbourne | Same Day Service | Cairo by Nights</title>

/services/upholstery-cleaning
Current: "Cairo by Nights - Professional Cleaning Services"
NEW: "Upholstery Cleaning Services Melbourne | Expert Care | Cairo by Nights"

html   <title>Upholstery Cleaning Services Melbourne | Expert Care | Cairo by Nights</title>

/services/tile-cleaning
Current: "Cairo by Nights - Professional Cleaning Services"
NEW: "Tile & Grout Cleaning Melbourne | Professional Results | Cairo by Nights"

html   <title>Tile & Grout Cleaning Melbourne | Professional Results | Cairo by Nights</title>

/services/rug-cleaning
Current: "Cairo by Nights - Professional Cleaning Services"
NEW: "Professional Rug Cleaning Melbourne | All Types | Cairo by Nights"

html   <title>Professional Rug Cleaning Melbourne | All Types | Cairo by Nights</title>

/services/mattress-cleaning
Current: "Cairo by Nights - Professional Cleaning Services"
NEW: "Mattress Cleaning Services Melbourne | Deep Sanitation | Cairo by Nights"

html   <title>Mattress Cleaning Services Melbourne | Deep Sanitation | Cairo by Nights</title>
ESTIMATED TIME: 30 minutes
EXPECTED IMPACT: +20-30% CTR improvement, better rankings for specific services

ISSUE #2: MISSING TITLE TAGS
Severity: 🚨 CRITICAL
Type: Meta Data
Affected Pages: 2
Pages missing title tags entirely:

https://cairobynights.com.au/locations/richmond
https://cairobynights.com.au/blog/cleaning-tips-melbourne

SEO IMPACT: 🔴 CRITICAL

Pages won't rank at all without titles
Complete loss of search visibility
Appears as URL in search results (very unprofessional)

FIX REQUIRED:

/locations/richmond
ADD: "Carpet Cleaning Richmond Melbourne | Local Experts | Cairo by Nights"

html   <head>
     <title>Carpet Cleaning Richmond Melbourne | Local Experts | Cairo by Nights</title>
   </head>

/blog/cleaning-tips-melbourne
ADD: "Top 10 Cleaning Tips for Melbourne Homes | Cairo by Nights Blog"

html   <head>
     <title>Top 10 Cleaning Tips for Melbourne Homes | Cairo by Nights Blog</title>
   </head>
ESTIMATED TIME: 15 minutes
EXPECTED IMPACT: Pages become indexable and rankable

ISSUE #3: DUPLICATE META DESCRIPTIONS
Severity: 🚨 CRITICAL
Type: Meta Data
Affected Pages: 8
Duplicate Description: "Call us today for professional cleaning services in Melbourne."
Found on 8 pages (too generic, too short at 63 characters)
Pages affected:

/services/carpet-cleaning
/services/upholstery-cleaning
/services/tile-cleaning
/services/rug-cleaning
/services/mattress-cleaning
/locations/carlton
/locations/fitzroy
/locations/richmond

SEO IMPACT: 🔴 CRITICAL

Missed opportunity for compelling CTAs
Too short (wasting 97 characters of space)
No differentiation in search results
Lower click-through rates

FIX REQUIRED:
Create unique 150-160 character meta descriptions for each page:

/services/carpet-cleaning
Current: "Call us today for professional cleaning services in Melbourne."
NEW: "Professional carpet steam cleaning across Melbourne. Truck-mounted equipment removes tough stains & odors. 15+ years experience. Same-day service available. Call now for free quote & 24/7 emergency service."

html   <meta name="description" content="Professional carpet steam cleaning across Melbourne. Truck-mounted equipment removes tough stains & odors. 15+ years experience. Same-day service available. Call now for free quote & 24/7 emergency service.">

/services/upholstery-cleaning
Current: "Call us today for professional cleaning services in Melbourne."
NEW: "Expert upholstery cleaning in Melbourne. Fabric, leather & antique furniture specialists. Eco-friendly products safe for families & pets. Free quotes. Book online or call for same-day service across Melbourne."

html   <meta name="description" content="Expert upholstery cleaning in Melbourne. Fabric, leather & antique furniture specialists. Eco-friendly products safe for families & pets. Free quotes. Book online or call for same-day service across Melbourne.">
[Continue for all 8 pages with unique, optimized descriptions]
ESTIMATED TIME: 1 hour
EXPECTED IMPACT: +15-25% CTR improvement from search results

ISSUE #4: MULTIPLE H1 TAGS
Severity: 🚨 CRITICAL
Type: Page Structure
Affected Pages: 3
Pages with multiple H1 tags (should be exactly 1 per page):

https://cairobynights.com.au/services/carpet-cleaning
Found: 3 H1 tags

"Carpet Cleaning Melbourne"
"Why Choose Us"
"Get a Free Quote"

FIX: Keep only "Carpet Cleaning Melbourne" as H1, convert others to H2
https://cairobynights.com.au/about
Found: 2 H1 tags

"About Cairo by Nights"
"Our Team"

FIX: Keep only "About Cairo by Nights" as H1, convert "Our Team" to H2
https://cairobynights.com.au/
Found: 2 H1 tags

"Welcome to Cairo by Nights"
"Melbourne's #1 Cleaning Service"

FIX: Merge into one H1: "Melbourne's #1 Professional Cleaning Service | Cairo by Nights"

SEO IMPACT: 🟡 MEDIUM-HIGH

Confuses search engines about page topic
Dilutes keyword focus
Accessibility issues for screen readers

CODE FIXES:
html<!-- /services/carpet-cleaning -->
<!-- BEFORE -->
<h1>Carpet Cleaning Melbourne</h1>
...
<h1>Why Choose Us</h1>
...
<h1>Get a Free Quote</h1>

<!-- AFTER -->
<h1>Professional Carpet Cleaning in Melbourne</h1>
...
<h2>Why Choose Cairo by Nights for Carpet Cleaning</h2>
...
<h2>Get Your Free Carpet Cleaning Quote Today</h2>
ESTIMATED TIME: 20 minutes
EXPECTED IMPACT: Improved topical clarity, better rankings

ISSUE #5: MISSING CANONICAL URLs
Severity: 🚨 CRITICAL
Type: Technical SEO
Affected Pages: 12
Pages without canonical URLs:

/services/carpet-cleaning
/services/upholstery-cleaning
/services/tile-cleaning
[... and 9 more]

SEO IMPACT: 🔴 CRITICAL

Risk of duplicate content issues
Search engines may index wrong URL version
Lost link equity from URL variations

FIX REQUIRED:
Add canonical URL to every page:
html<head>
  <link rel="canonical" href="https://cairobynights.com.au/services/carpet-cleaning">
</head>
IMPLEMENTATION:
If using a template system (React, WordPress, etc.), add dynamic canonical:
javascript// React example
<Head>
  <link rel="canonical" href={`https://cairobynights.com.au${router.asPath}`} />
</Head>
php<!-- WordPress example -->
<link rel="canonical" href="<?php echo get_permalink(); ?>">
ESTIMATED TIME: 30 minutes (if template-based) or 2 hours (if manual per page)
EXPECTED IMPACT: Prevents duplicate content penalties, consolidates ranking signals

⚠️ HIGH PRIORITY ISSUES (32 TOTAL)
ISSUE #6: TITLE TAGS TOO SHORT
Severity: ⚠️ HIGH
Affected Pages: 7
Pages with titles under 40 characters (wasting opportunity):

/about - "About Us" (9 chars)
NEW: "About Cairo by Nights | 15+ Years Serving Melbourne | Professional Cleaning"
/ (homepage) - "Cairo by Nights" (15 chars)
NEW: "Professional Cleaning Services Melbourne | Same Day | Cairo by Nights"
/contact - "Contact" (7 chars)
NEW: "Contact Cairo by Nights | Melbourne Cleaning Services | 24/7 Available"

[Continue for all 7 pages]
FIX: Expand titles to 50-60 characters, add keywords and location
ESTIMATED TIME: 30 minutes
EXPECTED IMPACT: Better keyword targeting, improved CTR

ISSUE #7: META DESCRIPTIONS TOO SHORT
Severity: ⚠️ HIGH
Affected Pages: 11
Pages with meta descriptions under 120 characters:
Examples:

/about: "Learn about our company." (24 chars - wasting 136 characters!)
/contact: "Get in touch with us." (21 chars - wasting 139 characters!)

FIX: Expand all to 150-160 characters with:

Service/page description
Unique selling points
Call-to-action
Location keywords
Contact/availability info

ESTIMATED TIME: 1 hour
EXPECTED IMPACT: +10-20% CTR improvement

ISSUE #8: MISSING "MELBOURNE" IN TITLES
Severity: ⚠️ HIGH
Type: Local SEO
Affected Pages: 9
Pages missing critical location keyword "Melbourne" in title:

/services/carpet-cleaning: "Professional Carpet Cleaning by Cairo by Nights"
(Missing "Melbourne" - critical for local SEO!)
NEW: "Professional Carpet Cleaning Melbourne | Cairo by Nights"
/services/upholstery-cleaning: "Upholstery Cleaning Services"
(Missing both "Melbourne" AND brand!)
NEW: "Upholstery Cleaning Services Melbourne | Cairo by Nights"

[Continue for all 9 pages]
SEO IMPACT: 🔴 HIGH

Missing local SEO signals
Won't rank for "[service] Melbourne" keywords
Competitors with location in title will outrank

FIX: Add "Melbourne" to every service and location page title
ESTIMATED TIME: 30 minutes
EXPECTED IMPACT: +30-50% improvement in local search rankings

ISSUE #9: MISSING OPEN GRAPH TAGS
Severity: ⚠️ HIGH
Type: Social Media
Affected Pages: 18
Most pages missing Open Graph tags for social sharing:
Missing:

og:title (18 pages)
og:description (18 pages)
og:image (24 pages - NO pages have this!)
og:url (16 pages)
og:type (20 pages)

SEO IMPACT: 🟡 MEDIUM

Poor appearance when shared on Facebook, LinkedIn
No control over preview image
Lower social engagement
Missed branding opportunity

FIX TEMPLATE:
html<head>
  <!-- Primary Meta Tags -->
  <title>Professional Carpet Cleaning Melbourne | Cairo by Nights</title>
  <meta name="description" content="Professional carpet steam cleaning across Melbourne...">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://cairobynights.com.au/services/carpet-cleaning">
  <meta property="og:title" content="Professional Carpet Cleaning Melbourne | Cairo by Nights">
  <meta property="og:description" content="Professional carpet steam cleaning across Melbourne...">
  <meta property="og:image" content="https://cairobynights.com.au/images/og-carpet-cleaning.jpg">
  <meta property="og:locale" content="en_AU">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://cairobynights.com.au/services/carpet-cleaning">
  <meta property="twitter:title" content="Professional Carpet Cleaning Melbourne | Cairo by Nights">
  <meta property="twitter:description" content="Professional carpet steam cleaning across Melbourne...">
  <meta property="twitter:image" content="https://cairobynights.com.au/images/twitter-carpet-cleaning.jpg">
</head>
REQUIRED IMAGES:

Create Open Graph images: 1200x630px for each service
Include branding, service name, and visual
Save as: og-[service-name].jpg

ESTIMATED TIME: 2 hours (including image creation)
EXPECTED IMPACT: Better social sharing, increased referral traffic

ISSUE #10: IMAGES WITHOUT ALT TEXT
Severity: ⚠️ HIGH
Type: Accessibility & SEO
Affected Pages: 16
Summary of missing alt text:

Homepage: 5 images without alt
/services/carpet-cleaning: 8 images without alt
/services/upholstery-cleaning: 6 images without alt
/about: 4 images without alt
[... and 12 more pages]

Total: 89 images missing alt text across site
SEO IMPACT: 🟡 MEDIUM-HIGH

Accessibility violations (WCAG failure)
Missing image SEO opportunity
Won't appear in Google Image Search
Lower overall SEO score

FIX:
Run the dedicated "Alt Text Auditor Agent" for comprehensive fix.
Quick fix for critical images:
html<!-- Hero image on carpet cleaning page -->
<img src="/hero-carpet.jpg" alt="Professional truck-mounted carpet steam cleaning equipment used by Cairo by Nights in Melbourne">

<!-- Before/after image -->
<img src="/before-after-carpet.jpg" alt="Heavily stained carpet before and after deep cleaning by Cairo by Nights Melbourne">

<!-- Team photo -->
<img src="/team.jpg" alt="Cairo by Nights professional cleaning technicians servicing Melbourne homes">
ESTIMATED TIME: 2-3 hours (run Alt Text Auditor Agent for full fix)
EXPECTED IMPACT: Improved accessibility score, image search traffic

📋 MEDIUM PRIORITY ISSUES (15 TOTAL)
ISSUE #11: MISSING SCHEMA MARKUP
Severity: 📋 MEDIUM
Type: Structured Data
Affected Pages: 20
Only 4 pages have any schema markup. Missing opportunities:
HOMEPAGE needs:

LocalBusiness schema
Organization schema

SERVICE PAGES need:

Service schema for each service
BreadcrumbList schema

LOCATION PAGES need:

LocalBusiness schema with area served
BreadcrumbList schema

ABOUT PAGE needs:

Organization schema
Person schema (for team members if applicable)

FIX - LOCALBUSINESS SCHEMA (Homepage):
html<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Cairo by Nights",
  "image": "https://cairobynights.com.au/images/logo.jpg",
  "@id": "https://cairobynights.com.au",
  "url": "https://cairobynights.com.au",
  "telephone": "+61-XXX-XXX-XXX",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Example Street",
    "addressLocality": "Melbourne",
    "addressRegion": "VIC",
    "postalCode": "3000",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -37.8136,
    "longitude": 144.9631
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }],
  "sameAs": [
    "https://www.facebook.com/cairobynights",
    "https://www.instagram.com/cairobynights"
  ],
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -37.8136,
      "longitude": 144.9631
    },
    "geoRadius": "30000"
  }
}
</script>
FIX - SERVICE SCHEMA (Service Pages):
html<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Carpet Cleaning",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Cairo by Nights"
  },
  "areaServed": {
    "@type": "City",
    "name": "Melbourne"
  },
  "description": "Professional carpet steam cleaning services in Melbourne...",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$"
  }
}
</script>
FIX - BREADCRUMB SCHEMA (All Pages):
html<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://cairobynights.com.au"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Services",
    "item": "https://cairobynights.com.au/services"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "Carpet Cleaning",
    "item": "https://cairobynights.com.au/services/carpet-cleaning"
  }]
}
</script>
ESTIMATED TIME: 3-4 hours
EXPECTED IMPACT: Rich results in search, better local SEO signals

ISSUE #12: NO ROBOTS.TXT FILE
Severity: 📋 MEDIUM
Type: Technical SEO
Status: robots.txt file NOT FOUND at https://cairobynights.com.au/robots.txt
SEO IMPACT: 🟡 MEDIUM

No control over bot crawling
Can't specify sitemap location
May waste crawl budget on unimportant pages

FIX:
Create robots.txt file at root directory:
txt# robots.txt for Cairo by Nights

User-agent: *
Disallow: /admin/
Disallow: /wp-admin/
Disallow: /wp-login.php
Disallow: /cart/
Disallow: /checkout/
Disallow: /my-account/
Disallow: /cgi-bin/
Disallow: /*?*
Disallow: /*.pdf$

Allow: /

Sitemap: https://cairobynights.com.au/sitemap.xml
Sitemap: https://cairobynights.com.au/sitemap-index.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /
ESTIMATED TIME: 15 minutes
EXPECTED IMPACT: Better crawl efficiency

ISSUE #13: MISSING XML SITEMAP
Severity: 📋 MEDIUM
Type: Technical SEO
Status: XML sitemap NOT FOUND at https://cairobynights.com.au/sitemap.xml
SEO IMPACT: 🟡 MEDIUM

Search engines must discover pages by crawling links only
Slower indexing of new pages
Risk of pages not being discovered

FIX:
Generate and submit XML sitemap.
If using WordPress: Use Yoast SEO or Rank Math plugin (auto-generates)
If using Next.js: Use next-sitemap package
If static HTML: Use online sitemap generator or manual creation
Example sitemap.xml structure:
xml<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cairobynights.com.au/</loc>
    <lastmod>2025-10-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://cairobynights.com.au/services/carpet-cleaning</loc>
    <lastmod>2025-10-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Add all pages -->
</urlset>
THEN: Submit to Google Search Console and Bing Webmaster Tools
ESTIMATED TIME: 1 hour (including setup and submission)
EXPECTED IMPACT: Faster indexing, better crawl coverage

🔧 TECHNICAL ISSUES (8 TOTAL)
ISSUE #14: MIXED CONTENT (HTTP RESOURCES ON HTTPS PAGES)
Severity: 🔧 HIGH
Type: Security
Affected Pages: 4
Found HTTP resources loaded on HTTPS pages:

/services/carpet-cleaning: 2 HTTP image links
/about: 1 HTTP script
/services/upholstery-cleaning: 3 HTTP image links

Example:
html<!-- INSECURE -->
<img src="http://cairobynights.com.au/images/carpet-clean.jpg">
<script src="http://cdn.example.com/script.js"></script>

<!-- SECURE (FIX) -->
<img src="https://cairobynights.com.au/images/carpet-clean.jpg">
<script src="https://cdn.example.com/script.js"></script>
SEO IMPACT: 🟡 MEDIUM

Browser warnings (breaks padlock icon)
Security risk
Negative user trust signal
May be blocked by modern browsers

FIX: Update all HTTP:// to HTTPS:// in image/script/link tags
ESTIMATED TIME: 30 minutes
EXPECTED IMPACT: Improved security, trust signals

IMPLEMENTATION PRIORITY & TIMELINE
WEEK 1 (CRITICAL - 8 hours):
□ Fix duplicate title tags (5 pages)
□ Add missing title tags (2 pages)
□ Fix duplicate meta descriptions (8 pages)
□ Fix multiple H1 issues (3 pages)
□ Add canonical URLs site-wide
WEEK 2 (HIGH PRIORITY - 10 hours):
□ Expand short titles (7 pages)
□ Expand short meta descriptions (11 pages)
□ Add "Melbourne" to titles (9 pages)
□ Add Open Graph tags site-wide
□ Fix images without alt text (run Alt Text Agent)
WEEK 3 (MEDIUM PRIORITY - 8 hours):
□ Add schema markup (LocalBusiness, Service, Breadcrumbs)
□ Create and submit robots.txt
□ Generate and submit XML sitemap
□ Add FAQ schema (if FAQ sections exist)

WEEK 4 (TECHNICAL & POLISH - 6 hours):
□ Fix mixed content issues
□ Fix broken heading hierarchy
□ Optimize internal linking structure
□ Add Twitter Card tags
□ Final QA and testing

TOTAL ESTIMATED TIME: 32 hours
EXPECTED OVERALL SEO SCORE IMPROVEMENT: 62/100 → 85-90/100

---

LIGHTHOUSE PERFORMANCE INTEGRATION

Once meta data and technical issues are fixed, run Lighthouse MCP for performance audit:
Use Lighthouse MCP to audit these Cairo by Nights pages after implementing meta/technical fixes:
PAGES TO TEST:

Homepage (/)
/services/carpet-cleaning
/locations/carlton

FOR EACH PAGE:

Run desktop Lighthouse audit
Run mobile Lighthouse audit
Extract performance metrics:

Performance Score
First Contentful Paint
Largest Contentful Paint
Total Blocking Time
Cumulative Layout Shift
Speed Index


Extract SEO score (should improve to 90+ after fixes)
Extract Accessibility score
Identify remaining issues

FOCUS AREAS:

Confirm SEO score improved from fixes
Identify performance bottlenecks
Check Core Web Vitals passing
Note any accessibility issues remaining

Generate before/after comparison showing improvement.

---

CHROME DEVTOOLS PERFORMANCE TESTING

After implementing fixes, use Chrome DevTools MCP to verify:
Use Chrome DevTools MCP to verify technical SEO fixes on Cairo by Nights:

CONSOLE CHECK

Navigate to all fixed pages
Verify 0 JavaScript errors
Verify 0 mixed content warnings
Check no 404 errors for resources


NETWORK ANALYSIS

Record page load
Verify all resources loading over HTTPS
Check no excessive requests (aim for <50)
Verify images optimized (no 3MB+ images)
Check lazy loading working for below-fold images


COVERAGE AUDIT

Run coverage tool
Verify unused CSS <20%
Verify unused JS <20%
Identify opportunities for code splitting


MOBILE TESTING

Test on iPhone 13 emulation
Verify no horizontal scrolling
Check touch targets >48px
Verify readable font sizes
Test all forms work on mobile


META VERIFICATION

Inspect <head> section of each fixed page
Verify new title tags present
Verify new meta descriptions present
Verify canonical URLs correct
Verify Open Graph tags present
Verify schema markup valid



OUTPUT:
Confirmation report showing:
✅ All critical issues fixed
✅ All high priority issues fixed
⚠️ Any remaining medium/low issues
📊 Performance metrics improved

---

AUTOMATED MONITORING SCRIPT

Set up ongoing monitoring with Playwright:
```javascript
// Weekly SEO Health Check Script
// Run this every week to catch any regressions

const { chromium } = require('playwright');

async function weeklyHealthCheck() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const healthReport = {
    date: new Date().toISOString(),
    issues: [],
    warnings: [],
    passed: []
  };
  
  const criticalPages = [
    'https://cairobynights.com.au/',
    'https://cairobynights.com.au/services/carpet-cleaning',
    'https://cairobynights.com.au/services/upholstery-cleaning',
    'https://cairobynights.com.au/locations/carlton'
  ];
  
  for (const url of criticalPages) {
    await page.goto(url);
    
    // Check title tag
    const title = await page.title();
    if (!title || title.length === 0) {
      healthReport.issues.push({ url, issue: 'Missing title tag' });
    } else if (!title.includes('Melbourne') && !url.includes('/contact')) {
      healthReport.warnings.push({ url, warning: 'Title missing "Melbourne"' });
    } else {
      healthReport.passed.push({ url, check: 'Title tag OK' });
    }
    
    // Check meta description
    const metaDesc = await page.$eval('meta[name="description"]', 
      el => el.getAttribute('content')).catch(() => null);
    
    if (!metaDesc) {
      healthReport.issues.push({ url, issue: 'Missing meta description' });
    } else if (metaDesc.length < 120) {
      healthReport.warnings.push({ url, warning: 'Meta description too short' });
    } else {
      healthReport.passed.push({ url, check: 'Meta description OK' });
    }
    
    // Check canonical URL
    const canonical = await page.$eval('link[rel="canonical"]',
      el => el.getAttribute('href')).catch(() => null);
    
    if (!canonical) {
      healthReport.issues.push({ url, issue: 'Missing canonical URL' });
    } else {
      healthReport.passed.push({ url, check: 'Canonical URL present' });
    }
    
    // Check H1 count
    const h1Count = await page.$$eval('h1', els => els.length);
    if (h1Count === 0) {
      healthReport.issues.push({ url, issue: 'No H1 tag' });
    } else if (h1Count > 1) {
      healthReport.issues.push({ url, issue: `${h1Count} H1 tags (should be 1)` });
    } else {
      healthReport.passed.push({ url, check: 'H1 structure OK' });
    }
    
    // Check for console errors
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.waitForTimeout(2000); // Wait for any async errors
    
    if (errors.length > 0) {
      healthReport.warnings.push({ 
        url, 
        warning: `${errors.length} console errors`,
        details: errors.slice(0, 3) // First 3 errors
      });
    }
  }
  
  await browser.close();
  
  // Generate report
  console.log('\n=== WEEKLY SEO HEALTH CHECK ===');
  console.log(`Date: ${healthReport.date}`);
  console.log(`\n✅ Passed: ${healthReport.passed.length}`);
  console.log(`⚠️  Warnings: ${healthReport.warnings.length}`);
  console.log(`❌ Issues: ${healthReport.issues.length}`);
  
  if (healthReport.issues.length > 0) {
    console.log('\n❌ ISSUES REQUIRING IMMEDIATE ATTENTION:');
    healthReport.issues.forEach(issue => {
      console.log(`   ${issue.url}`);
      console.log(`   Issue: ${issue.issue}\n`);
    });
  }
  
  if (healthReport.warnings.length > 0) {
    console.log('\n⚠️  WARNINGS:');
    healthReport.warnings.forEach(warning => {
      console.log(`   ${warning.url}`);
      console.log(`   Warning: ${warning.warning}\n`);
    });
  }
  
  // Save report
  const fs = require('fs');
  const filename = `health-check-${new Date().toISOString().split('T')[0]}.json`;
  fs.writeFileSync(filename, JSON.stringify(healthReport, null, 2));
  console.log(`\n📁 Report saved to ${filename}`);
  
  // Alert if critical issues found
  if (healthReport.issues.length > 0) {
    console.log('\n🚨 ALERT: Critical SEO issues detected! Review immediately.');
    process.exit(1); // Exit with error code for CI/CD integration
  }
  
  return healthReport;
}

// Run weekly check
weeklyHealthCheck().catch(console.error);

// Schedule with cron: 0 9 * * 1 (every Monday at 9am)

SUCCESS METRICS & KPIs
Track these metrics to measure improvement:
Technical SEO Health:

 0 pages with missing title tags
 0 pages with missing meta descriptions
 0 duplicate title tags
 0 duplicate meta descriptions
 100% of pages have canonical URLs
 100% of pages have exactly 1 H1
 0 pages with noindex (unless intentional)
 robots.txt present and configured
 XML sitemap present and submitted
 All pages accessible (no 404s in sitemap)

Meta Data Quality:

 All title tags 50-60 characters
 All meta descriptions 150-160 characters
 100% of service pages include "Melbourne" in title
 100% of pages include brand name in title
 All meta descriptions include CTA
 All meta descriptions include location keywords

Social Media Optimization:

 100% of pages have Open Graph tags
 100% of pages have Twitter Card tags
 All og:image URLs working (200 status)
 Images sized correctly (1200x630px)

Structured Data:

 LocalBusiness schema on homepage
 Service schema on all service pages
 BreadcrumbList on all pages
 0 schema validation errors
 Review schema (if applicable)

Performance (Target Core Web Vitals):

 LCP < 2.5s (Good)
 FID < 100ms (Good)
 CLS < 0.1 (Good)
 Overall Performance Score > 90

SEO Scores (Lighthouse):

 SEO Score > 95
 Accessibility Score > 90
 Best Practices Score > 90
 Performance Score > 85 (mobile)
 Performance Score > 90 (desktop)

Search Console Metrics (Track Monthly):

 Average position improving
 Click-through rate improving
 Total impressions increasing
 Total clicks increasing
 0 coverage errors
 0 mobile usability errors


TOOLS & RESOURCES
Validation Tools:

Google Rich Results Test: https://search.google.com/test/rich-results
Schema Markup Validator: https://validator.schema.org/
Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
Twitter Card Validator: https://cards-dev.twitter.com/validator
PageSpeed Insights: https://pagespeed.web.dev/
Google Search Console: https://search.google.com/search-console
Bing Webmaster Tools: https://www.bing.com/webmasters

Testing Extensions:

Lighthouse (built into Chrome DevTools)
SEO META in 1 CLICK (Chrome extension)
Detailed SEO Extension (Chrome)
Web Developer (Chrome/Firefox)

Monitoring:

Google Search Console (weekly review)
Google Analytics (traffic trends)
Uptime monitoring (e.g., Uptime Robot)
Rank tracking (e.g., SEMrush, Ahrefs)


COMMANDS FOR CLAUDE CODE
Full Technical SEO Audit Command:
Use Playwright MCP to perform a complete technical SEO audit of my Cairo by Nights website:

1. Crawl all pages from homepage
2. Extract and analyze all meta data (titles, descriptions, canonicals)
3. Check heading structure (H1 count, hierarchy)
4. Identify duplicate titles and meta descriptions
5. Check for missing Open Graph and Twitter Card tags
6. Validate canonical URLs
7. Check for noindex tags
8. Count images without alt text per page
9. Check for mixed content (HTTP on HTTPS)
10. Validate internal links (no broken links)

Generate comprehensive report with:
- Summary of critical issues
- Prioritized fix list (CRITICAL > HIGH > MEDIUM > LOW)
- Ready-to-implement code fixes
- Estimated time for each fix
- Expected SEO impact

Focus on issues preventing ranking in Melbourne local search.
Lighthouse Performance Audit Command:
Use Lighthouse MCP to audit performance and SEO scores on my key Cairo by Nights pages:

PAGES:
- Homepage
- /services/carpet-cleaning
- /services/upholstery-cleaning
- /locations/carlton

FOR EACH PAGE:
1. Run mobile Lighthouse audit
2. Run desktop Lighthouse audit
3. Extract all scores (Performance, SEO, Accessibility, Best Practices)
4. Extract Core Web Vitals (LCP, FID, CLS)
5. Identify failed audits with specific fixes
6. Prioritize fixes by impact on ranking

Show me:
- Which page is worst performing (fix first)
- Top 5 highest impact fixes
- Specific code changes needed
- Expected score improvement after fixes

Special focus: Core Web Vitals must pass for Google ranking.
Chrome DevTools Inspection Command:
Use Chrome DevTools MCP to inspect my Cairo by Nights homepage for technical issues:

1. Open DevTools Console
   - Record all JavaScript errors
   - Record all warnings
   - Note any 404 errors

2. Network Tab Analysis
   - Record all requests on page load
   - Identify render-blocking resources
   - Find large unoptimized images (>500KB)
   - Check for HTTP resources on HTTPS page
   - Calculate total page weight

3. Coverage Analysis
   - Run Coverage tool
   - Identify unused CSS percentage
   - Identify unused JavaScript percentage
   - Recommend files to split or remove

4. Performance Profiling
   - Record page load performance
   - Identify long tasks (>50ms)
   - Find CLS contributors (layout shifts)
   - Measure Time to Interactive

5. Mobile Emulation Test
   - Test on iPhone 13
   - Check for horizontal scrolling
   - Verify touch targets >48px
   - Test form functionality

Output prioritized list of issues with specific fixes.
Schema Markup Validation Command:
Use Playwright MCP to extract and validate all schema markup on Cairo by Nights:

1. Crawl all pages
2. Extract all JSON-LD scripts
3. Parse and validate each schema against Schema.org
4. Check for required properties:
   - LocalBusiness: name, address, telephone, geo, openingHours
   - Service: name, provider, areaServed, description
   - BreadcrumbList: proper itemListElement structure

5. Identify missing schema opportunities:
   - Pages that should have LocalBusiness schema but don't
   - Service pages missing Service schema
   - Pages missing BreadcrumbList
   - FAQ sections that could use FAQ schema

6. Test schemas with Google Rich Results Test

Generate report showing:
- Current schema coverage
- Validation errors/warnings
- Missing schema opportunities
- Ready-to-implement JSON-LD code for each page
- Expected rich results after implementation
Duplicate Content Detection Command:
Use Playwright MCP to find duplicate and near-duplicate content on Cairo by Nights:

1. Crawl all pages
2. Extract main content (exclude nav/footer)
3. Generate content hash for each page
4. Compare content similarity between pages
5. Identify:
   - Exact duplicates (100% match)
   - Near duplicates (80%+ match)
   - Thin content (<300 words) that's also duplicated

6. Specifically check:
   - Are location pages unique? (Carlton vs Fitzroy vs Richmond)
   - Are service pages differentiated?
   - Any parameter-based duplicates?

For each duplicate set found, recommend:
- Consolidate and 301 redirect, OR
- Differentiate with unique content, OR
- Canonical tag strategy

Focus on service and location pages for Melbourne SEO.
Weekly Automated Health Check Command:
Set up a Playwright MCP script that I can run weekly to monitor SEO health:

PAGES TO MONITOR:
- Homepage
- Top 3 service pages
- Top 2 location pages

CHECKS TO PERFORM:
1. Title tag present and optimal length (50-60 chars)
2. Meta description present and optimal length (150-160 chars)
3. Canonical URL present
4. Exactly 1 H1 tag per page
5. "Melbourne" in title (except contact page)
6. 0 console errors
7. 0 mixed content warnings
8. All images have alt text
9. Page returns 200 status code
10. Performance score >85

Generate pass/fail report showing:
✅ What's working
⚠️  What needs attention
❌ What's broken (critical)

Save report as JSON with timestamp.
Alert if any critical issues detected.
Meta Data Comparison Command:
After I implement your recommended meta data fixes, use Playwright MCP to verify:

1. Re-crawl all pages I fixed
2. Extract new titles and meta descriptions
3. Verify all changes implemented correctly
4. Check character counts are optimal
5. Confirm no duplicates remain
6. Verify "Melbourne" added where recommended
7. Confirm brand name in all titles

Generate before/after comparison showing:
- Old title → New title (with character counts)
- Old description → New description (with character counts)
- Issues fixed ✅
- Any issues remaining ⚠️

Celebrate improvements! 🎉

FINAL IMPLEMENTATION CHECKLIST
Pre-Launch (Before Implementing Fixes):

 Run full technical SEO audit (save baseline)
 Run Lighthouse audit on key pages (save scores)
 Export current Google Search Console data (impressions, clicks, avg position)
 Take screenshots of current search appearances
 Document current rankings for key terms

Week 1 Implementation:

 Fix all duplicate title tags
 Add missing title tags
 Fix all duplicate meta descriptions
 Add missing meta descriptions
 Fix multiple H1 issues
 Add canonical URLs site-wide
 Test changes on staging before production

Week 2 Implementation:

 Expand short titles
 Expand short meta descriptions
 Add "Melbourne" to all service/location titles
 Add Open Graph tags to all pages
 Add Twitter Card tags to all pages
 Create OG images (1200x630px per service)
 Run Alt Text Auditor Agent and implement fixes

Week 3 Implementation:

 Add LocalBusiness schema to homepage
 Add Service schema to all service pages
 Add BreadcrumbList schema site-wide
 Create robots.txt file
 Generate XML sitemap
 Submit sitemap to Google Search Console
 Submit sitemap to Bing Webmaster Tools
 Add FAQ schema (if FAQ sections exist)

Week 4 Implementation:

 Fix all mixed content issues (HTTP to HTTPS)
 Fix broken heading hierarchy
 Optimize internal linking (related services/locations)
 Final QA pass on all pages
 Re-run technical SEO audit (compare to baseline)
 Re-run Lighthouse audits (compare to baseline)

Post-Launch Monitoring:

 Monitor Google Search Console for errors (daily for first week)
 Check indexing status of all pages
 Monitor Core Web Vitals in GSC
 Track ranking improvements (weekly)
 Monitor organic traffic trends (weekly)
 Run weekly health check script
 Review and iterate based on results

Expected Timeline:

Week 1-4: Implementation (32 hours total)
Week 5-8: Monitoring and iteration
Week 9-12: See ranking improvements (2-3 months typical)

Expected Results:

SEO Score: 62 → 90+ (Lighthouse)
Accessibility Score: 72 → 95+
Google Search Console: 0 errors
Indexing: 100% of important pages
Rankings: +15-30 positions for target keywords
Organic Traffic: +50-150% (within 3 months)
Click-Through Rate: +25-40% from meta improvements