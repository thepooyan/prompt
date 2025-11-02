import { DeleteObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3"
import { s3 } from "."

export async function listFiles(bucket: string, prefix?: string) {
  const files: string[] = []
  let continuationToken: string | undefined

  do {
    const res = await s3.send(
      new ListObjectsV2Command({
        Bucket: bucket,
        Prefix: prefix,
        ContinuationToken: continuationToken
      })
    )
    res.Contents?.forEach(obj => obj.Key && files.push(obj.Key))
    continuationToken = res.NextContinuationToken
  } while (continuationToken)

  return files
}

export async function deleteFileFromS3(bucket: string, key: string) {
  const cmd = new DeleteObjectCommand({ Bucket: bucket, Key: key })
  await s3.send(cmd)
}