import { db } from "."
import { promptsTable } from "./schema"

const samplePrompts  = [
  {
    title: "پرامپت نوشتن مقاله تخصصی",
    slug: "technical-article-writing",
    tags: "نوشتن, مقاله, تخصصی, محتوا",
    picture: "",
    isFree: true,
    description:
      "این پرامپت به شما کمک می‌کند تا مقالات تخصصی با کیفیت بالا بنویسید. شامل ساختار مناسب، استفاده از منابع معتبر و نوشتن جذاب است.",
  },
  {
    title: "پرامپت طراحی UI/UX",
    slug: "ui-ux-design-prompt",
    tags: "طراحی, UI, UX, رابط کاربری",
    picture: "",
    isFree: false,
    description:
      "راهنمای کاملی برای طراحی رابط‌های کاربری مدرن و کاربرپسند. شامل اصول طراحی، رنگ‌بندی و تجربه کاربری بهینه.",
  },
  {
    title: "پرامپت بازاریابی دیجیتال",
    slug: "digital-marketing-prompt",
    tags: "بازاریابی, دیجیتال, تبلیغات, محتوا",
    picture: "",
    isFree: true,
    description:
      "استراتژی‌های مؤثر بازاریابی دیجیتال برای کسب‌وکارهای مختلف. شامل تولید محتوا، تبلیغات و تحلیل بازار هدف.",
  },
]

await db.insert(promptsTable).values(samplePrompts)