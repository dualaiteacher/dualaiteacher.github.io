import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dualaiteacher.github.io',
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
});
