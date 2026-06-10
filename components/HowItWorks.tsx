import { Search, BadgeCheck, CreditCard } from 'lucide-react'

const STEPS = [
  {
    icon: Search,
    step: '01',
    title: 'Search Your Destination',
    desc: 'Type any Indian city, landmark, or region. Filter by dates, budget, type of experience — and see everything available in one view.',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-500',
    ring: 'ring-sky-100',
    num: 'bg-sky-500',
  },
  {
    icon: BadgeCheck,
    step: '02',
    title: 'Browse Verified Listings',
    desc: 'Every property, activity, restaurant and driver is reviewed and verified by our team. Real photos, real reviews, real prices — no surprises.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-[#FF6B35]',
    ring: 'ring-orange-100',
    num: 'bg-[#FF6B35]',
  },
  {
    icon: CreditCard,
    step: '03',
    title: 'Book & Pay Securely',
    desc: 'Pay via Razorpay (UPI, cards, net banking). Earn Voyage Coins on every booking. Instant confirmation email, full cancellation transparency.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    ring: 'ring-amber-100',
    num: 'bg-amber-500',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#FF6B35] text-sm font-semibold uppercase tracking-widest mb-4 block">
            Simple Process
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-4">
            How It Works
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
            From idea to confirmed booking in under 3 minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.666%+2rem)] right-[calc(16.666%+2rem)] h-px bg-gradient-to-r from-sky-200 via-orange-200 to-amber-200" />

          {STEPS.map((s, i) => (
            <div key={s.step} className="relative flex flex-col items-center text-center group">
              <div className={`relative w-20 h-20 rounded-2xl ${s.iconBg} ring-4 ${s.ring} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                <s.icon className={`w-8 h-8 ${s.iconColor}`} />
                <span className={`absolute -top-3 -right-3 w-7 h-7 rounded-full ${s.num} text-white text-xs font-bold flex items-center justify-center shadow-md`}>
                  {i + 1}
                </span>
              </div>

              <div className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-2">
                Step {s.step}
              </div>
              <h3 className="text-xl font-semibold text-[#0D1B2A] mb-3">{s.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="https://app.swaraah.in"
            className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#E85520] text-white px-10 py-4 rounded-full font-semibold text-base transition-all duration-200 orange-glow hover:-translate-y-0.5"
          >
            Start Planning Your Trip →
          </a>
        </div>
      </div>
    </section>
  )
}
