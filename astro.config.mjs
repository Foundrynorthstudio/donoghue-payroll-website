// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://donoghuepayrollservices.com',
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
