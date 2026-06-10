'use client'
import { useEffect } from 'react'
import { Hotel, Compass, UtensilsCrossed, Car, Package } from 'lucide-react'

const FEATURES = [
  {
    icon: Hotel,
    title: 'Stays',
    tagline: 'Boutique to budget',
    desc: 'Browse verified hotels, guesthouses, and heritage homestays across India. Multi-room booking, advance payment, cancellation policies — all transparent.',
    color: 'from-blue-500/20 to-blue-600/10',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
    delay: 'reveal-delay-1',
  },
  {
    icon: Compass,
    title: 'Activities',
    tagline: 'Guided & adventure',
    desc: 'City tours, jungle treks, cultural immersions, adventure sports. Time-slotted booking with instant vendor confirmation and Razorpay payments.',
    color: 'from-emerald-500/20 to-emerald-600/10',
    border: 'border-emerald-500/20',
    iconColor: 'text-emerald-400',
    delay: 'reveal-delay-2',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants',
    tagline: 'Dine local, eat well',
    desc: 'Reserve dine-in slots at local restaurants and cafés. Browse menus, book your table, and earn Voyage Coins on verified dining receipts.',
    color: 'from-amber-500/20 to-orange-600/10',
    border: 'border-amber-500/20',
    iconColor: 'text-amber-400',
    delay: 'reveal-delay-3',
  },
  {
    icon: Car,
    title: 'Transport',
    tagline: 'Ola/Uber-style, local drivers',
    desc: 'Hire local drivers with real-time GPS tracking, OTP verification, and fare-first transparency. Airport transfers, city rides, multi-day trips.',
    color: 'from-violet-500/20 to-purple-600/10',
    border: 'border-violet-500/20',
    iconColor: 'text-violet-400',
    delay: 'reveal-delay-4',
  },
  {
    icon: Package,
    title: 'Travel Packages',
    tagline: 'Curated multi-day trips',
    desc: 'Full itinerary packages by verified local agencies. Flights + stays + activities bundled — book once, travel seamlessly.',
    color: 'from-rose-500/20 to-pink-600/10',
    border: 'border-rose-500/20',
    iconColor: 'text-rose-400',
    delay: 'reveal-delay-1',
  },
]

export default function Features() {
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
    <section id="features" className="section-pad bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-[#FF6B35] text-sm font-semibold uppercase tracking-widest mb-4 block">
            Everything in One Place
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Five Ways to Travel Better
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            From the moment you land to the meal you'll never forget — every part of
            your India journey, handled by verified local experts.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`reveal ${f.delay} group relative rounded-2xl p-6 border ${f.border} bg-gradient-to-br ${f.color} hover:scale-[1.02] transition-all duration-300 cursor-default`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-5 ${f.iconColor} group-hover:scale-110 transition-transform`}>
                <f.icon size={22} />
              </div>

              {/* Text */}
              <div className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1">
                {f.tagline}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>

              {/* Arrow on hover */}
              <div className="mt-5 flex items-center gap-1 text-sm text-white/40 group-hover:text-white/70 transition-colors">
                <span>Learn more</span>
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>

              {/* Index number accent */}
              <div className="absolute top-5 right-5 text-4xl font-playfair font-bold text-white/4 select-none">
                0{i + 1}
              </div>
            </div>
          ))}

          {/* Sixth card — CTA */}
          <div className="reveal reveal-delay-2 rounded-2xl p-6 border border-[#FF6B35]/25 bg-gradient-to-br from-[#FF6B35]/15 to-[#FFB703]/5 flex flex-col justify-between">
            <div>
              <div className="text-xs text-[#FFB703] font-semibold uppercase tracking-wider mb-1">
                Coming Soon
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Travel Guides</h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Connect with certified local travel guides for personalised consultations,
                custom itineraries, and referral-based trip planning.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="https://app.swaraah.in"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B35] hover:text-[#FFB703] transition-colors"
              >
                Join the waitlist →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
