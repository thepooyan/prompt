"use client"
import { useState } from "react"

const faqs = [
  {
    question: "پرامپت‌های آماده پرامپت بازار چه تفاوتی با دستورات معمولی دارند؟",
    answer:
      "پرامپت‌های موجود در سایت ما توسط متخصصین مهندسی پرامپت (Prompt Engineering) طراحی و بارها تست شده‌اند. برخلاف دستورات ساده، این پرامپت‌ها دقیق‌ترین و باکیفیت‌ترین خروجی را از هوش مصنوعی می‌گیرند و شما را از آزمون و خطای طولانی بی‌نیاز می‌کنند.",
  },
  {
    question: "آیا دانلود پرامپت‌ها و ورک‌فلوهای n8n رایگان است؟",
    answer:
      "بله، پرامپت بازار به عنوان مرجع پرامپت، بخش بزرگی از منابع، پرامپت‌ها و ورک‌فلوهای آموزشی را به صورت رایگان ارائه می‌دهد. همچنین برای پروژه‌های حرفه‌ای‌تر، محصولات ویژه‌ای داریم که با هزینه اندک قابل دریافت هستند.",
  },
  {
    question: "ورک‌فلوهای n8n موجود در سایت چه کمکی به کسب‌وکار من می‌کنند؟",
    answer:
      "این ورک‌فلوها فرآیندهای تکراری شما (مثل تولید محتوا، پاسخ به مشتریان، یا مدیریت سوشال مدیا) را به صورت خودکار انجام می‌دهند. با دانلود و اجرای این ورک‌فلوها، می‌توانید بدون نیاز به دانش برنامه‌نویسی پیچیده، یک سیستم هوشمند برای کسب‌وکارتان بسازید.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-16 bg-sidebar text-accent-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">سوالات متداول کاربران</h2>
          <p className="text-lg text-muted-foreground mt-4">
            پاسخ به پرسش‌های شما درباره خدمات پرامپت بازار؛ مرجع تخصصی پرامپت و اتوماسیون.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-muted-foreground/20 rounded-xl overflow-hidden bg-background/50 backdrop-blur-sm transition-all duration-200"
            >
              <button
                className="w-full text-right px-6 py-4 cursor-pointer font-medium flex justify-between items-center hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
              >
                <span className="flex-1 ml-4">{faq.question}</span>
                <span className="text-xl font-bold text-primary">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4 pt-0 text-muted-foreground leading-relaxed border-t border-muted-foreground/10 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-muted/30 rounded-2xl max-w-2xl mx-auto border border-muted/50">
          <h5 className="text-lg font-bold">پاسخ خود را پیدا نکردید؟</h5>
          <p className="mt-2 text-muted-foreground">
            تیم پشتیبانی ما آماده پاسخگویی و ارائه مشاوره تخصصی به شماست.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center mt-4 bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 py-3 rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            تماس با بخش مشاوره
          </a>
        </div>
      </div>
    </section>
  )
}