# Elevate Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a professional, SEO-rich 4-page static website for Elevate, a business consulting firm founded by Samantha Bentson.

**Architecture:** Vanilla HTML/CSS/JS with no frameworks or build tools. Four HTML pages (Home, About, Services, Contact) sharing one CSS file and one JS file. Responsive design using CSS Grid and Flexbox with mobile-first breakpoints.

**Tech Stack:** HTML5, CSS3 (custom properties, Grid, Flexbox), vanilla JavaScript, Google Fonts (Poppins + Open Sans)

---

## File Structure

```
elevate-website/
├── index.html          (Home page)
├── about.html          (About page)
├── services.html       (Services page)
├── contact.html        (Contact page)
├── css/
│   └── styles.css      (All styles)
├── js/
│   └── main.js         (Nav toggle + form handling)
├── assets/
│   ├── logo-full.jpg   (Already exists)
│   ├── headshot.png     (Already exists)
│   └── logo.jpg         (Already exists)
└── docs/
    └── superpowers/
        ├── specs/
        │   └── 2026-03-31-elevate-website-design.md
        └── plans/
            └── 2026-03-31-elevate-website.md
```

---

### Task 1: Initialize Git Repository and Project Structure

**Files:**
- Create: `.gitignore`
- Create: `css/` directory
- Create: `js/` directory

- [ ] **Step 1: Initialize git repo and create .gitignore**

```bash
cd /Users/caleb/Desktop/elevate-website
git init
```

Create `.gitignore`:

```
.DS_Store
*.swp
*.swo
*~
.vscode/
.idea/
node_modules/
```

- [ ] **Step 2: Create directory structure**

```bash
mkdir -p css js
```

- [ ] **Step 3: Initial commit**

```bash
git add .
git commit -m "chore: initialize project with assets and design spec"
```

---

### Task 2: Create Shared Stylesheet

**Files:**
- Create: `css/styles.css`

- [ ] **Step 1: Create the complete CSS file**

Create `css/styles.css` with the following content:

```css
/* ============================================
   Elevate Website - Shared Styles
   ============================================ */

/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@700;900&display=swap');

/* Custom Properties */
:root {
  --primary: #4682B4;
  --primary-dark: #3A6F99;
  --primary-light: #5A9FD4;
  --accent: #FAF22B;
  --accent-hover: #E8E025;
  --white: #FFFFFF;
  --light-gray: #F6F6F6;
  --dark: #161616;
  --text: #333333;
  --text-light: #555555;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --shadow-hover: 0 4px 16px rgba(0, 0, 0, 0.15);
  --radius: 8px;
  --transition: 0.3s ease;
  --max-width: 1200px;
}

/* Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: var(--text);
  background-color: var(--white);
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--primary);
  text-decoration: none;
  transition: color var(--transition);
}

a:hover {
  color: var(--primary-dark);
}

ul {
  list-style: none;
}

/* Typography */
h1, h2, h3, h4 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  line-height: 1.2;
  color: var(--dark);
}

h1 {
  font-size: 2.75rem;
  font-weight: 900;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.25rem;
}

p {
  margin-bottom: 1rem;
}

/* Layout */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  padding: 80px 0;
}

.section--gray {
  background-color: var(--light-gray);
}

.section--blue {
  background-color: var(--primary);
  color: var(--white);
}

.section--blue h2,
.section--blue h3,
.section--blue p {
  color: var(--white);
}

.section__header {
  text-align: center;
  margin-bottom: 48px;
}

.section__header p {
  max-width: 640px;
  margin: 16px auto 0;
  color: var(--text-light);
  font-size: 1.1rem;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 14px 32px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all var(--transition);
  text-align: center;
}

.btn--accent {
  background-color: var(--accent);
  color: var(--dark);
}

.btn--accent:hover {
  background-color: var(--accent-hover);
  color: var(--dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}

.btn--white {
  background-color: var(--white);
  color: var(--primary);
}

.btn--white:hover {
  background-color: var(--light-gray);
  color: var(--primary-dark);
  transform: translateY(-2px);
}

.btn--outline {
  background-color: transparent;
  color: var(--white);
  border: 2px solid var(--white);
}

.btn--outline:hover {
  background-color: var(--white);
  color: var(--primary);
}

/* ============================================
   Navigation
   ============================================ */
.nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--white);
  box-shadow: var(--shadow);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.nav__logo img {
  height: 48px;
  width: auto;
}

.nav__links {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav__links a {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--dark);
  position: relative;
  padding-bottom: 4px;
}

.nav__links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: width var(--transition);
}

.nav__links a:hover::after,
.nav__links a.active::after {
  width: 100%;
}

.nav__links a.active {
  color: var(--primary);
}

.nav__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 4px;
}

.nav__toggle span {
  display: block;
  width: 26px;
  height: 3px;
  background-color: var(--dark);
  border-radius: 2px;
  transition: all var(--transition);
}

.nav__toggle.open span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.nav__toggle.open span:nth-child(2) {
  opacity: 0;
}

.nav__toggle.open span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* ============================================
   Hero Section
   ============================================ */
.hero {
  background-color: var(--primary);
  color: var(--white);
  padding: 80px 0;
  overflow: hidden;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.hero__content h1 {
  color: var(--white);
  margin-bottom: 20px;
}

.hero__content p {
  font-size: 1.15rem;
  line-height: 1.8;
  margin-bottom: 32px;
  opacity: 0.95;
}

.hero__image {
  display: flex;
  justify-content: center;
}

.hero__image img {
  width: 380px;
  height: 380px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

/* ============================================
   Why Elevate Section
   ============================================ */
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.why-card {
  text-align: center;
  padding: 32px 24px;
}

.why-card__icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
  background-color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.why-card__icon svg {
  width: 28px;
  height: 28px;
  fill: var(--white);
}

.why-card h3 {
  margin-bottom: 12px;
}

.why-card p {
  color: var(--text-light);
  font-size: 0.95rem;
}

/* ============================================
   Services Grid
   ============================================ */
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.service-card {
  background-color: var(--white);
  border-radius: var(--radius);
  padding: 32px 24px;
  box-shadow: var(--shadow);
  transition: all var(--transition);
  text-align: center;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.service-card__icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 16px;
  background-color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-card__icon svg {
  width: 24px;
  height: 24px;
  fill: var(--white);
}

.service-card h3 {
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.service-card p {
  font-size: 0.9rem;
  color: var(--text-light);
}

/* Services page - wider cards with more detail */
.services-detail-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.service-detail-card {
  background-color: var(--white);
  border-radius: var(--radius);
  padding: 40px 32px;
  box-shadow: var(--shadow);
  transition: all var(--transition);
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.service-detail-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}

.service-detail-card__icon {
  width: 56px;
  height: 56px;
  min-width: 56px;
  background-color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-detail-card__icon svg {
  width: 24px;
  height: 24px;
  fill: var(--white);
}

.service-detail-card h3 {
  margin-bottom: 8px;
}

.service-detail-card p {
  font-size: 0.95rem;
  color: var(--text-light);
  margin-bottom: 0;
}

/* ============================================
   How It Works
   ============================================ */
.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  text-align: center;
}

.step__number {
  width: 56px;
  height: 56px;
  margin: 0 auto 16px;
  background-color: var(--accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--dark);
}

.step h3 {
  margin-bottom: 8px;
}

.step p {
  color: var(--text-light);
  font-size: 0.95rem;
}

/* ============================================
   CTA Banner
   ============================================ */
.cta-banner {
  background-color: var(--primary);
  color: var(--white);
  padding: 64px 0;
  text-align: center;
}

.cta-banner h2 {
  color: var(--white);
  margin-bottom: 24px;
}

/* ============================================
   Page Header
   ============================================ */
.page-header {
  background-color: var(--primary);
  color: var(--white);
  padding: 56px 0;
  text-align: center;
}

.page-header h1 {
  color: var(--white);
  font-size: 2.5rem;
}

/* ============================================
   About Page
   ============================================ */
.about-bio {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 48px;
  align-items: start;
}

.about-bio__image img {
  width: 100%;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.about-bio__text h2 {
  margin-bottom: 20px;
  color: var(--primary);
}

.credentials {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.credential-card {
  text-align: center;
  padding: 32px 24px;
  background-color: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.credential-card__icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  background-color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.credential-card__icon svg {
  width: 22px;
  height: 22px;
  fill: var(--white);
}

.credential-card h3 {
  font-size: 1.05rem;
  margin-bottom: 8px;
}

.credential-card p {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 0;
}

/* ============================================
   Contact Page
   ============================================ */
.contact-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 48px;
  align-items: start;
}

.contact-form {
  background-color: var(--white);
  border-radius: var(--radius);
  padding: 40px;
  box-shadow: var(--shadow);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 6px;
  color: var(--dark);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #E0E0E0;
  border-radius: var(--radius);
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: var(--text);
  transition: border-color var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
}

.form-group textarea {
  min-height: 140px;
  resize: vertical;
}

.form-group .optional {
  font-size: 0.85rem;
  color: var(--text-light);
  font-weight: 400;
}

.contact-info {
  padding: 40px;
}

.contact-info__item {
  margin-bottom: 32px;
}

.contact-info__item h3 {
  margin-bottom: 8px;
  color: var(--primary);
}

.contact-info__item a {
  font-size: 1.1rem;
  font-weight: 600;
}

.contact-info__item p {
  color: var(--text-light);
  font-size: 0.95rem;
}

.contact-cta {
  text-align: center;
  padding: 48px 0;
}

.contact-cta p {
  font-size: 1.15rem;
}

.contact-cta a {
  font-weight: 700;
  color: var(--primary);
}

/* ============================================
   Footer
   ============================================ */
.footer {
  background-color: var(--dark);
  color: rgba(255, 255, 255, 0.7);
  padding: 48px 0 24px;
}

.footer__inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 32px;
}

.footer__brand img {
  height: 40px;
  margin-bottom: 12px;
}

.footer__brand p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}

.footer h4 {
  color: var(--white);
  font-size: 1rem;
  margin-bottom: 16px;
}

.footer__links a {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.footer__links a:hover {
  color: var(--white);
}

.footer__contact p,
.footer__contact a {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  display: block;
  margin-bottom: 8px;
}

.footer__contact a:hover {
  color: var(--white);
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 24px;
  text-align: center;
  font-size: 0.85rem;
}

/* ============================================
   Responsive Design
   ============================================ */

/* Tablet */
@media (max-width: 1024px) {
  h1 { font-size: 2.25rem; }
  h2 { font-size: 1.75rem; }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer__inner {
    grid-template-columns: 1fr 1fr;
  }
}

/* Mobile */
@media (max-width: 768px) {
  h1 { font-size: 1.85rem; }
  h2 { font-size: 1.5rem; }

  .section { padding: 56px 0; }

  /* Mobile Nav */
  .nav__toggle {
    display: flex;
  }

  .nav__links {
    display: none;
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--white);
    padding: 24px;
    gap: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .nav__links.open {
    display: flex;
  }

  /* Hero */
  .hero { padding: 48px 0; }

  .hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__image {
    order: -1;
  }

  .hero__image img {
    width: 260px;
    height: 260px;
  }

  .hero__content .btn {
    width: 100%;
    max-width: 300px;
  }

  /* Why Elevate */
  .why-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  /* Services */
  .services-grid {
    grid-template-columns: 1fr;
  }

  .services-detail-grid {
    grid-template-columns: 1fr;
  }

  .service-detail-card {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  /* Steps */
  .steps {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  /* About */
  .about-bio {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .about-bio__image img {
    max-width: 300px;
    margin: 0 auto;
  }

  .about-bio__text {
    text-align: left;
  }

  .credentials {
    grid-template-columns: 1fr;
  }

  /* Contact */
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-form {
    padding: 24px;
  }

  /* Footer */
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add css/styles.css
git commit -m "feat: add shared stylesheet with responsive design"
```

---

### Task 3: Create JavaScript File

**Files:**
- Create: `js/main.js`

- [ ] **Step 1: Create the JavaScript file**

Create `js/main.js`:

```javascript
// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');

  if (toggle && links) {
    toggle.addEventListener('click', function() {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });

    // Close menu when a link is clicked
    links.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  // Contact form handling
  var form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      var name = form.querySelector('#name').value.trim();
      var email = form.querySelector('#email').value.trim();
      var message = form.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // Placeholder: replace with actual form submission (Formspree, Netlify Forms, etc.)
      var subject = encodeURIComponent('Elevate Website Inquiry from ' + name);
      var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + (form.querySelector('#phone').value || 'Not provided') + '\n\nMessage:\n' + message);
      window.location.href = 'mailto:samantha@letselevateup.com?subject=' + subject + '&body=' + body;
    });
  }
});
```

- [ ] **Step 2: Commit**

```bash
git add js/main.js
git commit -m "feat: add mobile nav toggle and contact form handler"
```

---

### Task 4: Create Home Page

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create the Home page**

Create `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Elevate | Business Consulting &amp; Operational Strategy in Oklahoma City</title>
  <meta name="description" content="Elevate helps small businesses strengthen operations, improve efficiency, and achieve sustainable growth. Founded by Samantha Bentson, a leader with 20+ years of hands-on experience building and scaling successful companies in Oklahoma.">
  <meta property="og:title" content="Elevate | Business Consulting &amp; Operational Strategy in Oklahoma City">
  <meta property="og:description" content="Elevate helps small businesses strengthen operations, improve efficiency, and achieve sustainable growth.">
  <meta property="og:image" content="assets/logo-full.jpg">
  <meta property="og:type" content="website">
  <link rel="canonical" href="https://letselevateup.com/">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <div class="container nav__inner">
      <a href="index.html" class="nav__logo">
        <img src="assets/logo-full.jpg" alt="Elevate - Your Operations Partner">
      </a>
      <button class="nav__toggle" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="nav__links">
        <a href="index.html" class="active">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="contact.html">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Hero -->
  <section class="hero">
    <div class="container hero__inner">
      <div class="hero__content">
        <h1>Real Operational Experience. Practical Business Growth.</h1>
        <p>Elevate partners with small businesses across Oklahoma to strengthen operations, improve efficiency, and deliver lasting results. With more than 20 years of hands-on leadership, founder Samantha Bentson brings the kind of strategic insight that only comes from building and scaling companies firsthand.</p>
        <a href="contact.html" class="btn btn--accent">Let's Talk</a>
      </div>
      <div class="hero__image">
        <img src="assets/headshot.png" alt="Samantha Bentson, Founder of Elevate">
      </div>
    </div>
  </section>

  <!-- Why Elevate -->
  <section class="section">
    <div class="container">
      <div class="section__header">
        <h2>Why Elevate</h2>
        <p>What sets Elevate apart is the experience behind it. Samantha does not just advise businesses. She has built and run them.</p>
      </div>
      <div class="why-grid">

        <div class="why-card">
          <div class="why-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z"/></svg>
          </div>
          <h3>20+ Years of Experience</h3>
          <p>Samantha built and scaled multiple companies over two decades, including a financial services operation that grew to ten retail locations and a thriving online platform. That depth of experience shapes every engagement.</p>
        </div>

        <div class="why-card">
          <div class="why-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
          </div>
          <h3>Operator, Not Just Advisor</h3>
          <p>Elevate was founded by someone who has led teams, managed day-to-day operations, and driven growth from the inside out. Every recommendation comes from real-world execution, not textbook theory.</p>
        </div>

        <div class="why-card">
          <div class="why-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
          </div>
          <h3>Rooted in Oklahoma</h3>
          <p>Based in Oklahoma City, Samantha is deeply invested in the local business community. She currently serves as President of the Entrepreneurs' Organization Oklahoma City chapter, a global network of nearly 20,000 business owners.</p>
        </div>

      </div>
    </div>
  </section>

  <!-- Services Overview -->
  <section class="section section--gray">
    <div class="container">
      <div class="section__header">
        <h2>How We Help</h2>
        <p>Elevate offers a range of consulting services designed to help your business run smarter, grow faster, and operate more efficiently.</p>
      </div>
      <div class="services-grid">

        <div class="service-card">
          <div class="service-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.14 12.94a7.07 7.07 0 0 0 0-1.88l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.04 7.04 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87a.48.48 0 0 0 .12.61l2.03 1.58a7.07 7.07 0 0 0 0 1.88l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.37 1.03.7 1.62.94l.36 2.54c.05.24.26.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.03-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z"/></svg>
          </div>
          <h3>Operational Optimization</h3>
          <p>Streamline processes, reduce costs, and implement SOPs and KPIs that drive measurable efficiency gains.</p>
        </div>

        <div class="service-card">
          <div class="service-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          </div>
          <h3>Quality Enhancement</h3>
          <p>Improve service quality and customer satisfaction through targeted strategies and staff training programs.</p>
        </div>

        <div class="service-card">
          <div class="service-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/></svg>
          </div>
          <h3>Project Implementation</h3>
          <p>Execute time-sensitive projects with precision, ensuring on-time delivery and effective results.</p>
        </div>

        <div class="service-card">
          <div class="service-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 5h-2V3H7v2H5a2 2 0 0 0-2 2v1a5 5 0 0 0 4.39 4.96A5 5 0 0 0 11 15.9V18H9v2h6v-2h-2v-2.1a5 5 0 0 0 3.61-2.94A5 5 0 0 0 21 8V7a2 2 0 0 0-2-2zM5 8V7h2v3.82A3 3 0 0 1 5 8zm14 0a3 3 0 0 1-2 2.82V7h2v1z"/></svg>
          </div>
          <h3>Employee Recognition</h3>
          <p>Build a stronger company culture through recognition programs, engagement surveys, and retention strategies.</p>
        </div>

        <div class="service-card">
          <div class="service-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 12H4V8h16v10z"/></svg>
          </div>
          <h3>Administrative Support</h3>
          <p>Stay on top of annual filings, state compliance, company events, and training workshops.</p>
        </div>

        <div class="service-card">
          <div class="service-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
          </div>
          <h3>Vendor Cost Analysis</h3>
          <p>Review vendor contracts, identify savings opportunities, and source better rates for the services you need.</p>
        </div>

        <div class="service-card">
          <div class="service-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          </div>
          <h3>B2B Introductions</h3>
          <p>Expand your network through facilitated introductions, vendor meetings, and new client connections.</p>
        </div>

        <div class="service-card">
          <div class="service-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6h-2.18c.11-.31.18-.65.18-1a3 3 0 0 0-3-3c-1.05 0-1.95.54-2.47 1.35L12 4l-.53-.65A2.98 2.98 0 0 0 9 2a3 3 0 0 0-3 3c0 .35.07.69.18 1H4a2 2 0 0 0-2 2v3h20V8a2 2 0 0 0-2-2zm-5-2a1 1 0 1 1 0 2h-2l1.35-1.68c.2-.26.51-.32.65-.32zM9 4a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2h2zM2 19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6H2v6z"/></svg>
          </div>
          <h3>Business &amp; Personal Gifting</h3>
          <p>Strengthen relationships with thoughtful gifting for executives, employees, and key business contacts.</p>
        </div>

      </div>
      <div style="text-align: center; margin-top: 40px;">
        <a href="services.html" class="btn btn--accent">View All Services</a>
      </div>
    </div>
  </section>

  <!-- CTA Banner -->
  <section class="cta-banner">
    <div class="container">
      <h2>Ready to Elevate Your Business?</h2>
      <a href="contact.html" class="btn btn--accent">Get Started</a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__brand">
          <img src="assets/logo-full.jpg" alt="Elevate">
          <p>Your Operations Partner. Helping small businesses across Oklahoma strengthen operations and achieve sustainable growth.</p>
        </div>
        <div class="footer__links">
          <h4>Quick Links</h4>
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="services.html">Services</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer__contact">
          <h4>Contact</h4>
          <a href="tel:4056942502">405.694.2502</a>
          <a href="mailto:samantha@letselevateup.com">samantha@letselevateup.com</a>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; 2026 Elevate. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify layout**

```bash
open index.html
```

Verify: nav renders with logo and links, hero section shows headline + headshot, Why Elevate 3-column grid, services 4-column grid, CTA banner, footer with 3 columns.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add home page with hero, why elevate, services overview, and CTA"
```

---

### Task 5: Create About Page

**Files:**
- Create: `about.html`

- [ ] **Step 1: Create the About page**

Create `about.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Samantha Bentson | Elevate Business Consulting</title>
  <meta name="description" content="Learn about Samantha Bentson, founder of Elevate, and her 20+ years of experience building and scaling successful businesses in Oklahoma City.">
  <meta property="og:title" content="About Samantha Bentson | Elevate">
  <meta property="og:description" content="20+ years of hands-on experience building and scaling businesses. Samantha Bentson founded Elevate to help small businesses grow.">
  <meta property="og:image" content="assets/headshot.png">
  <meta property="og:type" content="website">
  <link rel="canonical" href="https://letselevateup.com/about">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <div class="container nav__inner">
      <a href="index.html" class="nav__logo">
        <img src="assets/logo-full.jpg" alt="Elevate - Your Operations Partner">
      </a>
      <button class="nav__toggle" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="nav__links">
        <a href="index.html">Home</a>
        <a href="about.html" class="active">About</a>
        <a href="services.html">Services</a>
        <a href="contact.html">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Page Header -->
  <section class="page-header">
    <div class="container">
      <h1>About Samantha</h1>
    </div>
  </section>

  <!-- Bio Section -->
  <section class="section">
    <div class="container about-bio">
      <div class="about-bio__image">
        <img src="assets/headshot.png" alt="Samantha Bentson, Founder and CEO of Elevate">
      </div>
      <div class="about-bio__text">
        <h2>Experience That Elevates</h2>
        <p>Samantha Bentson is an entrepreneur, operator, and business strategist with more than two decades of experience building and scaling successful companies. As the founder of Elevate, she partners with small businesses to strengthen operations, improve efficiency, and help leadership teams turn big goals into practical execution.</p>
        <p>Samantha previously served as the Chief Executive Officer of Cashland Holdings, LLC and Borrow Money Now. She led both companies for over 20 years after taking over operations from her father, who founded the business in 1987. Under her leadership, the company experienced significant growth, expanding to ten retail locations across Oklahoma and evolving its financial products from traditional payday lending to a revolving line of credit model, an approach she helped pioneer in the industry.</p>
        <p>Recognizing the shift toward digital services, Samantha launched the company's online lending platform in 2010, now known as Borrow Money Now. The online division gained strong momentum beginning in 2013 and grew into a significant part of the company's operations. Samantha remained closely involved in day-to-day management throughout, including overseeing call center operations and customer experience.</p>
        <p>In 2025, Samantha successfully sold the business to a larger multi-state operator. Following the sale, she launched Elevate to share the operational insight, strategic thinking, and hands-on leadership experience she gained from building and scaling her own companies.</p>
      </div>
    </div>
  </section>

  <!-- Credentials -->
  <section class="section section--gray">
    <div class="container">
      <div class="section__header">
        <h2>Education &amp; Leadership</h2>
      </div>
      <div class="credentials">

        <div class="credential-card">
          <div class="credential-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
          </div>
          <h3>University of Oklahoma</h3>
          <p>Bachelor of Arts in Journalism with a minor in Communications</p>
        </div>

        <div class="credential-card">
          <div class="credential-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
          </div>
          <h3>Southern Nazarene University</h3>
          <p>Master of Business Administration (MBA)</p>
        </div>

        <div class="credential-card">
          <div class="credential-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          </div>
          <h3>Entrepreneurs' Organization OKC</h3>
          <p>President &amp; Membership Chair of the Oklahoma City chapter, part of a global network of nearly 20,000 business owners</p>
        </div>

      </div>
    </div>
  </section>

  <!-- Personal Touch -->
  <section class="section">
    <div class="container" style="max-width: 800px; text-align: center;">
      <h2>Committed to Oklahoma</h2>
      <p style="font-size: 1.1rem; margin-top: 16px;">A lifelong Oklahoma City resident, Samantha is passionate about helping entrepreneurs grow sustainable businesses while maintaining strong operational foundations. Through Elevate, she brings both strategic perspective and real-world execution to the businesses she serves.</p>
    </div>
  </section>

  <!-- CTA Banner -->
  <section class="cta-banner">
    <div class="container">
      <h2>Let's Work Together</h2>
      <a href="contact.html" class="btn btn--accent">Get in Touch</a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__brand">
          <img src="assets/logo-full.jpg" alt="Elevate">
          <p>Your Operations Partner. Helping small businesses across Oklahoma strengthen operations and achieve sustainable growth.</p>
        </div>
        <div class="footer__links">
          <h4>Quick Links</h4>
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="services.html">Services</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer__contact">
          <h4>Contact</h4>
          <a href="tel:4056942502">405.694.2502</a>
          <a href="mailto:samantha@letselevateup.com">samantha@letselevateup.com</a>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; 2026 Elevate. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify layout**

```bash
open about.html
```

Verify: page header with blue background, two-column bio with headshot, credentials grid, personal touch section, CTA banner, footer.

- [ ] **Step 3: Commit**

```bash
git add about.html
git commit -m "feat: add about page with bio, credentials, and personal touch section"
```

---

### Task 6: Create Services Page

**Files:**
- Create: `services.html`

- [ ] **Step 1: Create the Services page**

Create `services.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Business Consulting Services | Elevate - Oklahoma City</title>
  <meta name="description" content="Explore Elevate's consulting services: operational optimization, quality enhancement, project implementation, vendor analysis, employee recognition, and more for Oklahoma businesses.">
  <meta property="og:title" content="Business Consulting Services | Elevate">
  <meta property="og:description" content="Operational optimization, quality enhancement, project management, and more. Consulting services for growing businesses.">
  <meta property="og:image" content="assets/logo-full.jpg">
  <meta property="og:type" content="website">
  <link rel="canonical" href="https://letselevateup.com/services">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <div class="container nav__inner">
      <a href="index.html" class="nav__logo">
        <img src="assets/logo-full.jpg" alt="Elevate - Your Operations Partner">
      </a>
      <button class="nav__toggle" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="nav__links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html" class="active">Services</a>
        <a href="contact.html">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Page Header -->
  <section class="page-header">
    <div class="container">
      <h1>Services</h1>
    </div>
  </section>

  <!-- Intro -->
  <section class="section">
    <div class="container" style="max-width: 800px; text-align: center;">
      <p style="font-size: 1.15rem;">Every business faces different challenges. Elevate offers a range of consulting services designed to help you optimize operations, strengthen your team, and focus on sustainable growth.</p>
    </div>
  </section>

  <!-- Services Detail Grid -->
  <section class="section section--gray" style="padding-top: 0;">
    <div class="container">
      <div class="services-detail-grid">

        <div class="service-detail-card">
          <div class="service-detail-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.14 12.94a7.07 7.07 0 0 0 0-1.88l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.04 7.04 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87a.48.48 0 0 0 .12.61l2.03 1.58a7.07 7.07 0 0 0 0 1.88l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.37 1.03.7 1.62.94l.36 2.54c.05.24.26.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.03-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z"/></svg>
          </div>
          <div>
            <h3>Operational Optimization</h3>
            <p>Efficient operations are the foundation of a profitable business. We analyze your current processes, identify bottlenecks, and implement standardized SOPs and KPIs that reduce costs and improve performance. Whether you need a full operational audit or help with a specific workflow, we bring a practical, results-driven approach.</p>
          </div>
        </div>

        <div class="service-detail-card">
          <div class="service-detail-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          </div>
          <div>
            <h3>Quality Enhancement</h3>
            <p>Your reputation depends on consistent quality. We develop strategies to improve service delivery and customer satisfaction, including staff training programs designed to elevate your team's performance. From mystery shopping programs to customer feedback systems, we help you measure and improve the experience you deliver.</p>
          </div>
        </div>

        <div class="service-detail-card">
          <div class="service-detail-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/></svg>
          </div>
          <div>
            <h3>Project Implementation</h3>
            <p>Some projects are too important to leave to chance. We step in to manage time-sensitive initiatives, providing the structure and accountability needed to keep things on track. From product launches to system implementations, we make sure your projects are completed on time and within scope.</p>
          </div>
        </div>

        <div class="service-detail-card">
          <div class="service-detail-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 5h-2V3H7v2H5a2 2 0 0 0-2 2v1a5 5 0 0 0 4.39 4.96A5 5 0 0 0 11 15.9V18H9v2h6v-2h-2v-2.1a5 5 0 0 0 3.61-2.94A5 5 0 0 0 21 8V7a2 2 0 0 0-2-2zM5 8V7h2v3.82A3 3 0 0 1 5 8zm14 0a3 3 0 0 1-2 2.82V7h2v1z"/></svg>
          </div>
          <div>
            <h3>Employee Recognition</h3>
            <p>Engaged employees build stronger companies. We design and implement recognition programs that improve morale, reduce turnover, and create a culture where people want to do their best work. We also conduct employee satisfaction surveys to identify areas for improvement before small issues become big problems.</p>
          </div>
        </div>

        <div class="service-detail-card">
          <div class="service-detail-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 12H4V8h16v10z"/></svg>
          </div>
          <div>
            <h3>Administrative Support</h3>
            <p>The details matter. We handle annual and state filings, compliance requirements, and administrative tasks that keep your business running smoothly. Need help planning a company event, training session, or workshop? We manage the logistics so you can focus on your team.</p>
          </div>
        </div>

        <div class="service-detail-card">
          <div class="service-detail-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
          </div>
          <div>
            <h3>Vendor Cost Analysis</h3>
            <p>Are you getting the best value from your vendors? We review existing contracts, identify cost-saving opportunities, and source competitive rates for the services your business depends on. Most companies find significant savings they did not know were available.</p>
          </div>
        </div>

        <div class="service-detail-card">
          <div class="service-detail-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          </div>
          <div>
            <h3>B2B Introductions</h3>
            <p>Growth often comes through the right connections. We facilitate introductions between businesses, coordinate vendor meetings, and help you build relationships that lead to new clients and partnerships. Our network spans industries and we are always looking for ways to create value through connection.</p>
          </div>
        </div>

        <div class="service-detail-card">
          <div class="service-detail-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6h-2.18c.11-.31.18-.65.18-1a3 3 0 0 0-3-3c-1.05 0-1.95.54-2.47 1.35L12 4l-.53-.65A2.98 2.98 0 0 0 9 2a3 3 0 0 0-3 3c0 .35.07.69.18 1H4a2 2 0 0 0-2 2v3h20V8a2 2 0 0 0-2-2zm-5-2a1 1 0 1 1 0 2h-2l1.35-1.68c.2-.26.51-.32.65-.32zM9 4a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2h2zM2 19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6H2v6z"/></svg>
          </div>
          <div>
            <h3>Business &amp; Personal Gifting</h3>
            <p>Thoughtful gifting strengthens business relationships. We handle executive-level gifts, employee recognition items (birthdays, anniversaries, achievements), and corporate gifting programs. From selection to delivery, we manage the entire process so every gesture reflects your brand.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- How It Works -->
  <section class="section">
    <div class="container">
      <div class="section__header">
        <h2>How It Works</h2>
      </div>
      <div class="steps">

        <div class="step">
          <div class="step__number">1</div>
          <h3>Schedule a Consultation</h3>
          <p>We start with a conversation about your business, your goals, and where you need support.</p>
        </div>

        <div class="step">
          <div class="step__number">2</div>
          <h3>Get a Custom Plan</h3>
          <p>We develop a tailored plan of action based on your specific challenges and opportunities.</p>
        </div>

        <div class="step">
          <div class="step__number">3</div>
          <h3>See Results</h3>
          <p>We execute alongside your team, delivering measurable improvements and lasting impact.</p>
        </div>

      </div>
    </div>
  </section>

  <!-- CTA Banner -->
  <section class="cta-banner">
    <div class="container">
      <h2>Not Sure Where to Start?</h2>
      <a href="contact.html" class="btn btn--accent">Let's Figure It Out Together</a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__brand">
          <img src="assets/logo-full.jpg" alt="Elevate">
          <p>Your Operations Partner. Helping small businesses across Oklahoma strengthen operations and achieve sustainable growth.</p>
        </div>
        <div class="footer__links">
          <h4>Quick Links</h4>
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="services.html">Services</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer__contact">
          <h4>Contact</h4>
          <a href="tel:4056942502">405.694.2502</a>
          <a href="mailto:samantha@letselevateup.com">samantha@letselevateup.com</a>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; 2026 Elevate. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify layout**

```bash
open services.html
```

Verify: page header, intro text, 2-column services grid with icons, 3-step "How It Works" section, CTA banner, footer.

- [ ] **Step 3: Commit**

```bash
git add services.html
git commit -m "feat: add services page with detailed cards and how-it-works section"
```

---

### Task 7: Create Contact Page

**Files:**
- Create: `contact.html`

- [ ] **Step 1: Create the Contact page**

Create `contact.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us | Elevate Business Consulting - Oklahoma City</title>
  <meta name="description" content="Get in touch with Elevate to discuss how we can help your business grow. Call 405.694.2502 or fill out our contact form to schedule a consultation.">
  <meta property="og:title" content="Contact Us | Elevate">
  <meta property="og:description" content="Ready to elevate your business? Reach out to Samantha Bentson for a consultation.">
  <meta property="og:image" content="assets/logo-full.jpg">
  <meta property="og:type" content="website">
  <link rel="canonical" href="https://letselevateup.com/contact">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <div class="container nav__inner">
      <a href="index.html" class="nav__logo">
        <img src="assets/logo-full.jpg" alt="Elevate - Your Operations Partner">
      </a>
      <button class="nav__toggle" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="nav__links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="contact.html" class="active">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Page Header -->
  <section class="page-header">
    <div class="container">
      <h1>Get in Touch</h1>
    </div>
  </section>

  <!-- Contact Grid -->
  <section class="section">
    <div class="container contact-grid">

      <div class="contact-form">
        <h2 style="margin-bottom: 24px;">Send a Message</h2>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="Your full name">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="you@example.com">
          </div>
          <div class="form-group">
            <label for="phone">Phone <span class="optional">(optional)</span></label>
            <input type="tel" id="phone" name="phone" placeholder="405-555-1234">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" required placeholder="Tell us about your business and how we can help."></textarea>
          </div>
          <button type="submit" class="btn btn--accent" style="width: 100%;">Send Message</button>
        </form>
      </div>

      <div class="contact-info">
        <div class="contact-info__item">
          <h3>Give Us a Call</h3>
          <a href="tel:4056942502">405.694.2502</a>
        </div>
        <div class="contact-info__item">
          <h3>Send an Email</h3>
          <a href="mailto:samantha@letselevateup.com">samantha@letselevateup.com</a>
        </div>
        <div class="contact-info__item">
          <h3>Book a Meeting</h3>
          <p>Online scheduling coming soon. In the meantime, give us a call or send a message to set up a time.</p>
        </div>
      </div>

    </div>
  </section>

  <!-- CTA -->
  <section class="section section--gray contact-cta">
    <div class="container">
      <p>Prefer to talk? Give Samantha a call at <a href="tel:4056942502">405.694.2502</a>.</p>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__brand">
          <img src="assets/logo-full.jpg" alt="Elevate">
          <p>Your Operations Partner. Helping small businesses across Oklahoma strengthen operations and achieve sustainable growth.</p>
        </div>
        <div class="footer__links">
          <h4>Quick Links</h4>
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="services.html">Services</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer__contact">
          <h4>Contact</h4>
          <a href="tel:4056942502">405.694.2502</a>
          <a href="mailto:samantha@letselevateup.com">samantha@letselevateup.com</a>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; 2026 Elevate. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify layout**

```bash
open contact.html
```

Verify: page header, contact form with all fields, contact info sidebar, CTA section, footer. Test form validation (try submitting with empty fields).

- [ ] **Step 3: Commit**

```bash
git add contact.html
git commit -m "feat: add contact page with form and direct contact info"
```

---

### Task 8: Browser Verification and Final Polish

**Files:**
- Possibly modify: `css/styles.css` (minor adjustments based on visual review)

- [ ] **Step 1: Open each page and verify desktop layout**

```bash
open index.html
```

Check each page for: proper nav highlighting, consistent spacing, readable typography, working links between pages, footer alignment.

- [ ] **Step 2: Test mobile responsive layout**

Open Chrome DevTools (Cmd+Option+I), toggle device toolbar (Cmd+Shift+M), and check each page at 375px width. Verify:
- Hamburger menu appears and toggles
- Hero stacks vertically with image on top
- Service cards stack to single column
- Contact form is full width
- Footer stacks properly

- [ ] **Step 3: Test all navigation links**

Click through every link on every page:
- Nav links: Home, About, Services, Contact (on each page)
- Footer links: same set
- CTA buttons: all should link to contact.html
- "View All Services" on home page should link to services.html
- Contact form submit should open mailto

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: final verification and polish"
```

Only commit if changes were made during polish. If no changes needed, skip this step.
