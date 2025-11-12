import WhatIsn8n from "@/components/blog/WhatIsn8n"
import {Metadata} from "next"

const page = () => {
  return <WhatIsn8n/>
}

export const metadata:Metadata = {
  title: "n8n چیست؟ قدرت اتوماسیون رایگان و بدون تحریم | آموزش کامل",
  description: "n8n چیست و چگونه کار می‌کند؟ راهنمای کامل نصب و استفاده از n8n، بهترین جایگزین رایگان و متن‌باز Zapier برای اتوماسیون کسب‌وکارها در ایران (بدون تحریم).",
  keywords: "n8n چیست, آموزش n8n, اتوماسیون رایگان, جایگزین zapier, نصب n8n, ورک فلو n8n, اتوماسیون بدون کدنویسی, n8n فارسی",
}

export default page