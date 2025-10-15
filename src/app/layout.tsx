import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "@/styles/global.css";
import { Toaster } from "sonner";
import { GoogleTagManager } from '@next/third-parties/google';
import RenderSchema from "@/components/schema/RenderSchema";
import Head from "next/head";
import TagManagerHead from "@/components/other/TagManagerHead";
import TagManagerBody from "@/components/other/TagManagerBody";
import { env } from "@/server/env";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"]
})

export const metadata: Metadata = {
  title: "پرامپت بازار - مرجع پرامپت آماده و آموزش n8nپرامت بازار",
  description: "در پرامپت بازار، با آموزش‌های تخصصی ما برای پرامپت نویسی و n8n، به یک متخصص هوش مصنوعی تبدیل شوید و به بزرگترین کتابخانه پرامپت‌های آماده و ورک‌فلوها دسترسی پیدا کنید.",
  keywords: "پرامپت, n8n, پرامپت چیست, آموزش n8n, پرامپت نویسی چیست, oانلود پرامپت, دانلود n8n",
  openGraph: {
    title: "پرامپت بازار - مرجع پرامپت آماده و آموزش n8n",
    description: "در پرامپت بازار، با آموزش‌های تخصصی ما برای پرامپت نویسی و n8n، به یک متخصص هوش مصنوعی تبدیل شوید و به بزرگترین کتابخانه پرامپت‌های آماده و ورک‌فلوها دسترسی پیدا کنید.",
  

  },
   robots: {
    index: true,
    follow: true,
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={env.GTM_ID}/>
    
      <body
        className={`${vazirmatn.className} antialiased dark`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
