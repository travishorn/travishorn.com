// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  site: 'https://travishorn.com',

  integrations: [mdx(), sitemap()],

  build: {
    inlineStylesheets: 'always',
  },
  
  markdown: {
    shikiConfig: {
      theme: 'github-dark-high-contrast',
    },
  },
});