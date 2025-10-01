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

export const blogsTable = pgTable("blogs", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull(),
  tags: text().notNull(),
  picture: varchar({ length: 255 }).notNull(),
  excerpt: text().notNull(),
  description: text().notNull(),
  canonical: varchar({length: 255}),
  //to add: og {title, secs, image, url, site_name}, seo: {title, des}, canonical, schema, author: {name, image, id, socials}
});

export type Blog = InferSelectModel<typeof blogsTable>
export type NewBlog = InferInsertModel<typeof blogsTable>