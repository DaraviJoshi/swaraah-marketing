'use client'
import { useEffect } from 'react'
import { Hotel, Compass, UtensilsCrossed, Car, Package } from 'lucide-react'

const FEATURES = [
  {
    icon: Hotel,
    title: 'Stays',
    tagline: 'Boutique to budget',
    desc: 'Browse verified hotels, guesthouses, and heritage homestays across India. Multi-room booking, advance payment, cancellation policies — all transparent.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    border: 'border-blue-100',
    delay: 'reveal-delay-1',
  },
  {
    icon: Compass,
    title: 'Activities',
    tagline: 'Guided & adventure',
    desc: 'City tours, jungle treks, cultural immersions, adventure sports. Time-slotted booking with instant vendor confirmation and Razorpay payments.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    border: 'border-emerald-100',
    delay: 'reveal-delay-2',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants',
    tagline: 'Dine local, eat well',
    desc: 'Reserve dine-in slots at local restaurants and cafés. Browse menus, book your table, and earn Voyage Coins on verified dining receipts.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    border: 'border-amber-100',
    delay: 'reveal-delay-3',
  },
  {
    icon: Car,
    title: 'Transport',
    tagline: 'Ola/Uber-style, local drivers',
    desc: 'Hire local drivers with real-time GPS tracking, OTP verification, and fare-first transparency. Airport transfers, city rides, multi-day trips.',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    border: 'border-violet-100',
    delay: 'reveal-delay-4',
  },
  {
    icon: Package,
    title: 'Travel Packages',
    tagline: 'Curated multi-day trips',
    desc: 'Full itinerary packages by verified local agencies. Flights + stays + activities bundled — book once, travel seamlessly.',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-500',
    border: 'border-rose-100',
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
    <section id="features" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-[#1E6FFF] text-sm font-semibold uppercase tracking-widest mb-4 block">
            Everything in One Place
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0F2D6B] mb-4">
            Five Ways to Travel Better
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            From the moment you land to the meal you'll never forget — every part of
            your India journey, handled by verified local experts.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`reveal ${f.delay} group relative rounded-2xl p-6 bg-[#F7F9FF] border ${f.border} hover:shadow-lg hover:bg-white hover:-translate-y-1 transition-all duration-300 cursor-default`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${f.iconBg} mb-5 ${f.iconColor} group-hover:scale-110 transition-transform`}>
                <f.icon size={22} />
              </div>

              {/* Text */}
              <div className="text-xs text-[#9CA3AF] font-medium uppercase tracking-wider mb-1">
                {f.tagline}
              </div>
              <h3 className="text-xl font-semibold text-[#0F2D6B] mb-3">{f.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{f.desc}</p>

              {/* Arrow */}
              <div className="mt-5 flex items-center gap-1 text-sm text-[#9CA3AF] group-hover:text-[#1E6FFF] transition-colors">
                <span>Learn more</span>
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>

              {/* Index number accent */}
              <div className="absolute top-5 right-5 text-4xl font-playfair font-bold text-black/4 select-none">
                0{i + 1}
              </div>
            </div>
          ))}

          {/* Coming soon card */}
          <div className="reveal reveal-delay-2 rounded-2xl p-6 border border-[#1E6FFF]/20 bg-gradient-to-br from-[#EEF4FF] to-[#F0EEFF] flex flex-col justify-between">
            <div>
              <div className="text-xs text-[#1E6FFF] font-semibold uppercase tracking-wider mb-1">
                Coming Soon
              </div>
              <h3 className="text-xl font-semibold text-[#0F2D6B] mb-3">Travel Guides</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Connect with certified local travel guides for personalised consultations,
                custom itineraries, and referral-based trip planning.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="https://app.swaraah.in"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E6FFF] hover:text-[#0A57E8] transition-colors"
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
