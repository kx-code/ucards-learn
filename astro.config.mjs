import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { remarkAutoLink } from './src/plugins/remark-auto-link'
import { buildLinkMapping } from './src/plugins/build-link-mapping'

const linkMapping = buildLinkMapping()

export default defineConfig({
  site: 'https://ucards.uk',
  base: '/learn',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [[remarkAutoLink, { mapping: linkMapping }]],
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
