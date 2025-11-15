import { z } from "zod"

const envSchema = z.object({
    BUCKET_NAME: z.string(),
    BUCKET_URL: z.string(),
    BUCKET_KEY: z.string(),
    BUCKET_SECRET: z.string(),
    NEXT_PUBLIC_GTM_ID: z.string(),
    DATABASE_URL: z.string(),
    NODE_ENV: z.enum(["development", "production", "test"]),
    googleClientSecret: z.string(),
    googleClientId: z.string(),
    BETTER_AUTH_SECRET: z.string(),
    NEXT_PUBLIC_BETTER_AUTH_URL: z.string(),
    GOOGLE_GENERATIVE_AI_API_KEY: z.string()
})

if (!process || !process.env) throw new Error("Attemp to access env in client")


function lazySafeParse<S extends z.ZodObject<any>>(
  schema: S,
  data: unknown
): z.infer<S> {
  const shape = schema.shape
  return new Proxy({} as z.infer<S>, {
    get(_, key: string) {
      if (key in (data as any)) {
        const fieldSchema = shape[key as keyof typeof shape]
        if (fieldSchema) {
          const res = fieldSchema.safeParse((data as any)[key])
          return res.success ? res.data : undefined
        }
        return (data as any)[key]
      }
      return undefined
    }
  })
}

export const env = lazySafeParse(envSchema, process.env)