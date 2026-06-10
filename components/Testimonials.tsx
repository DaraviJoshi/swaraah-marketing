import { Star, Quote } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Priya Sharma',
    handle: 'Traveller from Delhi',
    avatar: 'PS',
    avatarBg: 'from-pink-400 to-rose-500',
    rating: 5,
    text: 'Booked a heritage stay in Jaipur through VoyageLocal — the vendor was incredibly responsive and the price was exactly what was shown. No hidden charges. The real-time driver tracking was also super reassuring when we were landing at midnight.',
    trip: 'Jaipur, Rajasthan',
    emoji: '🏰',
  },
  {
    name: 'Arjun Menon',
    handle: 'Traveller from Bangalore',
    avatar: 'AM',
    avatarBg: 'from-blue-400 to-indigo-500',
    rating: 5,
    text: 'Used VoyageLocal to plan a full 10-day Kerala trip — stays, backwater boat activity, and all restaurant reservations. Everything connected seamlessly. The Voyage Coins I earned on the first booking paid for my last meal. Brilliant concept.',
    trip: 'Kerala Backwaters',
    emoji: '🌴',
  },
  {
    name: 'Neha Agarwal',
    handle: 'Traveller from Mumbai',
    avatar: 'NA',
    avatarBg: 'from-amber-400 to-orange-500',
    rating: 5,
    text: 'As someone who travels solo, the verified vendor badge genuinely gave me confidence. The activity booking in Manali — a guided snow trek — was exactly as described. Driver arrived 5 minutes early with real-time GPS tracking. Will use every trip now.',
    trip: 'Manali, Himachal',
    emoji: '🏔️',
  },
]

export default function Testimonials() {
  return (
    <section className="section-pad bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#FF6B35] text-sm font-semibold uppercase tracking-widest mb-4 block">
            Real Travellers
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-4">
            What Our Community Says
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
            Reviews from verified bookers — only those who completed a booking can leave a review.
          </p>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map(r => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-6 flex flex-col border border-black/6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FFB703] fill-[#FFB703]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-black/5 group-hover:text-black/8 transition-colors" />
              </div>

              {/* Review text */}
              <p className="text-[#4A5568] text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.avatarBg} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {r.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[#0D1B2A] font-semibold text-sm">{r.name}</div>
                  <div className="text-[#9CA3AF] text-xs truncate">{r.handle}</div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-lg">{r.emoji}</span>
                  <div className="text-[#9CA3AF] text-xs mt-0.5">{r.trip}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
          {[
            { label: 'Razorpay Secured', icon: '🔒' },
            { label: 'SSL Encrypted', icon: '🛡️' },
            { label: 'Verified Vendors Only', icon: '✅' },
            { label: 'Dispute Protection', icon: '⚖️' },
            { label: 'Made in India', icon: '🇮🇳' },
          ].map(b => (
            <div key={b.label} className="flex items-center gap-2 text-[#9CA3AF] text-sm">
              <span>{b.icon}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
