import { z } from "zod"

const envSchema = z.object({
    BUCKET_NAME: z.string(),
    BUCKET_URL: z.string(),
    BUCKET_KEY: z.string(),
    BUCKET_SECRET: z.string(),
    NEXT_PUBLIC_GTM_ID: z.string(),
    DATABASE_URL: z.string(),
    NODE_ENV: z.enum(["development", "production", "test"]),
})

if (!process || !process.env) throw new Error("Attemp to access env in client")

export const env = envSchema.parse(process.env)