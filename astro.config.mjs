import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	integrations: [react()],
});
