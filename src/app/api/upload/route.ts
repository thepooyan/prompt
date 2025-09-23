// app/api/upload/route.ts
import { NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import path from "path"

export async function POST(req: Request) {
  const formData = await req.formData()
  const file = formData.get("file") as File | null

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 })
  }

  const bytes = Buffer.from(await file.arrayBuffer())
  const filePath = path.join(process.cwd(), "public" ,"uploads", file.name)

  await writeFile(filePath, bytes)

  return NextResponse.json({ success: true, path: `/uploads/${file.name}` })
}