import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { env } from "@/server/env";
import * as authSchema from "@/db/auth-schema"

export const auth = betterAuth({
  database: drizzleAdapter(db, {
      provider: "pg",
      schema: authSchema
  }),
  socialProviders: {
    google: {
      enabled: true,
      clientId: env.googleClientId!,
      clientSecret: env.googleClientSecret!
    },
  },
  emailAndPassword: {
    enabled: true
  }
});
