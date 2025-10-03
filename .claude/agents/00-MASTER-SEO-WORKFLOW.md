# 🚀 MASTER LOCAL SEO WORKFLOW - Cairo by Nights
## Complete 10-Step Process to Dominate Melbourne Local Search

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Prerequisites & Setup](#prerequisites--setup)
3. [MCP Servers Required](#mcp-servers-required)
4. [The 10-Step Workflow](#the-10-step-workflow)
5. [Sub-Agent Coordination](#sub-agent-coordination)
6. [Quick Reference Commands](#quick-reference-commands)
7. [Timeline & Milestones](#timeline--milestones)
8. [Success Metrics](#success-metrics)
9. [Troubleshooting](#troubleshooting)

---

## Overview

**Goal**: Take Cairo by Nights website from zero to hero in Melbourne local search results.

**Why This Works**: Local SEO competition is often unsophisticated. Most local businesses haven't updated their websites in years. By following this systematic approach, you'll leapfrog competitors who are stuck in 2015.

**Expected Results**:
- 📈 Rankings: +15-30 positions for target keywords
- 📊 Organic Traffic: +50-150% within 3 months
- 💰 Conversion Rate: +25-40% from better targeting
- ⭐ Google Business Profile: Optimized and consistent
- 🎯 Local Pack Ranking: Top 3 for priority keywords

**Total Time Investment**: 32-40 hours over 4 weeks
**Tools Used**: Claude Code + MCP Servers (Playwright, Lighthouse, Chrome DevTools, WebResearch)

---

## Prerequisites & Setup

### Before You Start

**1. Access Required**:
- [ ] Google Search Console account verified
- [ ] Google Analytics installed
- [ ] Google Business Profile claimed and verified
- [ ] Website admin access (to edit HTML/content)
- [ ] FTP or Git access to deploy changes

**2. Information Gathering**:
- [ ] List all services offered (carpet cleaning, upholstery, tile, etc.)
- [ ] List all Melbourne suburbs you serve
- [ ] Gather business details (NAP: Name, Address, Phone)
- [ ] Collect customer testimonials/reviews
- [ ] Get high-quality photos of work (before/after)
- [ ] List certifications, insurance, credentials
- [ ] Note business hours, emergency availability

**3. Competitive Intelligence**:
- [ ] Identify top 3 competitors in Melbourne
- [ ] Note their Google Business Profile setup
- [ ] Screenshot their website structure
- [ ] List keywords they rank for (use Google)

---

## MCP Servers Required

### Installation & Setup

**1. Playwright MCP** (Browser Automation)
```bash
npm install -g @playwright/test
npx playwright install chromium
Purpose: Crawl website, extract content, audit pages, test responsiveness
2. Lighthouse MCP (Performance & SEO Audits)
bashnpm install -g lighthouse
Purpose: Measure page speed, SEO score, accessibility, Core Web Vitals
3. Chrome DevTools MCP (Technical Inspection)
bash# Built into Chrome - ensure you have latest Chrome installed
Purpose: Console errors, network analysis, coverage reports, performance profiling
4. WebResearch MCP (Competitive Analysis)
bash# Configuration depends on your MCP setup
# Allows searching Google and analyzing competitor content
Purpose: Research competitors, find keyword opportunities, analyze top-ranking pages
Verification
Test that all MCPs are working:
bash# Test Playwright
npx playwright --version

# Test Lighthouse
lighthouse --version

# Test Chrome
google-chrome --version

The 10-Step Workflow
📊 Step 1: Keyword Research & Analysis
Duration: 2-3 hours
Tools: WebResearch MCP, Claude Code
Output: 50+ keywords organized by intent and buying stage
What To Do:
1.1: Generate Keyword List
Prompt for Claude Code:

"Analyze my Cairo by Nights cleaning services website and generate 50 local keywords for professional cleaning services in Melbourne. Focus on:

1. Emergency keywords (emergency carpet cleaning Melbourne, 24/7 cleaning Melbourne)
2. Service-specific keywords (carpet steam cleaning Melbourne, upholstery cleaning Carlton)
3. Problem-focused keywords (remove carpet stains Melbourne, pet odor cleaning)
4. Local variations (carpet cleaning Melbourne CBD, cleaning services Fitzroy)

Categorize these keywords by:
- Search Intent (Informational, Navigational, Transactional)
- Buying Stage (Awareness, Consideration, Decision)

Prioritize keywords I can realistically rank for in 3-6 months."
1.2: Analyze Keyword Difficulty
Prompt for Claude Code with WebResearch MCP:

"For my top 20 keywords, use WebResearch MCP to:
1. Search Google for each keyword
2. Analyze the top 3 results
3. Assess difficulty:
   - Domain authority of competitors
   - Content length on ranking pages
   - Are they local businesses or directories?
   - Is the intent clearly local?
4. Flag 'quick win' opportunities (weak competition)
5. Note which keywords have Local Pack results

Prioritize keywords where I can outrank competitors with better content."
Expected Output:

Spreadsheet with 50 keywords
Intent and stage for each
Difficulty score (Easy/Medium/Hard)
Priority ranking
Monthly search volume estimates


🗺️ Step 2: Keyword Mapping
Duration: 1-2 hours
Tools: Claude Code
Output: Page-by-page keyword assignment
What To Do:
2.1: Create Keyword Map
Prompt for Claude Code:

"Create a keyword map showing which pages on my Cairo by Nights website should target which keywords. 

CURRENT PAGES:
- Homepage (/)
- /services/carpet-cleaning
- /services/upholstery-cleaning
- /services/tile-cleaning
- /services/rug-cleaning
- /about
- /contact

ALSO RECOMMEND:
- New location pages I should create (Carlton, Fitzroy, Richmond, CBD, etc.)
- New service sub-pages if needed
- Blog topics that could rank

For each page, assign:
- 1 primary keyword (highest priority)
- 3-5 secondary keywords (supporting)
- Related long-tail variations

FORMAT:
| Page | Primary Keyword | Secondary Keywords | Word Count Target | Priority |

Ensure no keyword cannibalization (two pages targeting same keyword)."
2.2: Location Page Strategy
Prompt for Claude Code:

"Based on my keyword research, recommend which Melbourne location pages I should create. For each location:

1. Target keyword (e.g., 'carpet cleaning Carlton')
2. Search volume estimate
3. Competition level
4. Suburbs to include in coverage
5. Local landmarks to mention
6. Content angle (what makes this location unique?)

Prioritize locations with highest search volume and lowest competition."
Expected Output:

Complete keyword map table
List of new pages to create (5-10 location pages)
Priority order for implementation


🔍 Step 3: Comprehensive SEO Audit (ULTRA THINK MODE)
Duration: 3-4 hours
Tools: Agent 03 (Technical SEO Auditor), Playwright MCP, Lighthouse MCP, Chrome DevTools MCP
Output: Detailed audit report with prioritized fix list
What To Do:
3.1: Run Technical SEO Audit
Prompt for Claude Code:

"Use Playwright MCP to perform a comprehensive technical SEO audit of my Cairo by Nights website. Go through the ENTIRE SITE in EXTREME DETAIL.

ULTRA THINK about every technical and on-page SEO issue and opportunity.

AUDIT CHECKLIST:
✓ Meta Data (titles, descriptions, duplicates)
✓ Heading Structure (H1 count, hierarchy)
✓ Canonical URLs
✓ Schema Markup (LocalBusiness, Service, Breadcrumbs)
✓ Image Alt Text
✓ Internal Linking Structure
✓ URL Structure
✓ Mobile Responsiveness
✓ Page Speed (Core Web Vitals)
✓ robots.txt and XML Sitemap
✓ Console Errors
✓ Mixed Content Issues
✓ Broken Links
✓ Thin Content (pages under 500 words)
✓ Duplicate Content

FOCUS ON: Finding ALL issues that prevent me from dominating Melbourne local market.

Generate a prioritized report:
🚨 CRITICAL (fix immediately)
⚠️ HIGH (fix this week)
📋 MEDIUM (fix this month)
✅ LOW (polish later)

For each issue, provide:
- What's wrong
- Why it matters for ranking
- Exact fix needed (code if applicable)
- Estimated time to fix
- Expected impact

Reference the detailed workflows in:
/agents/03-technical-seo-auditor.md"
3.2: Run Lighthouse Audits
Prompt for Claude Code:

"Use Lighthouse MCP to audit my key pages:
- Homepage
- /services/carpet-cleaning
- /services/upholstery-cleaning
- /locations/carlton (if exists)

For each page:
1. Run mobile audit
2. Run desktop audit
3. Extract all scores and failing audits
4. Prioritize fixes by SEO impact

Focus on:
- Core Web Vitals (LCP, FID, CLS) - must pass
- SEO score (target 95+)
- Performance score (target 85+ mobile, 90+ desktop)
- Accessibility issues

Show me the top 10 highest-impact fixes across all pages."
3.3: Chrome DevTools Deep Dive
Prompt for Claude Code:

"Use Chrome DevTools MCP to inspect Cairo by Nights homepage:

1. Console Tab: Record all JavaScript errors and warnings
2. Network Tab: 
   - Total requests count
   - Page weight
   - Render-blocking resources
   - Large images (>500KB)
   - HTTP resources on HTTPS
3. Coverage Tab:
   - Unused CSS percentage
   - Unused JavaScript percentage
   - Files to optimize
4. Performance Tab:
   - Long tasks (>50ms)
   - Layout shifts (CLS contributors)
   - Time to Interactive

Provide specific fixes for all issues found."
Expected Output:

Complete audit report (save as /agents/reports/technical-seo-audit-[date].md)
Prioritized fix list with 30-50 items
Code snippets for critical fixes
Timeline estimate for all fixes


🔧 Step 4: Fix All Technical SEO Issues
Duration: 8-12 hours
Tools: Code editor, Claude Code for assistance
Output: Clean, optimized website foundation
What To Do:
4.1: Create robots.txt
Prompt for Claude Code:

"Generate a robots.txt file for Cairo by Nights that:
1. Allows all major search bots (Googlebot, Bingbot)
2. Disallows admin areas, cart, checkout (if applicable)
3. Points to XML sitemap
4. Blocks any URL parameters
5. Allows important pages

Provide the complete robots.txt content I can upload to my root directory."
Example Output:
txt# robots.txt for Cairo by Nights

User-agent: *
Disallow: /admin/
Disallow: /wp-admin/
Disallow: /cart/
Disallow: /checkout/
Disallow: /*?*
Allow: /

Sitemap: https://cairobynights.com.au/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /
4.2: Generate XML Sitemap
Prompt for Claude Code:

"Generate an XML sitemap for Cairo by Nights including:

PAGES TO INCLUDE:
- Homepage (priority 1.0)
- All service pages (priority 0.8)
- All location pages (priority 0.8)
- About page (priority 0.6)
- Contact page (priority 0.7)
- Blog posts if any (priority 0.6)

For each URL:
- Set lastmod to current date for updated pages
- Set changefreq appropriately (monthly for service pages, weekly for blog)
- Set priority based on importance

Provide complete sitemap.xml content."
4.3: Implement Canonical URLs
Prompt for Claude Code:

"I need to add canonical URLs to every page on Cairo by Nights. 

If I'm using [React/Next.js/WordPress/HTML], show me:
1. Template code to dynamically generate canonical tags
2. Where to place this code in my project structure
3. How to verify canonical tags are working

Ensure canonical always points to the HTTPS version with no trailing slash inconsistencies."
4.4: Fix All Critical Issues
Work through the audit report from Step 3, fixing in this order:

Week 1 (CRITICAL):

Missing title tags
Missing meta descriptions
Duplicate titles/descriptions
Multiple H1 issues
Missing canonical URLs
robots.txt and sitemap


Week 2 (HIGH):

Poor quality meta data
Missing location keywords
Open Graph tags
Images without alt text (use Agent 01)


Week 3 (MEDIUM):

Schema markup
Internal linking improvements
Twitter Cards



Verification After Fixes:
Prompt for Claude Code:

"Re-run the technical SEO audit using Playwright MCP to verify all my fixes are working:

1. Confirm 0 missing title tags
2. Confirm 0 missing meta descriptions
3. Confirm 0 duplicate titles/descriptions
4. Confirm all pages have canonical URLs
5. Confirm robots.txt accessible
6. Confirm sitemap.xml accessible and valid
7. Confirm all critical issues resolved

Generate a before/after comparison report."

📍 Step 5: Location Page Expansion
Duration: 4-6 hours
Tools: Agent 02 (Content Analyzer), Claude Code
Output: 1,200+ word location pages with rich local detail
What To Do:
5.1: Create or Expand Carlton Location Page (Example)
Prompt for Claude Code:

"Expand my Carlton location page to 1,200 words with rich local detail. Use the Melbourne carpet cleaning local SEO strategy.

INCLUDE THESE SECTIONS:

1. HERO (100 words):
   - "Professional Cleaning Services in Carlton, Melbourne"
   - Quick value proposition
   - Service areas in Carlton (Carlton North, Carlton South)
   - Emergency/same-day availability

2. ABOUT CARLTON (200 words):
   - Local area description (Lygon Street, university area, Victorian terraces)
   - Why cleaning services important here (student rentals, heritage homes)
   - Types of properties we service
   - Understanding Carlton's unique cleaning challenges

3. ALL SERVICES IN CARLTON (400 words):
   Break down by service:
   - Carpet Cleaning in Carlton (specific to Victorian-era carpets, student rental turnover)
   - Upholstery Cleaning (heritage furniture, leather care)
   - Tile & Grout Cleaning (common in Carlton terraces)
   - Emergency Services (24/7 for student housing, restaurants on Lygon Street)

4. WHY CHOOSE US FOR CARLTON (150 words):
   - Local expertise (years serving Carlton)
   - Understanding of heritage properties
   - Fast response time in Carlton area
   - Certifications and insurance

5. COVERAGE MAP (100 words):
   - Specific streets/areas: Lygon Street, Rathdowne Street, Drummond Street
   - Neighboring suburbs also served: Parkville, North Melbourne, Fitzroy
   - Response time: 30-60 minutes

6. LOCAL TESTIMONIALS (150 words):
   - 2-3 reviews from Carlton customers
   - Mention specific Carlton locations
   - Before/after results

7. LOCAL FAQ (250 words):
   - "Do you service Victorian terrace houses in Carlton?"
   - "What's your response time in Carlton?"
   - "Do you offer student rental cleaning packages?"
   - "Can you handle Lygon Street restaurant cleaning?"
   - "Are you familiar with heritage building requirements?"

KEYWORDS TO INTEGRATE:
- "carpet cleaning Carlton" (3-4 mentions)
- "Carlton Melbourne" (5-6 mentions)
- "Lygon Street" (2-3 mentions)
- "professional cleaning services Carlton"
- "emergency cleaning Carlton"

Write in a friendly, local tone. Show community connection."
5.2: Repeat for Other Location Pages
Create/expand these high-priority location pages:

Melbourne CBD (1,200+ words)
Fitzroy (1,200+ words)
Richmond (1,200+ words)
Collingwood (1,200+ words)
Brunswick (1,200+ words)

Use the same structure for each, with location-specific:

Landmarks
Property types
Demographics
Local challenges
Testimonials
FAQ

5.3: Internal Linking Between Locations
Prompt for Claude Code:

"Create an internal linking strategy for my location pages. For each location page, add contextual links to:

1. Related nearby locations (Carlton → Fitzroy, North Melbourne)
2. Service pages (mention carpet cleaning, link to /services/carpet-cleaning)
3. Homepage

Provide the exact HTML for internal links to add to each page, with natural anchor text like:
'We also serve nearby Fitzroy with the same professional carpet cleaning services.'

Ensure every location page links to at least 3 other pages."
Expected Output:

5-10 location pages at 1,200+ words each
Rich local content unique to each suburb
Internal linking implemented
Local keywords naturally integrated
Customer testimonials localized


🛠️ Step 6: Service Page Expansion
Duration: 6-8 hours
Tools: Agent 02 (Content Analyzer), Claude Code
Output: 800+ word service pages focused on process and transparency
What To Do:
6.1: Expand Carpet Cleaning Service Page (Example)
Prompt for Claude Code:

"Expand my carpet cleaning service page to 800+ words focusing on OUR PROCESS and TRANSPARENCY. Melbourne customers want to know exactly what they're paying for.

INCLUDE THESE SECTIONS:

1. HERO SECTION (150 words):
   - Service overview
   - Value proposition (why choose our carpet cleaning)
   - Service areas (Melbourne-wide)
   - CTA (free quote, same-day booking)

2. OUR CARPET CLEANING PROCESS (250-300 words):
   Step-by-step breakdown:
   
   Step 1: Pre-Inspection (what we check, stain identification)
   Step 2: Pre-Treatment (eco-friendly solutions, why we use them)
   Step 3: Deep Steam Cleaning (truck-mounted equipment explanation)
   Step 4: Spot Treatment (stubborn stain handling)
   Step 5: Speed Drying (techniques to reduce dry time)
   Step 6: Post-Cleaning Inspection (satisfaction guarantee)
   
   TRANSPARENCY: Include timing (2-3 hours typical), equipment specs, solution brands

3. PRICING & PACKAGES (150 words):
   - Transparent pricing structure
   - What's included in each package
   - No hidden fees guarantee
   - Free quote process
   - Payment methods accepted
   
   Even if you don't list exact prices, give price ranges or 'starting from $X'

4. SERVICE AREAS IN MELBOURNE (100 words):
   - List suburbs served
   - Coverage map description
   - Response times by area
   - Link to location pages

5. WHY CHOOSE CAIRO BY NIGHTS (150 words):
   - 15+ years experience in Melbourne
   - Certified technicians (IICRC if applicable)
   - Eco-friendly, family-safe products
   - 100% satisfaction guarantee
   - Same-day and emergency service
   - Fully insured and bonded

6. FAQ SECTION (200-250 words):
   - "How long does carpet cleaning take?"
   - "How long until carpets are dry?"
   - "Is it safe for pets and children?"
   - "Do you move furniture?"
   - "What payment methods do you accept?"
   - "Do you offer emergency service?"

TONE: Professional but friendly. Focus on educating the customer. Show expertise through detailed process explanation.

KEYWORDS:
- "carpet cleaning Melbourne" (4-5 mentions)
- "carpet steam cleaning" (2-3 mentions)
- "professional carpet cleaning" (3-4 mentions)
- "eco-friendly carpet cleaning" (1-2 mentions)
- "same day carpet cleaning" (1-2 mentions)

Add before/after image placeholders with alt text."
6.2: Repeat for Other Service Pages
Expand these service pages to 800+ words each:

Upholstery Cleaning (focus on fabric types, leather care)
Tile & Grout Cleaning (process, equipment, grout restoration)
Rug Cleaning (delicate fabric care, pickup/delivery)
Mattress Cleaning (sanitation, allergen removal, dry time)

Each should have:

Detailed process section (transparency)
Pricing/package information
Service areas
Why choose us
FAQ section

6.3: Add Trust Signals
Prompt for Claude Code:

"Help me add trust signals to all service pages:

1. Certifications: Where should I add IICRC or other certifications?
2. Guarantees: Write a compelling 100% satisfaction guarantee paragraph
3. Insurance: Add a note about being fully insured and bonded
4. Reviews: Create a testimonial section template for each service
5. Before/After: Add image placeholders with suggested alt text

Provide HTML/markdown for these trust elements."
Expected Output:

5+ service pages at 800+ words each
Detailed process transparency
FAQ sections on every service page
Trust signals throughout
Internal links between related services


🤖 Step 7: Sub-Agent Power Move (Launch Three Agents)
Duration: 4-6 hours
Tools: All Three Agents (01, 02, 03)
Output: Complete technical optimization
What To Do:
7.1: Launch Agent 01 - Alt Text Auditor
Prompt for Claude Code:

"Use the Alt Text Auditor Agent (see /agents/01-alt-text-auditor.md) to find ALL missing alt text across my Cairo by Nights website.

Use Playwright MCP to:
1. Crawl entire site
2. Find every <img>, <svg>, and background image with semantic meaning
3. Identify missing or poor quality alt text
4. Generate SEO-optimized alt text suggestions for each image
5. Provide copy-paste ready code fixes

Focus on:
- Service page hero images
- Before/after images
- Team photos
- Location images
- Logo and branding

Include 'Melbourne' and service keywords in alt text where appropriate.

Generate a complete report with prioritized fix list."
Work through the alt text fixes:

Start with homepage (critical)
Fix all service page images (high priority)
Fix location page images
Fix about/contact page images
Verify with re-scan

7.2: Launch Agent 02 - Content Length Analyzer
Prompt for Claude Code:

"Use the Content Length Analyzer Agent (see /agents/02-content-analyzer.md) to identify ALL thin content pages.

Use Playwright MCP to:
1. Crawl all pages
2. Calculate word count (excluding nav/footer)
3. Identify pages under target:
   - Service pages under 800 words
   - Location pages under 1,200 words
   - Homepage under 800 words
   - Any page under 500 words
4. For each thin page, provide expansion strategy
5. Use WebResearch MCP to analyze competitors for benchmarking

Generate report showing:
- All thin content pages (prioritized)
- Specific sections to add to each page
- Word count targets
- Competitor analysis
- Content templates I can use

Focus on pages targeting commercial keywords first."
Work through content expansion:

Expand critical service pages first
Expand location pages
Expand homepage if needed
Create new pages identified in Step 2
Verify with re-scan

7.3: Launch Agent 03 - Meta Data & Technical SEO Auditor
Prompt for Claude Code:

"Use the Technical SEO Auditor Agent (see /agents/03-technical-seo-auditor.md) to audit ALL meta data and find duplicates.

Use Playwright MCP to:
1. Extract all title tags, meta descriptions, H1 tags
2. Identify exact duplicates
3. Identify near-duplicates (80%+ similar)
4. Check character counts (titles: 50-60, descriptions: 150-160)
5. Verify 'Melbourne' included where appropriate
6. Check Open Graph and Twitter Card tags
7. Validate canonical URLs
8. Check schema markup

For each issue:
- Show current state
- Show recommended fix
- Provide copy-paste ready code
- Explain SEO impact

Generate prioritized fix list."
Work through meta data fixes:

Fix all duplicate titles (critical)
Fix all duplicate descriptions (critical)
Optimize short titles/descriptions
Add Open Graph tags
Add schema markup
Verify with re-scan

7.4: Coordination - Verify All Three Agents' Work
Prompt for Claude Code:

"After implementing fixes from all three agents, run verification scans:

AGENT 01 VERIFICATION:
- Use Playwright to re-scan all images
- Confirm 0 images without alt text
- Confirm all alt text includes relevant keywords

AGENT 02 VERIFICATION:
- Re-calculate word counts on all pages
- Confirm all service pages 800+ words
- Confirm all location pages 1,200+ words
- Confirm homepage 800+ words

AGENT 03 VERIFICATION:
- Re-scan all meta data
- Confirm 0 duplicate titles
- Confirm 0 duplicate descriptions
- Confirm all pages have canonical URLs
- Confirm schema markup present

Generate a 'PASS/FAIL' report showing what's fixed and what still needs attention."
Expected Output:

0 images without alt text
0 pages under minimum word count
0 duplicate meta data
All technical SEO issues resolved
Clean bill of health from all three agents


⚡ Step 8: Speed Optimization
Duration: 3-5 hours
Tools: Lighthouse MCP, Chrome DevTools MCP, PageSpeed Insights
Output: Fast, mobile-optimized pages passing Core Web Vitals
What To Do:
8.1: Run PageSpeed Insights Tests
Go to https://pagespeed.web.dev/ and test:

Homepage
Top 3 service pages
Top 2 location pages

Record current scores:
Page: [URL]
Mobile Performance: [X/100]
Desktop Performance: [X/100]
LCP: [X.X s]
FID: [X ms]
CLS: [X.XX]
8.2: Get Lighthouse Recommendations
Prompt for Claude Code:

"Use Lighthouse MCP to audit my Cairo by Nights homepage for performance issues:

1. Run mobile audit (most important - most users on mobile)
2. Run desktop audit
3. Extract all failed performance audits
4. Prioritize by impact on Core Web Vitals:
   - LCP (Largest Contentful Paint) - target <2.5s
   - FID (First Input Delay) - target <100ms
   - CLS (Cumulative Layout Shift) - target <0.1

For each issue, provide:
- What's causing it
- Specific fix (with code if applicable)
- Expected improvement
- Estimated time to implement

Focus on quick wins first (high impact, low effort)."
8.3: Fix Common Performance Issues
Work through these common fixes:
A. Image Optimization
Prompt for Claude Code:

"Analyze all images on my Cairo by Nights website:

1. Find images over 500KB (use Chrome DevTools Network tab)
2. Check if images are in modern formats (WebP, AVIF) or old formats (JPEG, PNG)
3. Identify images not using lazy loading
4. Find images larger than display size

For each image issue:
- Show current size and format
- Recommend optimized size and format
- Provide conversion method (e.g., use https://squoosh.app/)
- Show how to implement lazy loading

If using React/Next.js, show how to use <Image> component for automatic optimization."
B. Eliminate Render-Blocking Resources
Prompt for Claude Code:

"Use Chrome DevTools to identify render-blocking CSS and JavaScript:

1. Open Network tab, reload page
2. Find resources marked as 'render-blocking'
3. For each blocking resource:
   - CSS: Can it be inlined (if small) or defer loaded?
   - JavaScript: Can it be async or defer loaded?
   - Fonts: Are we using font-display: swap?

Provide code showing how to:
- Defer non-critical CSS
- Add async/defer to JavaScript
- Optimize font loading
- Inline critical CSS

Show before/after code examples."
C. Minify CSS and JavaScript
Prompt for Claude Code:

"Help me minify all CSS and JavaScript on Cairo by Nights:

If using a build tool (Webpack, Vite, Next.js):
- Show me the configuration to enable minification
- Ensure it's running in production builds

If using plain HTML/CSS/JS:
- Recommend online minification tools
- Show me how to replace unminified files with minified versions
- Ensure I keep unminified versions for development

Also check:
- Are there multiple CSS files that could be combined?
- Are there unused CSS rules (use Chrome Coverage tool)?
- Is JavaScript code-split or is everything in one huge bundle?"
D. Optimize Largest Contentful Paint (LCP)
Prompt for Claude Code:

"My LCP is [X.X seconds]. Help me get it under 2.5s:

Use Chrome DevTools Performance tab to:
1. Identify what element is the LCP (largest visible element)
2. What's delaying it? (slow server, large image, render-blocking resources?)
3. Specific fixes for my LCP element

Common LCP fixes:
- If image: optimize size/format, use CDN, preload
- If text: optimize font loading, eliminate render-blocking CSS
- If background image: preload it

Provide specific code for preloading critical resources:
<link rel='preload' href='...' as='image'>
<link rel='preload' href='...' as='font' crossorigin>"
E. Reduce Cumulative Layout Shift (CLS)
Prompt for Claude Code:

"My CLS is [X.XX]. Help me get it under 0.1:

Use Chrome DevTools to identify layout shifts:
1. What elements are shifting? (images, ads, embeds?)
2. When do they shift? (on load, font load, async content load?)

Common CLS fixes:
- Add width/height to all images
- Reserve space for ads/embeds
- Use font-display: optional for web fonts
- Avoid inserting content above existing content

Show me which images are missing width/height attributes and provide the fix."
8.4: Implement Server-Side Optimizations
Prompt for Claude Code:

"Help me optimize server-side performance for Cairo by Nights:

1. Enable Gzip/Brotli compression (show server config)
2. Set proper cache headers (how long to cache CSS/JS/images)
3. Enable HTTP/2 (check if hosting supports it)
4. Consider CDN for static assets (recommend affordable CDN)
5. Optimize server response time (should be <600ms)

Provide configuration snippets for:
- Apache (.htaccess)
- Nginx (nginx.conf)
- Or hosting provider instructions"
8.5: Re-test with PageSpeed Insights
After implementing fixes:

Clear browser cache
Re-test all pages on PageSpeed Insights
Verify Core Web Vitals are in green zone
Compare before/after scores

Prompt for Claude Code:

"Generate a before/after performance report:

BEFORE OPTIMIZATION:
- Mobile Performance: [X/100]
- Desktop Performance: [X/100]
- LCP: [X.X s]
- FID: [X ms]
- CLS: [X.XX]

AFTER OPTIMIZATION:
- Mobile Performance: [X/100] (+Y improvement)
- Desktop Performance: [X/100] (+Y improvement)
- LCP: [X.X s] (GREEN/YELLOW/RED)
- FID: [X ms] (GREEN/YELLOW/RED)
- CLS: [X.XX] (GREEN/YELLOW/RED)

FIXES IMPLEMENTED:
1. [Fix 1] - Impact: [X]% improvement
2. [Fix 2] - Impact: [X]% improvement
...

REMAINING OPPORTUNITIES:
- [Any optimizations still available]

Overall grade: Pass Core Web Vitals? YES/NO"
8.6: Take It Further with SEMrush (Optional)
If you have SEMrush access:
Prompt for Claude Code:

"I want to use SEMrush Site Audit for deeper analysis:

1. Guide me through setting up Cairo by Nights in SEMrush
2. How to run a full site audit
3. Key reports to focus on:
   - Crawlability issues
   - HTTPS implementation
   - Site performance
   - Internal linking issues
4. How to integrate SEMrush findings with what we've already fixed
5. Track progress over time (weekly audits)

Help me prioritize SEMrush recommendations that will have biggest impact on Melbourne local SEO."
Expected Output:

Performance score 85+ (mobile), 90+ (desktop)
Core Web Vitals passing (all green)
Images optimized (WebP format, compressed)
CSS/JS minified
Render-blocking resources eliminated
Server optimizations implemented
LCP under 2.5s
CLS under 0.1
FID under 100ms


🗺️ Step 9: Google Business Profile Optimization
Duration: 2-3 hours
Tools: Google Business Profile, Claude Code for consistency check
Output: Fully optimized GBP with website consistency
What To Do:
9.1: Optimize Google Business Profile
Manually optimize your GBP at https://business.google.com:
Basic Information:

 Business name: Exactly "Cairo by Nights" (match website)
 Category: Primary "Carpet Cleaning Service" + 2-3 secondary categories
 Address: Exact same format as on website
 Phone: Exact same as website
 Website URL: https://cairobynights.com.au
 Hours: Accurate, include 24/7 emergency if applicable
 Service area: Add all Melbourne suburbs you serve

Description (750 character limit):
Prompt for Claude Code:

"Write a compelling 750-character Google Business Profile description for Cairo by Nights that includes:

1. What we do (professional cleaning services)
2. Services offered (carpet, upholstery, tile, etc.)
3. Service area (Melbourne and suburbs)
4. Unique selling points (15+ years, certified, eco-friendly, same-day)
5. Call-to-action

Keywords to include naturally:
- 'professional cleaning Melbourne'
- 'carpet cleaning'
- 'upholstery cleaning'
- '24/7 emergency service'

Keep it customer-focused and benefit-driven."
Services (add all services):

 Carpet Cleaning
 Upholstery Cleaning
 Tile & Grout Cleaning
 Rug Cleaning
 Mattress Cleaning
 Emergency Cleaning Services

For each service, add description (300 chars) with keywords.
Photos:

 Logo (square, high-res)
 Cover photo (landscape, showing team or results)
 10+ photos of work (before/after highly valuable)
 5+ photos of team/equipment
 3+ interior/exterior business photos
 Photos from different Melbourne locations

Posts (create first few):

Welcome post
Special offer post
Service highlight post
Before/after showcase
Customer testimonial post

Plan to post weekly going forward.
9.2: Consistency Check with Website
Prompt for Claude Code:

"Help me ensure NAP (Name, Address, Phone) consistency between my website and Google Business Profile:

WEBSITE AUDIT:
1. Use Playwright to crawl Cairo by Nights website
2. Extract business name, address, phone from:
   - Homepage footer
   - Contact page
   - About page
   - Schema markup (LocalBusiness)
   - Any other locations mentioned
3. Check for variations or inconsistencies

COMPARISON:
Compare website NAP to Google Business Profile:
- Name: Match exactly? (including punctuation, capitalization)
- Address: Format match exactly? (abbreviations, suite numbers, etc.)
- Phone: Format match exactly? (spaces, dashes, parentheses)

FLAG INCONSISTENCIES:
If any differences found:
- Show both versions
- Recommend which to standardize on
- Provide code to update website or GBP form to update GBP

Consistency is CRITICAL for local SEO!"
Fix any inconsistencies found:

Decide on canonical format (e.g., "123 Example St" vs "123 Example Street")
Update website to match
Update GBP to match
Update all schema markup to match

9.3: Schema Markup Alignment
Prompt for Claude Code:

"Ensure my LocalBusiness schema on the website matches Google Business Profile exactly:

Extract from GBP:
- Business name
- Full address
- Phone number
- Opening hours
- Service areas
- Business categories

Generate updated LocalBusiness schema for homepage that mirrors GBP:

{
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': '[exact from GBP]',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '[exact from GBP]',
    'addressLocality': 'Melbourne',
    'addressRegion': 'VIC',
    'postalCode': '[exact from GBP]',
    'addressCountry': 'AU'
  },
  'telephone': '[exact from GBP]',
  'openingHoursSpecification': [...match GBP hours...],
  'areaServed': [...match GBP service areas...],
  ...
}

Provide complete, copy-paste ready JSON-LD code."
9.4: Get Reviews Strategy
Prompt for Claude Code:

"Help me develop a review acquisition strategy for Google Business Profile:

1. Create a simple review request email template
2. Create an SMS template for after-service review requests
3. Generate a QR code strategy (link directly to leave review)
4. Review request best practices:
   - When to ask (right after successful job)
   - How to ask (friendly, not pushy)
   - How to make it easy (direct link)
5. Review response templates:
   - Positive review response
   - Negative review response (professional, solution-oriented)

Goal: Get 20+ 5-star reviews in first 3 months."
9.5: GBP Q&A Optimization
Prompt for Claude Code:

"Help me pre-populate Google Business Profile Q&A section with common questions:

Generate 10 high-value Q&As:
1. Q: What areas of Melbourne do you serve?
   A: [Answer with suburb list and coverage details]

2. Q: Do you offer same-day service?
   A: [Yes, explain availability and booking process]

3. Q: Are your cleaning products safe for pets and children?
   A: [Yes, explain eco-friendly approach]

[Continue with 7 more common questions]

Write answers that:
- Include keywords naturally
- Provide genuine value
- Encourage booking
- Show expertise
- Mention Melbourne/local areas

I'll post these as 'business owner' Q&As to be helpful and show up in search."
Expected Output:

Fully optimized Google Business Profile
100% NAP consistency with website
Schema markup matching GBP exactly
10+ high-quality photos uploaded
Services section complete
Q&A section populated
Review acquisition process in place
Weekly posting schedule planned


🔗 Step 10: Internal Linking Optimization
Duration: 2-3 hours
Tools: Playwright MCP, Claude Code
Output: Strategic internal linking structure
What To Do:
10.1: Audit Current Internal Links
Prompt for Claude Code:

"Use Playwright MCP to audit internal linking structure on Cairo by Nights:

1. Crawl entire website
2. Map out all internal links:
   - From page → To page
   - Anchor text used
   - Number of links per page
   - Pages with no internal links (orphan pages)
   - Pages only linked from nav/footer (weak internal links)

3. Analyze link flow:
   - Is link equity distributed well?
   - Are important pages (services, locations) well-linked?
   - Are there any broken internal links (404s)?
   - Any redirect chains?

4. Check anchor text:
   - Is it descriptive or generic ('click here')?
   - Does it include keywords?
   - Is it natural or over-optimized?

Generate a report showing:
- Total internal links
- Average links per page
- Orphan pages (need links)
- Pages with most inbound links
- Pages with weakest link profile
- Broken links to fix
- Opportunities for better anchor text"
10.2: Create Strategic Link Opportunities
Prompt for Claude Code:

"Based on my keyword map and content structure, create a strategic internal linking plan:

GOAL: Ensure related services and locations are cross-linked with relevant anchor text.

SERVICE PAGE LINKING:
For /services/carpet-cleaning, add contextual links to:
1. Related services (upholstery, rug cleaning)
   Anchor text example: 'professional upholstery cleaning service'
   Placement: In paragraph about complementary services

2. Location pages (Carlton, Fitzroy, CBD)
   Anchor text example: 'carpet cleaning services in Carlton'
   Placement: In service areas section

3. Homepage
   Anchor text: 'professional cleaning services Melbourne'
   Placement: In introduction paragraph

LOCATION PAGE LINKING:
For /locations/carlton, add contextual links to:
1. Relevant services
   'carpet cleaning' → /services/carpet-cleaning
   'upholstery cleaning' → /services/upholstery-cleaning
   
2. Nearby locations
   'We also serve Fitzroy' → /locations/fitzroy
   'Our Melbourne CBD team' → /locations/melbourne-cbd

3. Homepage
   'Cairo by Nights' → /

For each page, provide:
- 3-5 contextual internal links to add
- Exact placement (which paragraph/section)
- Natural anchor text (no keyword stuffing)
- HTML code ready to insert

Ensure every service page links to at least 3 location pages.
Ensure every location page links to all relevant service pages."
10.3: Implement Internal Links
Work through each page systematically:
Homepage Internal Links (should link to):

 All service pages (brief mention in services section)
 Top 3 location pages (in service areas section)
 About page
 Contact page

Service Pages (each should link to):

 3-5 related services
 3-5 relevant location pages
 Homepage (brand mention)
 Contact/quote page

Location Pages (each should link to):

 All service pages they offer
 2-3 nearby location pages
 Homepage
 Contact page

About Page (should link to):

 Service pages (when mentioning expertise)
 Homepage
 Contact page

10.4: Optimize Anchor Text
Prompt for Claude Code:

"Review my internal link anchor text and optimize for SEO and user experience:

CURRENT ANCHOR TEXT AUDIT:
Scan website for generic anchor text like:
- 'Click here'
- 'Read more'
- 'Learn more'
- 'This page'
- 'Here'

For each generic anchor, recommend:
- Descriptive, keyword-rich replacement
- Context-appropriate text
- Natural flow in sentence

EXAMPLE TRANSFORMATIONS:
❌ 'Learn more about our services'
✅ 'professional carpet cleaning services in Melbourne'

❌ 'Click here for pricing'
✅ 'transparent carpet cleaning pricing'

❌ 'We serve this area'
✅ 'carpet cleaning services in Carlton'

Generate a find-and-replace list for my website."
10.5: Build Topic Clusters
Prompt for Claude Code:

"Help me structure my internal linking into topic clusters for better SEO:

CLUSTER 1: Carpet Cleaning
- Pillar page: /services/carpet-cleaning (comprehensive, 1,200+ words)
- Cluster pages (link to pillar):
  - /blog/how-often-clean-carpets
  - /blog/carpet-stain-removal-guide
  - /blog/carpet-cleaning-myths
  - /locations/carlton (carpet cleaning in Carlton)
  - /locations/fitzroy (carpet cleaning in Fitzroy)

CLUSTER 2: Melbourne Locations
- Pillar page: / (homepage as central Melbourne hub)
- Cluster pages:
  - /locations/carlton
  - /locations/fitzroy
  - /locations/richmond
  - /locations/cbd
  - /locations/collingwood

For each cluster:
- Ensure pillar page links to all cluster pages
- Ensure all cluster pages link back to pillar
- Ensure cluster pages link to related clusters
- Use descriptive, keyword-rich anchor text

Provide HTML for internal links to add to each page in the cluster."
10.6: Verify Link Structure
Prompt for Claude Code:

"After implementing internal links, verify the structure:

1. Re-crawl website with Playwright
2. Confirm no orphan pages (all pages reachable from homepage within 3 clicks)
3. Verify all important pages have 3+ internal links pointing to them
4. Check for broken internal links (404s)
5. Verify anchor text is descriptive
6. Measure link depth (clicks from homepage):
   - Homepage: 0 clicks
   - Service pages: 1 click (ideal)
   - Location pages: 1-2 clicks (ideal)
   - About/Contact: 1-2 clicks

Generate a site structure visualization showing:
- Homepage → Service Pages
- Homepage → Location Pages
- Service Pages ↔ Location Pages (cross-linking)
- Depth of each page

Flag any issues:
- Pages deeper than 3 clicks from homepage
- Pages with <3 internal links
- Broken links
- Poor anchor text"
Expected Output:

Every page linked from multiple other pages
All pages within 3 clicks of homepage
Service pages and location pages heavily cross-linked
Descriptive, keyword-rich anchor text throughout
0 orphan pages
0 broken internal links
Topic clusters established
Link equity flowing to important pages


Sub-Agent Coordination
When to Use Which Agent
Agent 01: Alt Text Auditor (/agents/01-alt-text-auditor.md)

Use When: You need to find and fix missing alt text on images
Triggers:

Lighthouse accessibility score low
Image SEO optimization needed
WCAG compliance required


MCP Servers: Playwright, Chrome DevTools
Output: List of all images with missing/poor alt text + SEO-optimized replacements
Estimated Time: 2-3 hours for full site

Agent 02: Content Length Analyzer (/agents/02-content-analyzer.md)

Use When: Pages are too short or lack depth
Triggers:

Pages under 500 words
Service pages under 800 words
Location pages under 1,200 words
Thin content penalties
Competitor analysis needed


MCP Servers: Playwright, WebResearch, Lighthouse
Output: Word count analysis + specific content expansion strategies + competitor benchmarks
Estimated Time: 3-4 hours (analysis + implementation)

Agent 03: Technical SEO Auditor (/agents/03-technical-seo-auditor.md)

Use When: Need comprehensive technical SEO audit
Triggers:

Starting new SEO project (Step 3)
Meta data optimization needed
Duplicate content suspected
Schema markup validation
Performance optimization (Step 8)


MCP Servers: Playwright, Lighthouse, Chrome DevTools
Output: Complete audit report with prioritized fixes + code snippets
Estimated Time: 3-4 hours for audit, 8-12 hours for fixes

Agent Workflow Integration
STEP 1-2: Keyword Research & Mapping
         ↓
STEP 3: 🤖 AGENT 03 (Technical SEO Audit)
         ↓
STEP 4: Fix Critical Issues from Agent 03
         ↓
STEP 5-6: Content Creation (use Agent 02 for benchmarks)
         ↓
STEP 7: 🤖 LAUNCH ALL THREE AGENTS
         ├─→ AGENT 01 (Alt Text)
         ├─→ AGENT 02 (Content Length)
         └─→ AGENT 03 (Meta Data)
         ↓
STEP 8: 🤖 AGENT 03 (Performance Optimization)
         ↓
STEP 9: GBP Optimization (use Agent 03 for consistency check)
         ↓
STEP 10: Internal Linking
         ↓
DONE! 🎉

Quick Reference Commands
Most Used Prompts
1. Full Technical SEO Audit (Step 3)
Use Agent 03 (/agents/03-technical-seo-auditor.md) with Playwright, Lighthouse, and Chrome DevTools MCPs to perform a comprehensive technical SEO audit of Cairo by Nights. Generate a prioritized fix list with CRITICAL, HIGH, MEDIUM, and LOW priority issues. Include ready-to-implement code fixes.
2. Find Missing Alt Text (Step 7)
Use Agent 01 (/agents/01-alt-text-auditor.md) with Playwright MCP to crawl all pages and identify every image missing alt text. Generate SEO-optimized alt text suggestions including "Melbourne" and relevant service keywords. Provide copy-paste ready code fixes.
3. Identify Thin Content (Step 7)
Use Agent 02 (/agents/02-content-analyzer.md) with Playwright and WebResearch MCPs to analyze all pages for word count. Identify pages below target thresholds and provide specific expansion strategies. Benchmark against competitors for top keywords.
4. Check for Duplicate Meta Data (Step 7)
Use Agent 03 (/agents/03-technical-seo-auditor.md) with Playwright MCP to extract all title tags and meta descriptions. Identify duplicates and provide unique, optimized replacements for each page. Ensure all include "Melbourne" and brand name.
5. Expand Location Page (Step 5)
Expand /locations/[suburb] to 1,200+ words with these sections: About [Suburb] (200w), All Services in [Suburb] (400w), Why Choose Us (150w), Coverage Map (100w), Local Testimonials (150w), Local FAQ (250w). Include "carpet cleaning [suburb]" 3-4 times naturally.
6. Optimize Service Page (Step 6)
Expand /services/[service] to 800+ words focusing on transparency and process. Include: Hero (150w), Our Process with step-by-step breakdown (300w), Pricing & Packages (150w), Service Areas (100w), Why Choose Us (150w), FAQ (250w). Include "professional [service] Melbourne" 4-5 times naturally.
7. Run Lighthouse Audit (Step 8)
Use Lighthouse MCP to audit [URL] for performance, SEO, accessibility, and best practices. Extract Core Web Vitals (LCP, FID, CLS). Identify failed audits with specific fixes. Prioritize by impact on ranking. Show mobile and desktop scores.
8. Consistency Check (Step 9)
Use Playwright MCP to crawl Cairo by Nights website and extract business name, address, phone from homepage, contact page, schema markup. Compare to Google Business Profile for exact match. Flag any inconsistencies in formatting, capitalization, or abbreviations.
Command Templates by Workflow Step
StepPrimary AgentQuick Command1None"Generate 50 local keywords for [service] in Melbourne, categorized by intent and buying stage"2None"Create keyword map for my pages, assign 1 primary + 3-5 secondary keywords each, prevent cannibalization"3Agent 03"Full technical SEO audit with ULTRA THINK mode, prioritize all issues"4Agent 03"Generate robots.txt, XML sitemap, canonical URL implementation for my stack"5Agent 02"Expand [location] page to 1,200 words with local detail, benchmark competitors"6Agent 02"Expand [service] page to 800 words focusing on process transparency"7All Three"Launch Agent 01 (alt text), Agent 02 (thin content), Agent 03 (meta data) and generate fix lists"8Agent 03"Run Lighthouse + Chrome DevTools for performance optimization, fix Core Web Vitals"9Agent 03"Check NAP consistency between website and Google Business Profile"10None"Create internal linking strategy between services and locations with natural anchor text"

Timeline & Milestones
Week 1: Foundation (12 hours)
Monday-Tuesday: Steps 1-2

 Keyword research (50+ keywords)
 Keyword mapping (all pages assigned)
 Location page strategy (5-10 new pages identified)

Wednesday-Thursday: Step 3

 Full technical SEO audit (Agent 03)
 Prioritized fix list generated
 Critical issues identified

Friday: Step 4 (Critical Fixes)

 robots.txt created
 XML sitemap generated and submitted
 Canonical URLs implemented
 Missing title tags added
 Missing meta descriptions added

🎯 Week 1 Milestone: Technical foundation solid, keyword strategy clear

Week 2: Content & Meta Optimization (14 hours)
Monday-Tuesday: Step 4 (High Priority Fixes)

 Duplicate titles fixed (unique for each page)
 Duplicate descriptions fixed
 Short titles/descriptions expanded
 "Melbourne" added to all local pages
 Multiple H1 issues fixed

Wednesday-Thursday: Steps 5-6

 2-3 location pages expanded to 1,200+ words
 2-3 service pages expanded to 800+ words
 Internal links between pages added

Friday: Step 7 (Launch Agents)

 Agent 01: Alt text audit complete
 Agent 02: Thin content identified
 Agent 03: Meta data audit complete
 All three agents' reports reviewed

🎯 Week 2 Milestone: Content depth improved, meta data optimized

Week 3: Technical Polish & Schema (10 hours)
Monday-Tuesday: Step 7 (Implement Agent Fixes)

 All alt text added to images
 Remaining thin content expanded
 All meta data optimized
 Open Graph tags added site-wide

Wednesday-Thursday: Step 4 (Medium Priority Fixes)

 LocalBusiness schema added (homepage)
 Service schema added (all service pages)
 BreadcrumbList schema added (site-wide)
 Schema validation passed
 Mixed content issues fixed

Friday: Verification

 Re-run Agent 03 audit (verify fixes)
 Re-run Lighthouse audits
 Compare before/after scores

🎯 Week 3 Milestone: All technical and on-page SEO issues resolved

Week 4: Performance & Finalization (6 hours)
Monday-Tuesday: Step 8

 PageSpeed Insights testing (all key pages)
 Image optimization implemented
 Render-blocking resources fixed
 CSS/JS minified
 Core Web Vitals passing

Wednesday: Step 9

 Google Business Profile fully optimized
 NAP consistency verified
 Photos uploaded (10+)
 Q&A section populated
 First GBP post published

Thursday: Step 10

 Internal linking strategy implemented
 Service ↔ Location cross-linking complete
 Anchor text optimized
 No orphan pages

Friday: Final QA

 All steps complete
 Final Lighthouse audit
 Submit sitemap to GSC
 Monitor for indexing

🎯 Week 4 Milestone: Website fully optimized and ready to dominate Melbourne search!

Ongoing (Post-Launch)
Weekly (30 min):

 Check Google Search Console for errors
 Monitor ranking changes
 Post to Google Business Profile
 Run weekly health check script

Monthly (2 hours):

 Review organic traffic trends
 Analyze which keywords improving
 Check competitor rankings
 Create new content (blog post or new location page)
 Update services/pricing if changed

Quarterly (4 hours):

 Full technical audit re-run
 Content refresh (update old pages with new info)
 Link building (get local citations, directories)
 GBP optimization (new photos, posts, reviews)


Success Metrics
Immediate Metrics (Week 1-4)
Technical SEO Health:

✅ Lighthouse SEO score: Target 95+ (currently 62)
✅ 0 missing title tags (currently 2)
✅ 0 missing meta descriptions (currently 5)
✅ 0 duplicate titles (currently 5 pages affected)
✅ 0 duplicate descriptions (currently 8 pages affected)
✅ 0 pages with multiple H1s (currently 3)
✅ 0 images without alt text (currently 89)
✅ XML sitemap submitted
✅ robots.txt configured
✅ Schema markup on all pages

Performance:

✅ Core Web Vitals: All GREEN
✅ Mobile Performance: 85+ (Lighthouse)
✅ Desktop Performance: 90+ (Lighthouse)
✅ LCP < 2.5s
✅ FID < 100ms
✅ CLS < 0.1

Content Quality:

✅ 0 pages under 300 words
✅ All service pages 800+ words
✅ All location pages 1,200+ words
✅ Homepage 800+ words
✅ Average word count exceeds competitors


Short-Term Metrics (Month 1-3)
Google Search Console:

📈 Total impressions: +50-100%
📈 Total clicks: +30-60%
📈 Average CTR: +25-40% (from meta optimization)
📈 Average position: Improve 15-30 positions
✅ 0 coverage errors
✅ 0 mobile usability errors
✅ All important pages indexed

Rankings (Track weekly):

"carpet cleaning Melbourne" - Target: Top 10
"upholstery cleaning Melbourne" - Target: Top 10
"[service] Carlton" - Target: Top 5
"[service] Fitzroy" - Target: Top 5
"emergency cleaning Melbourne" - Target: Top 10

Local Pack (Google Maps Results):

Target: Appear in Local Pack (top 3) for primary keywords
Track: # of keywords where you appear in Local Pack
Goal: 5+ keywords in Local Pack by Month 3

Google Business Profile:

📊 Profile views: +100%
📞 Calls from GBP: +50%
🗺️ Direction requests: +50%
⭐ Reviews: 20+ reviews with 4.5+ average
📸 Photo views: 10,000+ views


Long-Term Metrics (Month 3-6)
Organic Traffic:

📈 Overall organic traffic: +50-150%
📈 Organic landing page visits: +100%+
📈 Local search traffic: +150%+
🎯 Conversions from organic: +50-100%

Rankings:

🥇 1st page rankings: 20+ keywords
🏆 Top 3 rankings: 10+ keywords
📍 Local Pack appearances: 10+ keywords
💪 vs Competitors: Outrank top 3 competitors for primary keywords

Business Impact:

📞 Qualified leads from website: +50-100%
💰 Revenue from organic search: +50-150%
🌟 Brand awareness in Melbourne: Measurable increase
🔁 Repeat customers finding you organically: +30%

Authority Signals:

🔗 Local citations: 20+ (NAP consistency)
⭐ Google reviews: 50+ with 4.7+ average
📝 Branded searches: "Cairo by Nights" searches increasing
🗣️ Word of mouth referrals mentioning Google ranking


Troubleshooting
Common Issues & Solutions
Issue: "Playwright MCP not working"
Solution:
1. Verify installation: npx playwright --version
2. Install browsers: npx playwright install
3. Test connection: Create simple test script
4. Check Claude Code MCP configuration
5. Restart Claude Code
Issue: "Lighthouse scores not improving"
Solution:
1. Clear browser cache before testing
2. Test in Incognito mode
3. Wait 1-2 weeks after implementing fixes (Google needs time to re-crawl)
4. Verify fixes are actually live (view page source)
5. Test on actual device, not just PageSpeed Insights
Issue: "Google not indexing new pages"
Solution:
1. Check robots.txt not blocking pages
2. Check for noindex tags
3. Submit pages manually in Google Search Console
4. Ensure pages linked from homepage/sitemap
5. Check for crawl errors in GSC
6. Be patient - can take 1-2 weeks for new pages
Issue: "Rankings not improving"
Solution:
1. Check if pages are even indexed (site:yoururl.com in Google)
2. Verify Core Web Vitals passing (GSC > Experience)
3. Ensure NAP consistency (website, GBP, citations)
4. Get more Google reviews (signals trust)
5. Build local citations (directories)
6. Be patient - SEO takes 2-3 months minimum
7. Track RIGHT keywords (not just brand terms)
Issue: "Duplicate content detected"
Solution:
1. Use Agent 03 to identify duplicates
2. For location pages: Add unique local content (don't template)
3. For service pages: Differentiate by method, equipment, results
4. Add unique customer testimonials per page
5. Write unique FAQs per page
6. Use canonical tags if necessary
7. Consider consolidating very similar pages with 301 redirect
Issue: "Core Web Vitals failing"
Solution for LCP:
- Optimize hero images (WebP, compressed, preload)
- Eliminate render-blocking CSS/JS
- Use CDN for faster delivery

Solution for FID:
- Minimize JavaScript execution
- Break up long tasks
- Use web workers for heavy computation
- Defer non-critical JS

Solution for CLS:
- Add width/height to ALL images
- Reserve space for ads/embeds
- Avoid inserting content above existing
- Use font-display: optional
Issue: "Images not showing alt text"
Solution:
1. View page source - is alt attribute actually there?
2. Check if dynamically loaded images getting alt
3. Use Playwright to verify alt text in DOM
4. Test with screen reader (NVDA or VoiceOver)
5. Run Lighthouse accessibility audit
Issue: "Can't outrank competitors"
Solution:
1. Use Agent 02 with WebResearch to analyze why they rank
2. Check their domain age/authority (you'll need time)
3. Ensure your content is LONGER and BETTER
4. Get more Google reviews than them
5. Build more local citations
6. Get backlinks from **Issue: "Can't outrank competitors"** (continued)

Solution:

Use Agent 02 with WebResearch to analyze why they rank
Check their domain age/authority (you'll need time)
Ensure your content is LONGER and BETTER
Get more Google reviews than them
Build more local citations
Get backlinks from local Melbourne sites
Target less competitive long-tail keywords first
Focus on Local Pack ranking (easier than organic)
Ensure perfect NAP consistency
Patient - if they've been around 10 years, you need time


**Issue: "Schema markup validation errors"**
Solution:

Test schema at https://search.google.com/test/rich-results
Common errors:

Missing required properties (name, address, telephone)
Wrong @type (use LocalBusiness not Organization)
Invalid date/time format (use ISO 8601)
Invalid URL format (must be absolute, not relative)


Use Agent 03 schema validation workflow
Copy exact format from examples in this workflow
Validate JSON syntax (use jsonlint.com)
Check quotes are correct (" not ' for JSON-LD)


**Issue: "Google Business Profile suspended"**
Solution:

Review Google's GBP guidelines
Common reasons:

NAP doesn't match website
Service area business claiming physical location
Keyword stuffing in business name
Fake reviews


Submit reinstatement request with:

Proof of business (registration, license)
Photos of storefront/office
Utility bill matching address
Explanation of what was fixed


Be patient - can take 2-4 weeks
Meanwhile, maintain website SEO


**Issue: "Alt text not helping rankings"**
Solution:
Alt text helps but is not a major ranking factor.
Focus on:

Ensuring alt text exists (accessibility)
Including keywords naturally
But DON'T expect huge ranking boost from alt text alone
Alt text helps most for:

Google Image Search rankings
Accessibility (indirect SEO benefit)
Context for Google about page topic


Bigger impacts: content quality, backlinks, reviews


**Issue: "Too many issues to fix - overwhelmed"**
Solution:

FOCUS on CRITICAL issues only first (Step 4 Week 1)
Use this priority order:
Week 1: Missing/duplicate titles and descriptions
Week 2: Content expansion (thin pages)
Week 3: Technical fixes (schema, alt text)
Week 4: Performance optimization
It's OK to spread over 2 months instead of 1 month
Get help: Hire developer for technical fixes if needed
Use this workflow as a checklist, not a sprint
Remember: Doing 80% is infinitely better than 0%


**Issue: "Changes not showing in Google Search"**
Solution:

Google caches search results - takes time
Force Google to re-crawl:

Submit URL in Google Search Console > URL Inspection
Click "Request Indexing"


Update sitemap lastmod dates
Change content slightly (triggers re-crawl)
Be patient - can take 1-4 weeks for search appearance updates
Check actual page (view source) to confirm changes are live
Clear YOUR cache to see real page


**Issue: "Local Pack not showing up"**
Solution:

Ensure Google Business Profile is:

Verified
Complete (all fields filled)
In correct category
Has 5+ reviews


Ensure website has:

LocalBusiness schema
NAP matching GBP exactly
Location pages for areas you serve


Get local citations (Yelp, True Local, Yellow Pages AU)
Get reviews mentioning location ("great carpet cleaning in Carlton")
Be in the service area when user searches (Google uses GPS)
Target geo-modified keywords ("[service] [suburb]")


**Issue: "Keyword cannibalization - two pages ranking for same term"**
Solution:

Identify the issue:

Use Agent 03 to find similar title tags
Check GSC > Performance for pages competing


Decide which page SHOULD rank
Options:
A) Consolidate: Merge content, 301 redirect weaker page
B) Differentiate: Rewrite one page to target different keyword
C) Canonical: Point weaker page to stronger with canonical tag
Update internal links to point to chosen page
Use distinct keywords in title tags
Example fix:

Page A: "Carpet Cleaning Melbourne" (broad)
Page B: "Emergency Carpet Cleaning Melbourne" (specific)




**Issue: "Mobile usability errors in Google Search Console"**
Solution:

Review specific errors in GSC > Experience > Mobile Usability
Common issues:

Text too small to read → Increase font size to 16px minimum
Clickable elements too close → Add more spacing (8px minimum)
Content wider than screen → Fix CSS (use max-width: 100%)
Viewport not set → Add meta viewport tag


Test on real devices (iPhone, Android)
Use Chrome DevTools Device Emulation
Request validation in GSC after fixes


**Issue: "Bounce rate very high on mobile"**
Solution:

Check page speed (mobile) - if >5s load time, users leave
Improve Core Web Vitals (especially LCP)
Check mobile layout:

Is it responsive?
Is navigation easy to use?
Are CTAs visible above fold?


Add more engaging content above fold
Reduce pop-ups/interstitials on mobile
Ensure phone number clickable (tel: link)
Add "Get Quote" or "Call Now" button prominently


---

## Advanced Strategies (After Completing 10 Steps)

Once you've completed all 10 steps and seen initial results (3+ months), consider these advanced tactics:

### A. Content Expansion

**Blog Content Strategy**
Prompt for Claude Code:
"Generate 20 blog post ideas for Cairo by Nights that:

Target informational keywords (top of funnel)
Answer common customer questions
Establish expertise and build trust
Include Melbourne local angle

For each idea:

Working title (SEO-optimized)
Target keyword
Word count target
Key points to cover
Internal linking opportunities
Call-to-action

Examples:

'How Often Should You Clean Your Carpets in Melbourne?'
'Removing Red Wine Stains from Carpet: Pro Tips'
'Pet-Friendly Carpet Cleaning: Safe Solutions for Melbourne Homes'
'Heritage Home Carpet Care: Victorian Terrace Cleaning Guide'
"


**Video Content**
- Create "How We Clean" process videos
- Before/after transformation videos
- Customer testimonial videos
- Upload to YouTube with local keywords
- Embed on service pages
- Transcribe for additional text content

**FAQ Schema**
Prompt for Claude Code:
"For my carpet cleaning service page, create FAQ schema markup with 8 common questions:
{
'@context': 'https://schema.org',
'@type': 'FAQPage',
'mainEntity': [
{
'@type': 'Question',
'name': 'How long does professional carpet cleaning take?',
'acceptedAnswer': {
'@type': 'Answer',
'text': 'Professional carpet cleaning in Melbourne typically takes...'
}
},
...
]
}
Include questions about:

Timing, drying time, process
Safety for pets/children
Pricing and payment
Service areas
Emergency availability
Results and guarantees
"


---

### B. Link Building (Local Focus)

**Local Citations**
Get listed on these Australian directories with consistent NAP:
- Google Business Profile ✅ (already done in Step 9)
- Bing Places for Business
- Apple Maps Connect
- True Local
- Yellow Pages Australia
- Yelp Australia
- Start Local
- Hot Frog
- Localsearch (formerly White Pages)
- Local Business Guide
- Brownbook
- Cylex Australia

**Local Partnerships**
Outreach Strategy:

Real Estate Agencies in Melbourne:

Offer end-of-lease cleaning packages
Get referrals and backlink from their website
Provide exclusive discount for their clients


Property Management Companies:

Ongoing cleaning contracts
Link from their vendor list
Testimonial exchange


Interior Designers/Decorators:

Partner for post-renovation cleaning
Cross-promotion
Backlinks from their resource pages


Melbourne Home Services Sites:

Get listed on aggregator sites
Ensure NAP consistency
Some allow backlinks to website


Local Business Associations:

Join Melbourne Chamber of Commerce
Get listed in member directory
Network for referrals


Community Involvement:

Sponsor local sports team
Get backlink from their website
Local news coverage opportunity


Supplier Partnerships:

Equipment manufacturers (truck-mount systems)
Eco-friendly product suppliers
Get listed as certified provider




**Guest Posting**
Target local Melbourne blogs/sites:
- Melbourne lifestyle blogs
- Home improvement blogs
- Real estate blogs
- Rental property blogs
- Topics: "5 Tips for Maintaining Carpets in Melbourne's Climate"

---

### C. Review Generation System

**Automated Review Request Flow**
Prompt for Claude Code:
"Create an automated review request system for Cairo by Nights:
STEP 1: Immediately After Job (Same Day)

Thank you email/SMS
Link to Google review (direct URL)
Make it ONE CLICK to leave review
Gentle ask: 'If you're happy with our service, we'd love a review'

STEP 2: If No Review After 3 Days

Follow-up SMS with review link
Alternative: Link to testimonial form on website
Offer: Enter drawing for discount on next service

STEP 3: If Still No Review After 7 Days

Final email with review link
Ask for private feedback if not happy (so we can resolve)
Offer incentive for honest review

Provide:

Email templates (HTML)
SMS templates (under 160 chars)
Direct Google review link format
Review page on website (for longer testimonials)

Legal: Ensure compliance with Australian Consumer Law (can't incentivize positive reviews, only reviews in general)"

**Review Response Templates**
Prompt for Claude Code:
"Create review response templates for Cairo by Nights:
5-STAR REVIEW RESPONSE:
'Thanks [Name]! We're thrilled we could help with your carpet cleaning in [Carlton/Fitzroy/etc]. [Specific detail from their review]. We look forward to serving you again! - The Cairo by Nights Team'
4-STAR REVIEW RESPONSE:
'Thanks [Name]! We appreciate your feedback. We're glad we could help with [service] but sorry we fell slightly short of perfection. [Address specific concern if mentioned]. We're always improving and hope to earn that 5th star next time!'
3-STAR OR LOWER RESPONSE:
'Hi [Name], thank you for your honest feedback. We're sorry we didn't meet your expectations with [issue]. We'd love to make this right. Please contact us at [phone] so we can resolve this. We take all feedback seriously and are committed to improving.'
RESPONSE BEST PRACTICES:

Respond within 24 hours
Always thank them
Use their name
Mention specific details from their review
Include location keyword naturally if they mentioned it
Stay professional even if review is unfair
Offer to resolve privately (don't argue publicly)
Include phone number in negative review responses
"


---

### D. Seasonal Content Strategy

**Melbourne Seasonal Keywords**
Prompt for Claude Code:
"Create a seasonal content calendar for Cairo by Nights targeting Melbourne's seasons:
SUMMER (Dec-Feb):

'Pre-Summer Carpet Refresh Melbourne'
'Preparing Carpets for Holiday Guests'
'Summer Stain Removal Guide (BBQ sauce, wine, etc.)'
Target keywords: summer carpet cleaning, pre-Christmas cleaning

AUTUMN (Mar-May):

'Autumn Carpet Care: Preparing for Winter'
'Leaf Stain Removal from Carpets'
'End of Summer Deep Clean Specials'
Target keywords: autumn carpet cleaning Melbourne

WINTER (Jun-Aug):

'Winter Carpet Drying Tips for Melbourne Homes'
'Cold Weather Carpet Maintenance'
'Muddy Footprint Removal Guide'
Target keywords: winter carpet cleaning, fast drying

SPRING (Sep-Nov):

'Spring Cleaning Carpet Services Melbourne'
'Allergen Removal from Carpets'
'Pre-Summer Preparation Specials'
Target keywords: spring cleaning Melbourne, spring carpet clean

For each season:

Blog post ideas
Google Business Post topics
Special offer angles
Email marketing content
"


---

### E. Advanced Tracking & Analytics

**Goal Setup in Google Analytics**
Goals to Track:

Phone Clicks (tel: link clicks)
Contact Form Submissions
Get Quote Button Clicks
Engagement (time on site >2 min)
Page Depth (3+ pages viewed)

Set up conversion tracking for each goal.
Monitor which traffic sources convert best.

**Google Search Console Advanced Monitoring**
Weekly GSC Review Checklist:

PERFORMANCE:

Which queries growing/declining?
Which pages getting impressions but low clicks? (optimize meta)
CTR by page (average should be 3-5% for local)
Position tracking for target keywords


COVERAGE:

Any new errors?
Pages excluded from index?
Valid pages count increasing?


EXPERIENCE:

Core Web Vitals status (must be green)
Mobile usability issues
Page experience signals


ENHANCEMENTS:

Breadcrumbs detected?
Logo detected?
Sitelinks search box detected?


LINKS:

Top linking sites
Top linked pages
Internal link opportunities




**Rank Tracking Setup**
Prompt for Claude Code:
"Set up rank tracking for Cairo by Nights. Create tracking sheet for these keyword groups:
PRIMARY KEYWORDS (Track Daily):

carpet cleaning Melbourne
upholstery cleaning Melbourne
tile cleaning Melbourne
professional cleaning services Melbourne
emergency carpet cleaning Melbourne

LOCATION KEYWORDS (Track Weekly):

carpet cleaning Carlton
carpet cleaning Fitzroy
carpet cleaning Richmond
carpet cleaning Melbourne CBD
carpet cleaning Brunswick

LONG-TAIL KEYWORDS (Track Weekly):

same day carpet cleaning Melbourne
eco friendly carpet cleaning Melbourne
pet stain removal Melbourne
carpet steam cleaning near me
24/7 carpet cleaning Melbourne

For each keyword track:

Current position
Local Pack appearance (yes/no)
Competitor positions (top 3)
Search volume estimate
Clicks from GSC

Create spreadsheet template with formulas for:

Week-over-week change
Month-over-month change
Average position across all keywords
Keywords in Top 10 / Top 3 / #1
"


---

### F. Competitor Monitoring

**Monthly Competitor Audit**
Prompt for Claude Code with WebResearch MCP:
"Perform monthly competitor analysis for Cairo by Nights:
IDENTIFY TOP 3 COMPETITORS:

Search 'carpet cleaning Melbourne' in Google
Note top 3 local businesses (not directories)
For each competitor:

WEBSITE AUDIT:

Use Playwright to crawl their site
Word count on service pages
Number of location pages
Blog content (frequency, quality)
Services offered (anything we don't offer?)
Pricing transparency
Trust signals (reviews on site, certifications)
Call-to-actions
Meta data quality

GOOGLE BUSINESS PROFILE:

Review count and average rating
Photo count
Post frequency
Q&A section activity
Response rate to reviews
GBP categories used

BACKLINK PROFILE:

Estimate backlink count (use free tools like Moz Link Explorer)
Types of backlinks (local directories, partnerships)
Link building strategies they're using

CONTENT STRATEGY:

Blog post frequency
Topics they cover
Keyword targets
Social media presence

COMPETITIVE ADVANTAGES:

What are they doing better than us?
What are they doing worse than us?
Gaps we can exploit
Services/locations we should add

Generate action items based on competitor analysis."

---

### G. Advanced Schema Markup

**Review Schema** (when you have reviews on website)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Cairo by Nights",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "47"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "John Smith"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Excellent carpet cleaning service in Carlton. Stains completely removed!",
      "datePublished": "2025-09-15"
    }
  ]
}
</script>
Article Schema (for blog posts)
html<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Often Should You Clean Your Carpets in Melbourne?",
  "image": "https://cairobynights.com.au/images/blog/carpet-cleaning-frequency.jpg",
  "author": {
    "@type": "Organization",
    "name": "Cairo by Nights"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Cairo by Nights",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cairobynights.com.au/images/logo.png"
    }
  },
  "datePublished": "2025-09-01",
  "dateModified": "2025-09-15"
}
</script>
Video Schema (when you add process videos)
html<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Professional Carpet Cleaning Process - Cairo by Nights Melbourne",
  "description": "Watch our certified technicians perform truck-mounted steam carpet cleaning",
  "thumbnailUrl": "https://cairobynights.com.au/images/video-thumb.jpg",
  "uploadDate": "2025-09-01",
  "duration": "PT3M45S",
  "contentUrl": "https://cairobynights.com.au/videos/cleaning-process.mp4"
}
</script>

Maintenance Checklist
Daily (5 minutes)

 Check Google Business Profile notifications
 Respond to any new reviews (24-hour response goal)
 Check email for contact form submissions
 Monitor phone calls/voicemails

Weekly (30 minutes)

 Post to Google Business Profile (photo, update, or offer)
 Check Google Search Console for new errors
 Review keyword rankings (track sheet)
 Respond to any GBP questions
 Check website uptime/speed (PageSpeed Insights spot check)

Monthly (2 hours)

 Review Google Analytics:

Traffic trends (up or down?)
Top landing pages
Bounce rate by page
Conversion rate
Traffic sources (organic vs direct vs referral)


 Review Google Search Console:

Impressions and clicks trends
Top performing queries
Pages with declining performance
New indexing issues


 Review keyword rankings:

Overall position changes
Wins (keywords that moved up)
Losses (keywords that moved down)
Adjust strategy based on trends


 Content additions:

1 new blog post
Update 1 old page with fresh content
Add new customer testimonials


 Competitor check:

Are they outranking you on any keywords?
New services or locations they added?
Review count comparison


 Backlink check:

Any new backlinks gained?
Any lost backlinks to fix?
Outreach for new citation opportunities



Quarterly (4 hours)

 Full technical SEO audit (re-run Agent 03)
 Content audit (re-run Agent 02):

Any pages fallen below target word count?
Thin content on new pages?
Opportunities to expand


 Update all location pages with:

Recent customer testimonials from that area
New photos
Updated service information
Current pricing (if changed)


 Lighthouse audit on all key pages
 Update schema markup (reviews, ratings, info changes)
 Review goal:

Are we on track? (traffic, rankings, leads)
What's working best?
What needs more focus?


 Adjust strategy based on results

Annually (8 hours)

 Full website redesign/refresh (if needed)
 Update all service page content
 Review and update keyword strategy
 Comprehensive backlink building campaign
 Update all photos (before/after, team, equipment)
 Review and update pricing
 Plan next year's content calendar
 Evaluate new SEO trends/algorithm updates
 Consider advanced tactics (video, podcasts, etc.)


Final Notes
🎉 Congratulations!
If you've made it through this entire workflow, you now have:

✅ A technically sound, fast, mobile-optimized website
✅ High-quality, keyword-optimized content on every page
✅ Complete meta data optimization with no duplicates
✅ Comprehensive schema markup for rich results
✅ Fully optimized Google Business Profile
✅ Strategic internal linking structure
✅ A clear ongoing maintenance plan

You are now positioned to DOMINATE Melbourne local search results!

📈 Expected Timeline for Results
Weeks 1-4: Implementation phase

You'll see technical improvements immediately (Lighthouse scores)
Google will start re-crawling your site
New pages will begin getting indexed

Months 2-3: Early results

Rankings will start improving (small movements)
Impressions in Google Search Console increasing
Maybe a few keywords break into Top 10
Local Pack appearances starting

Months 4-6: Significant growth

Multiple keywords in Top 10
Several keywords in Top 3
Local Pack appearances for priority keywords
Organic traffic 50-100% higher
Phone calls and leads increasing noticeably

Months 6-12: Dominance

Ranking #1 for several priority keywords
Consistent Local Pack presence
Organic traffic 150%+ higher than start
Cairo by Nights becoming known name in Melbourne
Strong review base (50+) supporting rankings
Competitors scrambling to keep up


🚀 Next Steps
Right Now:

Save this workflow document
Review Step 1 (Keyword Research)
Set up your MCP servers if not already done
Block out time in your calendar for the 4-week implementation

This Week:

Complete Step 1 (Keyword Research) - 2-3 hours
Complete Step 2 (Keyword Mapping) - 1-2 hours
Start Step 3 (Run Agent 03 for technical audit) - 3-4 hours

This Month:

Complete all 10 steps following the weekly timeline
Track your progress using the checklists
Celebrate each milestone completed

This Quarter:

Monitor results closely (rankings, traffic, leads)
Adjust strategy based on what's working
Begin advanced strategies (content, links, reviews)
Measure ROI (leads, conversions, revenue)


💪 Remember
SEO is a marathon, not a sprint.

You can't hack your way to instant #1 rankings
But you CAN build a solid foundation that compounds over time
Every hour you invest now pays dividends for years
Local SEO is more achievable than national SEO
Consistency beats perfection

You have an advantage:

Most local competitors neglect their websites
You're following a systematic, comprehensive approach
Your website will be better than 90% of local businesses
Melbourne customers are searching RIGHT NOW
With this foundation, you'll capture that traffic


🆘 Need Help?
If you get stuck at any point:

Re-read the specific agent's documentation:

/agents/01-alt-text-auditor.md
/agents/02-content-analyzer.md
/agents/03-technical-seo-auditor.md


Use Claude Code for guidance:

"I'm stuck on Step X, help me troubleshoot"
Paste any error messages you're getting
Ask for clarification on any step


Refer to the Troubleshooting section (above)
Break it down:

Don't try to do everything at once
Focus on one step at a time
Even partial implementation is better than nothing


Get professional help if needed:

Consider hiring a developer for technical fixes
Use this workflow as a specification document
You can implement the content parts yourself




📚 Additional Resources
Official Google Resources:

Google Search Central: https://developers.google.com/search
Google Business Profile Help: https://support.google.com/business
Google Search Console: https://search.google.com/search-console
PageSpeed Insights: https://pagespeed.web.dev/

SEO Learning:

Moz Beginner's Guide to SEO: https://moz.com/beginners-guide-to-seo
Google's SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
Local SEO Guide: https://moz.com/learn/seo/local

Tools:

Schema Markup Generator: https://technicalseo.com/tools/schema-markup-generator/
Rich Results Test: https://search.google.com/test/rich-results
Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
Lighthouse: Built into Chrome DevTools


🎯 Your Mission
Your mission, should you choose to accept it, is to make Cairo by Nights the #1 professional cleaning service in Melbourne according to Google search results.
With this workflow, you have everything you need to succeed.
Now go dominate Melbourne local SEO! 🚀🇦🇺

Document Version
Version: 1.0
Last Updated: October 2, 2025
Created By: Cairo by Nights SEO Workflow
Status: Ready for Implementation
Change Log:

v1.0 (Oct 2, 2025): Initial comprehensive workflow created