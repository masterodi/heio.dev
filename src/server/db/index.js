import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

const databaseUrl = process.env.DATABASE_URL;
const databaseAuthToken = process.env.DATABASE_AUTH_TOKEN;

const client = createClient({ url: databaseUrl, authToken: databaseAuthToken });

const db = drizzle(client, { schema });

export default db;
