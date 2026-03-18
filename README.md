## Real Estate (Nestora)

A modern real estate website built with **Next.js App Router** + **Tailwind CSS**, with a homepage hero search bar, featured properties, and a modern property details page.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

Build and run production:

```bash
npm run build
npm run start
```

## Tech Stack

- **Next.js** (App Router)
- **React**
- **Tailwind CSS**
- **Headless UI** (`@headlessui/react`) for accessible dropdowns
- **React Icons**

## Pages & Routes

- **Homepage**: `src/app/homepage/page.tsx`
  - `Hero` includes the search bar at the **bottom** of the hero section.
  - Services and featured sections live under `src/app/homepage/components/`.
- **Property details**: `src/app/properties/[id]/page.tsx`
  - Modernized layout with a sticky top bar, hero image overlay, spec cards, and a sticky sidebar on desktop.

## Key UI Behaviors

- **Navbar scroll behavior**: `src/components/navbar.tsx`
  - Default background is **transparent** at the top.
  - After scrolling past **100px**, the navbar background becomes **white**.

- **Hero search bar**: `src/app/homepage/components/hero.tsx`
  - Search filters are anchored to the **bottom** of the hero.
  - Filters include:
    - Looking for (Apartment, House, Land, Office, Retail, Town house, Warehouse)
    - Location (Accra, East Legon, Teshie, Achimota)
    - Price range
    - Property type (For sale, For rent)

- **Dropdown component**: `src/app/homepage/components/searchDropdown.tsx`
  - Supports a **placeholder** state (shows placeholder until a selection is made).

## Images (Next.js `next/image`)

This project uses `next/image`. Remote image hosts must be allowed in `next.config.ts`.

Configured hosts: `landingfoliocom.imgix.net`, `cdn.rareblocks.xyz`, `res.cloudinary.com`, `images.unsplash.com`

File: `next.config.ts`

## Project Structure (high level)

- `src/app/` — routes and page components (App Router)
- `src/components/` — shared UI components (e.g., navbar, cards)
- `src/shared/` — layout wrappers and shared composition
- `public/` — static assets (e.g., hero background image)

## Notes

- If you change `next.config.ts` (e.g., image hosts), you must **restart** the dev server for changes to take effect.

