'use server';

import db from '~/server/db';
import { messages } from '~/server/db/schema';

export const createMessage = async (payload) => {
	await db.insert(messages).values(payload);
	return 'Message sent';
};
