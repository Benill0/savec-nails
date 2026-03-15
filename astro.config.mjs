// @ts-check
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), icon({
    include: {
      lucide: ['*'],
    },
  })]
});