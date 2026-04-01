# Elevate Website Design Spec

**Date:** 2026-03-31
**Project:** Elevate Website for Samantha Bentson
**Domain:** letselevateup.com

## Overview

A professional 4-page static website for Elevate, a business consulting firm founded by Samantha Bentson. Samantha is an entrepreneur and operator with 20+ years of experience building and scaling companies. She previously served as CEO of Cashland Holdings and Borrow Money Now before selling in 2025 and launching Elevate.

The current site was built quickly on GoDaddy Website Builder and needs a professional upgrade. This redesign keeps the same branding, services, and content while significantly improving presentation, copy quality, and SEO.

## Goals

- Professional, polished presentation that matches Samantha's experience level
- SEO-rich content with strong copy (no em-dashes)
- Fast-loading static site with no dependencies
- Responsive design for mobile and desktop
- Easy to maintain and update

## Tech Stack

- **Vanilla HTML/CSS/JS** (no frameworks, no build tools)
- **Hosting:** TBD (Cloudflare Pages, Netlify, or similar static host)
- **Fonts:** Google Fonts (Poppins + Open Sans)

## File Structure

```
elevate-website/
├── index.html          (Home)
├── about.html          (About)
├── services.html       (Services)
├── contact.html        (Contact)
├── css/
│   └── styles.css      (Shared styles)
├── js/
│   └── main.js         (Nav toggle, form handling)
└── assets/
    ├── logo-full.jpg   (Hummingbird logo with "ELEVATE" text)
    ├── headshot.png     (Samantha's professional photo)
    └── (any other images)
```

## Color Palette

| Role         | Hex       | Name        | Usage                                      |
|--------------|-----------|-------------|---------------------------------------------|
| Primary      | #4682B4   | Steel Blue  | Headers, nav, hero backgrounds, accents     |
| Accent       | #FAF22B   | Yellow      | CTA buttons, highlights, hover states       |
| Background   | #FFFFFF   | White       | Main content backgrounds                    |
| Alt BG       | #F6F6F6   | Light Gray  | Alternating section backgrounds             |
| Dark         | #161616   | Near Black  | Footer background, dark text                |

## Typography

- **Headings:** Poppins (weights: 700, 900)
- **Body:** Open Sans (weights: 400, 600)
- **Scale:** Mobile-first responsive sizing

## Shared Components

### Navigation
- White background with subtle box shadow
- Logo (hummingbird + "ELEVATE") on the left
- Links on the right: Home, About, Services, Contact
- Hamburger menu on mobile with slide-out or dropdown
- Active page indicator

### Footer
- Dark background (#161616)
- Logo, quick links, contact info (phone + email), copyright
- Simple, clean layout

### CTA Banners
- Blue background sections with white text
- Yellow accent button
- Used on every page to drive visitors toward contact

## Page Designs

### Home Page (index.html)

1. **Hero Section**
   - Full-width blue background
   - Two-column layout: headline/CTA on one side, Samantha's headshot on the other
   - Headline: "Real Operational Experience. Practical Business Growth."
   - 1-2 sentence subtext positioning Elevate's value
   - CTA button: "Let's Talk" (links to contact.html), yellow accent
   
2. **Why Elevate Section**
   - White background
   - 3-column grid with icons:
     - "20+ Years of Experience": Built and scaled companies firsthand
     - "Operator, Not Just Advisor": Hands-on leadership, not theory
     - "Oklahoma Roots": Committed to local business community

3. **Services Overview**
   - Light gray (#F6F6F6) background
   - Grid of 8 service cards with short descriptions
   - Each card links to services.html

4. **CTA Banner**
   - Blue background
   - "Ready to Elevate Your Business?" with button to contact.html

### About Page (about.html)

1. **Page Header**
   - Blue background with "About Samantha" heading

2. **Bio Section**
   - Two-column: headshot left, bio text right
   - Full bio rewritten from current site for better flow, SEO, and polish
   - Covers: Cashland/Borrow Money Now journey, the sale, founding Elevate

3. **Credentials Section**
   - Cards or clean list:
     - BA in Journalism, University of Oklahoma
     - MBA, Southern Nazarene University
     - President & Membership Chair, Entrepreneurs' Organization OKC

4. **Personal Touch**
   - Short closing paragraph about Oklahoma commitment

5. **CTA Banner**
   - "Let's Work Together" with button to contact.html

### Services Page (services.html)

1. **Page Header**
   - Blue background with "Services" heading and short intro line

2. **Services Grid**
   - 8 service cards, each with:
     - SVG icon (simple line icons, e.g. from a free icon set or inline SVG)
     - Service name heading
     - 2-3 sentence description (rewritten for SEO)
   - Services:
     1. Operational Optimization
     2. Quality Enhancement
     3. Project Implementation
     4. Employee Recognition
     5. Administrative Support
     6. Vendor Cost Analysis
     7. B2B Introductions
     8. Business/Personal Gifting

3. **How It Works Section**
   - 3-step visual process:
     - Step 1: "Schedule a Consultation"
     - Step 2: "Get a Custom Plan"
     - Step 3: "See Results"

4. **CTA Banner**
   - "Not Sure Where to Start?" with button to contact.html

### Contact Page (contact.html)

1. **Page Header**
   - Blue background with "Get in Touch" heading

2. **Two-Column Layout**
   - Left: Contact form (Name, Email, Phone optional, Message, Submit button with yellow accent)
   - Right: Direct contact info
     - Phone: 405.694.2502
     - Email: samantha@letselevateup.com
     - Calendly placeholder for future booking integration

3. **CTA Section**
   - "Prefer to talk? Give Samantha a call." with phone number

## Content Guidelines

- Professional, confident tone that reflects 20+ years of hands-on experience
- SEO-rich copy with natural keyword usage (business consulting, operational optimization, Oklahoma, small business growth, etc.)
- No em-dashes
- Concise, scannable paragraphs
- Strong CTAs that drive toward contact

## Responsive Breakpoints

- **Mobile:** < 768px (single column, hamburger nav)
- **Tablet:** 768px - 1024px (adjusted grid)
- **Desktop:** > 1024px (full layout)

## Contact Info

- **Phone:** 405.694.2502
- **Email:** samantha@letselevateup.com
- **Tagline:** "Your Operations Partner"

## Brand Assets (on disk)

- Logo: `/assets/logo-full.jpg`
- Headshot: `/assets/headshot.png`

## Future Considerations

- Calendly integration for booking
- Testimonials section once available
- Blog/resources section if desired
- Form backend (Formspree, Netlify Forms, or custom)
