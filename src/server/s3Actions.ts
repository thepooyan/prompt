"use server"

import { listFiles } from "@/s3/s3Util"
import { env } from "./env"


export const getAllFiles = async () => {
    return await listFiles(env.BUCKET_NAME, "prompt")
}