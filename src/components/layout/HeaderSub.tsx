"use client";
import { ChevronDown, ChevronLeft, ChevronLeftCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "../ui/link";
import { subMenu } from "@/server/dataFetching";
import { cn } from "@/lib/utils";

const productCategories = {
  prompts: {
    name: "پرامپت",
    subcategories: {
      writing: {
        name: "نوشتاری",
        items: ["مقاله نویسی", "داستان نویسی", "محتوای تبلیغاتی", "ایمیل رسمی"],
      },
      coding: {
        name: "برنامه‌نویسی",
        items: ["پایتون", "جاوااسکریپت", "ری‌اکت", "بک‌اند"],
      },
      business: {
        name: "کسب و کار",
        items: ["بازاریابی", "فروش", "مدیریت", "استراتژی"],
      },
      creative: {
        name: "خلاقانه",
        items: ["طراحی", "موسیقی", "ویدیو", "هنر دیجیتال"],
      },
    },
  },
  workflows: {
    name: "n8n",
    subcategories: {
      automation: {
        name: "اتوماسیون",
        items: ["ایمیل", "شبکه‌های اجتماعی", "گزارش‌گیری", "یادآوری"],
      },
      integration: {
        name: "یکپارچه‌سازی",
        items: ["CRM", "پایگاه داده", "API", "وب‌هوک"],
      },
      dataProcessing: {
        name: "پردازش داده",
        items: ["تحلیل", "تبدیل", "فیلتر", "ذخیره‌سازی"],
      },
      notification: {
        name: "اعلان‌ها",
        items: ["تلگرام", "اسلک", "SMS", "پوش"],
      },
    },
  },
  aiTools: {
    name: "ابزار",
    subcategories: {
      textGeneration: {
        name: "تولید متن",
        items: ["GPT-4", "Claude", "Gemini", "مدل‌های محلی"],
      },
      imageGeneration: {
        name: "تولید تصویر",
        items: ["Midjourney", "DALL-E", "Stable Diffusion", "Leonardo"],
      },
      audioVideo: {
        name: "صوت و تصویر",
        items: ["تبدیل گفتار به متن", "تولید صدا", "ویرایش ویدیو", "موسیقی"],
      },
      analysis: {
        name: "تحلیل و بررسی",
        items: ["تحلیل احساسات", "خلاصه‌سازی", "ترجمه", "دسته‌بندی"],
      },
    },
  },
}
interface p {
  subMenu: subMenu[]
}
const HeaderSub = ({ subMenu }:p) => {
  console.log(subMenu)
  const [open, setOpen] = useState<boolean>(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        setActiveSubmenu(null);
      }}
    >
      <Button variant="ghost" className="text-base gap-1">
        محصولات
        <ChevronDown className={cn(`h-4 w-4 transition-all`, open && "rotate-180")} />
      </Button>

      {/* Layer 1: Main Categories */}
      <div
        className={cn(`absolute left-0 top-full w-56 rounded-lg border border-border bg-popover shadow-lg z-50 transition-all duration-200 origin-top`,
          open ?
          "opacity-100 visible scale-y-100 translate-y-0"
          :
          "opacity-0 invisible scale-y-95 -translate-y-2 pointer-events-none")}
      >
        {subMenu.map(menu => (
          <div
            key={menu.name}
            className="relative"
            onMouseEnter={() => setActiveSubmenu(menu.name)}
          >
            <Link className="w-full px-4 py-3 text-right hover:bg-accent hover:text-accent-foreground
              flex items-center justify-between transition-colors duration-150"
              href={menu.slug}
            >
              <span>{menu.name}</span>
              {menu.cate.length > 0 && 
              <ChevronLeft className={cn(`h-4 w-4 transition-all`, activeSubmenu === menu.name && "rotate-180")}/>}
            </Link>

            {/* Layer 2: Subcategories */}
            <div
              className={cn(
                "absolute right-full top-0 -mr-px w-56 rounded-lg border border-border bg-popover shadow-lg transition-all duration-200 origin-right",
                activeSubmenu === menu.name ?
                  "opacity-100 visible scale-x-100 translate-x-0"
                  :
                  "opacity-0 invisible scale-x-95 translate-x-2 pointer-events-none"
              )}
            >
              {menu.cate.map(sub => (
                  <div key={sub.name} className="relative group/sub">
                    <Link className="w-full px-4 py-3 text-right hover:bg-accent
                    hover:text-accent-foreground flex items-center justify-between transition-colors duration-150"
                    href={`${menu.slug}/${sub.slug}`}
                  >
                      <span>{sub.name}</span>
                    </Link>
                  </div>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSub;
