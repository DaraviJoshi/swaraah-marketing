'use client'
import { useEffect } from 'react'
import { MapPin, Star, ArrowRight } from 'lucide-react'

const DESTINATIONS = [
  {
    name: 'Jaipur',
    sub: 'Rajasthan',
    emoji: '🏰',
    rating: '4.8',
    detail: '32 properties',
    style: 'top-10 right-6 animate-float',
  },
  {
    name: 'Kerala',
    sub: "God's Own Country",
    emoji: '🌴',
    rating: '4.9',
    detail: '28 activities',
    style: 'top-1/2 -translate-y-1/2 right-0 animate-float-slow',
  },
  {
    name: 'Manali',
    sub: 'Himachal Pradesh',
    emoji: '🏔️',
    rating: '4.7',
    detail: 'Adventure hub',
    style: 'bottom-16 right-16 animate-float-delayed',
  },
  {
    name: 'Goa',
    sub: 'Beach & Culture',
    emoji: '🏖️',
    rating: '4.8',
    detail: '40+ restaurants',
    style: 'top-28 left-0 animate-float',
  },
]

export default function Hero() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries =>
        entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-[#0D1B2A] overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-[#FF6B35]/8 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 -left-40 w-[600px] h-[500px] rounded-full bg-[#1E3A5F]/60 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00B4D8]/4 blur-[140px]" />
        <div className="absolute inset-0 dot-grid" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left: Copy ── */}
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-white/6 border border-white/10 rounded-full px-4 py-2 text-xs text-white/60 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              India's Local Travel Marketplace · Now Live
            </div>

            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6 tracking-tight">
              Discover{' '}
              <span className="gradient-text">India,</span>
              <br />
              Your Way.
            </h1>

            <p className="text-lg text-white/55 leading-relaxed mb-10 max-w-[480px]">
              Hotels, activities, restaurants &amp; transport — all in one marketplace.
              Built for the real India travel experience, powered by verified local vendors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://app.swaraah.in"
                className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#E85520] text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 orange-glow hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Explore Now <ArrowRight size={18} />
              </a>
              <a
                href="#vendors"
                className="inline-flex items-center justify-center gap-2 glass-card hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-200"
              >
                For Travel Vendors
              </a>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2">
              {[
                '🔒 Razorpay Secured',
                '✅ Verified Vendors',
                '📍 Real-time Tracking',
                '🇮🇳 Made in India',
              ].map(chip => (
                <span
                  key={chip}
                  className="text-xs text-white/45 bg-white/5 border border-white/8 px-3 py-1.5 rounded-full"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Visual ── */}
          <div className="relative hidden lg:block h-[520px]">
            {/* Orbit rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full border border-white/4" />
              <div className="absolute w-52 h-52 rounded-full border border-white/6" />
              <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-[#FF6B35]/20 to-[#FFB703]/10 flex items-center justify-center">
                <MapPin className="w-9 h-9 text-[#FF6B35]" />
              </div>
            </div>

            {/* Floating destination cards */}
            {DESTINATIONS.map(d => (
              <div
                key={d.name}
                className={`absolute glass-card rounded-2xl p-3.5 w-44 ${d.style}`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-2xl leading-none">{d.emoji}</span>
                  <div>
                    <div className="text-white font-semibold text-sm leading-tight">{d.name}</div>
                    <div className="text-white/45 text-xs">{d.sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-[#FFB703] fill-[#FFB703]" />
                  <span className="text-xs text-white/60">{d.rating} · {d.detail}</span>
                </div>
              </div>
            ))}

            {/* Live booking badge */}
            <div className="absolute bottom-8 right-8 glass-card rounded-xl px-4 py-2.5 flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/70 font-medium">4,200+ bookings made</span>
            </div>
          </div>
        </div>

        {/* Bottom stats strip */}
        <div className="mt-16 pt-8 border-t border-white/6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: '720+', l: 'Properties' },
            { n: '720+', l: 'Activities' },
            { n: '720+', l: 'Restaurants' },
            { n: '720+', l: 'Vehicles' },
          ].map(s => (
            <div key={s.l}>
              <div className="font-playfair text-3xl font-bold text-white">{s.n}</div>
              <div className="text-sm text-white/45 mt-1">{s.l} Listed</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
