# SynergyCloud

A responsive marketing landing page for SynergyCloud — a team collaboration platform. Built with Next.js 16, React 19, Tailwind CSS v4, and TypeScript.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.6 | React framework, routing, font optimization |
| React | 19.2.4 | UI library |
| TypeScript | 5 | Static typing |
| Tailwind CSS | 4 | Utility-first styling |
| Lucide React | 1.14.0 | Icon library |
| React Hook Form | 7.76.0 | Form state management |
| Yup | 1.7.1 | Schema-based form validation |
| @hookform/resolvers | 5.2.2 | Bridge between RHF and Yup |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Scripts

```bash
npm run build   # production build
npm run start   # start production server
npm run lint    # run ESLint
```

---

## Folder Structure

```
synergycloud/
├── public/                     # Static assets served at root
│   └── *.svg
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── favicon.ico
│   │   ├── globals.css         # Global styles, Tailwind imports, @theme tokens, keyframes
│   │   ├── layout.tsx          # Root layout — fonts, metadata, Header
│   │   └── page.tsx            # Home route — renders HomePage
│   │
│   ├── assets/                 # Static media used in components
│   │   ├── gifs/
│   │   │   └── form-gif.gif
│   │   ├── images/
│   │   │   ├── about1.png
│   │   │   ├── about2.png
│   │   │   ├── hero-bg.png
│   │   │   ├── logo.svg
│   │   │   ├── user1–5.svg
│   │   │   └── ...
│   │   └── CustomIcons.tsx     # Inline SVG icon components (plan logos, contact icons, etc.)
│   │
│   ├── components/
│   │   ├── features/           # Page-specific section components
│   │   │   └── home/
│   │   │       ├── index.tsx           # Home page composition — assembles all sections
│   │   │       ├── HeroSection.tsx     # Hero banner
│   │   │       ├── AboutSection.tsx    # About Us section
│   │   │       ├── HoverEffect.tsx     # Interactive image/text swap panel (desktop hover)
│   │   │       ├── PricingSection.tsx  # Pricing cards section
│   │   │       ├── Testimonialas.tsx   # Auto-scrolling testimonials slider
│   │   │       ├── SignupSection.tsx   # Signup form with validation
│   │   │       └── ContactUs.tsx       # Contact form with validation
│   │   │
│   │   └── shared/             # Reusable components used across sections
│   │       ├── Button.tsx          # Polymorphic button — renders as <button> or <Link>
│   │       ├── Header.tsx          # Sticky responsive header with mobile drawer
│   │       ├── Footer.tsx          # Site footer
│   │       ├── FormInput.tsx       # Reusable input with label, error display, peer-focus styles
│   │       ├── PriceCard.tsx       # Individual pricing card with hover state
│   │       ├── TestiminialsCard.tsx # Individual testimonial card
│   │       ├── SectionHeading.tsx  # Shared section heading typography
│   │       └── HeroHeading.tsx     # Hero-specific heading component
│   │
│   └── lib/
│       └── schemas.ts          # All Yup validation schemas and inferred TypeScript types
│
├── next.config.ts
├── tailwind.config / postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## Pages & Sections

The home page (`src/app/page.tsx`) renders `HomePage` from `src/components/features/home/index.tsx`, which composes the following sections in order:

1. **HeroSection** — full-width banner with headline and CTA
2. **AboutSection** — two-column layout with interactive image panel (hover effect on desktop)
3. **PricingSection** — three pricing cards with hover state transitions
4. **Testimonials** — infinite auto-scrolling card slider, pauses on hover
5. **SignupSection** — signup form with name, email, and password fields
6. **ContactUs** — contact form with info panel and message textarea
7. **Footer**

---

## Font Setup

Fonts are loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables:

| Font | CSS Variable | Tailwind Class | Usage |
|---|---|---|---|
| DM Sans | `--font-dm-sans` | `font-sans` | Default body font |
| Montserrat | `--font-montserrat` | `font-display` | Section headings |
| Roboto | `--font-roboto` | `font-roboto` | Card text |
| Poppins | `--font-poppins` | `font-poppins` | Contact section heading |

All variables are registered in `globals.css` under `@theme inline` so Tailwind utility classes resolve to the self-hosted font.

---

## Form Validation

Two forms use shared validation — the **Signup** form and the **Contact Us** form.

### Libraries

- **`react-hook-form`** — manages form state using uncontrolled inputs (ref-based). Does not re-render on every keystroke, making it more performant than controlled form approaches.
- **`yup`** — defines validation rules as a schema object outside the component. Rules are declarative and chainable.
- **`@hookform/resolvers`** — connects the Yup schema to `react-hook-form` via `yupResolver()`.

### Schema File

All schemas live in one place: `src/lib/schemas.ts`

```ts
// Signup — name, email, password
export const signupSchema = yup.object({ ... })
export type SignupFormData = yup.InferType<typeof signupSchema>

// Contact — firstName, lastName, email, phone, message
export const contactSchema = yup.object({ ... })
export type ContactFormData = yup.InferType<typeof contactSchema>
```

`yup.InferType` derives TypeScript types directly from the schema — types and validation rules are never written twice.

### Yup Methods Used

| Method | Rule enforced |
|---|---|
| `.string()` | Field must be a string |
| `.required(msg)` | Field cannot be empty |
| `.min(n, msg)` | Minimum character length |
| `.email(msg)` | Must be a valid email format |
| `.matches(regex, msg)` | Must match a regular expression (used for phone number) |

### How It Works

```
User submits form
      ↓
handleSubmit() intercepts — runs yupResolver
      ↓
Valid → onSubmit(data) called with typed, clean data
Invalid → errors object populated, messages shown under each field
```

Validation runs on submit by default. Error messages clear field-by-field as the user corrects their input. Submitted data is currently logged to the console (`console.log`) as a placeholder for API integration.

### Reusable `FormInput` Component

`FormInput` uses `forwardRef` so `react-hook-form`'s `register()` can attach its ref to the underlying input. It also implements a CSS-only label focus effect using Tailwind's `peer` / `peer-focus:` utilities — no JavaScript required for the label animation.
