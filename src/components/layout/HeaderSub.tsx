"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "../ui/link";
import { subMenu } from "@/server/dataFetching";

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
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  return (
    <div
      className="relative"
      onMouseEnter={() => setActiveMenu("products")}
      onMouseLeave={() => {
        setActiveMenu(null);
        setActiveSubmenu(null);
      }}
    >
      <Button variant="ghost" className="text-base gap-1">
        محصولات
        <ChevronDown className="h-4 w-4" />
      </Button>

      {/* Layer 1: Main Categories */}
      <div
        className={`absolute left-0 top-full w-56 rounded-lg border border-border bg-popover shadow-lg z-50 transition-all duration-200 origin-top ${activeMenu === "products"
            ? "opacity-100 visible scale-y-100 translate-y-0"
            : "opacity-0 invisible scale-y-95 -translate-y-2 pointer-events-none"
          }`}
      >
        {subMenu.map(menu => (
          <div
            key={menu.name}
            className="relative"
            onMouseEnter={() => setActiveSubmenu(menu.name)}
          >
            <button className="w-full px-4 py-3 text-right hover:bg-accent hover:text-accent-foreground flex items-center justify-between transition-colors duration-150">
              <span>{menu.name}</span>
              <ChevronDown className="h-4 w-4 -rotate-90" />
            </button>

            {/* Layer 2: Subcategories */}
            <div
              className={`absolute right-full top-0 -mr-px w-56 rounded-lg border border-border bg-popover shadow-lg transition-all duration-200 origin-right ${activeSubmenu === menu.name
                  ? "opacity-100 visible scale-x-100 translate-x-0"
                  : "opacity-0 invisible scale-x-95 translate-x-2 pointer-events-none"
                }`}
            >
              {menu.cate.map(sub => (
                  <div key={sub.name} className="relative group/sub">
                    <button className="w-full px-4 py-3 text-right hover:bg-accent hover:text-accent-foreground flex items-center justify-between transition-colors duration-150">
                      <span>{sub.name}</span>
                    </button>
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
