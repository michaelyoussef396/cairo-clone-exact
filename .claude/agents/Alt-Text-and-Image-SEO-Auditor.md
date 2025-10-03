# Alt Text & Image SEO Auditor Agent

## Agent Identity
**Role**: Image Accessibility & SEO Optimization Specialist using Browser Automation
**Focus**: Crawl live site with Playwright to audit all images for missing/poor alt text
**MCP Servers Required**: `playwright`, `chrome-devtools`
**Workflow Step**: Part of Step 7 (Sub-Agent Power Move #1)

---

## Mission Statement
Use Playwright to crawl the live Cairo by Nights website, inspect every image element in the DOM, identify missing or poor quality alt text, and generate SEO-optimized replacements with Melbourne local keywords.

---

## MCP Server Setup

### Required Servers

**1. Playwright MCP**
- **Purpose**: Headless browser automation to crawl site and inspect images
- **Setup**: 
```bash
npm install -g @playwright/test
npx playwright install

Usage: Navigate pages, extract image elements, check alt attributes

2. Chrome DevTools MCP

Purpose: Inspect DOM structure and image properties in real-time
Setup: Built-in with Chrome
Usage: Deep inspection of image rendering and accessibility tree


Crawling Strategy
Phase 1: Site Discovery with Playwright
javascript// Use Playwright to discover all pages
const { chromium } = require('playwright');

async function discoverPages(startUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(startUrl);
  
  // Extract all internal links
  const links = await page.$$eval('a[href]', anchors => 
    anchors.map(a => a.href).filter(href => href.includes('cairobynights'))
  );
  
  return [...new Set(links)]; // Return unique URLs
}
Phase 2: Image Extraction per Page
javascriptasync function extractImages(url) {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  
  // Extract all image data
  const images = await page.$$eval('img, [role="img"], svg', elements => 
    elements.map(el => ({
      tag: el.tagName.toLowerCase(),
      src: el.src || el.getAttribute('href') || 'inline-svg',
      alt: el.alt || el.getAttribute('aria-label') || '',
      ariaHidden: el.getAttribute('aria-hidden'),
      role: el.getAttribute('role'),
      context: el.parentElement.outerHTML.slice(0, 200),
      isVisible: el.offsetWidth > 0 && el.offsetHeight > 0
    }))
  );
  
  return { url, images };
}
Phase 3: Accessibility Tree Analysis
javascript// Use Chrome DevTools to check accessibility
async function checkA11y(page) {
  const snapshot = await page.accessibility.snapshot();
  // Identify images without proper accessibility labels
  return snapshot;
}

Audit Criteria
Missing Alt Text Detection
Playwright will identify:

<img> tags without alt attribute
<img> tags with empty alt="" that aren't decorative
<img> tags with alt matching filename (e.g., "IMG_1234.jpg")
<svg> elements without aria-label or <title> child
Background images with semantic meaning (via CSS inspection)
<picture> elements with missing alt on <img> fallback
Icon fonts without aria-label

Poor Quality Detection
Playwright will flag:

Alt text under 10 characters (too vague)
Alt text over 125 characters (too long)
Generic text: "image", "photo", "picture", "logo"
Keyword stuffing patterns
Missing location keywords on local business images
Alt text that doesn't match image context


Priority Classification
CRITICAL (Fix Immediately)
Detected by Playwright on key pages:

Service page hero images without alt
Logo images without alt
Call-to-action images without alt
Before/after comparison images
Team photos on about page
Google Business Profile linked images

HIGH PRIORITY
Detected across site:

Product/service images with missing alt
Location page images without local context
Testimonial profile pictures
Any image in main content area

MEDIUM PRIORITY
Supporting content:

Blog post images
Gallery images
Secondary illustrations
Icon images

LOW PRIORITY
Decorative elements:

Background patterns (should have alt="")
Divider graphics
Purely aesthetic elements
Spacer images


Execution Workflow
Command 1: Full Site Crawl
Using Playwright MCP, crawl my entire Cairo by Nights website starting from the homepage. Discover all internal pages (service pages, location pages, about, contact, etc.). For each page found, extract:

1. Page URL
2. Page title
3. All image elements (<img>, <svg>, background images)
4. Current alt text (or lack thereof)
5. Image context (surrounding HTML)
6. Whether image is visible or hidden

Create a complete inventory of every image across the site. Group by page and priority level.
Command 2: Deep Image Analysis
For each image found in the crawl, use Playwright to:

1. Check if alt attribute exists
2. Evaluate alt text quality (length, keywords, relevance)
3. Determine if image is decorative or meaningful
4. Extract surrounding text context for alt text generation
5. Identify page type (service/location/about) for keyword targeting
6. Flag images that need fixing

Use Chrome DevTools MCP to inspect the accessibility tree and identify any images not properly exposed to screen readers.
Command 3: Generate Optimized Alt Text
For every image missing or with poor alt text, generate SEO-optimized replacements following this formula:

Service Images: "[Service Type] + in Melbourne + [Unique Detail]"
Example: "Professional carpet steam cleaning equipment used by Cairo by Nights in Melbourne"

Location Images: "[Location/Landmark] + where + [Service Context]"
Example: "Flinders Street Melbourne where Cairo by Nights provides emergency cleaning services"

Team Images: "[Role/Name] + from + Cairo by Nights + [Location]"
Example: "Certified cleaning technician from Cairo by Nights servicing Melbourne homes"

Before/After: "[Condition] + before and after + [Service] + by + [Brand]"
Example: "Stained carpet before and after deep cleaning by Cairo by Nights Melbourne"

Consider:
- Primary keyword for the page
- Melbourne or specific suburb mention
- Service type relevance
- Natural, descriptive language
- 50-125 character length
- No keyword stuffing
Command 4: Generate Implementation Report
Create a detailed report with:

SUMMARY:
- Total images scanned: [X]
- Images with missing alt: [X]
- Images with poor alt: [X]
- Images correctly optimized: [X]
- Priority breakdown

DETAILED FINDINGS:
For each problematic image:
- Page URL
- Image source/filename
- Current status (missing/poor/empty)
- Context HTML
- RECOMMENDED ALT TEXT
- Priority level
- Exact code to implement

OUTPUT FORMAT:
Provide copy-paste ready code snippets organized by page:

<!-- /services/carpet-cleaning -->
<!-- Line 45: Replace this -->
<img src="/images/hero-carpet.jpg" class="hero-image">
<!-- With this -->
<img src="/images/hero-carpet.jpg" alt="Professional truck-mounted carpet cleaning service in Melbourne by Cairo by Nights" class="hero-image">

Alt Text Formula Library
For Cairo by Nights Service Images
Pattern 1: Service + Location + Method
"[Service] in Melbourne using [method/equipment]"
Examples:
- "Carpet steam cleaning in Melbourne using truck-mounted equipment"
- "Upholstery cleaning in Melbourne CBD with eco-friendly solutions"
- "Tile and grout cleaning in Melbourne using high-pressure steam"
Pattern 2: Service + Location + Benefit
"[Service] in Melbourne for [benefit/result]"
Examples:
- "Professional carpet cleaning in Melbourne for stain-free results"
- "Same-day upholstery cleaning in Melbourne for quick turnaround"
- "Emergency carpet cleaning in Melbourne for 24/7 service"
Pattern 3: Service + Location + Credentials
"[Credential] [service] in Melbourne by Cairo by Nights"
Examples:
- "Certified carpet cleaning in Melbourne by Cairo by Nights"
- "Insured upholstery cleaning in Melbourne by Cairo by Nights"
- "15+ years carpet cleaning experience in Melbourne"
For Location-Specific Images
Pattern 1: Suburb + Landmark + Service
"[Suburb/Landmark] where Cairo by Nights provides [service]"
Examples:
- "Carlton North where Cairo by Nights provides carpet cleaning services"
- "Fitzroy's Brunswick Street where we offer emergency cleaning"
- "Melbourne CBD Flinders Street area served by Cairo by Nights"
Pattern 2: Local Context + Service
"[Local detail] with [service] by Cairo by Nights"
Examples:
- "Victorian terrace house carpet cleaning in Carlton by Cairo by Nights"
- "Heritage building upholstery care in Fitzroy by Cairo by Nights"
- "Modern apartment cleaning services in Melbourne CBD"
For Before/After Images
Pattern: Condition + Service + Result
"[Before condition] [surface] before and after [service] by Cairo by Nights Melbourne"
Examples:
- "Heavily stained carpet before and after deep steam cleaning by Cairo by Nights Melbourne"
- "Dirty grout before and after professional tile cleaning by Cairo by Nights"
- "Worn upholstery before and after restoration cleaning in Melbourne"
For Team/People Images
Pattern: Role + Brand + Location
"[Role/description] from Cairo by Nights [location/action]"
Examples:
- "Professional cleaning technician from Cairo by Nights servicing Melbourne"
- "Cairo by Nights team preparing carpet cleaning equipment in Melbourne"
- "Certified upholstery specialist from Cairo by Nights Carlton team"
For Equipment/Process Images
Pattern: Equipment + Service + Purpose
"[Equipment type] used for [service] by Cairo by Nights"
Examples:
- "Truck-mounted steam cleaning equipment used for carpet cleaning by Cairo by Nights"
- "Professional upholstery cleaning tools used in Melbourne homes"
- "High-pressure tile cleaning machine for grout restoration"

Playwright Automation Script Template
javascript// Full Alt Text Audit Script for Cairo by Nights

const { chromium } = require('playwright');

async function auditAltText() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const results = {
    totalImages: 0,
    missingAlt: [],
    poorAlt: [],
    goodAlt: [],
    decorative: []
  };
  
  // Step 1: Discover all pages
  console.log('🔍 Discovering pages...');
  await page.goto('https://cairobynights.com.au');
  
  const pageUrls = await page.$$eval('a[href]', links => 
    links.map(a => a.href)
      .filter(href => href.includes('cairobynights'))
      .filter(href => !href.includes('#'))
      .filter(href => !href.includes('mailto:'))
  );
  
  const uniquePages = [...new Set(pageUrls)];
  console.log(`📄 Found ${uniquePages.length} pages to audit`);
  
  // Step 2: Audit each page
  for (const url of uniquePages) {
    console.log(`\n🔎 Auditing: ${url}`);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      
      // Extract all images with context
      const images = await page.$$eval('img, svg, [role="img"]', (elements, pageUrl) => {
        return elements.map((el, index) => {
          const rect = el.getBoundingClientRect();
          const isVisible = rect.width > 0 && rect.height > 0;
          
          // Get context
          const parent = el.parentElement;
          const section = el.closest('section, article, div[class*="hero"], div[class*="service"]');
          const context = section ? section.className : parent.className;
          
          return {
            index,
            pageUrl,
            tag: el.tagName.toLowerCase(),
            src: el.src || el.getAttribute('data-src') || 'svg-inline',
            alt: el.alt || el.getAttribute('aria-label') || '',
            hasAlt: el.hasAttribute('alt') || el.hasAttribute('aria-label'),
            altLength: (el.alt || el.getAttribute('aria-label') || '').length,
            ariaHidden: el.getAttribute('aria-hidden') === 'true',
            role: el.getAttribute('role'),
            isVisible,
            context,
            surroundingText: parent ? parent.innerText.slice(0, 100) : '',
            filename: (el.src || '').split('/').pop()
          };
        });
      }, url);
      
      // Categorize images
      images.forEach(img => {
        results.totalImages++;
        
        // Check if decorative (should have empty alt)
        if (img.ariaHidden || img.context.includes('decoration')) {
          results.decorative.push(img);
          return;
        }
        
        // Check for missing alt
        if (!img.hasAlt || img.alt === '') {
          results.missingAlt.push({
            ...img,
            severity: 'CRITICAL',
            reason: 'No alt text present'
          });
          return;
        }
        
        // Check for poor quality alt
        if (img.altLength < 10) {
          results.poorAlt.push({
            ...img,
            severity: 'HIGH',
            reason: 'Alt text too short (under 10 chars)'
          });
        } else if (img.altLength > 125) {
          results.poorAlt.push({
            ...img,
            severity: 'MEDIUM',
            reason: 'Alt text too long (over 125 chars)'
          });
        } else if (img.alt.match(/^(image|photo|picture|img|icon)/i)) {
          results.poorAlt.push({
            ...img,
            severity: 'HIGH',
            reason: 'Generic alt text'
          });
        } else if (img.alt === img.filename) {
          results.poorAlt.push({
            ...img,
            severity: 'HIGH',
            reason: 'Alt text is just the filename'
          });
        } else if (!img.alt.toLowerCase().includes('melbourne') && img.isVisible) {
          results.poorAlt.push({
            ...img,
            severity: 'MEDIUM',
            reason: 'Missing location keyword (Melbourne)'
          });
        } else {
          results.goodAlt.push(img);
        }
      });
      
    } catch (error) {
      console.error(`❌ Error auditing ${url}:`, error.message);
    }
  }
  
  await browser.close();
  
  // Generate Report
  console.log('\n\n📊 ALT TEXT AUDIT REPORT');
  console.log('='.repeat(60));
  console.log(`Total Images: ${results.totalImages}`);
  console.log(`✅ Good Alt Text: ${results.goodAlt.length}`);
  console.log(`🎨 Decorative (OK): ${results.decorative.length}`);
  console.log(`❌ Missing Alt: ${results.missingAlt.length}`);
  console.log(`⚠️  Poor Quality Alt: ${results.poorAlt.length}`);
  console.log('='.repeat(60));
  
  // Detail critical issues
  if (results.missingAlt.length > 0) {
    console.log('\n🚨 CRITICAL: Missing Alt Text');
    results.missingAlt.forEach((img, i) => {
      console.log(`\n${i + 1}. ${img.pageUrl}`);
      console.log(`   Image: ${img.src}`);
      console.log(`   Context: ${img.context}`);
      console.log(`   Surrounding text: "${img.surroundingText}"`);
      console.log(`   📝 RECOMMENDED ALT: "${generateAltText(img)}"`);
    });
  }
  
  return results;
}

// AI-powered alt text generation helper
function generateAltText(imageData) {
  const { pageUrl, context, surroundingText, filename } = imageData;
  
  // Extract keywords from page URL and context
  const isServicePage = pageUrl.includes('/service');
  const isLocationPage = pageUrl.includes('/location');
  const isHomePage = pageUrl === 'https://cairobynights.com.au' || pageUrl.includes('index');
  
  // Generate contextual alt text
  if (isServicePage && context.includes('hero')) {
    return `Professional ${extractService(pageUrl)} in Melbourne by Cairo by Nights`;
  }
  
  if (isLocationPage) {
    return `${extractLocation(pageUrl)} where Cairo by Nights provides cleaning services`;
  }
  
  if (surroundingText.includes('team') || surroundingText.includes('staff')) {
    return `Cairo by Nights professional cleaning team serving Melbourne`;
  }
  
  if (filename.includes('before') || filename.includes('after')) {
    return `Before and after ${extractService(pageUrl)} results by Cairo by Nights Melbourne`;
  }
  
  // Default
  return `Professional cleaning services in Melbourne by Cairo by Nights`;
}

function extractService(url) {
  const services = {
    'carpet': 'carpet cleaning',
    'upholstery': 'upholstery cleaning',
    'tile': 'tile and grout cleaning',
    'rug': 'rug cleaning',
    'mattress': 'mattress cleaning'
  };
  
  for (const [key, value] of Object.entries(services)) {
    if (url.includes(key)) return value;
  }
  
  return 'cleaning services';
}

function extractLocation(url) {
  const locations = {
    'cbd': 'Melbourne CBD',
    'carlton': 'Carlton',
    'fitzroy': 'Fitzroy',
    'richmond': 'Richmond',
    'collingwood': 'Collingwood'
  };
  
  for (const [key, value] of Object.entries(locations)) {
    if (url.toLowerCase().includes(key)) return value;
  }
  
  return 'Melbourne';
}

// Run the audit
auditAltText().then(results => {
  console.log('\n✅ Audit complete!');
  // Save results to file
  const fs = require('fs');
  fs.writeFileSync('alt-text-audit-results.json', JSON.stringify(results, null, 2));
  console.log('📁 Results saved to alt-text-audit-results.json');
}).catch(console.error);

Output Report Format
=== ALT TEXT AUDIT REPORT ===
Website: Cairo by Nights (https://cairobynights.com.au)
Date: [Current Date]
Pages Scanned: 24
Total Images: 156

SUMMARY:
✅ Properly Optimized: 89 images (57%)
🎨 Decorative (Empty Alt OK): 12 images (8%)
❌ Missing Alt Text: 31 images (20%)
⚠️  Poor Quality Alt: 24 images (15%)

PRIORITY BREAKDOWN:
🚨 CRITICAL Issues: 31 (fix immediately)
⚠️  HIGH Priority: 18 (fix this week)
📋 MEDIUM Priority: 6 (optimize soon)

---

🚨 CRITICAL: MISSING ALT TEXT

ISSUE #1
Page: https://cairobynights.com.au/services/carpet-cleaning
Location: Hero section, line ~47
Image: /images/hero-carpet-cleaning-melbourne.jpg
Context: <div class="hero-section"><img src="/images/hero-carpet-cleaning-melbourne.jpg" class="hero-img"></div>
Surrounding Text: "Professional Carpet Cleaning in Melbourne - Same Day Service Available"
Visibility: VISIBLE (1920x1080px)
Priority: 🚨 CRITICAL

CURRENT CODE:
<img src="/images/hero-carpet-cleaning-melbourne.jpg" class="hero-img">

RECOMMENDED ALT TEXT:
"Professional truck-mounted carpet steam cleaning equipment used by Cairo by Nights in Melbourne"

FIXED CODE:
<img src="/images/hero-carpet-cleaning-melbourne.jpg" alt="Professional truck-mounted carpet steam cleaning equipment used by Cairo by Nights in Melbourne" class="hero-img">

WHY THIS ALT TEXT:
✓ Describes what's in the image (equipment)
✓ Includes primary keyword (carpet steam cleaning)
✓ Includes location (Melbourne)
✓ Includes brand (Cairo by Nights)
✓ Natural language, not keyword stuffing
✓ 102 characters (optimal length)

---

ISSUE #2
Page: https://cairobynights.com.au/locations/carlton
Location: Location description section
Image: /images/carlton-lygon-street.jpg
Context: <div class="location-image"><img src="/images/carlton-lygon-street.jpg"></div>
Surrounding Text: "We proudly serve the Carlton area including Lygon Street and surrounding suburbs"
Visibility: VISIBLE (800x600px)
Priority: 🚨 CRITICAL

CURRENT CODE:
<img src="/images/carlton-lygon-street.jpg">

RECOMMENDED ALT TEXT:
"Lygon Street Carlton where Cairo by Nights provides professional cleaning services"

FIXED CODE:
<img src="/images/carlton-lygon-street.jpg" alt="Lygon Street Carlton where Cairo by Nights provides professional cleaning services">

WHY THIS ALT TEXT:
✓ Identifies landmark (Lygon Street)
✓ Includes suburb (Carlton)
✓ Includes service context
✓ Includes brand
✓ 87 characters

---

⚠️ HIGH PRIORITY: POOR QUALITY ALT TEXT

ISSUE #3
Page: https://cairobynights.com.au/services/upholstery-cleaning
Location: Before/after section
Image: /images/IMG_20240315_142233.jpg
Current Alt: "image"
Context: Before and after comparison
Visibility: VISIBLE
Priority: ⚠️ HIGH
Problem: Generic alt text, filename not descriptive

CURRENT CODE:
<img src="/images/IMG_20240315_142233.jpg" alt="image">

RECOMMENDED ALT TEXT:
"Stained sofa before and after professional upholstery cleaning by Cairo by Nights Melbourne"

FIXED CODE:
<img src="/images/IMG_20240315_142233.jpg" alt="Stained sofa before and after professional upholstery cleaning by Cairo by Nights Melbourne">

WHY THIS REPLACEMENT:
✓ Describes actual content (before/after)
✓ Specifies surface type (sofa)
✓ Includes service (upholstery cleaning)
✓ Includes brand and location
✓ Replaces generic "image" with descriptive text
✓ 95 characters

---

IMPLEMENTATION CHECKLIST:

HIGH PRIORITY PAGES (Fix First):
□ /services/carpet-cleaning (8 images need fixes)
□ /services/upholstery-cleaning (6 images need fixes)
□ / (homepage - 5 images need fixes)
□ /about (4 images need fixes)
□ /services/tile-cleaning (3 images need fixes)

MEDIUM PRIORITY PAGES:
□ /locations/carlton (2 images)
□ /locations/fitzroy (2 images)
□ /contact (1 image)

BULK FIX OPPORTUNITIES:
□ All "team member" photos can use formula: "Professional cleaning technician from Cairo by Nights servicing Melbourne"
□ All "equipment" photos can use formula: "[Equipment type] used for [service] by Cairo by Nights"
□ All "location" photos can use formula: "[Suburb/Street] where Cairo by Nights provides cleaning services"

---

ESTIMATED IMPACT:
SEO Improvement: +15-25% for image search visibility
Accessibility Score: Will increase from 72 to 95+
User Experience: Screen reader users can now navigate effectively
Ranking Boost: Better on-page SEO signals for local keywords

TIME TO FIX:
- Critical issues (31 images): ~2-3 hours
- High priority (18 images): ~1-2 hours
- Medium priority (6 images): ~30 minutes
Total estimated time: 4-6 hours

NEXT STEPS:
1. Start with homepage and service pages
2. Use provided code snippets (copy-paste ready)
3. Test with screen reader after implementation
4. Re-run this audit to verify 100% coverage
5. Monitor Google Search Console for image search improvements

Quality Assurance Testing
After implementing fixes, use Playwright to verify:
javascript// Verification script
async function verifyAltTextFixes() {
  const page = await browser.newPage();
  await page.goto('https://cairobynights.com.au/services/carpet-cleaning');
  
  // Check all images have alt
  const imagesWithoutAlt = await page.$$eval('img:not([alt])', imgs => imgs.length);
  
  if (imagesWithoutAlt === 0) {
    console.log('✅ All images have alt text');
  } else {
    console.log(`❌ Still ${imagesWithoutAlt} images without alt`);
  }
  
  // Run accessibility audit using Chrome DevTools
  const accessibilityTree = await page.accessibility.snapshot();
  console.log('Accessibility tree:', accessibilityTree);
}

Success Metrics
Targets After Implementation:

 0 images missing alt text
 0 images with generic alt text ("image", "photo")
 100% of service images include service keyword + "Melbourne"
 100% of location images include suburb/area name
 All alt text between 50-125 characters
 Accessibility score 95+ on Lighthouse
 All images appear in Google Image Search within 2 weeks

Monitoring:

Use Playwright script weekly to catch new images
Monitor Google Search Console > Performance > Search Results (filter by image)
Track accessibility score in Lighthouse
Test with screen reader (NVDA or VoiceOver)


Commands for Claude Code
Full Audit Command:
Use the Playwright MCP to crawl my entire Cairo by Nights website. Start at https://cairobynights.com.au and discover all internal pages. For each page:

1. Navigate with headless Chrome
2. Extract every <img>, <svg>, and [role="img"] element
3. Check for alt attributes and aria-labels
4. Evaluate alt text quality (length, keywords, relevance)
5. Capture surrounding context for alt text generation
6. Identify page type (service/location/about) for keyword targeting

Then generate a comprehensive report showing:
- All images missing alt text (CRITICAL)
- All images with poor quality alt (HIGH)
- SEO-optimized alt text replacements for each
- Copy-paste ready code fixes
- Priority levels

Focus on service pages and location pages first. Include "Melbourne" in all recommendations where appropriate.
Quick Fix Command:
Using Playwright MCP, audit just my service pages for missing alt text:
- /services/carpet-cleaning
- /services/upholstery-cleaning
- /services/tile-cleaning
- /services/rug-cleaning

For every image without alt text, generate an SEO-optimized replacement following this formula:
"[Service type] + [method/equipment] + in Melbourne + by Cairo by Nights"

Give me ready-to-implement code snippets organized by page.
Verification Command:
After I've implemented the alt text fixes, use Playwright MCP to re-scan my website and verify:

1. Are there any remaining images without alt text?
2. Do all service page images include relevant keywords?
3. Do all images have alt text between 50-125 characters?
4. Are there any duplicate alt texts that should be unique?

Run a Lighthouse accessibility audit using the lighthouse MCP and tell me if my accessibility score improved.

---