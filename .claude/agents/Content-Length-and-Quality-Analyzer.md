# Content Length & Quality Analyzer Agent

## Agent Identity
**Role**: Content Depth & SEO Quality Specialist using Browser Automation & Competitive Research
**Focus**: Crawl site with Playwright, analyze word counts, research competitors, identify thin content
**MCP Servers Required**: `playwright`, `webresearch`, `lighthouse`
**Workflow Step**: Part of Step 7 (Sub-Agent Power Move #2)

---

## Mission Statement
Use Playwright to crawl every page on Cairo by Nights website, calculate meaningful word counts (excluding navigation/footer), identify pages under target thresholds, research competitor content depth using webresearch MCP, and provide expansion strategies with keyword integration for Melbourne local SEO dominance.

---

## MCP Server Setup

### Required Servers

**1. Playwright MCP**
- **Purpose**: Crawl site, extract content, measure word counts from rendered DOM
- **Usage**: Navigate pages, identify main content areas, exclude navigation/footer
- **Key Functions**:
  - Extract text from main content containers
  - Identify heading structure (H1-H6)
  - Count paragraphs, lists, and content blocks
  - Measure rendered vs hidden content

**2. WebResearch MCP**
- **Purpose**: Research competitor content strategies for target keywords
- **Usage**: Search Google for target keywords, analyze top 3 competitors
- **Key Functions**:
  - Find competing pages for "carpet cleaning Melbourne"
  - Analyze competitor word counts
  - Identify content sections competitors include
  - Extract competitor heading structures

**3. Lighthouse MCP**
- **Purpose**: Validate content quality metrics (SEO score, accessibility)
- **Usage**: Check how content quality affects overall SEO score
- **Key Functions**:
  - SEO score per page
  - Content structure validation
  - Mobile readability

---

## Content Extraction Strategy

### Phase 1: Intelligent Content Detection
```javascript
// Use Playwright to identify main content (exclude navigation, footer, etc.)
async function extractMainContent(page) {
  await page.waitForLoadState('networkidle');
  
  // Identify main content container
  const content = await page.evaluate(() => {
    // Remove noise elements
    const elementsToRemove = [
      'nav', 'header', 'footer', 
      '[role="navigation"]', '[role="banner"]', '[role="contentinfo"]',
      '.nav', '.header', '.footer', '.sidebar', '.cookie-notice',
      '#navigation', '#header', '#footer'
    ];
    
    elementsToRemove.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });
    
    // Find main content (common patterns)
    const mainContent = 
      document.querySelector('main') ||
      document.querySelector('[role="main"]') ||
      document.querySelector('article') ||
      document.querySelector('.content') ||
      document.querySelector('#content') ||
      document.body;
    
    // Extract text and structure
    const getText = (el) => {
      return el.innerText
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();
    };
    
    const headings = {
      h1: Array.from(mainContent.querySelectorAll('h1')).map(h => h.innerText.trim()),
      h2: Array.from(mainContent.querySelectorAll('h2')).map(h => h.innerText.trim()),
      h3: Array.from(mainContent.querySelectorAll('h3')).map(h => h.innerText.trim())
    };
    
    const paragraphs = Array.from(mainContent.querySelectorAll('p'))
      .map(p => p.innerText.trim())
      .filter(text => text.length > 20); // Ignore very short paragraphs
    
    const lists = Array.from(mainContent.querySelectorAll('ul, ol')).length;
    
    const fullText = getText(mainContent);
    const wordCount = fullText.split(/\s+/).filter(word => word.length > 0).length;
    
    return {
      fullText,
      wordCount,
      headings,
      paragraphs: paragraphs.length,
      lists,
      characterCount: fullText.length
    };
  });
  
  return content;
}
Phase 2: Keyword Density Analysis
javascriptasync function analyzeKeywords(page, targetKeywords) {
  return await page.evaluate((keywords) => {
    const text = document.body.innerText.toLowerCase();
    const words = text.split(/\s+/);
    const totalWords = words.length;
    
    const keywordStats = {};
    keywords.forEach(keyword => {
      const keywordLower = keyword.toLowerCase();
      const regex = new RegExp(keywordLower, 'gi');
      const matches = text.match(regex) || [];
      const count = matches.length;
      const density = ((count / totalWords) * 100).toFixed(2);
      
      keywordStats[keyword] = {
        count,
        density: `${density}%`,
        optimal: density >= 1 && density <= 2
      };
    });
    
    return keywordStats;
  }, targetKeywords);
}
Phase 3: Competitive Content Research
javascript// Use WebResearch MCP to analyze competitors
async function researchCompetitors(keyword, topN = 3) {
  // This would use the webresearch MCP
  // Simulated structure:
  
  const competitors = await webresearch.search({
    query: keyword,
    numResults: topN,
    region: 'au' // Australia
  });
  
  const competitorData = [];
  
  for (const competitor of competitors) {
    const page = await browser.newPage();
    await page.goto(competitor.url);
    
    const content = await extractMainContent(page);
    
    const sections = await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll('h2, h3'));
      return headings.map(h => h.innerText.trim());
    });
    
    competitorData.push({
      url: competitor.url,
      title: competitor.title,
      wordCount: content.wordCount,
      headings: content.headings,
      sections: sections,
      paragraphs: content.paragraphs
    });
    
    await page.close();
  }
  
  return competitorData;
}

Word Count Thresholds by Page Type
Target Word Counts for Cairo by Nights
Page TypeMinimumTargetCompetitivePriority if BelowHomepage500800-10001200+CRITICALService Pages500800-12001500+CRITICALLocation Pages8001200-15002000+HIGHAbout Page400600-8001000+MEDIUMContact Page200300-400500+LOWBlog Posts8001200-18002000+HIGH
Priority Classification
CRITICAL (Fix Immediately)

Any service page under 500 words
Homepage under 500 words
Location pages under 800 words
Pages targeting commercial keywords under minimum

HIGH (Fix This Week)

Service pages 500-799 words
Location pages 800-1199 words
Any page 300-499 words

MEDIUM (Fix This Month)

About page under 400 words
Blog posts under 800 words
Support pages under 300 words

LOW (Optimize Later)

Contact page optimization
Legal pages (privacy, terms)
Thank you pages


Execution Workflow
Command 1: Full Site Content Audit
Using Playwright MCP, crawl my entire Cairo by Nights website and perform a comprehensive content analysis:

1. DISCOVERY: Start at homepage, discover all internal pages
2. CONTENT EXTRACTION: For each page:
   - Navigate and wait for full load
   - Identify main content container (exclude nav, footer, header)
   - Extract only meaningful body content
   - Count words, paragraphs, headings (H1, H2, H3)
   - Calculate character count
3. STRUCTURE ANALYSIS:
   - Verify single H1 per page
   - Check heading hierarchy (H1 > H2 > H3)
   - Count lists (UL, OL)
   - Identify FAQ sections
4. CATEGORIZATION:
   - Determine page type (service/location/about/contact)
   - Assign target word count based on type
   - Calculate gap to target
5. PRIORITIZATION:
   - Flag pages below minimum (CRITICAL)
   - Flag pages below target (HIGH/MEDIUM)
   - Consider commercial value in priority

Generate a report showing:
- Total pages analyzed
- Average word count
- Pages below threshold (grouped by priority)
- Heading structure issues
- Content quality scores

Focus on service pages and location pages as highest priority.
Command 2: Competitive Content Benchmarking
For my top 5 thin content pages, use the WebResearch MCP to analyze competitors:

PAGES TO ANALYZE:
1. /services/carpet-cleaning (target: "carpet cleaning Melbourne")
2. /services/upholstery-cleaning (target: "upholstery cleaning Melbourne")
3. /locations/carlton (target: "carpet cleaning Carlton")
4. / (homepage) (target: "professional cleaning Melbourne")
5. /services/tile-cleaning (target: "tile cleaning Melbourne")

FOR EACH PAGE:
1. Search Google for the target keyword
2. Extract top 3 ranking competitors (exclude directories/marketplaces)
3. Use Playwright to crawl each competitor page
4. Extract:
   - Word count
   - Heading structure (what H2s/H3s do they use?)
   - Content sections they include
   - FAQs they answer
   - Local keywords they use (suburbs, landmarks)
   - Trust signals (certifications, guarantees, years in business)
5. Calculate average competitor word count
6. Identify content gaps (what do they have that we don't?)

OUTPUT:
For each of my pages, tell me:
- My current word count vs competitor average
- Specific sections competitors include that I'm missing
- Recommended content additions to surpass competitors
- Estimated word count needed to be competitive
- Priority level based on keyword value
Command 3: Content Expansion Strategy Generator
For each page identified as thin content, create a detailed expansion plan:

INPUT: Page URL, current word count, target keyword, page type
OUTPUT: Specific content sections to add

EXPANSION FORMULA:

For SERVICE PAGES under 800 words, recommend adding:
1. "Our [Service] Process" section (200-300 words)
   - Step-by-step breakdown
   - Timeline expectations
   - Equipment/methods used
2. "Service Areas in Melbourne" section (150-200 words)
   - List suburbs served (Carlton, Fitzroy, Richmond, CBD, etc.)
   - Coverage radius
   - Response times by area
3. FAQ section (250-300 words)
   - 5-8 questions based on competitor research
   - Address common objections
   - Include local concerns
4. "Why Choose Cairo by Nights" section (150-200 words)
   - Certifications
   - Years of experience
   - Guarantees
   - Unique methods
5. "Emergency/Same-Day Service" section (100-150 words)
   - 24/7 availability
   - Response times
   - Emergency contact

For LOCATION PAGES under 1200 words, recommend adding:
1. "About [Suburb/Area]" section (200-250 words)
   - Local landmarks
   - Types of properties (Victorian terraces, modern apartments, etc.)
   - Common cleaning challenges in this area
2. "All Services in [Location]" section (400-500 words)
   - Each service with local angle
   - Pricing for this area
   - Special considerations
3. "Local Testimonials" section (200-250 words)
   - Reviews from this specific suburb
   - Before/after stories
   - Community connection
4. "Coverage Map" section (150-200 words)
   - Specific streets/neighborhoods
   - Neighboring suburbs also served
   - Parking/access information
5. "Local FAQ" section (250-300 words)
   - Area-specific questions
   - Council regulations
   - Building type considerations

For each section recommendation:
- Provide word count target
- Suggest 3-5 H2/H3 headings
- List keywords to integrate naturally
- Include local keyword variations (Melbourne suburbs)
- Give content outline/structure
- Provide example opening sentences
Command 4: Keyword Integration Analysis
For each thin content page, analyze current keyword usage and recommend improvements:

KEYWORDS TO ANALYZE:
Primary Keywords:
- [Service] + Melbourne (e.g., "carpet cleaning Melbourne")
- [Service] + [Suburb] (e.g., "carpet cleaning Carlton")

Secondary Keywords:
- Emergency + [Service] + Melbourne
- Professional + [Service]
- Same day + [Service]
- 24/7 + [Service]
- [Service] + near me
- Best + [Service] + Melbourne
- [Service] + prices/cost Melbourne

Local Keywords:
- Melbourne CBD
- Carlton, Fitzroy, Richmond, Collingwood [suburbs]
- Inner Melbourne
- Greater Melbourne
- Victoria

ANALYSIS:
1. Use Playwright to extract full text from each page
2. Count current keyword mentions
3. Calculate keyword density (target: 1-2% for primary)
4. Identify pages with 0 mentions of target keywords
5. Check if location is mentioned naturally
6. Verify keywords in:
   - H1 tag (must have primary keyword)
   - At least 2 H2 tags
   - First paragraph
   - Last paragraph (CTA)
   - Alt text of images
7. Flag keyword stuffing (density > 3%)

RECOMMENDATIONS:
- Where to add primary keyword naturally
- How to integrate location keywords
- Semantic variations to use
- Long-tail opportunities
- Related search terms to target

Playwright Automation Script
javascript// Full Content Analysis Script for Cairo by Nights

const { chromium } = require('playwright');

async function analyzeContentDepth() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const results = {
    totalPages: 0,
    averageWordCount: 0,
    thinContent: [],
    goodContent: [],
    excellentContent: []
  };
  
  // Step 1: Discover all pages
  console.log('🔍 Discovering pages...');
  await page.goto('https://cairobynights.com.au');
  await page.waitForLoadState('networkidle');
  
  const pageUrls = await page.$$eval('a[href]', links => 
    links.map(a => a.href)
      .filter(href => href.includes('cairobynights'))
      .filter(href => !href.includes('#'))
      .filter(href => !href.includes('mailto:'))
      .filter(href => !href.includes('tel:'))
      .filter(href => !href.match(/\.(pdf|jpg|png|zip)$/i))
  );
  
  const uniquePages = [...new Set(pageUrls)].slice(0, 50); // Limit for testing
  console.log(`📄 Found ${uniquePages.length} pages to analyze`);
  
  let totalWords = 0;
  
  // Step 2: Analyze each page
  for (const url of uniquePages) {
    console.log(`\n📖 Analyzing: ${url}`);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      
      // Extract content analysis
      const analysis = await page.evaluate(() => {
        // Remove navigation, header, footer
        const removeSelectors = [
          'nav', 'header', 'footer',
          '[role="navigation"]', '[role="banner"]', '[role="contentinfo"]',
          '.nav', '.navbar', '.header', '.footer', '.sidebar',
          '#navigation', '#header', '#footer',
          '.cookie-notice', '.popup', '.modal'
        ];
        
        // Clone body to avoid modifying actual page
        const bodyClone = document.body.cloneNode(true);
        removeSelectors.forEach(selector => {
          bodyClone.querySelectorAll(selector).forEach(el => el.remove());
        });
        
        // Find main content
        const mainContent = 
          bodyClone.querySelector('main') ||
          bodyClone.querySelector('[role="main"]') ||
          bodyClone.querySelector('article') ||
          bodyClone.querySelector('.content') ||
          bodyClone.querySelector('#content') ||
          bodyClone;
        
        // Extract text
        const fullText = mainContent.innerText
          .replace(/\s+/g, ' ')
          .trim();
        
        const words = fullText.split(/\s+/).filter(w => w.length > 0);
        const wordCount = words.length;
        
        // Analyze structure
        const h1Count = document.querySelectorAll('h1').length;
        const h1Text = document.querySelector('h1')?.innerText.trim() || '';
        
        const h2s = Array.from(document.querySelectorAll('h2'))
          .map(h => h.innerText.trim());
        
        const h3s = Array.from(document.querySelectorAll('h3'))
          .map(h => h.innerText.trim());
        
        const paragraphCount = Array.from(mainContent.querySelectorAll('p'))
          .filter(p => p.innerText.trim().length > 20).length;
        
        const listCount = mainContent.querySelectorAll('ul, ol').length;
        
        const hasFAQ = fullText.toLowerCase().includes('frequently asked') ||
                       fullText.toLowerCase().includes('faq') ||
                       mainContent.querySelector('[itemtype*="FAQPage"]') !== null;
        
        // Keyword analysis for Melbourne
        const melbourneCount = (fullText.match(/melbourne/gi) || []).length;
        const serviceMentions = (fullText.match(/carpet cleaning|upholstery cleaning|tile cleaning|cleaning service/gi) || []).length;
        
        // Detect page type
        const url = window.location.pathname.toLowerCase();
        let pageType = 'other';
        if (url === '/' || url === '/index.html') pageType = 'homepage';
        else if (url.includes('/service')) pageType = 'service';
        else if (url.includes('/location')) pageType = 'location';
        else if (url.includes('/about')) pageType = 'about';
        else if (url.includes('/contact')) pageType = 'contact';
        else if (url.includes('/blog')) pageType = 'blog';
        
        return {
          wordCount,
          characterCount: fullText.length,
          h1: { count: h1Count, text: h1Text },
          h2s,
          h3s,
          paragraphCount,
          listCount,
          hasFAQ,
          keywords: {
            melbourne: melbourneCount,
            service: serviceMentions
          },
          pageType,
          fullText: fullText.substring(0, 500) // Sample for context
        };
      });
      
      // Determine target word count based on page type
      const targets = {
        homepage: { min: 500, target: 800, excellent: 1200 },
        service: { min: 500, target: 800, excellent: 1500 },
        location: { min: 800, target: 1200, excellent: 2000 },
        about: { min: 400, target: 600, excellent: 1000 },
        contact: { min: 200, target: 300, excellent: 500 },
        blog: { min: 800, target: 1200, excellent: 2000 },
        other: { min: 300, target: 500, excellent: 800 }
      };
      
      const target = targets[analysis.pageType];
      const gap = target.target - analysis.wordCount;
      
      // Categorize
      results.totalPages++;
      totalWords += analysis.wordCount;
      
      const pageData = {
        url,
        pageType: analysis.pageType,
        wordCount: analysis.wordCount,
        target: target.target,
        gap: gap,
        ...analysis
      };
      
      if (analysis.wordCount < target.min) {
        pageData.priority = 'CRITICAL';
        pageData.severity = '🚨';
        results.thinContent.push(pageData);
      } else if (analysis.wordCount < target.target) {
        pageData.priority = 'HIGH';
        pageData.severity = '⚠️';
        results.thinContent.push(pageData);
      } else if (analysis.wordCount < target.excellent) {
        pageData.priority = 'MEDIUM';
        pageData.severity = '📋';
        results.goodContent.push(pageData);
      } else {
        pageData.priority = 'GOOD';
        pageData.severity = '✅';
        results.excellentContent.push(pageData);
      }
      
    } catch (error) {
      console.error(`❌ Error analyzing ${url}:`, error.message);
    }
  }
  
  results.averageWordCount = Math.round(totalWords / results.totalPages);
  
  await browser.close();
  
  // Generate Report
  console.log('\n\n📊 CONTENT LENGTH ANALYSIS REPORT');
  console.log('='.repeat(80));
  console.log(`Total Pages Analyzed: ${results.totalPages}`);
  console.log(`Average Word Count: ${results.averageWordCount} words`);
  console.log(`\n✅ Excellent Content (target exceeded): ${results.excellentContent.length} pages`);
  console.log(`📋 Good Content (at/near target): ${results.goodContent.length} pages`);
  console.log(`⚠️  Thin Content (below target): ${results.thinContent.length} pages`);
  console.log('='.repeat(80));
  
  // Detail thin content issues
  if (results.thinContent.length > 0) {
    console.log('\n🚨 THIN CONTENT REQUIRING ATTENTION:\n');
    
    // Sort by priority (CRITICAL first)
    results.thinContent.sort((a, b) => {
      const priorityOrder = { 'CRITICAL': 0, 'HIGH': 1, 'MEDIUM': 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    
    results.thinContent.forEach((page, i) => {
      console.log(`\n${i + 1}. ${page.severity} ${page.url}`);
      console.log(`   Page Type: ${page.pageType.toUpperCase()}`);
      console.log(`   Current Word Count: ${page.wordCount} words`);
      console.log(`   Target Word Count: ${page.target} words`);
      console.log(`   Gap: ${page.gap} words needed`);
      console.log(`   Priority: ${page.priority}`);
      console.log(`   Heading Structure: H1(${page.h1.count}) | H2(${page.h2s.length}) | H3(${page.h3s.length})`);
      console.log(`   Paragraphs: ${page.paragraphCount}`);
      console.log(`   Lists: ${page.listCount}`);
      console.log(`   Has FAQ: ${page.hasFAQ ? 'Yes' : 'No'}`);
      console.log(`   "Melbourne" mentions: ${page.keywords.melbourne}`);
      console.log(`   Service mentions: ${page.keywords.service}`);
      
      if (page.h1.count !== 1) {
        console.log(`   ⚠️  WARNING: Page has ${page.h1.count} H1 tags (should be exactly 1)`);
      }
      
      if (page.keywords.melbourne === 0 && page.pageType !== 'other') {
        console.log(`   ⚠️  WARNING: No "Melbourne" keyword found`);
      }
      
      console.log(`\n   📝 RECOMMENDED EXPANSION STRATEGY:`);
      console.log(generateExpansionPlan(page));
    });
  }
  
  return results;
}

function generateExpansionPlan(page) {
  const plans = {
    service: `
   1. Add "Our ${extractService(page.url)} Process" section (250 words)
      - Step-by-step methodology
      - Equipment and techniques
      - Expected results and timeline
   
   2. Add "Service Areas in Melbourne" section (150 words)
      - List: Carlton, Fitzroy, Richmond, CBD, Collingwood
      - Coverage map description
      - Response times
   
   3. Add FAQ section (300 words)
      - "How long does ${extractService(page.url)} take?"
      - "Is it safe for pets/children?"
      - "What's your pricing structure?"
      - "Do you offer emergency service?"
      - "What areas of Melbourne do you cover?"
   
   4. Add "Why Choose Cairo by Nights" (150 words)
      - 15+ years experience in Melbourne
      - Certified and insured technicians
      - Eco-friendly products
      - 100% satisfaction guarantee
   
   5. Add customer testimonials (100 words)
      - 2-3 reviews from Melbourne customers
      - Before/after results
   
   Estimated total addition: ~${page.gap + 100} words`,
    
    location: `
   1. Add "About ${extractLocation(page.url)}" section (250 words)
      - Local landmarks (e.g., Lygon Street for Carlton)
      - Property types in this area
      - Common cleaning challenges
      - Community connection
   
   2. Expand "Services in ${extractLocation(page.url)}" (400 words)
      - Carpet cleaning with local context
      - Upholstery cleaning for local property types
      - Tile cleaning considerations
      - Emergency service availability
   
   3. Add "Local Testimonials" section (200 words)
      - Reviews specifically from ${extractLocation(page.url)} customers
      - Street names and local references
      - Community reputation
   
   4. Add "Coverage Details" (150 words)
      - Specific streets covered
      - Neighboring suburbs also served
      - Parking and access information
   
   5. Add "Local FAQ" (250 words)
      - "Do you service [specific local building types]?"
      - "What's your response time in ${extractLocation(page.url)}?"
      - "Are there any council regulations we should know about?"
   
   Estimated total addition: ~${page.gap + 150} words`,
    
    homepage: `
   1. Expand hero section (150 words)
      - Value proposition
      - Years serving Melbourne
      - Service range overview
   
   2. Add "Our Services" overview (300 words)
      - Carpet cleaning description with Melbourne focus
      - Upholstery cleaning
      - Tile and grout
      - Emergency services
      - Each with brief description and CTA
   
   3. Add "Why Melbourne Trusts Cairo by Nights" (200 words)
      - Local experience
      - Customer satisfaction stats
      - Certifications
      - Guarantees
   
   4. Add "Service Areas" section (150 words)
      - Map of Melbourne coverage
      - List major suburbs
      - Quick response areas
   
   5. Add testimonials (150 words)
      - 3-4 customer reviews
      - Mix of services and locations
   
   Estimated total addition: ~${page.gap + 100} words`,
    
    about: `
   1. Expand company story (200 words)
      - How Cairo by Nights started
      - Growth in Melbourne market
      - Mission and values
   
   2. Add "Our Team" section (150 words)
      - Introduce key team members
      - Certifications and training
      - Local community involvement
   
   3. Add "Our Commitment to Melbourne" (150 words)
      - Years serving the community
      - Local partnerships
      - Eco-friendly practices
   
   4. Add credentials section (100 words)
      - Certifications
      - Insurance details
      - Industry memberships
      - Awards
   
   Estimated total addition: ~${page.gap + 50} words`
  };
  
  return plans[page.pageType] || `Add ${page.gap} words of relevant content to reach target.`;
}

function extractService(url) {
  if (url.includes('carpet')) return 'carpet cleaning';
  if (url.includes('upholstery')) return 'upholstery cleaning';
  if (url.includes('tile')) return 'tile and grout cleaning';
  if (url.includes('rug')) return 'rug cleaning';
  if (url.includes('mattress')) return 'mattress cleaning';
  return 'cleaning service';
}

function extractLocation(url) {
  if (url.includes('carlton')) return 'Carlton';
  if (url.includes('fitzroy')) return 'Fitzroy';
  if (url.includes('richmond')) return 'Richmond';
  if (url.includes('cbd')) return 'Melbourne CBD';
  if (url.includes('collingwood')) return 'Collingwood';
  return 'this area';
}

// Run the analysis
analyzeContentDepth().then(results => {
  console.log('\n✅ Analysis complete!');
  const fs = require('fs');
  fs.writeFileSync('content-analysis-results.json', JSON.stringify(results, null, 2));
  console.log('📁 Results saved to content-analysis-results.json');
}).catch(console.error);

Output Report Format
=== CONTENT LENGTH & QUALITY ANALYSIS REPORT ===
Website: Cairo by Nights (https://cairobynights.com.au)
Date: [Current Date]
Pages Analyzed: 24
Average Word Count: 587 words

CONTENT HEALTH SUMMARY:
✅ Excellent Content (1200+ words): 3 pages (13%)
📋 Good Content (500-1199 words): 8 pages (33%)
⚠️  Thin Content (below target): 13 pages (54%)

PRIORITY BREAKDOWN:
🚨 CRITICAL (under minimum): 7 pages
⚠️  HIGH (below target): 6 pages
📋 MEDIUM (near target): 4 pages

---

🚨 CRITICAL PRIORITY: PAGES UNDER MINIMUM WORD COUNT

ISSUE #1
Page: https://cairobynights.com.au/services/carpet-cleaning
Page Type: SERVICE
Current Word Count: 287 words
Target Word Count: 800 words
Gap: 513 words needed
Priority: 🚨 CRITICAL

CURRENT STRUCTURE:
- H1 Count: 1 ✓ ("Professional Carpet Cleaning Melbourne")
- H2 Count: 2
- H3 Count: 0
- Paragraphs: 4
- Lists: 1
- Has FAQ: No
- "Melbourne" mentions: 2
- Service keyword mentions: 5

CONTENT QUALITY ISSUES:
⚠️  Word count 64% below target
⚠️  No FAQ section (competitors have 5-8 FAQs)
⚠️  Missing "Our Process" section
⚠️  Missing "Service Areas" section
⚠️  Only 2 Melbourne mentions (should be 5-7)
⚠️  No customer testimonials

COMPETITOR BENCHMARK:
Using WebResearch MCP, analyzed top 3 for "carpet cleaning Melbourne":
1. Competitor A: 1,247 words (H2s: Process, Areas, FAQ, Pricing, Guarantee)
2. Competitor B: 1,089 words (H2s: About, Methods, Coverage, Reviews)
3. Competitor C: 1,456 words (H2s: Services, Process, FAQ, Testimonials, Contact)

Average Competitor Word Count: 1,264 words
Our Position: 977 words BEHIND average competitor

SECTIONS COMPETITORS HAVE THAT WE'RE MISSING:
✗ Detailed process/methodology section
✗ Equipment and technology description
✗ FAQ section (all 3 competitors have this)
✗ Pricing transparency/packages
✗ Service area map or detailed coverage
✗ Customer testimonials/reviews
✗ Emergency service details
✗ Before/after examples

---

📝 DETAILED EXPANSION PLAN FOR /services/carpet-cleaning:

SECTION 1: "Our Professional Carpet Cleaning Process" (250-300 words)
Target H2: "How Our Melbourne Carpet Cleaning Process Works"
Content to include:
- Step 1: Pre-inspection (what we look for, stain identification)
- Step 2: Pre-treatment (eco-friendly solutions we use)
- Step 3: Deep steam cleaning (truck-mounted equipment description)
- Step 4: Spot treatment (stubborn stain handling)
- Step 5: Post-cleaning inspection and protection
- Average timeline: 2-3 hours for typical Melbourne home
- Drying time: 4-6 hours with proper ventilation

Keywords to integrate naturally:
- "carpet steam cleaning process"
- "professional carpet cleaning Melbourne"
- "truck-mounted cleaning equipment"
- "eco-friendly carpet cleaning"

Example opening: "At Cairo by Nights, our professional carpet cleaning process has been refined over 15+ years serving Melbourne homes. Here's exactly what happens when our certified technicians arrive at your door..."

---

SECTION 2: "Service Areas Across Melbourne" (150-200 words)
Target H2: "Carpet Cleaning Service Areas in Melbourne"
Content to include:
- Primary service areas: Carlton, Fitzroy, Richmond, CBD, Collingwood
- Extended coverage: Brunswick, Northcote, Kew, Hawthorn
- Response times by area (CBD: 1 hour, Inner suburbs: 2 hours)
- Coverage radius from base location
- Same-day service availability by suburb
- Emergency service areas (24/7 coverage zones)

Include:
- Interactive coverage map (if possible) or descriptive list
- Link to dedicated location pages
- Mention of free quotes for all Melbourne suburbs

Keywords to integrate:
- "carpet cleaning [suburb name]" for each suburb listed
- "Melbourne carpet cleaning service areas"
- "same day carpet cleaning Melbourne"

Example opening: "Cairo by Nights provides professional carpet cleaning across all Melbourne suburbs. Whether you're in the heart of the CBD or the leafy streets of Carlton..."

---

SECTION 3: "Frequently Asked Questions" (300-350 words)
Target H2: "Carpet Cleaning FAQ - Melbourne"
Questions to answer (based on competitor research):

Q1: "How long does carpet cleaning take in a typical Melbourne home?"
A: (80-100 words) Explain timing based on home size, typical 3-bedroom takes 2-3 hours, factors that affect duration, drying time expectations

Q2: "Is your carpet cleaning safe for children and pets?"
A: (80-100 words) Eco-friendly, non-toxic solutions, safe once dry, certifications, hypoallergenic options

Q3: "How much does carpet cleaning cost in Melbourne?"
A: (80-100 words) Price ranges, factors affecting cost, package deals, free quotes, no hidden fees

Q4: "How often should I get my carpets professionally cleaned?"
A: (60-80 words) Every 6-12 months recommendation, high-traffic areas more frequent, Melbourne climate considerations

Q5: "Do you move furniture?"
A: (50-70 words) Yes, standard furniture moving included, heavy items can be worked around, preparation tips

Keywords to integrate:
- "carpet cleaning cost Melbourne"
- "how often clean carpets"
- "pet-safe carpet cleaning"
- "eco-friendly carpet cleaning Melbourne"

---

SECTION 4: "Why Choose Cairo by Nights for Melbourne Carpet Cleaning" (150-200 words)
Target H2: "Why Melbourne Residents Choose Cairo by Nights"
Content to include:
- 15+ years serving Melbourne
- Certified IICRC technicians
- Fully insured and bonded
- 100% satisfaction guarantee
- Truck-mounted steam cleaning (most effective method)
- Eco-friendly, family-safe products
- Same-day and emergency service available
- Free quotes and transparent pricing
- 5-star Google reviews from Melbourne customers
- Local, family-owned business

Unique selling points:
- "Unlike other Melbourne carpet cleaners, we use truck-mounted equipment which..."
- "Our technicians undergo 40+ hours of training..."
- "We're so confident in our results that we offer..."

Keywords to integrate:
- "best carpet cleaning Melbourne"
- "trusted carpet cleaners"
- "certified carpet cleaning Melbourne"
- "carpet cleaning guarantee"

---

SECTION 5: "Emergency & Same-Day Carpet Cleaning" (100-150 words)
Target H2: "Need Emergency Carpet Cleaning in Melbourne? We're Available 24/7"
Content to include:
- Immediate response for water damage, flooding, sewage
- Same-day service available for most Melbourne suburbs
- 24/7 emergency hotline number (prominent display)
- Average response time: 1-2 hours
- Insurance claim assistance
- Flood and water damage restoration capabilities

Example opening: "Carpet emergencies don't wait for business hours. Whether it's a burst pipe at 2 AM or a wine spill before your important dinner party, Cairo by Nights is ready to help Melbourne residents 24/7..."

Keywords:
- "emergency carpet cleaning Melbourne"
- "24/7 carpet cleaning"
- "same day carpet cleaning"
- "water damage restoration Melbourne"

---

SECTION 6: "Customer Testimonials from Melbourne" (150-200 words)
Target H2: "What Our Melbourne Customers Say"
Content to include:
- 3-4 testimonials from different Melbourne suburbs
- Include customer first name, suburb, star rating
- Mix of different services (stain removal, whole-home, emergency)
- Before/after mentions
- Specific details (e.g., "removed a 5-year-old red wine stain")

Example testimonials:
"Sarah M., Carlton ⭐⭐⭐⭐⭐
'Cairo by Nights saved my cream carpet after my toddler spilled juice everywhere. Same-day service and the stain is completely gone!'"

"James T., Melbourne CBD ⭐⭐⭐⭐⭐
'Professional service from start to finish. They moved all the furniture, cleaned thoroughly, and the carpets dried faster than expected.'"

Keywords to integrate:
- Customer location names (suburbs)
- Service types mentioned in reviews
- "carpet cleaning reviews Melbourne"

---

IMPLEMENTATION CHECKLIST:
□ Add Section 1: Process (250 words) - Estimated time: 45 min
□ Add Section 2: Service Areas (150 words) - Estimated time: 20 min
□ Add Section 3: FAQ (300 words) - Estimated time: 40 min
□ Add Section 4: Why Choose Us (150 words) - Estimated time: 25 min
□ Add Section 5: Emergency Service (100 words) - Estimated time: 15 min
□ Add Section 6: Testimonials (150 words) - Estimated time: 20 min

TOTAL NEW CONTENT: ~1,100 words
FINAL PROJECTED WORD COUNT: 287 + 1,100 = 1,387 words ✓ (exceeds target)
ESTIMATED TIME TO COMPLETE: 2.5-3 hours

---

KEYWORD INTEGRATION TARGETS:
Current Status → Target Status
- "Melbourne" mentions: 2 → 8-10
- "carpet cleaning Melbourne": 1 → 4-5
- "professional carpet cleaning": 2 → 4
- "carpet steam cleaning": 0 → 3
- Suburb names: 0 → 8-10 (Carlton, Fitzroy, Richmond, etc.)
- "same day": 0 → 2-3
- "emergency": 0 → 2

---

COMPETITIVE ADVANTAGE AFTER EXPANSION:
Current: 287 words (24% of average competitor)
After: 1,387 words (110% of average competitor) ✓
Estimated ranking improvement: +15-25 positions
Estimated organic traffic increase: +150-200%

---

NEXT STEPS:
1. ✅ Start with this page (highest commercial value)
2. Use content templates provided above
3. Write naturally, avoid keyword stuffing
4. Include actual customer testimonials if available
5. Add images with proper alt text for each section
6. Internal link to relevant location pages
7. Add FAQ schema markup (structured data)
8. Re-run this audit after expansion to verify

Success Metrics
Targets After Implementation:

 0 pages below minimum word count
 All service pages 800+ words
 All location pages 1,200+ words
 Homepage 800+ words
 Average word count exceeds competitor average
 "Melbourne" appears 5-8x per page
 All pages have FAQ sections
 All pages mention service areas/coverage
 Keyword density 1-2% for primary keywords
 All pages have customer testimonials

Performance Monitoring:

Track rankings for target keywords weekly
Monitor organic traffic in Google Analytics
Check time on page (should increase with more content)
Monitor bounce rate (should decrease)
Use Lighthouse MCP to verify SEO score improvements


Commands for Claude Code
Full Content Audit Command:
Use Playwright MCP to perform a comprehensive content depth analysis of my Cairo by Nights website:

1. Crawl all pages starting from homepage
2. For each page, extract only main content (exclude nav/footer/header)
3. Calculate word count of meaningful content
4. Analyze heading structure (H1, H2, H3 counts)
5. Count paragraphs, lists, and content blocks
6. Check for FAQ sections
7. Count "Melbourne" keyword mentions
8. Identify page type (service/location/about)
9. Determine if page meets target word count for its type

Generate a prioritized report showing:
- Pages below minimum (CRITICAL)
- Pages below target (HIGH)
- Specific word count gaps
- What sections are missing
- Heading structure issues

Focus on service pages and location pages first. For each thin content page, provide a detailed expansion plan.
Competitive Research Command:
For my carpet cleaning service page, use WebResearch MCP to:

1. Search Google for "carpet cleaning Melbourne"
2. Identify top 3 organic results (exclude directories)
3. Use Playwright to analyze each competitor:
   - Extract word count
   - Identify all H2 and H3 headings
   - List content sections they include
   - Extract FAQ questions
   - Note local keywords (suburbs mentioned)
   - Identify unique selling points

4. Create comparison showing:
   - My word count vs competitor average
   - Sections they have that I don't
   - FAQs they answer that I don't
   - How they structure content
   - Specific recommendations to beat them

Give me actionable insights to create better content than all 3 competitors.
Content Gap Analysis Command:
Compare my service pages against competitors to identify content gaps:

MY PAGES:
- /services/carpet-cleaning
- /services/upholstery-cleaning
- /services/tile-cleaning

For each:
1. Use Playwright to extract current sections/headings
2. Use WebResearch to find top competitor for same service
3. Compare their content structure to mine
4. Identify missing sections
5. Suggest specific sections to add
6. Estimate word count for each new section
7. Provide content outlines/templates

Output format:
"You have [X] content gaps compared to top competitor:
1. Missing: [Section Name] - Add [Y] words about [specific topics]
2. Missing: [Section Name] - Add [Y] words about [specific topics]
..."
Quick Fix Command:
Identify my 5 thinnest service pages using Playwright MCP. For each:
1. Current word count
2. Target word count
3. Top 3 quick wins to add immediately (estimated 100-150 words each):
   - FAQ section with 3 questions
   - Service areas paragraph
   - Why choose us paragraph

Give me ready-to-use content templates I can quickly implement today to get each page above 500 words minimum.