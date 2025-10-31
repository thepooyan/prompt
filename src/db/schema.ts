import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { boolean, integer, json, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

const timestapms = {
  updated_at: timestamp().defaultNow(),
}
const pageSeoFields = {
  canonical: varchar({length: 255}).default("").notNull(),
  seoTitle: varchar({length: 255}).default("").notNull(),
  seoDescription: varchar({length: 255}).default("").notNull(),
  seoKeywords: json().default([]).$type<string[]>().notNull(),
}

export const promptCateTable = pgTable("prompt_category", {
  id: uuid().defaultRandom().primaryKey(),
  name: varchar({length: 100}).notNull(),
  slug: varchar({length: 100}).notNull().unique()
})

export type Category = InferSelectModel<typeof promptCateTable>
export type NewCategory = InferInsertModel<typeof promptCateTable>

export const promptsTable = pgTable("prompts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  category_id: uuid().references(() => promptCateTable.id, {onDelete: "restrict"}),
  title: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull(),
  tags: text().notNull(),
  picture: varchar({ length: 255 }).notNull(),
  isFree: boolean().notNull().default(false),
  description: text().notNull(),
  prompt: text().notNull(),
  ...pageSeoFields,
  ...timestapms
});

export const promptsRelations = relations(promptsTable, ({one}) => ({
  category: one(promptCateTable, {fields: [promptsTable.category_id], references: [promptCateTable.id]})
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
  picture: varchar({ length: 255 }).notNull(),
  excerpt: text().notNull(),
  description: text().notNull(),
  ...pageSeoFields,
  ...timestapms
});

export type Blog = InferSelectModel<typeof blogsTable>
export type NewBlog = InferInsertModel<typeof blogsTable>
