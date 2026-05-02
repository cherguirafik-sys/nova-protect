# 🔍 Nova Protect - SEO & Next.js Audit

**Website:** novaprotect.site  
**Date:** May 2, 2026  
**Status:** French Insurance Broker Site

---

## 🟢 STRENGTHS

### SEO Positives
- ✅ **Clean URL structure** - Descriptive, keyword-rich paths (/mutuelles, /auto, /habitation, /animaux)
- ✅ **Next.js Image Optimization** - Using `_next/image` for logo and images with proper width/quality params
- ✅ **Mobile-friendly design** - Responsive layout evident
- ✅ **Strong heading hierarchy** - H1, H2 structure present
- ✅ **Clear navigation** - Well-organized menu with key insurance categories
- ✅ **Call-to-action prominence** - "Devis Gratuit" buttons positioned strategically
- ✅ **Trust signals** - ORIAS number, client count, response time guarantees visible
- ✅ **Internal linking** - Good navigation between category pages
- ✅ **Contact information** - Phone, email, address clearly displayed (important for local SEO)
- ✅ **GDPR compliance mention** - "RGPD" data security stated upfront

---

## 🔴 CRITICAL ISSUES TO FIX

### 1. **Missing Meta Tags & Open Graph**
**Impact:** HIGH - No way for Google to understand page content properly

```html
<!-- MISSING - Add to <head> -->
<meta name="description" content="Courtier d'assurances agréé en France. Mutuelle santé, assurance auto, habitation et animaux. Devis gratuit en 24h. +500 clients satisfaits.">
<meta name="keywords" content="assurance france, mutuelle santé, assurance auto, assurance habitation">

<!-- Open Graph (critical for social sharing) -->
<meta property="og:title" content="Nova Protect - Votre courtier d'assurances en France">
<meta property="og:description" content="Mutuelle, Auto, Habitation et Animaux. Devis gratuit et sans engagement.">
<meta property="og:image" content="https://novaprotect.site/og-image.jpg">
<meta property="og:url" content="https://novaprotect.site/">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Nova Protect">
<meta name="twitter:description" content="Votre courtier d'assurances en France">
```

---

### 2. **Missing Schema.org Structured Data**
**Impact:** HIGH - Prevents rich snippets and knowledge panel optimization

```json
<!-- LocalBusiness Schema (Critical for your business type) -->
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nova Protect",
  "description": "Courtier d'assurances agréé France - Mutuelle, Auto, Habitation, Animaux",
  "url": "https://novaprotect.site",
  "telephone": "+33780180414",
  "email": "contact@novaprotect.site",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5 rue de Seze",
    "addressLocality": "Lyon",
    "postalCode": "69006",
    "addressCountry": "FR"
  },
  "image": "https://novaprotect.site/logo.png",
  "priceRange": "$$",
  "areaServed": "FR",
  "organizationProfile": {
    "ORIAS_License": "07 022 045"
  }
}

<!-- Organization Schema -->
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nova Protect",
  "url": "https://novaprotect.site",
  "logo": "https://novaprotect.site/logo.png"
}

<!-- FAQPage Schema (for your FAQ section) -->
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment choisir ma mutuelle ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Add your answer here]"
      }
    }
    // ... more FAQs
  ]
}
```

---

### 3. **No Canonical Tags**
**Impact:** MEDIUM - Risk of duplicate content issues

```html
<!-- Add to every page <head> -->
<link rel="canonical" href="https://novaprotect.site/">
<link rel="canonical" href="https://novaprotect.site/mutuelles">
<link rel="canonical" href="https://novaprotect.site/auto">
<!-- etc. for all pages -->
```

---

### 4. **Missing Robots.txt & Sitemap**
**Impact:** MEDIUM - Search engines can't crawl systematically

```text
# /public/robots.txt
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api

Sitemap: https://novaprotect.site/sitemap.xml
```

```javascript
// pages/sitemap.xml.js (Next.js example)
function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://novaprotect.site/</loc>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://novaprotect.site/mutuelles</loc>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>https://novaprotect.site/auto</loc>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>https://novaprotect.site/habitation</loc>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>https://novaprotect.site/animaux</loc>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>https://novaprotect.site/blog</loc>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://novaprotect.site/a-propos</loc>
        <priority>0.7</priority>
      </url>
    </urlset>`;
}
```

---

### 5. **Missing Viewport & Mobile Meta Tags**
**Impact:** MEDIUM - Poor mobile SEO performance

```html
<!-- Ensure in <head> -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#000000">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```

---

### 6. **FAQ Section - No Answers Visible**
**Impact:** MEDIUM - FAQ markup incomplete, cannot generate rich snippets

```html
<!-- Current: Questions visible but answers seem hidden/missing in HTML -->
<!-- Need full Q&A pairs visible in markup for schema.org integration -->

<div class="faq-item">
  <h3>Comment choisir ma mutuelle ?</h3>
  <p style="display:none"> <!-- This should NOT be hidden if marked with schema -->
    [Complete answer text explaining how to choose...]
  </p>
</div>
```

---

### 7. **Missing H1 Tag Analysis**
**Impact:** MEDIUM - Current heading structure might not be SEO-optimal

```
Current: "Optimisez votre protection avec NovaProtect : l'assurance pour tous."
This is good, but ensure:
- ✅ Only ONE H1 per page
- ✅ Contains primary keyword ("assurance", "mutuelle", "courtier")
- ⚠️ Consider: "Courtier d'Assurances Agréé en France | NovaProtect" for better keyword matching
```

---

## ⚠️ NEXT.JS SPECIFIC ISSUES

### 1. **Missing Next.js Head Optimization**
```javascript
// _app.js or _document.js should include:
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="..." />
        {/* All SEO meta tags here */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}
```

### 2. **Missing next/seo Package Implementation**
**Recommendation:** Use `next-seo` package for cleaner SEO management

```javascript
// pages/index.js
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Nova Protect - Courtier d'assurances en France"
        description="Assurance mutuelle santé, auto, habitation et animaux. Devis gratuit en 24h."
        canonical="https://novaprotect.site"
        openGraph={{
          type: 'website',
          url: 'https://novaprotect.site',
          title: 'Nova Protect',
          description: 'Votre courtier d\'assurances agréé',
          images: [{
            url: 'https://novaprotect.site/og-image.jpg',
            width: 1200,
            height: 630,
          }],
        }}
        languageAlternates={[
          {
            hrefLang: 'fr-FR',
            href: 'https://novaprotect.site',
          },
        ]}
      />
    </>
  )
}
```

### 3. **Next.js Image Optimization - Good, But Incomplete**

✅ **Currently doing:** `<Image src="/logo.png" ... />`  
⚠️ **Add:**

```javascript
// Image best practices
<Image
  src="/logo.png"
  alt="Nova Protect Logo - Courtier d'assurances agréé"  // Descriptive alt text missing
  width={200}
  height={60}
  priority  // For above-the-fold images
  quality={75}  // Balanced quality/performance
/>

// For product/service images
<Image
  src="/mutuelle-sante.jpg"
  alt="Mutuelle Santé - Couverture complète pour vos soins"
  width={600}
  height={400}
  loading="lazy"  // For below-the-fold
/>
```

### 4. **Missing Next.js Dynamic Sitemap**

```javascript
// pages/sitemap.xml.js
import { getAllPages } from '@/lib/pages'

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(({ loc, changefreq, priority }) => {
        return `
          <url>
            <loc>${loc}</loc>
            <changefreq>${changefreq}</changefreq>
            <priority>${priority}</priority>
          </url>
        `
      }).join('')}
    </urlset>`
}

export async function getServerSideProps({ res }) {
  const pages = await getAllPages()
  const sitemap = generateSiteMap(pages)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default function Sitemap() {}
```

### 5. **Next.js Performance - Enable Image Optimization Fully**

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['novaprotect.site', 'cdn.example.com'],
    formats: ['image/avif', 'image/webp'],  // Modern formats
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.novaprotect.site',
      },
    ],
  },
  // Enable compression
  compress: true,
  // API routes optimization
  reactStrictMode: true,
}
```

---

## 🎯 PRIORITY FIXES (In Order)

| Priority | Issue | Effort | Impact |
|----------|-------|--------|--------|
| 1 | Add meta descriptions | 30 min | HIGH |
| 2 | Add Schema.org markup (LocalBusiness) | 1 hour | HIGH |
| 3 | Create robots.txt & sitemap.xml | 1 hour | MEDIUM |
| 4 | Add canonical tags to all pages | 30 min | MEDIUM |
| 5 | Implement next-seo package | 2 hours | MEDIUM |
| 6 | Add descriptive alt text to all images | 30 min | MEDIUM |
| 7 | Create Open Graph images | 1 hour | LOW |
| 8 | FAQ schema markup with answers visible | 1.5 hours | MEDIUM |
| 9 | Add breadcrumb schema | 1 hour | LOW |
| 10 | Create /about page with company schema | 2 hours | MEDIUM |

---

## 📊 ESTIMATED SEO IMPACT

- **Current Estimated Score:** ~55/100
- **After Priority Fixes:** ~78/100
- **After All Improvements:** ~88/100

---

## 🔗 Additional Recommendations

### Content SEO
1. **Blog Strategy** - Blog exists but needs content SEO optimization
2. **Keyword Research** - Target "assurance france", "mutuelle santé lyon", etc.
3. **Local SEO** - Add Google Business Profile optimization
4. **Content Depth** - Each category page needs 1500+ words of quality content

### Technical SEO
1. **Core Web Vitals** - Test with PageSpeed Insights
2. **Mobile Testing** - Use Mobile-Friendly Test tool
3. **SSL Certificate** - Ensure HTTPS everywhere (appears correct)
4. **Structured Data Validation** - Use Google's Rich Results Test

### Backlinks
1. **Industry Directories** - Submit to French insurance directories
2. **Local Backlinks** - Partner with Lyon-based websites
3. **Press Releases** - Publish news about partnerships

---

## 🛠️ Quick Implementation Checklist

- [ ] Add meta descriptions to all pages
- [ ] Add canonical tags site-wide
- [ ] Create and validate schema.org markup
- [ ] Create robots.txt
- [ ] Create XML sitemap
- [ ] Add alt text to all images
- [ ] Implement next-seo package
- [ ] Create FAQ schema with full answers
- [ ] Add breadcrumb navigation + schema
- [ ] Test with Google Search Console
- [ ] Set up Google Business Profile
- [ ] Add Open Graph images
- [ ] Create content calendar for blog
- [ ] Set up Analytics & GSC monitoring

