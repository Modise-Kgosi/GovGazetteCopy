import { useState } from 'react'
import { useNav } from '../context/NavContext'
import { ColumnsMark } from '../components/Brand'
import BUILDING from '@/imports/auth-building.jpg'

function strength(pw: string) {
  let s = 0
  if (pw.length >= 12) s++
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s++
  if (/[^A-Za-z0-9]/.test(pw)) s++
  return s // 0..3
}

export default function Signup() {
  const { navigate } = useNav()
  const [pw, setPw] = useState('')
  const s = strength(pw)

  return (
    <div className="min-h-screen bg-background grid lg:grid-cols-2">
      {/* Left visual panel */}
      <div className="relative hidden lg:block m-3 rounded-3xl overflow-hidden bg-ink">
        <img
          src={BUILDING}
          alt="Government office building entrance at dusk"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/50" />
        <div className="relative h-full flex flex-col justify-between p-10 text-white">
          <div className="flex items-center gap-2.5">
            <ColumnsMark size={24} color="white" />
            <span className="font-display font-bold text-lg tracking-tight">GovGazette</span>
          </div>
          <div>
            <h2 className="font-display font-bold text-[26px] leading-tight">Precision procurement, scaled.</h2>
            <p className="text-white/75 mt-3 max-w-xs leading-relaxed">
              Join the network of high-performance teams orchestrating compliant, efficient government sourcing.
            </p>
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/15">
              <div className="flex -space-x-2">
                {['#0E8574', '#7C3AED', '#C2680A'].map((c, i) => (
                  <div key={i} className="w-9 h-9 rounded-full ring-2 ring-ink flex items-center justify-center text-white text-xs font-semibold" style={{ background: c }}>
                    {['AM', 'RK', 'TS'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="font-display font-bold text-sm">Trusted by 10,000+</div>
                <div className="text-white/70 text-xs">Procurement Professionals</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex items-center justify-center px-6 py-12 overflow-y-auto">
        <form
          onSubmit={(e) => { e.preventDefault(); navigate('onboarding') }}
          className="w-full max-w-[420px]"
        >
          <div className="lg:hidden flex items-center gap-2.5 mb-8">
            <ColumnsMark size={24} color="#0E8574" />
            <span className="font-display font-bold text-lg tracking-tight text-ink">GovGazette</span>
          </div>

          <p className="font-display font-bold text-lg text-ink">Get started with GovGazette</p>
          <p className="text-muted mt-1 mb-8">Join the network of high-performance procurement teams.</p>

          <Field label="Full Name">
            <IconInput icon={<path d="M9 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.5 15.5a5.5 5.5 0 0 1 11 0" />} placeholder="Amara Molefe" type="text" />
          </Field>
          <Field label="Work Email">
            <IconInput icon={<><rect x="2" y="3.5" width="14" height="11" rx="1.5" /><path d="M3 5l6 4 6-4" /></>} placeholder="amara@agency.gov" type="email" />
          </Field>
          <Field label="Organization">
            <IconInput icon={<><rect x="3" y="2.5" width="9" height="13" rx="1" /><path d="M12 6h3v9.5M3 15.5h12M5.5 5.5h3M5.5 8.5h3" /></>} placeholder="Ministry of Trade & Industry" type="text" />
          </Field>
          <Field label="Password">
            <div className="relative">
              <svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-subtle absolute left-4 top-1/2 -translate-y-1/2"><rect x="3.5" y="8" width="11" height="7" rx="1.5" /><path d="M6 8V6a3 3 0 0 1 6 0v2" /></svg>
              <input
                type="password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-surface border border-border rounded-xl pl-11 pr-4 py-3 text-sm text-ink placeholder:text-subtle outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>
            <div className="flex gap-1.5 mt-2.5">
              {[0, 1, 2].map(i => (
                <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i < s ? (s === 1 ? 'bg-warn' : s === 2 ? 'bg-primary' : 'bg-healthy') : 'bg-border'}`} />
              ))}
            </div>
            <p className="text-xs text-subtle mt-2">Must be at least 12 characters with symbols.</p>
          </Field>

          <button type="submit" className="w-full mt-2 bg-primary hover:bg-primary-hover text-white font-semibold text-sm uppercase tracking-wide rounded-xl py-3.5 flex items-center justify-center gap-2 transition-colors">
            Create account
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 8h10M9 4.5L12.5 8 9 11.5" /></svg>
          </button>

          <p className="text-center text-sm text-muted mt-6">
            Already have an account?{' '}
            <button type="button" onClick={() => navigate('login')} className="font-semibold text-primary hover:text-primary-hover">Sign in</button>
          </p>

          <div className="h-px bg-border my-6" />
          <p className="text-center text-xs text-subtle leading-relaxed">
            By creating an account, you agree to our{' '}
            <span className="underline text-muted">Terms of Service</span> and{' '}
            <span className="underline text-muted">Privacy Policy</span>.
          </p>
        </form>
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">{label}</label>
      {children}
    </div>
  )
}

function IconInput({ icon, placeholder, type }: { icon: React.ReactNode; placeholder: string; type: string }) {
  return (
    <div className="relative">
      <svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-subtle absolute left-4 top-1/2 -translate-y-1/2">{icon}</svg>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-surface border border-border rounded-xl pl-11 pr-4 py-3 text-sm text-ink placeholder:text-subtle outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
      />
    </div>
  )
}
