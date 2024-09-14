import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const messages = sqliteTable('messages', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	text: text('text').notNull(),
	details: text('details'),
	created_at: text('created_at')
		.notNull()
		.default(sql`(current_timestamp)`),
});
