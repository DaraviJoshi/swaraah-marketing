'use client'
import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 720, suffix: '+', label: 'Properties Listed', sub: 'Across 100+ cities' },
  { value: 4200, suffix: '+', label: 'Bookings Made', sub: 'And counting daily' },
  { value: 240, suffix: '+', label: 'Active Vendors', sub: 'Hotels, agencies & more' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate', sub: 'From verified reviews' },
]

function useCountUp(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, duration, started])
  return count
}

function StatCard({ value, suffix, label, sub, started }: typeof STATS[0] & { started: boolean }) {
  const count = useCountUp(value, 1800, started)
  return (
    <div className="text-center group">
      <div className="font-playfair text-5xl md:text-6xl font-bold text-white mb-2">
        <span className="gradient-text">{count.toLocaleString('en-IN')}</span>
        <span className="text-[#FF6B35]">{suffix}</span>
      </div>
      <div className="text-white font-semibold text-lg mb-1">{label}</div>
      <div className="text-white/40 text-sm">{sub}</div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="section-pad relative overflow-hidden" ref={ref}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 via-[#0D1B2A] to-[#1E3A5F]/20" />
      <div className="absolute inset-0 dot-grid" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#FF6B35] text-sm font-semibold uppercase tracking-widest mb-4 block">
            Platform Numbers
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
            VoyageLocal by the Numbers
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {STATS.map(s => (
            <StatCard key={s.label} {...s} started={started} />
          ))}
        </div>

        {/* Divider with India map hint */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <span className="text-2xl">🇮🇳</span>
          <span className="text-white/30 text-sm">Building India's local travel layer</span>
          <span className="text-2xl">🗺️</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>
      </div>
    </section>
  )
}
