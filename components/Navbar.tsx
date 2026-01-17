"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Settings } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang", href: "#about" },
    { name: "Kegiatan", href: "#activities" },
    { name: "Galeri", href: "#gallery" },
    { name: "Artikel", href: "#articles" },
    { name: "Pengurus", href: "#board" },
    { name: "Kontak", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/ikasum-logo.png"
              alt="Logo IKASUM BATAM"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h1 className="text-lg font-bold text-gray-800">IKASUM BATAM</h1>
              <p className="text-xs text-gray-600">Ikatan Keluarga Sumbawa</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-red-50"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/admin/login"
                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors duration-200 flex items-center"
              >
                <Settings size={16} className="mr-1" />
                Admin
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-red-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-red-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/admin/login"
              className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-red-50 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Settings size={16} className="mr-2" />
              Login Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
