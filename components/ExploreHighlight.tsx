import { MapPin, Camera, Star, Users } from 'lucide-react'

const FEATURES = [
  { icon: MapPin, label: 'GPS Check-ins', desc: 'Check in at real places and earn Voyage Coins' },
  { icon: Camera, label: 'Community Photos', desc: 'Browse traveler photos from the exact spot' },
  { icon: Star, label: 'Local Reviews', desc: 'Honest ratings by verified bookers only' },
  { icon: Users, label: 'Place Collaborators', desc: 'Earn by enriching local place data' },
]

export default function ExploreHighlight() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Visual mock */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto">
              {/* Phone frame */}
              <div className="relative bg-[#F5F5F5] rounded-[2.5rem] border border-black/8 p-3 shadow-2xl">
                <div className="rounded-[2rem] overflow-hidden bg-white aspect-[9/18] border border-black/5">
                  {/* Map area */}
                  <div className="relative h-1/2 bg-gradient-to-br from-blue-50 to-indigo-100 dot-grid-light flex items-center justify-center">
                    {[
                      { top: '25%', left: '30%', label: 'Heritage Fort', color: 'bg-[#1E6FFF]' },
                      { top: '50%', left: '55%', label: 'Spice Market', color: 'bg-[#6366F1]' },
                      { top: '70%', left: '35%', label: 'Lake View', color: 'bg-sky-500' },
                    ].map(pin => (
                      <div key={pin.label} className="absolute" style={{ top: pin.top, left: pin.left }}>
                        <div className={`w-3 h-3 rounded-full ${pin.color} ring-4 ring-white shadow-md`} />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border border-black/8 text-[#0F2D6B] text-xs px-2 py-1 rounded-lg whitespace-nowrap shadow-sm">
                          {pin.label}
                        </div>
                      </div>
                    ))}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 rounded-full bg-blue-500 ring-8 ring-blue-200" />
                    </div>
                  </div>

                  {/* Place card */}
                  <div className="p-4 bg-white">
                    <div className="text-[#9CA3AF] text-xs mb-2">NEARBY · 0.3 km away</div>
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">🏰</div>
                      <div className="flex-1">
                        <div className="text-[#0F2D6B] font-semibold text-sm">Heritage Fort View</div>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Star className="w-3 h-3 text-[#6366F1] fill-[#6366F1]" />
                          <span className="text-[#6B7280] text-xs">4.7 · 124 check-ins</span>
                        </div>
                        <div className="flex gap-1 mt-2">
                          {['History', 'Photography', 'Sunset'].map(t => (
                            <span key={t} className="text-xs bg-[#EEF3FF] text-[#4A5568] px-2 py-0.5 rounded-full">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 bg-[#1E6FFF] text-white text-xs py-2.5 rounded-xl font-semibold">
                        Check In &amp; Earn
                      </button>
                      <button className="flex-1 bg-[#F5F5F5] text-[#4A5568] text-xs py-2.5 rounded-xl">
                        View Photos
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-6 top-1/3 bg-white rounded-xl px-4 py-3 shadow-xl border border-black/5">
                <div className="text-xs text-[#9CA3AF] mb-0.5">Voyage Coins Earned</div>
                <div className="text-xl font-bold text-[#6366F1]">+50 VC</div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
            <span className="text-[#1E6FFF] text-sm font-semibold uppercase tracking-widest mb-4 block">
              Explore Feature
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0F2D6B] mb-6 leading-tight">
              Discover Hidden Gems{' '}
              <span className="gradient-text">Near You</span>
            </h2>
            <p className="text-[#4A5568] text-lg leading-relaxed mb-10">
              Not just bookings — Swaraah helps you discover real India.
              Check in at local landmarks, browse community photos, read authentic
              reviews, and earn Voyage Coins for contributing to the community.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {FEATURES.map(f => (
                <div key={f.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <f.icon className="w-4 h-4 text-[#1E6FFF]" />
                  </div>
                  <div>
                    <div className="text-[#0F2D6B] font-semibold text-sm">{f.label}</div>
                    <div className="text-[#9CA3AF] text-xs mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="https://app.swaraah.in"
                className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-[#1E6FFF] border border-blue-200 px-6 py-3 rounded-full font-semibold text-sm transition-all"
              >
                Try Explore Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
