// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://freeinjurycalc.com',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always'
  },
  // Legacy path redirects (/about-us/, etc.) live in public/_redirects as hard 301s
  // instead of Astro's meta-refresh (soft 200) redirects, which Google flagged as duplicates.
  vite: {
    plugins: [tailwindcss()]
  }
});