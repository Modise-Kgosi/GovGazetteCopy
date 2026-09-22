import { useState } from "react";

type TabId = "overview" | "evidence" | "certifications" | "performance";

const TABS: { id: TabId; label: string }[] = [
  { id: "overview", label: "OVERVIEW" },
  { id: "evidence", label: "EVIDENCE LOCKER" },
  { id: "certifications", label: "CERTIFICATIONS" },
  { id: "performance", label: "PAST PERFORMANCE" },
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WarnIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 9v4M12 17h.01" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BanIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m5.6 5.6 12.8 12.8" strokeLinecap="round" />
    </svg>
  );
}

function UploadIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path d="M12 16V4m0 0-5 5m5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ScaleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path d="M12 3v18M7 21h10M6 6l-3 6a3 3 0 0 0 6 0L6 6Zm12 0-3 6a3 3 0 0 0 6 0l-3-6ZM6 6l6-1 6 1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BankIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path d="M3 10 12 4l9 6M4 10h16M6 10v8M10 10v8M14 10v8M18 10v8M3 21h18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TargetIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
    </svg>
  );
}

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DocIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 3v5h5M8 13h8M8 17h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

function ReadinessGauge({ value }: { value: number }) {
  const r = 30;
  const c = 2 * Math.PI * r;
  const dash = (value / 100) * c;
  return (
    <svg viewBox="0 0 80 80" className="h-20 w-20 -rotate-90">
      <circle cx="40" cy="40" r={r} fill="none" stroke="var(--color-border)" strokeWidth={7} />
      <circle
        cx="40"
        cy="40"
        r={r}
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth={7}
        strokeLinecap="round"
        strokeDasharray={`${dash} ${c}`}
      />
    </svg>
  );
}

function StatusPill({
  kind,
  children,
}: {
  kind: "healthy" | "warn" | "danger";
  children: React.ReactNode;
}) {
  const map = {
    healthy: { icon: <CheckIcon className="h-4 w-4" />, cls: "text-healthy" },
    warn: { icon: <WarnIcon className="h-4 w-4" />, cls: "text-warn" },
    danger: { icon: <BanIcon className="h-4 w-4" />, cls: "text-danger" },
  } as const;
  const s = map[kind];
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wide ${s.cls}`}>
      {s.icon}
      {children}
    </span>
  );
}

export default function Company() {
  const [tab, setTab] = useState<TabId>("overview");
  const [showReadiness, setShowReadiness] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div className="px-8 py-7 max-w-[1200px]">
      {/* Profile header band */}
      <div className="relative mb-8 overflow-hidden">
        {/* decorative concentric arcs */}
        <svg
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-6 hidden h-[360px] w-[360px] text-border-strong opacity-40 md:block"
          viewBox="0 0 400 400"
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
        >
          <circle cx="400" cy="120" r="120" strokeDasharray="4 6" />
          <circle cx="400" cy="120" r="200" strokeDasharray="4 6" />
          <circle cx="400" cy="120" r="280" strokeDasharray="4 6" />
          <path d="M120 0v400M0 120h400" strokeDasharray="4 6" />
        </svg>

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            {/* Logo tile */}
            <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-2xl border border-border bg-surface shadow-sm">
              <svg viewBox="0 0 40 40" className="h-9 w-9 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M6 8h28L20 34 6 8Z" strokeLinejoin="round" />
                <path d="M14 8 20 20l6-12" strokeLinejoin="round" />
              </svg>
              <span className="mt-2 font-display text-xs font-bold text-ink">Company</span>
              <span className="text-[9px] text-subtle">Profile & Evidence</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-md bg-panel px-2.5 py-1 text-[11px] font-bold tracking-wider text-muted">
                  VERIFIED ENTITY
                </span>
                <span className="inline-flex items-center rounded-md bg-primary-tint px-2.5 py-1 font-mono text-[11px] font-semibold text-primary-hover">
                  Company Reg: CIPA BW00012345
                </span>
              </div>
              <h1 className="font-display text-5xl font-extrabold leading-none text-ink">
                Acme Holdings (Pty) Ltd
              </h1>
              <p className="flex items-center gap-2 text-lg text-muted">
                <PinIcon className="h-5 w-5 text-subtle" />
                Gaborone, Botswana <span className="text-subtle">•</span> Procurement Registration No:{" "}
                <span className="font-mono text-base">PPADB-A-04821</span>
              </p>
            </div>
          </div>

          {/* Readiness gauge */}
          <div className="relative">
            <button
              onClick={() => setShowReadiness((v) => !v)}
              className="flex flex-col items-center gap-1 rounded-2xl border border-border bg-surface px-8 py-5 shadow-sm transition hover:border-border-strong"
              aria-expanded={showReadiness}
            >
              <div className="relative flex items-center justify-center">
                <ReadinessGauge value={62} />
                <span className="absolute font-display text-lg font-bold text-ink">
                  62<span className="text-sm">%</span>
                </span>
              </div>
              <span className="text-xs font-bold tracking-widest text-muted">READINESS</span>
            </button>

            {showReadiness && (
              <div className="absolute right-0 z-20 mt-2 w-80 rounded-xl border border-border bg-surface p-4 shadow-xl">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-display text-sm font-bold text-ink">What drives readiness</h3>
                  <button onClick={() => setShowReadiness(false)} className="text-subtle hover:text-ink">
                    <CloseIcon className="h-4 w-4" />
                  </button>
                </div>
                <ul className="flex flex-col gap-2.5 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-healthy" />
                    <span className="text-muted">
                      <span className="font-medium text-ink">Legal identity verified</span> — CIPA registration active
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-healthy" />
                    <span className="text-muted">
                      <span className="font-medium text-ink">ISO 27001</span> validated
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <WarnIcon className="mt-0.5 h-4 w-4 shrink-0 text-warn" />
                    <span className="text-muted">
                      <span className="font-medium text-ink">Tax Clearance</span> expiring in{" "}
                      <span className="font-mono">14 days</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BanIcon className="mt-0.5 h-4 w-4 shrink-0 text-danger" />
                    <span className="text-muted">
                      <span className="font-medium text-ink">PPADB Registration Certificate</span> current (required for tenders)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <WarnIcon className="mt-0.5 h-4 w-4 shrink-0 text-warn" />
                    <span className="text-muted">
                      <span className="font-medium text-ink">Q3 financials</span> pending audit
                    </span>
                  </li>
                </ul>
                <div className="mt-3 border-t border-border pt-3 text-xs text-subtle">
                  Resolve the 3 open items to reach an estimated{" "}
                  <span className="font-mono font-semibold text-primary">88%</span>.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex flex-wrap gap-8 border-b border-border">
        {TABS.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`-mb-px border-b-2 pb-3 text-sm font-semibold tracking-wide transition ${
                active
                  ? "border-primary text-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* OVERVIEW cards */}
      {tab === "overview" && (
        <div className="mb-12 grid grid-cols-1 gap-6 min-[1000px]:grid-cols-3">
          {/* Legal Identity */}
          <section className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ScaleIcon className="h-6 w-6 text-ink" />
                <h2 className="font-display text-xl font-bold text-ink">Legal Identity</h2>
              </div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-healthy text-white">
                <CheckIcon className="h-4 w-4" />
              </span>
            </div>
            <dl className="flex flex-1 flex-col gap-4 text-sm">
              <Field label="ENTITY TYPE" value="Private Company (Pty) Ltd" />
              <Field label="INCORPORATED" value="Botswana (2015)" />
              <Field label="SECTORS / CAPABILITIES" value="ICT Services, Cybersecurity, Cloud Architecture" />
              <Field label="TAX CLEARANCE EXPIRY" value="14 Oct 2026" mono />
            </dl>
            <div className="mt-6 border-t border-border pt-4 text-right">
              <button className="text-xs font-bold tracking-wide text-ink hover:text-primary">
                VIEW FULL DETAILS
              </button>
            </div>
          </section>

          {/* Financial Health */}
          <section className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <BankIcon className="h-6 w-6 text-ink" />
                <h2 className="font-display text-xl font-bold text-ink">Financial Health</h2>
              </div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-warn-bg text-warn">
                <WarnIcon className="h-4 w-4" />
              </span>
            </div>
            <div className="mb-4 flex items-end justify-between">
              <div>
                <div className="text-xs font-semibold tracking-wide text-muted">RISK RATING</div>
                <div className="font-display text-5xl font-extrabold leading-none text-ink">B+</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-semibold tracking-wide text-muted">RISK SCORE</div>
                <div className="font-display text-3xl font-bold text-ink">
                  <span className="font-mono">78</span>
                  <span className="text-lg text-muted">/100</span>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-warn-bg p-4">
              <div className="mb-1.5 flex items-center gap-1.5 text-warn">
                <WarnIcon className="h-4 w-4" />
                <span className="text-xs font-bold tracking-wide">ACTION NEEDED</span>
              </div>
              <p className="text-sm text-ink">
Q3 2026 financial statements pending audit review. Upload required by end of month.
              </p>
            </div>
            <div className="mt-6 border-t border-border pt-4 text-right">
              <button className="text-xs font-bold tracking-wide text-ink hover:text-primary">
                UPDATE FINANCIALS
              </button>
            </div>
          </section>

          {/* Core Capabilities (dark) */}
          <section className="flex flex-col rounded-2xl bg-ink-panel p-6 text-white shadow-sm">
            <div className="mb-6 flex items-center gap-2.5">
              <TargetIcon className="h-6 w-6 text-primary" />
              <h2 className="font-display text-xl font-bold text-white">Core Capabilities</h2>
            </div>
            <div className="flex flex-1 flex-col gap-5">
              <CapBar label="Cybersecurity" value={85} />
              <CapBar label="Cloud Architecture" value={60} />
              <CapBar label="Data Analytics" value={40} />
            </div>
            <div className="mt-6 border-t border-white/10 pt-4 text-right">
              <button className="text-xs font-bold tracking-wide text-primary hover:text-white">
                VIEW MATRIX
              </button>
            </div>
          </section>
        </div>
      )}

      {tab === "certifications" && (
        <div className="mb-12 rounded-2xl border border-border bg-surface p-8 text-muted">
          <h2 className="mb-2 font-display text-2xl font-bold text-ink">Certifications</h2>
          <p className="text-sm">Active organizational certifications and accreditations.</p>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2"><StatusPill kind="healthy">VALIDATED</StatusPill> ISO 27001 — <span className="font-mono">EXP DEC 2025</span></li>
            <li className="flex items-center gap-2"><StatusPill kind="warn">EXPIRING SOON</StatusPill> Tax Clearance — <span className="font-mono">14 DAYS</span></li>
          </ul>
        </div>
      )}

      {tab === "performance" && (
        <div className="mb-12 rounded-2xl border border-border bg-surface p-8 text-muted">
          <h2 className="mb-2 font-display text-2xl font-bold text-ink">Past Performance</h2>
          <p className="text-sm">Historical contract awards and CPARS ratings will appear here.</p>
        </div>
      )}

      {/* Evidence Locker (shown on overview + evidence tabs) */}
      {(tab === "overview" || tab === "evidence") && (
        <div>
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-ink">Evidence Locker</h2>
              <p className="mt-1 text-muted">
                Validated documents asserting organizational capability.
              </p>
            </div>
            <button
              onClick={() => setShowUpload(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <UploadIcon className="h-4 w-4" />
              UPLOAD EVIDENCE
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="border-b border-border text-[11px] font-bold tracking-wider text-subtle">
                  <th className="px-6 py-3 font-bold">DOCUMENT ARTIFACT</th>
                  <th className="px-6 py-3 font-bold">TYPE</th>
                  <th className="px-6 py-3 font-bold">VERIFICATION STATUS</th>
                  <th className="px-6 py-3 text-right font-bold">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* Row 1 */}
                <tr className="border-b border-border">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-panel text-muted">
                        <ShieldIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="font-semibold text-ink">ISO 27001 Certification</div>
                        <div className="font-mono text-[11px] tracking-wide text-subtle">EXP: DEC 2025</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <TypeTag>SECURITY</TypeTag>
                  </td>
                  <td className="px-6 py-4">
                    <StatusPill kind="healthy">HEALTHY</StatusPill>
                  </td>
                  <td className="px-6 py-4 text-right" />
                </tr>

                {/* Row 2 - amber */}
                <tr className="border-b border-border bg-warn-bg/40">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-warn-bg text-warn">
                        <DocIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="font-semibold text-ink">Tax Clearance Certificate</div>
                        <div className="font-mono text-[11px] tracking-wide text-warn">EXP: IN 14 DAYS</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <TypeTag>FINANCIAL</TypeTag>
                  </td>
                  <td className="px-6 py-4">
                    <StatusPill kind="warn">EXPIRING</StatusPill>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="rounded-lg border border-warn px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wide text-warn hover:bg-warn-bg">
                      REPLACE
                    </button>
                  </td>
                </tr>

                {/* Row 3 - red */}
                <tr className="border-l-4 border-l-danger bg-danger-bg/40">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-dashed border-border-strong bg-panel font-mono text-lg text-subtle">
                        ?
                      </span>
                      <div>
                        <div className="font-semibold text-ink">PPADB Registration Certificate</div>
                        <div className="font-mono text-[11px] tracking-wide text-danger">Required for tenders</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <TypeTag>COMPLIANCE</TypeTag>
                  </td>
                  <td className="px-6 py-4">
                    <StatusPill kind="healthy">CURRENT</StatusPill>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => setShowUpload(true)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong bg-surface px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wide text-ink hover:bg-panel"
                    >
                      <UploadIcon className="h-3.5 w-3.5" />
                      UPLOAD
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Upload modal */}
      {showUpload && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center bg-ink/40 p-4"
          onClick={() => setShowUpload(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-xl font-bold text-ink">Upload Evidence</h3>
              <button onClick={() => setShowUpload(false)} className="text-subtle hover:text-ink">
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowUpload(false);
              }}
            >
              <div className="mb-4 flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border-strong bg-panel px-6 py-10 text-center">
                <UploadIcon className="h-7 w-7 text-subtle" />
                <p className="text-sm font-medium text-ink">Drop a file here or click to browse</p>
                <p className="text-xs text-subtle">PDF, PNG or JPG up to 20MB</p>
              </div>
              <label className="mb-1.5 block text-xs font-bold tracking-wide text-muted">
                DOCUMENT TYPE
              </label>
              <select className="mb-6 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-ink outline-none focus:border-primary">
                <option>Security</option>
                <option>Financial</option>
                <option>Compliance</option>
                <option>Certification</option>
              </select>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowUpload(false)}
                  className="rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-muted hover:bg-panel"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-xs font-semibold tracking-wide text-muted">{label}</dt>
      <dd className={`text-right text-ink ${mono ? "font-mono text-sm" : "font-medium"}`}>{value}</dd>
    </div>
  );
}

function CapBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm text-white/90">{label}</span>
        <span className="font-mono text-sm font-semibold text-white">{value}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-primary" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function TypeTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-panel px-2.5 py-1 text-[11px] font-semibold tracking-wide text-muted">
      {children}
    </span>
  );
}
