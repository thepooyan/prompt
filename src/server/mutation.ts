"use server"
import { db } from "@/db"
import { blogsTable, promptsTable } from "@/db/schema"
import { eq } from "drizzle-orm"
import { updateTag } from "next/cache"
import { cacheTags } from "./cache"

export const deletePost = async (id: number) => {
    try {
        await db.delete(blogsTable).where(eq(blogsTable.id, id))
        updateTag(cacheTags.blogs)
        return {ok: true}
    } catch (e) {
        return {ok: false, error:e}
    }
}

export const deletePrompt = async (id: number) => {
    try {
        await db.delete(promptsTable).where(eq(promptsTable.id, id))
        updateTag(cacheTags.prompts)
        return {ok: true}
    } catch (e) {
        return {ok: false, error:e}
    }
}