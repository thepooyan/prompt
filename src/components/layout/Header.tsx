import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <header className="fixed top-0 w-full bg-[#1e1e1e]/85 backdrop-blur-md z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="#home" className="font-bold text-xl">پرامپت بازار</Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="hover:text-primary">خانه</Link>
            <Link href="/Guide" className="hover:text-primary flex items-center gap-1">
              راهنمای جامع <i className="bi bi-box-arrow-up-right text-sm" />
            </Link>
            <Link href="#blog" className="hover:text-primary">وبلاگ</Link>
            <Link href="/prompts" target="_blank" className="hover:text-primary flex items-center gap-1">
              کتابخانه کامل <i className="bi bi-box-arrow-up-right text-sm" />
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="#" className="hover:text-primary text-lg"><i className="bi bi-headset" /></Link>
            <Link href="#" className="hover:text-primary text-lg"><i className="bi bi-cart3" /></Link>
            <Link href="#" className="bg-primary px-4 py-2 rounded-lg font-medium">ثبت‌نام / ورود</Link>
          </div>
        </div>
      </header>
  )
}

export default Header
