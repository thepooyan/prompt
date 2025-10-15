import { json, z } from "zod"
import "server-only"

const envSchema = z.object({
    BUCKET_NAME: z.string(),
    BUCKET_URL: z.string(),
    BUCKET_KEY: z.string(),
    BUCKET_SECRET: z.string(),
    GTM_ID: z.string(),
    DATABASE_URL: z.string(),
    NODE_ENV: z.enum(["development", "production", "test"]),
    googleClientSecret: z.string(),
    googleClientId: z.string(),
    BETTER_AUTH_SECRET: z.string(),
    BETTER_AUTH_URL: z.string(),
})

if (!process || !process.env) throw new Error("Attemp to access env in client")


export const env = envSchema.parse(process.env)