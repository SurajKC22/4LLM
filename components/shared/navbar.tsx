"use client"

import React, { useState } from 'react'
import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-white flex shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image src="/assets/images/logo-text.svg" alt="logo" width={80} height={28} />
            </Link>
          </div>
          {/* Navigation links in the center */}
          <div className="hidden md:flex mx-auto space-x-4">
            {navLinks.map((link) => {
              const isActive = link.route === pathname
              return (
                <Link
                  key={link.route}
                  href={link.route}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white' 
                      : 'text-gray-700 hover:from-blue-600 hover:to-blue-800'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
          {/* Sign out button on the right */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedIn>
              <UserButton afterSignOutUrl='/' />
            </SignedIn>
            <SignedOut>
              <Button asChild className="bg-purple-gradient bg-cover">
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </div>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = link.route === pathname
              return (
                <Link
                  key={link.route}
                  href={link.route}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive 
                      ? 'bg-purple-gradient text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <SignedIn>
                <UserButton afterSignOutUrl='/' />
              </SignedIn>
              <SignedOut>
                <Button asChild className="ml-auto bg-purple-gradient bg-cover">
                  <Link href="/sign-in">Login</Link>
                </Button>
              </SignedOut>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
