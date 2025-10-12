// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://lp.nagara-tenjin-seikotsuin.com',
  adapter: node({
    mode: 'middleware'
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
