import MidjournyBlog from "@/components/blog/Midjourny"
import { Metadata } from "next"

const page = () => {
  return (
    <MidjournyBlog/>
  )
}

export const metadata:Metadata = {
  title: "آموزش پرامپت نویسی میدجورنی",
  description: "راهنمای کامل و قدم به قدم آموزش پرامپت نویسی میدجرنی برای ساخت عکس‌های حرفه‌ای و هنری. با مثال‌های کاربردی و تکنیک‌های پیشرفته پرامپت Midjourney آشنا شوید.",
  keywords: "آموزش میدجرنی, پرامپت نویسی میدجرنی, پرامپت میدجرنی, ساخت عکس با هوش مصنوعی, Midjourney, پرامپت بازار, هوش مصنوعی تصویرساز",
  alternates: {
    canonical: "https://promptbazar.ir/blog/midjourney-prompt-guide"
  }
}

export default page
