'use client'

import L  from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Suspense } from 'react'

interface ActiveLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
}

export default function Link({ href, children, className, activeClassName, ...rest }: ActiveLinkProps) {
  const Inner = () => {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
      <L
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...rest}
      >
        {children}
      </L>
    )
  }

  return <Suspense>
    <Inner/>
  </Suspense>
}
