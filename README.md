# FreeInjuryCalc 🚀
> **US & Canadian Car Accident Settlement Calculator Platform**

FreeInjuryCalc is a high-performance, Vercel-inspired personal injury settlement calculator built using **Astro.js** and **Tailwind CSS v4**. Unlike traditional calculators that lock estimations behind lead-generation signups, FreeInjuryCalc is **100% free, anonymous, and requires no contact details**.

---

## 🌟 Key Features

- **Multi-Method Estimation Engine:**
  - **Quick Mode:** Instant calculations using medical bills, property damage, and general pain multipliers.
  - **Detailed Mode:** Comprehensive assessment including lost wages, future medical treatments, and impact severity.
  - **State-Specific Mode:** Custom legal logic matching the user's selected regional jurisdiction.
- **Robust Legal Database (`src/data/states.ts`):**
  - Fully mapped database covering **all 50 US States** and **Ontario (Canada)**.
  - Implements state-specific rules for negligence types (Pure Comparative, 50% Bar, 51% Bar, Contributory, No-Fault PIP).
  - Integrates localized damage caps, insurance limits, and statute of limitations.
- **Interactive SVG Data Visualization:**
  - Dynamic breakdown charts showing the estimated payout distribution (Medical Bills, Lost Wages, General Damages/Pain and Suffering, and Net Payout vs. Legal Fees).
- **On-Page SEO & Schema Optimization:**
  - Dynamic `<meta>` keywords, canonical tags, and Open Graph tags injected via a centralized layout.
  - Interactive FAQ section mapped with Google-compliant `FAQPage` JSON-LD Structured Data schemas.
  - Automatic software schema (`SoftwareApplication` JSON-LD) embedded for search rich snippets.
- **Monetization & AdSense Readiness:**
  - Fully AdSense-compliant footer and menubar links pointing to custom **About Us**, **Contact Us**, **Privacy Policy**, and **Terms & Conditions** routes.
- **Deployment-Ready Assets:**
  - Programmatic `sitemap.xml` listing all 56 routes.
  - Compliant `robots.txt` configuration.
  - Custom `_headers` configuration for Cloudflare Pages (handling security headers and asset caching).

---

## 📂 Project Architecture

```text
/
├── public/                  # Static assets & platform configuration
│   ├── _headers             # Cloudflare Pages security & caching headers
│   ├── robots.txt           # Crawler instructions
│   └── sitemap.xml          # Search indexing directory map
├── src/
│   ├── components/          # Reusable Astro UI components
│   │   ├── Calculator.astro # The core interactive calculation forms
│   │   ├── Header.astro     # Desktop & mobile navigation menubar
│   │   ├── Footer.astro     # Responsive compliance links & footer logo
│   │   ├── SeoContent.astro # Detailed 800+ word copy and SEO accordion
│   │   └── StateDirectory.astro # Home page grid directing to state sub-pages
│   ├── data/
│   │   └── states.ts        # 50 US States + Ontario legal rules database
│   ├── layouts/
│   │   └── Layout.astro     # Global layout (analytics, JSON-LD, typography)
│   ├── pages/               # Routing directories
│   │   ├── index.astro      # Primary homepage calculator route
│   │   ├── [state]-car-accident-settlement-calculator.astro # State landings
│   │   ├── 404.astro        # Custom 404 error page
│   │   ├── 500.astro        # Custom 500 server error page
│   │   ├── about-us.astro   # About us disclosure
│   │   ├── contact-us.astro # Customer contact form
│   │   ├── privacy-policy.astro # AdSense-compliant privacy guidelines
│   │   └── terms-conditions.astro # Website usage disclaimers
│   └── styles/
│       └── global.css       # Core Tailwind CSS v4 styling & dark theme variables
├── package.json             # Build commands & dependencies
└── astro.config.mjs         # Astro framework configuration
```

---

## ⚙️ How the Negligence Engine Works

The calculation engine dynamically scales final estimates according to local negligence laws:

| Negligence System | Description | Example States |
| :--- | :--- | :--- |
| **Pure Comparative** | Recovery is reduced by the user's fault % (e.g., 90% fault still yields 10% recovery). | California, New York, Florida |
| **Modified Comparative (50%)** | User recovers nothing if their fault is 50% or higher. | Ohio, Colorado |
| **Modified Comparative (51%)** | User recovers nothing if their fault is 51% or higher. | Texas, Georgia, Illinois |
| **Pure Contributory** | User recovers nothing if they are even 1% at fault. | North Carolina, Virginia, Maryland |
| **Ontario No-Fault System** | Governed by statutory deductibles and PIP rules. | Ontario (Canada) |

---

## 🛠️ CLI Commands

All commands are run from the project root directory:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs framework and tailwind dependencies. |
| `npm run dev` | Starts local dev server at `http://localhost:4321`. |
| `npm run build` | Compiles your production bundle into `./dist/`. |
| `npm run preview` | Runs a local web server to preview static build output. |
| `npm run astro ...` | Invokes native Astro CLI operations (e.g., `astro check`). |

---

## 📈 Search Console & Sitemap Maintenance

A custom sitemap generator script is included in the project history. If you add additional provinces or international regions to `src/data/states.ts`, you can update the sitemap contents by regenerating the URLs array and executing the sitemap writer:

```bash
node .agents/scratch/generate_sitemap.js
```
This updates `public/sitemap.xml` which is copied into the build output on compile.
