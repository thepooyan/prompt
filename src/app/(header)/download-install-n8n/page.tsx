import InstallN8nPage from "@/components/blog/Installn8n"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: "آموزش دانلود و نصب n8n: راهنمای کامل نصب روی ویندوز، داکر و سرور (VPS)",
  description: "کامل‌ترین آموزش نصب n8n به زبان فارسی. یاد بگیرید چگونه n8n را به صورت خودکار (دسکتاپ) یا دستی (Manual) با داکر روی سرور مجازی (VPS) نصب و راه‌اندازی کنید.",
  keywords: "دانلود n8n,نصب n8n,آموزش نصب n8n,نصب n8n روی داکر,نصب n8n روی سرور,نصب manual n8n,نصب خودکار n8n,راه اندازی n8n,n8n desktop download,نصب n8n ویندوز",
}

const page = () => {
  return <InstallN8nPage/>
}

export default page