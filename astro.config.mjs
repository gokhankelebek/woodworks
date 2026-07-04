import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vegasvoguewoodworks.com',
  integrations: [sitemap()],
  image: {
    // portfolio photos are large Instagram exports; allow quality-focused defaults
    remotePatterns: [],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
