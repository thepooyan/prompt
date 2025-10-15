import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { env } from "@/server/env";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
  socialProviders: {
    google: {
      clientId: env.googleClientId!,
      clientSecret: env.googleClientSecret!
    },
  }
});
