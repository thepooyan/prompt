import { uploadToS3 } from "./actions";
import fs from "fs"

function bufferToFile(buf: Buffer, filename: string, type = "application/octet-stream") {
  return new File([buf], filename, { type })
};


let file = fs.readFileSync("./next.config.ts")

uploadToS3(bufferToFile(file, "test"))