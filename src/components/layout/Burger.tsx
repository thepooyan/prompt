'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'

export type navItem = {label: string, href: string, submenu?: navItem[]}

interface p {
  navItems: navItem[]
}
export default function Burger({navItems}:p) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const toggleSubmenu = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label)
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="md:hidden "
      >
        <Menu className="h-6 w-6" />
      </Button>
          

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 animate-fadeIn h-dvh"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Slide-in menu */}
      <nav
        className={`fixed top-0 right-0 h-dvh w-80 max-w-[85vw]
bg-card border-l border-border z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu header */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-border">
            <span className="text-lg font-semibold">پرامپت بازار</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeMenu}
              aria-label="Close menu"
              className="hover:bg-accent"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Menu items */}
          <div className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-foreground rounded-lg hover:bg-accent transition-colors"
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${
                            expandedItem === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {/* Submenu items */}
                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          expandedItem === item.label
                            ? 'max-h-48 opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <ul className="mt-1 ml-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.label}>
                              <Link
                                href={subItem.href}
                                onClick={closeMenu}
                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-foreground font-medium rounded-lg hover:bg-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

