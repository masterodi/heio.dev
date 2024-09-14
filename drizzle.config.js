import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: './src/server/db/schema.js',
	dialect: 'sqlite',
	driver: 'turso',
	dbCredentials: {
		url: process.env.DATABASE_URL,
		authToken: process.env.DATABASE_AUTH_TOKEN,
	},
});
