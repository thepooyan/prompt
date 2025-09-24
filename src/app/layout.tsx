import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "@/styles/global.css";
import { Toaster } from "sonner";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"]
})

export const metadata: Metadata = {
  title: "پرامپت بازار - مرجع پرامپت آماده و آموزش n8nپرامت بازار",
  description: "در پرامپت بازار، با آموزش‌های تخصصی ما برای پرامپت نویسی و n8n، به یک متخصص هوش مصنوعی تبدیل شوید و به بزرگترین کتابخانه پرامپت‌های آماده و ورک‌فلوها دسترسی پیدا کنید.",
  keywords: "پرامپت, n8n, پرامپت چیست, آموزش n8n, پرامپت نویسی چیست, دانلود پرامپت, دانلود n8n"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vazirmatn.variable} antialiased dark`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
