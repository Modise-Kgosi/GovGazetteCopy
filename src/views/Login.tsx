import { useState } from 'react'
import { useNav } from '../context/NavContext'
import { ColumnsMark } from '../components/Brand'
import BUILDING from '@/imports/auth-building.jpg'

export default function Login() {
  const { navigate } = useNav()
  const [showPw, setShowPw] = useState(false)
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')

  return (
    <div className="min-h-screen bg-background grid lg:grid-cols-2">
      {/* Left visual panel */}
      <div className="relative hidden lg:block m-3 rounded-3xl overflow-hidden bg-ink">
        <img
          src={BUILDING}
          alt="Modern government office building facade at dusk"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/40" />
        <div className="relative h-full flex flex-col justify-between p-10 text-white">
          <div className="flex items-center gap-2.5">
            <ColumnsMark size={26} color="white" />
            <span className="font-display font-bold text-xl tracking-tight">GovGazette</span>
          </div>
          <div className="max-w-sm">
            <h2 className="font-display font-bold text-[26px] leading-tight text-white">
              Empowering procurement professionals with unparalleled clarity.
            </h2>
            <div className="flex items-center gap-6 mt-6 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 1.5l5 2v3.5c0 3-2 5.5-5 6.5-3-1-5-3.5-5-6.5V3.5l5-2Z" /><path d="M6 8l1.4 1.4L10 6.5" /></svg>
                Secure
              </span>
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6.5" /><path d="M8 4.5V8l2.5 1.5" /></svg>
                Real-time
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex items-center justify-center px-6 py-12">
        <form
          onSubmit={(e) => { e.preventDefault(); navigate('dashboard') }}
          className="w-full max-w-[400px]"
        >
          <div className="lg:hidden flex items-center gap-2.5 mb-8">
            <ColumnsMark size={24} color="#0E8574" />
            <span className="font-display font-bold text-lg tracking-tight text-ink">GovGazette</span>
          </div>

          <h1 className="font-display font-bold text-[32px] text-ink">Welcome back</h1>
          <p className="text-muted mt-1.5 mb-8">Access your procurement workspace.</p>

          <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">Email Address</label>
          <div className="relative mb-5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@agency.gov"
              className="w-full bg-surface border border-border rounded-xl px-4 py-3 pr-11 text-sm text-ink placeholder:text-subtle outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            />
            <svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-subtle absolute right-4 top-1/2 -translate-y-1/2"><rect x="2" y="3.5" width="14" height="11" rx="1.5" /><path d="M3 5l6 4 6-4" /></svg>
          </div>

          <div className="flex items-center justify-between mb-2">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-muted">Password</label>
            <button type="button" className="text-xs font-medium text-primary hover:text-primary-hover">Forgot password?</button>
          </div>
          <div className="relative mb-7">
            <input
              type={showPw ? 'text' : 'password'}
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-surface border border-border rounded-xl px-4 py-3 pr-11 text-sm text-ink placeholder:text-subtle outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            />
            <button type="button" onClick={() => setShowPw(s => !s)} aria-label={showPw ? 'Hide password' : 'Show password'} className="text-subtle hover:text-ink absolute right-4 top-1/2 -translate-y-1/2">
              <svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1.5 9S4.5 3.5 9 3.5 16.5 9 16.5 9 13.5 14.5 9 14.5 1.5 9 1.5 9Z" /><circle cx="9" cy="9" r="2.2" />{!showPw && <path d="M3 3l12 12" strokeLinecap="round" />}</svg>
            </button>
          </div>

          <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white font-semibold text-sm uppercase tracking-wide rounded-xl py-3.5 flex items-center justify-center gap-2 transition-colors">
            Sign in
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 8h10M9 4.5L12.5 8 9 11.5" /></svg>
          </button>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[11px] font-medium uppercase tracking-wider text-subtle">Or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <button type="button" className="w-full bg-surface border border-border hover:bg-panel text-ink font-medium text-sm rounded-xl py-3.5 flex items-center justify-center gap-2.5 transition-colors">
            <svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="4" width="13" height="10" rx="1.5" /><circle cx="6" cy="8" r="1.5" /><path d="M9.5 7.5h3.5M9.5 10h2.5" /></svg>
            Continue with SAML/SSO
          </button>

          <p className="text-center text-sm text-muted mt-8">
            Don&apos;t have an account?{' '}
            <button type="button" onClick={() => navigate('signup')} className="font-semibold text-primary hover:text-primary-hover uppercase text-xs tracking-wide">Sign up</button>
          </p>
        </form>
      </div>
    </div>
  )
}
