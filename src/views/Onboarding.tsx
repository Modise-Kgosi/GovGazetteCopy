import { useState } from "react"
import { useNav } from "../context/NavContext"
import { BrandMark, Wordmark } from "../components/Brand"

const STEPS = [
  "COMPANY",
  "CAPABILITIES",
  "CERTIFICATIONS",
  "EXPERIENCE",
  "TEAM",
  "EVIDENCE",
  "PREFERENCES",
] as const

const STEP_NAMES = [
  "Company",
  "Capabilities",
  "Certifications",
  "Experience",
  "Team",
  "Evidence",
  "Preferences",
]

const STEP_QUESTIONS = [
  "Tell us about your company",
  "What does your company do?",
  "Which certifications do you hold?",
  "Share your track record",
  "Invite your team",
  "Upload supporting evidence",
  "Set your matching preferences",
]

const STEP_SUBTITLES = [
  "Basic details help us verify eligibility and match tenders.",
  "Select the core services and industries you operate in.",
  "Certifications strengthen your eligibility for restricted tenders.",
  "Past projects power more accurate opportunity matching.",
  "Add colleagues so you can respond to tenders together.",
  "Validated documents speed up your future submissions.",
  "Tune how and where we surface opportunities for you.",
]

const STEP_NOTES = [
  "Completing your legal details unlocks eligibility checks.",
  "Adding previous projects will improve opportunity matching.",
  "Verified certifications expand the tenders you qualify for.",
  "More project history sharpens your relevance scores.",
  "Team access lets you collaborate on live submissions.",
  "Validated evidence auto-fills future bid requirements.",
  "Precise preferences reduce noise in your daily digest.",
]

function IconInfo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </svg>
  )
}
function IconX({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}
function IconCheck({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
function IconPlus({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}
function IconUpload({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 16V4M8 8l4-4 4 4" />
      <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  )
}
function IconShield({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
    </svg>
  )
}
function IconClock({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

function Field({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink mb-1.5">{label}</span>
      {children}
      {hint ? <span className="block text-xs text-subtle mt-1">{hint}</span> : null}
    </label>
  )
}

const inputCls =
  "w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-subtle outline-none focus:border-border-strong focus:ring-2 focus:ring-primary-tint transition"

export default function Onboarding() {
  const { navigate } = useNav()
  const [step, setStep] = useState(0)

  // Step 1 — Company
  const [legalName, setLegalName] = useState("")
  const [uei, setUei] = useState("")
  const [country, setCountry] = useState("Botswana")
  const [size, setSize] = useState("11–50 employees")

  // Step 2 — Capabilities
  const [caps, setCaps] = useState(["ICT Services", "Construction", "Cybersecurity"])
  const [capInput, setCapInput] = useState("")

  // Step 3 — Certifications
  const CERTS = [
    "ISO 9001 — Quality Management",
    "ISO 27001 — Information Security",
    "Tax Clearance Certificate",
    "CIPA Registration",
    "PPADB Grade",
  ]
  const [certs, setCerts] = useState<Record<string, boolean>>({ "CIPA Registration": true })

  // Step 4 — Experience
  type Project = { id: number; title: string; client: string; value: string; year: string }
  const [projects, setProjects] = useState<Project[]>([{ id: 1, title: "", client: "", value: "", year: "" }])
  const [projSeq, setProjSeq] = useState(2)

  // Step 5 — Team
  type Invite = { id: number; email: string; role: string }
  const [invites, setInvites] = useState<Invite[]>([])
  const [inviteEmail, setInviteEmail] = useState("")
  const [inviteRole, setInviteRole] = useState("Editor")
  const [inviteSeq, setInviteSeq] = useState(1)

  // Step 6 — Evidence
  const docs = [
    { name: "Company_Profile_2025.pdf", type: "Profile", status: "verified" as const },
    { name: "Tax_Clearance.pdf", type: "Tax", status: "verified" as const },
    { name: "ISO_27001_Cert.pdf", type: "Certification", status: "pending" as const },
  ]

  // Step 7 — Preferences
  const [minValue, setMinValue] = useState(250000)
  const SECTORS = ["ICT", "Health", "Construction", "Energy", "Education", "Defense"]
  const [sectors, setSectors] = useState<string[]>(["ICT", "Health"])
  const [frequency, setFrequency] = useState("Daily")
  const JURIS = ["Botswana", "South Africa", "Namibia", "Zambia", "SADC-wide"]
  const [juris, setJuris] = useState<string[]>(["Botswana"])

  const percent = Math.min(97, 40 + step * 9)

  const addCap = () => {
    const v = capInput.trim().replace(/,$/, "").trim()
    if (v && !caps.includes(v)) setCaps([...caps, v])
    setCapInput("")
  }
  const removeCap = (c: string) => setCaps(caps.filter((x) => x !== c))
  const toggleCert = (c: string) => setCerts((p) => ({ ...p, [c]: !p[c] }))
  const addProject = () => {
    setProjects([...projects, { id: projSeq, title: "", client: "", value: "", year: "" }])
    setProjSeq(projSeq + 1)
  }
  const removeProject = (id: number) => setProjects(projects.filter((p) => p.id !== id))
  const updateProject = (id: number, key: keyof Project, val: string) =>
    setProjects(projects.map((p) => (p.id === id ? { ...p, [key]: val } : p)))
  const addInvite = () => {
    const e = inviteEmail.trim()
    if (!e) return
    setInvites([...invites, { id: inviteSeq, email: e, role: inviteRole }])
    setInviteSeq(inviteSeq + 1)
    setInviteEmail("")
  }
  const removeInvite = (id: number) => setInvites(invites.filter((i) => i.id !== id))
  const toggleFrom = (arr: string[], set: (v: string[]) => void, v: string) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v])

  const onBack = () => {
    if (step === 0) navigate("login")
    else setStep(step - 1)
  }
  const onContinue = () => {
    if (step === STEPS.length - 1) navigate("dashboard")
    else setStep(step + 1)
  }

  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center px-4 py-10 sm:py-14">
      {/* Brand */}
      <div className="flex items-center gap-2.5 mb-8">
        <BrandMark size={26} />
        <Wordmark />
      </div>

      {/* Step progress */}
      <div className="w-full max-w-[900px] mb-10 overflow-x-auto">
        <div className="flex gap-2 sm:gap-3 min-w-[640px] px-1">
          {STEPS.map((label, i) => {
            const done = i <= step
            const current = i === step
            const clickable = i < step
            return (
              <button
                key={label}
                type="button"
                onClick={() => clickable && setStep(i)}
                disabled={!clickable}
                className={`flex-1 text-left ${clickable ? "cursor-pointer" : "cursor-default"}`}
              >
                <div className={`h-1 rounded-full mb-2.5 transition-colors ${done ? "bg-ink" : "bg-border"}`} />
                <span
                  className={`block text-[11px] tracking-wide font-semibold whitespace-nowrap ${
                    current ? "text-ink" : done ? "text-ink/70" : "text-subtle"
                  }`}
                >
                  {label}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Card */}
      <div className="w-full max-w-[640px] bg-surface rounded-2xl shadow-sm border border-border/60 p-6 sm:p-10">
        <p className="text-sm text-muted mb-2">
          Step {step + 1} of 7 — {STEP_NAMES[step]}
        </p>
        <h1 className="font-display font-bold text-3xl sm:text-[34px] leading-tight text-ink tracking-tight">
          {STEP_QUESTIONS[step]}
        </h1>
        <p className="text-muted text-[15px] sm:text-base mt-2.5 mb-8">{STEP_SUBTITLES[step]}</p>

        <div className="min-h-[220px]">
          {step === 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Field label="Legal company name">
                  <input className={inputCls} placeholder="Acme Holdings (Pty) Ltd" value={legalName} onChange={(e) => setLegalName(e.target.value)} />
                </Field>
              </div>
              <Field label="Registration / UEI number">
                <input className={`${inputCls} font-mono`} placeholder="BW-000-000-000" value={uei} onChange={(e) => setUei(e.target.value)} />
              </Field>
              <Field label="Country / Region">
                <select className={inputCls} value={country} onChange={(e) => setCountry(e.target.value)}>
                  {["Botswana", "South Africa", "Namibia", "Zambia", "Zimbabwe"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Company size">
                  <select className={inputCls} value={size} onChange={(e) => setSize(e.target.value)}>
                    {["1–10 employees", "11–50 employees", "51–200 employees", "201–500 employees", "500+ employees"].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <div className="rounded-xl border border-border p-4 focus-within:border-border-strong transition">
                <div className="flex flex-wrap gap-2 mb-3">
                  {caps.map((c) => (
                    <span key={c} className="inline-flex items-center gap-1.5 rounded-full bg-panel px-3 py-1.5 text-sm text-ink">
                      {c}
                      <button type="button" onClick={() => removeCap(c)} className="text-muted hover:text-ink" aria-label={`Remove ${c}`}>
                        <IconX />
                      </button>
                    </span>
                  ))}
                </div>
                <input
                  className="w-full bg-transparent text-sm text-ink placeholder:text-subtle outline-none py-1"
                  placeholder="Search for more capabilities…"
                  value={capInput}
                  onChange={(e) => setCapInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === ",") {
                      e.preventDefault()
                      addCap()
                    }
                  }}
                />
              </div>
              <p className="text-xs text-subtle mt-2">Press enter or comma to add a capability.</p>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-2.5">
              {CERTS.map((c) => {
                const on = !!certs[c]
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => toggleCert(c)}
                    className={`w-full flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition ${
                      on ? "border-border-strong bg-panel" : "border-border hover:border-border-strong"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center border ${
                        on ? "bg-ink border-ink text-white" : "border-border-strong text-transparent"
                      }`}
                    >
                      <IconCheck />
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center gap-1.5 text-sm text-ink">
                        <IconShield className="text-muted" />
                        {c}
                      </span>
                      {on ? <span className="block text-xs text-subtle mt-0.5">Add an expiry date after onboarding to keep it valid.</span> : null}
                    </span>
                  </button>
                )
              })}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              {projects.map((p, idx) => (
                <div key={p.id} className="rounded-xl border border-border p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-ink">Project {idx + 1}</span>
                    {projects.length > 1 && (
                      <button type="button" onClick={() => removeProject(p.id)} className="inline-flex items-center gap-1 text-xs text-muted hover:text-danger">
                        <IconX /> Remove
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="sm:col-span-2">
                      <input className={inputCls} placeholder="Project title" value={p.title} onChange={(e) => updateProject(p.id, "title", e.target.value)} />
                    </div>
                    <input className={inputCls} placeholder="Client / Agency" value={p.client} onChange={(e) => updateProject(p.id, "client", e.target.value)} />
                    <input className={`${inputCls} font-mono`} placeholder="Value (BWP)" value={p.value} onChange={(e) => updateProject(p.id, "value", e.target.value)} />
                    <input className={`${inputCls} font-mono`} placeholder="Year" value={p.year} onChange={(e) => updateProject(p.id, "year", e.target.value)} />
                  </div>
                </div>
              ))}
              <button type="button" onClick={addProject} className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-sm font-medium text-ink hover:border-border-strong transition">
                <IconPlus /> Add project
              </button>
            </div>
          )}

          {step === 4 && (
            <div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  className={`${inputCls} flex-1`}
                  placeholder="colleague@company.com"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      addInvite()
                    }
                  }}
                />
                <select className={`${inputCls} sm:w-40`} value={inviteRole} onChange={(e) => setInviteRole(e.target.value)}>
                  {["Admin", "Editor", "Viewer"].map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
                <button type="button" onClick={addInvite} className="rounded-lg bg-ink text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition">
                  Add
                </button>
              </div>
              <div className="mt-4 space-y-2">
                {invites.length === 0 ? (
                  <p className="text-sm text-subtle">No invites yet — add teammates above.</p>
                ) : (
                  invites.map((i) => (
                    <div key={i.id} className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
                      <div className="min-w-0">
                        <p className="text-sm text-ink truncate">{i.email}</p>
                        <p className="text-xs text-muted">{i.role} · Invite pending</p>
                      </div>
                      <button type="button" onClick={() => removeInvite(i.id)} className="text-muted hover:text-danger flex-shrink-0" aria-label="Remove invite">
                        <IconX />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <div className="rounded-xl border-2 border-dashed border-border px-6 py-10 text-center hover:border-border-strong transition">
                <div className="mx-auto w-11 h-11 rounded-full bg-panel flex items-center justify-center text-muted mb-3">
                  <IconUpload />
                </div>
                <p className="text-sm text-ink font-medium">Drag files or browse</p>
                <p className="text-xs text-subtle mt-1">PDF, DOCX or PNG up to 20 MB</p>
              </div>
              <div className="mt-4 space-y-2">
                {docs.map((d) => {
                  const verified = d.status === "verified"
                  return (
                    <div key={d.name} className="flex items-center justify-between rounded-lg border border-border px-4 py-3 gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="font-mono text-xs rounded bg-panel px-2 py-1 text-muted flex-shrink-0">{d.type}</span>
                        <span className="text-sm text-ink truncate">{d.name}</span>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-medium flex-shrink-0 rounded-full px-2.5 py-1 ${
                          verified ? "bg-healthy-bg text-healthy" : "bg-warn-bg text-warn"
                        }`}
                      >
                        {verified ? <IconCheck /> : <IconClock />}
                        {verified ? "Verified" : "Pending review"}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="space-y-7">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-ink">Minimum contract value</span>
                  <span className="font-mono text-sm text-ink">BWP {minValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={2000000}
                  step={50000}
                  value={minValue}
                  onChange={(e) => setMinValue(Number(e.target.value))}
                  className="w-full"
                  style={{ accentColor: "#1a1a1a" }}
                />
              </div>

              <div>
                <span className="block text-sm font-medium text-ink mb-2">Preferred sectors</span>
                <div className="flex flex-wrap gap-2">
                  {SECTORS.map((s) => {
                    const on = sectors.includes(s)
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleFrom(sectors, setSectors, s)}
                        className={`rounded-full px-3.5 py-1.5 text-sm border transition ${
                          on ? "bg-ink text-white border-ink" : "bg-surface text-ink border-border hover:border-border-strong"
                        }`}
                      >
                        {s}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <span className="block text-sm font-medium text-ink mb-2">Notification frequency</span>
                <div className="grid grid-cols-3 gap-2">
                  {["Real-time", "Daily", "Weekly"].map((f) => {
                    const on = frequency === f
                    return (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setFrequency(f)}
                        className={`rounded-lg border px-3 py-2.5 text-sm transition ${
                          on ? "border-border-strong bg-panel font-medium text-ink" : "border-border text-muted hover:border-border-strong"
                        }`}
                      >
                        {f}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <span className="block text-sm font-medium text-ink mb-2">Jurisdictions</span>
                <div className="flex flex-wrap gap-2">
                  {JURIS.map((j) => {
                    const on = juris.includes(j)
                    return (
                      <button
                        key={j}
                        type="button"
                        onClick={() => toggleFrom(juris, setJuris, j)}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm border transition ${
                          on ? "bg-panel border-border-strong text-ink" : "bg-surface border-border text-muted hover:border-border-strong"
                        }`}
                      >
                        {on ? <IconCheck className="text-ink" /> : null}
                        {j}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Info note */}
        <div className="mt-8 flex items-start gap-3 rounded-xl bg-[#EEF3FC] text-[#2563EB] px-4 py-3.5">
          <IconInfo className="mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="font-semibold">Your profile is {percent}% ready.</p>
            <p className="mt-0.5">{STEP_NOTES[step]}</p>
          </div>
        </div>

        {/* Divider + footer */}
        <div className="border-t border-border mt-8 pt-6">
          <div className="flex items-center justify-between">
            <button type="button" onClick={onBack} className="text-sm font-medium text-muted hover:text-ink transition px-2 py-2 -ml-2">
              Back
            </button>
            <button type="button" onClick={onContinue} className="rounded-xl bg-ink text-white px-7 py-3 text-sm font-semibold hover:opacity-90 transition">
              {step === STEPS.length - 1 ? "Finish setup" : "Continue"}
            </button>
          </div>
          <div className="text-center mt-5">
            <button type="button" onClick={() => navigate("dashboard")} className="text-sm text-muted hover:text-ink transition">
              Finish later — go to dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
