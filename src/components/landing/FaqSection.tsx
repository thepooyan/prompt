"use client"
import { useState } from "react"

const faqs = [
  {
    question: "پرامپت آماده چیست و چه کمکی به من می‌کند؟",
    answer:
      "پرامپت آماده، یک دستور از پیش نوشته شده و بهینه‌سازی شده است که شما می‌توانید به سادگی آن را کپی کرده و در ابزار هوش مصنوعی (مانند ChatGPT یا Midjourney) استفاده کنید تا بدون نیاز به دانش فنی، به بهترین نتیجه ممکن برسید.",
  },
  {
    question: "آیا برای استفاده از پرامپت‌ها باید اشتراک بخرم؟",
    answer:
      "بخشی از پرامپت‌های ما در «پرامپت بازار» به صورت رایگان در دسترس هستند تا با کیفیت کار ما آشنا شوید. برای دسترسی به کتابخانه کامل پرامپت‌های ویژه و حرفه‌ای، نیاز به تهیه اشتراک ماهانه یا سالانه دارید.",
  },
  {
    question: "ورک‌فلوهای n8n دقیقاً چه کاری انجام می‌دهند؟",
    answer:
      "ورک‌فلوها، فرآیندهای چند مرحله‌ای هستند که کارهای تکراری شما را به صورت خودکار انجام می‌دهند. برای مثال، یک ورک‌فلو می‌تواند به صورت خودکار محتوای وبلاگ شما را تولید و در سایتتان منتشر کند.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-16 bg-sidebar text-accent-foreground ">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold ">سوالات پرتکرار</h2>
          <p className="text-lg text-muted-foreground mt-4">
            پاسخ سوالات رایج شما را در اینجا آماده کرده‌ایم.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-muted-foreground/20 rounded-xl overflow-hidden">
              <button
                className="w-full text-right px-6 py-4 cursor-pointer  font-medium flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                {faq.question}
                <span>{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <div className="px-6 py-4  text-muted-foreground  ">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <h5 className="text-lg font-bold  ">پاسخ خود را پیدا نکردید؟</h5>
          <p className="text-gray-400 mt-2">
            تیم پشتیبانی ما آماده پاسخگویی و ارائه مشاوره تخصصی به شماست.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 bg-primary text-primary-foreground hover:bg-blue-700 font-medium px-6 py-3 rounded-xl"
          >
            تماس با بخش مشاوره
          </a>
        </div>
      </div>
    </section>
  )
}
