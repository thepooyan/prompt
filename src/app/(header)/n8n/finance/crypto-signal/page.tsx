import CryptosignalPage from "@/components/n8n/crypto-signal"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: "ربات نوسان‌گیر و سیگنال‌دهی ارز دیجیتال (هشدار تلگرام) | رایگان - پرامپت بازار",
  description: "دانلود رایگان ربات نوسان‌گیر و سیگنال‌دهی ارز دیجیتال برای تلگرام. این ورک‌فلو n8n بازار را ۲۴ ساعته رصد کرده و هشدار خرید و فروش ارسال می‌کند. نصب آسان.",
  keywords: "ربات نوسان‌گیر ارز دیجیتال، ربات سیگنال دهی تل",
}

const page = () => {
  return <CryptosignalPage/>
}

export default page
