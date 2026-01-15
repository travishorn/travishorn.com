// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import pagefind from "astro-pagefind";

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
});