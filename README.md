# Bhabhare Cakes & Cafe

A premium, modern MVP website for Bhabhare Cakes & Cafe — built with React, Vite, Tailwind CSS, Framer Motion and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Editing business content

Almost everything a cafe owner would want to change lives in one file:

**[`src/data/cafeData.js`](src/data/cafeData.js)**

This includes:

- Phone / WhatsApp numbers, address, hours, Instagram link
- Menu items, prices and descriptions
- Custom cake categories, testimonials, gallery photos

Update the values there and the whole site reflects the change — no need to hunt through components.

> All contact details currently in that file (phone, WhatsApp, address) are **demo placeholders** and must be replaced with the real business information before launch. The map in the Contact section is also a placeholder block — swap it for an embedded Google Map once the exact storefront location is confirmed.

## Project structure

```
src/
  components/       Page sections (Navbar, Hero, MenuSection, Gallery, ...)
  components/ui/    Small reusable building blocks (Button, Logo, Reveal, ...)
  data/cafeData.js  Editable business/demo data
  hooks/            OrderModal context + scroll hook
```

## Notes

- No backend is included — this is a front-end MVP/demo. The order and "Design Your Cake" forms validate input, show a success state, and hand off to WhatsApp for the actual enquiry.
- The logo used across the site is a bespoke placeholder mark (in `src/components/ui/Logo.jsx`) matching the brand's purple/yellow/berry palette — swap in the real logo file when available.
