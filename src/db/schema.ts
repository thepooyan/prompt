import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { boolean, integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

// export const promptsTable = pgTable("prompts", {
//   id: integer().primaryKey().generatedAlwaysAsIdentity(),
//   name: varchar({ length: 255 }).notNull(),
//   age: integer().notNull(),
//   email: varchar({ length: 255 }).notNull().unique(),
// });

export const promptsTable = pgTable("prompts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull(),
  tags: text().notNull(),
  picture: varchar({ length: 255 }).notNull(),
  isFree: boolean().notNull().default(false),
  description: text().notNull(),
  prompt: text().notNull(),
});

export type Prompt = InferSelectModel<typeof promptsTable>
export type NewPrompt = InferInsertModel<typeof promptsTable>