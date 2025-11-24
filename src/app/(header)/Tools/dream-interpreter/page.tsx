import Dreaminterpreter from "@/components/blog/dreaminterpreter"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: "تعبیر خواب آنلاین با هوش مصنوعی (تحلیل روانشناسی دقیق)",
  description: "خواب‌هایتان را با قدرت هوش مصنوعی رمزگشایی کنید. اولین ابزار تعبیر خواب ایران با تلفیق روانشناسی یونگ و نمادشناسی دقیق. یک تحلیل حرفه‌ای و رایگان دریافت کنید!",
  keywords: "تعبیر خواب, هوش مصنوعی, روانشناسی یونگ, تحلیل رویا, ابزار AI, تعبیر خواب آنلاین, مهندسی پرامپت",
}

const page = () => {
  return <Dreaminterpreter/>
}

export default page