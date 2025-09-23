import { NextRequest, NextResponse } from "next/server"
import { PutObjectCommand } from "@aws-sdk/client-s3"
import { s3 } from "@/s3"

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get("file") as File
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 })

  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const key = `uploads/${Date.now()}-${file.name}`

  await s3.send(new PutObjectCommand({
    Bucket: undefined,
    Key: key,
    Body: buffer,
    ContentType: file.type
  }))

  return NextResponse.json({ url: `https://${process.env.BUCKET_URL}/${key}` })
}
