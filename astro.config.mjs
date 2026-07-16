import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dualaiteacher.eu',

  i18n: {
    defaultLocale: 'en',
    locales: ['cs', 'de', 'en', 'es', 'gl', 'lv', 'pl', 'sk', 'sl'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});