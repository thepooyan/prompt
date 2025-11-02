"use server"

import { deleteFileFromS3, listFiles } from "@/s3/s3Util"
import { env } from "./env"


export const getAllFiles = async () => {
    return await listFiles(env.BUCKET_NAME, "prompt")
}

export const deleteFile = async (file: string) => {
    return deleteFileFromS3(env.BUCKET_NAME, file)
}