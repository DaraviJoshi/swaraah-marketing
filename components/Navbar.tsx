'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#vendors', label: 'For Vendors' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FFB703] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-sm tracking-tight">VL</span>
          </div>
          <span className="font-playfair font-bold text-lg text-[#0D1B2A]">VoyageLocal</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#4A5568] hover:text-[#0D1B2A] text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://app.swaraah.in"
            className="text-[#4A5568] hover:text-[#0D1B2A] text-sm font-medium transition-colors"
          >
            Sign In
          </a>
          <a
            href="https://app.swaraah.in"
            className="bg-[#FF6B35] hover:bg-[#E85520] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-orange-200 hover:-translate-y-px"
          >
            Launch App →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#0D1B2A]/70 hover:text-[#0D1B2A] p-1"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-b border-black/8 shadow-lg`}
      >
        <div className="px-6 py-5 flex flex-col gap-1">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#4A5568] hover:text-[#0D1B2A] text-base py-2.5 border-b border-black/5"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://app.swaraah.in"
            className="mt-4 bg-[#FF6B35] text-white py-3 rounded-full text-center font-semibold text-sm"
          >
            Launch App →
          </a>
        </div>
      </div>
    </header>
  )
}
