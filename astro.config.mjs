import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dualaiteacher.eu',

  i18n: {
    defaultLocale: 'en',
    locales: ['cs', 'de', 'en', 'es', 'gb', 'lv', 'pl', 'sk', 'sl'],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});