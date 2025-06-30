// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";


// @ts-ignore
import rehypeAddClasse from "rehype-add-classes"
// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [sitemap(), react()],

  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  markdown: {
    rehypePlugins: [
      [rehypeAddClasse, {
        h1: 'text-3xl font-bold mb-4',
        h2: 'text-2xl font-semibold mt-8 mb-2',
        p: 'mb-4 leading-7 text-justify',
        a: 'text-blue-600 underline hover:text-blue-800',
        ul: 'list-disc list-inside mb-4',
        code: ' text-sm px-1 rounded',
      }]
    ]
  }
});
