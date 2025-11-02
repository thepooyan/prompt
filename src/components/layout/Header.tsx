import Link from 'next/link'
import LoginButton from './LoginButton'
import Logo from '../parts/Logo'
import { Suspense } from 'react'
import Spinner from '../parts/Spinner'

const Header = () => {
  return (
      <header className="fixed top-0 w-full bg-zinc-900/30 backdrop-blur-xl  z-50 shadow-zinc-800 shadow-md ">
        <div className="container mx-auto flex items-center justify-between p-2 px-4">
          <Logo/>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-primary">خانه</Link>
            <Link href="/what-is-prompt" className="hover:text-primary flex items-center gap-1">
              راهنمای جامع 
            </Link>
            <Link href="/Blog" className="hover:text-primary">وبلاگ</Link>
            <Link href="/Prompts" className="hover:text-primary flex items-center gap-1">
              کتابخانه کامل 
            </Link>
          </nav>
        <Suspense fallback={<Spinner/>}>
          <LoginButton/>
        </Suspense>
      </div>
    </header>
  )
}

export default Header
