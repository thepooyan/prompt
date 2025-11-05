import { env } from '@/server/env';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schem from "./schema"

export const db = drizzle(env.DATABASE_URL, {schema: schem});