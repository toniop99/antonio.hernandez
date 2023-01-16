import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import critters from 'astro-critters'
import prefetch from '@astrojs/prefetch'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
	site: 'https://antoniohnz.me/',
	server: {
		host: true
	},
	integrations: [
		tailwind(),
		critters(),
		prefetch(),
		sitemap({
			lastmod: new Date()
		})
	]
})
