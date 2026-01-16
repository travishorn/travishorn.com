// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import pagefind from "astro-pagefind";
import { redirectMapping } from './src/redirects.js';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  site: 'https://travishorn.com',

  integrations: [mdx(), sitemap(), pagefind()],

  build: {
    inlineStylesheets: 'always',
  },
  
  markdown: {
    shikiConfig: {
      theme: 'github-dark-high-contrast',
    },
  },

  redirects: redirectMapping
});