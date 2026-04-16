import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dualaiteacher.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['cs', 'de', 'en', 'es', 'gb', 'lv', 'pl', 'sk', 'sl'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
