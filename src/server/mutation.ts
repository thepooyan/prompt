"use server"
import { db } from "@/db"
import { blogsTable } from "@/db/schema"
import { eq } from "drizzle-orm"

export const deletePost = async (id: number) => {
    try {
        await db.delete(blogsTable).where(eq(blogsTable.id, id))
        return {ok: true}
    } catch (e) {
        return {ok: false, error:e}
    }
}