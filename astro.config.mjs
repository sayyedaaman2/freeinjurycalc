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
  redirects: {
    '/about-us/': '/about/',
    '/contact-us/': '/contact/',
    '/terms-conditions/': '/terms-of-service/',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});