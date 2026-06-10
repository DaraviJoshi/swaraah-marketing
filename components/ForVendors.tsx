import { TrendingUp, Users, BarChart3, ShieldCheck } from 'lucide-react'

const PERKS = [
  { icon: TrendingUp, title: 'Grow Your Revenue', desc: 'Reach thousands of travelers actively searching in your city. No upfront cost to list.' },
  { icon: Users, title: 'Manage Everything', desc: 'One dashboard for bookings, payments, cancellations, and customer messages.' },
  { icon: BarChart3, title: 'Real-time Analytics', desc: 'See who is booking, from where, on what device — and optimise your listings.' },
  { icon: ShieldCheck, title: 'Secure Payouts', desc: 'Razorpay-backed payouts directly to your bank account within 2 business days.' },
]

const VENDOR_TYPES = [
  { emoji: '🏨', label: 'Hotels & Homestays' },
  { emoji: '🎯', label: 'Activity Providers' },
  { emoji: '🍽️', label: 'Restaurants & Cafés' },
  { emoji: '🚗', label: 'Local Drivers' },
  { emoji: '🏢', label: 'Travel Agencies' },
]

export default function ForVendors() {
  return (
    <section id="vendors" className="section-pad bg-[#0D1B2A] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/6 via-transparent to-[#1E3A5F]/20" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#FF6B35]/6 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <span className="text-[#FF6B35] text-sm font-semibold uppercase tracking-widest mb-4 block">
              For Travel Vendors
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Grow Your Travel{' '}
              <br />
              <span className="gradient-text">Business With Us</span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              Join 240+ vendors already on Swaraah. Whether you run a boutique
              guesthouse, a trekking agency, or a heritage restaurant — list your
              business and reach travellers ready to book.
            </p>

            {/* Vendor type chips */}
            <div className="flex flex-wrap gap-2 mb-10">
              {VENDOR_TYPES.map(v => (
                <span
                  key={v.label}
                  className="flex items-center gap-1.5 bg-white/6 border border-white/10 text-white/70 text-sm px-3.5 py-2 rounded-full"
                >
                  {v.emoji} {v.label}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.swaraah.in"
                className="inline-flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#E85520] text-white px-8 py-4 rounded-full font-semibold text-base transition-all orange-glow hover:-translate-y-0.5"
              >
                Register as Vendor →
              </a>
              <a
                href="https://app.swaraah.in"
                className="inline-flex items-center justify-center gap-2 glass-card hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-base transition-all"
              >
                View Vendor Demo
              </a>
            </div>
          </div>

          {/* Right: Perks grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PERKS.map(p => (
              <div
                key={p.title}
                className="group glass-card rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <p.icon className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}

            {/* Registration fee callout */}
            <div className="sm:col-span-2 rounded-2xl p-5 border border-emerald-500/20 bg-emerald-500/5">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎉</span>
                <div>
                  <div className="text-white font-semibold text-sm">Free to List</div>
                  <div className="text-white/50 text-xs mt-0.5">
                    No listing fee. We earn only when you earn — a small platform commission on confirmed bookings.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
