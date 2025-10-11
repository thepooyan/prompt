import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <header className="fixed top-0 w-full bg-zinc-900/60 backdrop-blur-md z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" className="font-bold text-xl">پرامپت بازار</Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-primary">خانه</Link>
            <Link href="/Guide" className="hover:text-primary flex items-center gap-1">
              راهنمای جامع <i className="bi bi-box-arrow-up-right text-sm" />
            </Link>
            <Link href="/Blog" className="hover:text-primary">وبلاگ</Link>
            <Link href="/Library" className="hover:text-primary flex items-center gap-1">
              کتابخانه کامل <i className="bi bi-box-arrow-up-right text-sm" />
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="#" className="hover:text-primary text-lg"><i className="bi bi-headset" /></Link>
            <Link href="#" className="hover:text-primary text-lg"><i className="bi bi-cart3" /></Link>
            <Link href="/Login" className="bg-primary px-4 py-2 rounded-lg font-medium">ثبت‌نام / ورود</Link>
          </div>
        </div>
      </header>
  )
}

export default Header
