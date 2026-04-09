# Elevate Website — Mobile-First UX Refresh

**Date**: 2026-04-09
**Scope**: Mobile experience overhaul + noticeable desktop polish
**Priority page**: Homepage (index.html), then ripple to about, services, contact
**Preserve**: Color scheme (navy/cream/yellow), all written copy, DM Serif Display + DM Sans fonts

---

## 1. Foundation / Global

- **Spacing rhythm**: Standardize section padding to 80px desktop / 56px mobile. Major breaks get 120px / 80px.
- **Container padding**: Mobile goes from 24px to 20px for more content room.
- **Touch targets**: All buttons and interactive elements get minimum 48px height on mobile.
- **`touch-action: manipulation`** on all interactive elements (kills 300ms delay).
- **Focus states**: Add `:focus-visible` with 2px yellow outline offset on all interactive elements.
- **`prefers-reduced-motion`**: Wrap all animations/transitions in a media query. Disable scroll reveals and hero animations for users who opt out.
- **Typography**: Tighten h1 mobile min from 2.5rem to 2.2rem. Slight line-height increase on mobile body text.
- **Highlight fix**: Remove `white-space: nowrap` from `.highlight` to prevent overflow on narrow screens.

## 2. Navigation (Mobile)

- Slide-down transition (~300ms ease-out) instead of instant show/hide.
- Nav link tap targets: 48px height, 16px vertical gap.
- "Let's Talk" CTA: full-width (max-width 280px) in mobile nav.
- Hamburger color consistency when overlay is open.
- Close nav on tap outside link area.

## 3. Hero

### Mobile
- Headshot: 240px → 280px.
- Bring back subtle yellow accent dot/bar near image.
- Increase bottom padding so content breathes above curved divider.
- Buttons: full container width instead of max-width 280px cap.
- More margin between lead paragraph and heading.

### Desktop
- Yellow border frame: offset from -16px to -12px, slightly more opaque.
- Smooth parallax fade-out near threshold instead of abrupt stop.

## 4. "Why Elevate" Section

- Mobile card padding: 28px 24px (proportional to screen).
- Mobile card gap: 20px → 24px.
- Replace translateX hover with universal interaction: border thickens 4px→6px, color shifts blue→yellow, subtle lift + shadow.
- Mobile: center-align section header to match hero flow.
- Skip 2-col tablet intermediate — go 3-col → 1-col directly.

## 5. Services Grid (Homepage)

- Desktop: 4-col → 3-col (cards were too cramped at 4).
- Mobile: 1-col with 16px gap (current) increased to 20px.
- Card padding: increase slightly on mobile for breathing room.
- Card hover: keep the gradient top-border animation, refine the lift/shadow.

## 6. CTA Banner

- Mobile padding: increase vertical space.
- Lead text max-width: widen slightly so it doesn't feel like a narrow column.

## 7. Footer

- Mobile: cleaner single-column stack.
- Footer links: consider horizontal inline layout on mobile to reduce vertical scroll.
- Footer bottom: keep stacked center on mobile, that works.

## 8. Cross-Page Ripple

All foundation changes (spacing, touch, focus, reduced-motion) apply to:
- about.html: about-bio grid, credentials cards
- services.html: service detail cards, steps section
- contact.html: form inputs (48px min height), contact info items

---

## Technical Approach

- All changes in `css/styles.css` and `js/main.js`
- Light HTML tweaks where needed (no structural rewrites)
- No new dependencies or build tools
- Test targets: 375px (phone), 768px (tablet), 1024px+
