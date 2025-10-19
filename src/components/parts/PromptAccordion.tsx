"use client";

import { useState } from "react"

const data = [
  {
    id: "f1",
    q: "پرامپت در ایران چه کاربردهایی دارد؟",
    a: "در ایران، از پرامپت برای تولید محتوای شبکه‌های اجتماعی، نوشتن مقالات وبلاگ، طراحی گرافیک برای کسب‌وکارهای محلی و حتی خودکارسازی فرآیندهای اداری با ابزارهایی مانند n8n استفاده می‌شود.",
  },
  {
    id: "f2",
    q: "چطور می‌توانم از پرامپت نویسی برای کسب درآمد در ایران استفاده کنم؟",
    a: "شما می‌توانید به عنوان فریلنسر خدمات تولید محتوا با هوش مصنوعی ارائه دهید، پرامپت‌های تخصصی برای فروش طراحی کنید یا در شرکت‌های دیجیتال مارکتینگ به عنوان مهندس پرامپت مشغول به کار شوید.",
  },
  {
    id: "f3",
    q: "آیا ابزارهای هوش مصنوعی در ایران قابل دسترس هستند؟",
    a: "بله، بسیاری از ابزارهای هوش مصنوعی پیشرو در ایران قابل استفاده هستند. در سایت پرامپت بازار، ما نحوه کار با ابزارهای در دسترس و دانلود پرامپت‌های سازگار را آموزش می‌دهیم.",
    link: "/download-prompts",
  },
];

const PromptAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState("f1")

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? "" : id)
  }
  return (
    <>
      {data.map((faq) => (
        <div
          key={faq.id}
          className="border border-gray-700 rounded-lg bg-gray-800 overflow-hidden"
        >
          <button
            className="w-full text-right p-5 font-semibold text-gray-200 hover:text-white transition-colors flex items-center justify-between"
            onClick={() => toggleAccordion(faq.id)}
          >
            {faq.q}
            <span
              className={`transform transition-transform duration-300 ${activeAccordion === faq.id ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </button>
          {activeAccordion === faq.id && (
            <div className="p-5 pt-0 text-gray-400 leading-relaxed">
              {faq.a}
              {faq.id === "f3" && (
                <span>
                  {" "}
                  <a
                    href="/what-is-n8n"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    آموزش n8n
                  </a>
                </span>
              )}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default PromptAccordion;
