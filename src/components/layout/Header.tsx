import Link from 'next/link'
import React from 'react'
import LoginButton from './LoginButton'
import Logo from '../parts/Logo'

const Header = () => {
  return (
      <header className="fixed top-0 w-full bg-zinc-900/30 backdrop-blur-xl  z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Logo/>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-primary">خانه</Link>
            <Link href="/what-is-prompt" className="hover:text-primary flex items-center gap-1">
              راهنمای جامع <i className="bi bi-box-arrow-up-right text-sm" />
            </Link>
            <Link href="/Blog" className="hover:text-primary">وبلاگ</Link>
            <Link href="/Library" className="hover:text-primary flex items-center gap-1">
              کتابخانه کامل <i className="bi bi-box-arrow-up-right text-sm" />
            </Link>
          </nav>
          <LoginButton/>
        </div>
      </header>
  )
}

export default Header
