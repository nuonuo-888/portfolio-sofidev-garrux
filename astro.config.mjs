import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";
import edgeoneAdapter from '@edgeone/astro';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  adapter: edgeoneAdapter(),
  integrations: [react(), tailwind(), sitemap()]
});