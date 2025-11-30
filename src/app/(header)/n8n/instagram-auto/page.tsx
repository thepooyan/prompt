
import InstagramAutoDM from "@/components/n8n/instagram-auto"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: "ربات ادمین هوشمند اینستاگرام (پاسخ خودکار دایرکت) | رایگان - پرامپت بازار",
  description: "نلود رایگان ربات n8n برای اینستاگرام. پاسخدهی آنی به کامنت و دایرکت با استفاده از API رسمی. افزایش فروش آنلاین‌شاپ‌ها.",
  keywords: "ربات ادمین هوشمند اینستاگرام",
}

const page = () => {
  return <InstagramAutoDM/>
}

export default page






