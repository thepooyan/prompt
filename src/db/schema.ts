import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { boolean, integer, json, pgEnum, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

const timestapms = {
  updated_at: timestamp().defaultNow(),
}
const pageSeoFields = {
  seoTitle: varchar({length: 255}).default("").notNull(),
  seoDescription: varchar({length: 255}).default("").notNull(),
  seoKeywords: json().default([]).$type<string[]>().notNull(),
}

export const promptTypeEnum = pgEnum('promptType', ['prompt', 'n8n']);
export type promptType = (typeof promptTypeEnum.enumValues)[number]

export const promptCateTable = pgTable("prompt_category", {
  id: uuid().defaultRandom().primaryKey(),
  name: varchar({length: 100}).notNull(),
  slug: varchar({length: 100}).notNull().unique(),
  type: promptTypeEnum().default("prompt").notNull()
})

export type PromptCategory = InferSelectModel<typeof promptCateTable>
export type PromptNewCategory = InferInsertModel<typeof promptCateTable>

export const promptsTable = pgTable("prompts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  type: promptTypeEnum().default("prompt").notNull(),
  category_id: uuid().references(() => promptCateTable.id, {onDelete: "restrict"}).notNull(),
  title: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull(),
  author_id: uuid().references(() => authorsTable.id, {onDelete: "restrict"}).notNull().default("db72e0e5-5a35-48c9-92ed-98c868c83a69"),
  tags: text().notNull(),
  picture: varchar({ length: 255 }).notNull(),
  samplePicture: varchar({ length: 255 }).notNull(),
  isFree: boolean().notNull().default(false),
  isActive: boolean().notNull().default(false),
  excerpt: varchar({ length: 255 }).notNull(),
  description: text().notNull(),
  prompt: text().notNull(),
  ...pageSeoFields,
  ...timestapms
});

export const promptsRelations = relations(promptsTable, ({one}) => ({
  category: one(promptCateTable, {fields: [promptsTable.category_id], references: [promptCateTable.id]}),
  author: one(authorsTable, {fields: [promptsTable.author_id], references: [authorsTable.id]})
}))

export const promptCateRelatins = relations(promptCateTable, ({many}) => ({
  posts: many(promptsTable)
}))

export type Prompt = InferSelectModel<typeof promptsTable>
export type NewPrompt = InferInsertModel<typeof promptsTable>

export const blogsTable = pgTable("blogs", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull(),
  tags: text().notNull(),
  isActive: boolean().notNull().default(false),
  picture: varchar({ length: 255 }).notNull(),
  excerpt: text().notNull(),
  description: text().notNull(),
  ...pageSeoFields,
  ...timestapms
});

export type Blog = InferSelectModel<typeof blogsTable>
export type NewBlog = InferInsertModel<typeof blogsTable>


export const redirectsTable = pgTable("redirects", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  from: varchar({ length: 50 }).notNull(),
  to: varchar({ length: 50 }).notNull(),
})

export type Redirect = InferSelectModel<typeof redirectsTable>
export type NewRedirect = InferInsertModel<typeof redirectsTable>

export const authorsTable = pgTable("authors", (t) => ({
  id: t.uuid().defaultRandom().primaryKey(),
  name: t.varchar({ length: 150 }).notNull(),
  email: t.varchar({ length: 254 }),
  picture: t.varchar({ length: 200 }),
  github: t.varchar({ length: 100 }),
  linkedin: t.varchar({ length: 100 }),
  twitter: t.varchar({ length: 100 }),
  website: t.varchar({ length: 200 })
}));

export type Author = InferSelectModel<typeof authorsTable>
export type NewAuthor = InferInsertModel<typeof authorsTable>
