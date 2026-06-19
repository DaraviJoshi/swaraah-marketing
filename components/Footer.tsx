const LINKS = {
  Product: [
    { label: 'Stays', href: '#features' },
    { label: 'Activities', href: '#features' },
    { label: 'Restaurants', href: '#features' },
    { label: 'Transport', href: '#features' },
    { label: 'Travel Packages', href: '#features' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Vendors: [
    { label: 'Register as Vendor', href: 'https://app.swaraah.in' },
    { label: 'Vendor Dashboard', href: 'https://app.swaraah.in' },
    { label: 'Pricing', href: '#' },
    { label: 'Agency Portal', href: 'https://app.swaraah.in' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Refund Policy', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#060D1F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top: brand + links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#1E6FFF] to-[#6366F1] flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-playfair font-bold text-lg text-white">Swaraah</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-[200px]">
              Discover India, Your Way. Hotels, activities, food &amp; transport — all in one marketplace.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {[
                { label: 'tw', href: '#' },
                { label: 'in', href: '#' },
                { label: 'ig', href: '#' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:bg-[#1E6FFF]/20 text-xs font-bold transition-all uppercase"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map(l => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-white/40 hover:text-white text-sm transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">
            © 2026 Swaraah. All rights reserved. Built with ❤️ in India.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-white/25 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              All systems operational
            </span>
            <a
              href="https://app.swaraah.in"
              className="text-[#818CF8] hover:text-[#1E6FFF] text-sm font-semibold transition-colors"
            >
              Launch App →
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
