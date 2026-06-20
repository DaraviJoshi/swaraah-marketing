'use client'
import { useState } from 'react'
import { Mail, ArrowRight, CheckCircle } from 'lucide-react'

type State = 'idle' | 'loading' | 'success' | 'duplicate' | 'error'

// Default to the live API so the form works even without the GitHub secret set
const API_URL = process.env.NEXT_PUBLIC_NOTIFICATION_URL ?? 'https://api.swaraah.in'

function sendGa4Event() {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    ;(window as any).gtag('event', 'newsletter_subscribe', {
      event_category: 'engagement',
      event_label: 'marketing_website',
    })
  }
}

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<State>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || state === 'loading') return

    setState('loading')
    try {
      const res = await fetch(`${API_URL}/api/notifications/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'marketing_website' }),
      })
      if (res.status === 409) {
        setState('duplicate')
        return
      }
      if (!res.ok) throw new Error('Server error')
      sendGa4Event()
      setState('success')
      setEmail('')
    } catch {
      setState('error')
    }
  }

  return (
    <section className="section-pad bg-[#080F24] relative overflow-hidden">
      {/* Background blobs — pointer-events-none so they never block the form */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#6366F1]/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#1E6FFF]/10 blur-[90px]" />
        <div className="absolute inset-0 dot-grid-dark" />
      </div>

      {/* z-10 ensures this sits above the absolutely-positioned background */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E6FFF]/20 to-[#6366F1]/20 border border-white/10 mb-6">
          <Mail className="w-6 h-6 text-[#818CF8]" />
        </div>

        <span className="text-[#818CF8] text-sm font-semibold uppercase tracking-widest mb-4 block">
          Stay in the Loop
        </span>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
          Get Travel Deals &amp;{' '}
          <span className="gradient-text">Updates</span>
        </h2>
        <p className="text-white/50 text-base leading-relaxed mb-10 max-w-lg mx-auto">
          New destinations, exclusive vendor offers, and Swaraah platform updates — delivered straight to your inbox. No spam, unsubscribe anytime.
        </p>

        {state === 'success' ? (
          <div className="flex flex-col items-center gap-4 py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <CheckCircle className="w-7 h-7 text-emerald-400" />
            </div>
            <p className="text-white font-semibold text-lg">You're in!</p>
            <p className="text-white/50 text-sm">Check your inbox for a welcome email from us.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={e => {
                setEmail(e.target.value)
                if (state !== 'idle') setState('idle')
              }}
              placeholder="your@email.com"
              autoComplete="email"
              className="flex-1 bg-white/5 border border-white/20 text-white caret-white placeholder-white/30 px-5 py-3.5 rounded-full text-sm focus:outline-none focus:border-[#1E6FFF] focus:bg-white/10 transition-all duration-200"
            />
            <button
              type="submit"
              disabled={state === 'loading'}
              className="inline-flex items-center justify-center gap-2 bg-[#1E6FFF] hover:bg-[#0A57E8] disabled:opacity-60 text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 blue-glow hover:-translate-y-px whitespace-nowrap"
            >
              {state === 'loading' ? 'Subscribing…' : (<>Subscribe <ArrowRight size={15} /></>)}
            </button>
          </form>
        )}

        {/* Status messages */}
        {state === 'duplicate' && (
          <p className="mt-3 text-amber-400 text-sm">You're already subscribed — we'll keep the updates coming!</p>
        )}
        {state === 'error' && (
          <p className="mt-3 text-rose-400 text-sm">Something went wrong. Please try again in a moment.</p>
        )}

        {state === 'idle' && (
          <p className="mt-5 text-white/25 text-xs">Join travellers already receiving our updates</p>
        )}
      </div>
    </section>
  )
}
