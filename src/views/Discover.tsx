import React, { useState } from "react";

/* ---------- Inline SVG icons (stroke-width 1.5) ---------- */
type IconProps = { className?: string };

const Search = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </svg>
);
const Bank = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9 12 4l9 5" /><path d="M4 9v10M20 9v10M8 12v4M12 12v4M16 12v4M3 20h18" />
  </svg>
);
const Wallet = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18M16 14h2" />
  </svg>
);
const Sector = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="12" cy="18" r="2.5" /><path d="M6 8.5v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3M12 13.5v2" />
  </svg>
);
const Calendar = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" />
  </svg>
);
const Sliders = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7h10M18 7h2M4 17h2M10 17h10" /><circle cx="16" cy="7" r="2" /><circle cx="8" cy="17" r="2" />
  </svg>
);
const Bookmark = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4h12v16l-6-4-6 4z" />
  </svg>
);
const ChevronLeft = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="m14 6-6 6 6 6" /></svg>
);
const ChevronRight = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="m10 6 6 6-6 6" /></svg>
);
const ChevronDown = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="m6 10 6 6 6-6" /></svg>
);
const Bolt = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M13 3 4 14h6l-1 7 9-11h-6z" /></svg>
);
const BarChart = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 20V10M12 20V4M19 20v-7" /></svg>
);
const Sparkle = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.5 6.5 9 9M15 15l2.5 2.5M17.5 6.5 15 9M9 15l-2.5 2.5" /></svg>
);
const Pin = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
const Shield = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z" /></svg>
);
const Users = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0M16 5a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6" /></svg>
);
const SetAside = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h10M4 12h7M4 18h12" /><path d="m16 8 2.5 2.5L22 6" /></svg>
);
const Warn = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 4 2.5 20h19z" /><path d="M12 10v4M12 17h.01" /></svg>
);
const Plus = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
);
const Check = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4 10-10" /></svg>
);
const Minus = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M6 12h12" /></svg>
);
const Question = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01" /></svg>
);
const Close = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
);

/* ---------- Data ---------- */
type Explanation = {
  eligibility: { ok: boolean; label: string };
  supporting: string[];
  weaknesses: string[];
  unknowns: string[];
};

type TrendingCard = {
  id: string;
  match: number;
  variant: "healthy" | "primary" | "ai";
  title: string;
  agency: string;
  tags: string[];
  value: string;
  explanation: Explanation;
};

type FeedRow = {
  id: string;
  icon: (p: IconProps) => React.JSX.Element;
  type: string;
  posted: string;
  urgent?: string;
  title: string;
  agency: string;
  location: string;
  budget: string;
  setAside: string;
  match: number;
  explanation: Explanation;
};

const trending: TrendingCard[] = [
  {
    id: "t1",
    match: 98,
    variant: "healthy",
    title: "Supply and Installation of Hospital ICT Infrastructure",
    agency: "Ministry of Health • Central Medical Stores",
    tags: ["ICT Services", "Cloud Architecture", "Migration"],
    value: "BWP 15M – 25M",
    explanation: {
      eligibility: { ok: true, label: "Eligible — valid PPADB registration on file" },
      supporting: [
        "Prior Central Medical Stores ICT rollout completed on schedule",
        "Team holds cloud and health information systems experience",
        "Reference MOH/ICT/2026/014 matches your registered sector",
      ],
      weaknesses: [
        "No demonstrated Zero Trust architecture past performance",
        "Bonding capacity below the estimated ceiling",
      ],
      unknowns: ["Incumbent contractor identity not yet disclosed", "Final tender release date TBD"],
    },
  },
  {
    id: "t2",
    match: 85,
    variant: "primary",
    title: "Cloud Migration for Revenue Systems",
    agency: "Botswana Unified Revenue Service • Procurement Unit",
    tags: ["Data Lake", "Cloud Architecture", "ETL"],
    value: "BWP 8M – 12M",
    explanation: {
      eligibility: { ok: true, label: "Eligible — meets citizen-owned company criteria" },
      supporting: [
        "Two relevant data platform modernization references",
        "Existing BURS systems access agreement",
      ],
      weaknesses: ["Limited on-site staff near Francistown"],
      unknowns: ["Data volume and retention scope not specified", "Reservation status pending"],
    },
  },
  {
    id: "t3",
    match: 82,
    variant: "ai",
    title: "AI-Driven Threat Intelligence Analysis",
    agency: "Ministry of Trade and Industry • Procurement Unit",
    tags: ["Machine Learning", "Cybersecurity"],
    value: "BWP 3M – 5M",
    explanation: {
      eligibility: { ok: false, label: "Conditional — ISO 27001 certification required" },
      supporting: [
        "Strong ML/analytics past performance with public agencies",
        "AI recommended: profile keywords align with 3 recent ministry awards",
      ],
      weaknesses: ["ISO 27001 not yet certified", "No prior ministry prime contract"],
      unknowns: ["Security clearance level for key personnel unspecified"],
    },
  },
];

const feed: FeedRow[] = [
  {
    id: "f1",
    icon: Bank,
    type: "Open Tender",
    posted: "Posted 2h ago",
    urgent: "Closes in 5 Days",
    title: "Provision of Managed IT Services for Regional Offices",
    agency: "Water Utilities Corporation • Procurement Unit",
    location: "Nationwide",
    budget: "BWP 20M Ceiling",
    setAside: "Citizen-Owned Reserved",
    match: 76,
    explanation: {
      eligibility: { ok: true, label: "Eligible — verified citizen-owned company in PPADB" },
      supporting: [
        "Reservation for citizen-owned firms matches your registration",
        "Prior utility help-desk contract past performance",
      ],
      weaknesses: ["Multi-region staffing may strain current headcount"],
      unknowns: ["Number of covered regional offices not stated"],
    },
  },
  {
    id: "f2",
    icon: Users,
    type: "EOI",
    posted: "Posted 5h ago",
    title: "Agile Software Development and DevSecOps Support",
    agency: "Gaborone City Council • Procurement Unit",
    location: "Gaborone",
    budget: "TBD",
    setAside: "Open Tender",
    match: 62,
    explanation: {
      eligibility: { ok: true, label: "Eligible — open competition" },
      supporting: ["DevSecOps toolchain experience on prior council task orders"],
      weaknesses: ["No current framework agreement in place", "Open competition increases rivalry"],
      unknowns: ["Anticipated contract value and duration"],
    },
  },
  {
    id: "f3",
    icon: Shield,
    type: "Prequalification",
    posted: "Posted 1d ago",
    title: "Next Generation Telehealth Platform Infrastructure",
    agency: "Ministry of Infrastructure and Housing • Procurement Unit",
    location: "Maun",
    budget: "BWP 5M – 10M",
    setAside: "Framework",
    match: 45,
    explanation: {
      eligibility: { ok: false, label: "Not eligible — framework prequalification required" },
      supporting: ["Cloud healthcare hosting references available"],
      weaknesses: ["Firm is not a prequalified framework supplier", "No health platform past performance"],
      unknowns: ["Whether teaming with a prequalified prime is permitted"],
    },
  },
];

/* ---------- Match badge / score styling ---------- */
function matchTint(variant: TrendingCard["variant"]) {
  if (variant === "ai") return "bg-ai-tint text-ai";
  if (variant === "healthy") return "bg-healthy-bg text-healthy";
  return "bg-primary-tint text-primary";
}

/* ---------- Explanation panel ---------- */
function ExplanationPanel({ data, onClose }: { data: Explanation; onClose: () => void }) {
  return (
    <div className="absolute z-20 mt-2 w-[300px] rounded-xl border border-border bg-surface p-4 shadow-xl">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-subtle">
          <Sparkle className="h-3.5 w-3.5 text-ai" />
          Why this match?
        </div>
        <button onClick={onClose} aria-label="Close explanation" className="text-subtle hover:text-ink">
          <Close className="h-4 w-4" />
        </button>
      </div>

      <div
        className={`mb-3 flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] font-medium ${
          data.eligibility.ok ? "bg-healthy-bg text-healthy" : "bg-warn-bg text-warn"
        }`}
      >
        {data.eligibility.ok ? <Check className="h-4 w-4 shrink-0" /> : <Warn className="h-4 w-4 shrink-0" />}
        <span>{data.eligibility.label}</span>
      </div>

      <ExplList title="Supporting factors" icon={<Check className="h-3.5 w-3.5 text-healthy" />} items={data.supporting} />
      <ExplList title="Weaknesses" icon={<Minus className="h-3.5 w-3.5 text-danger" />} items={data.weaknesses} />
      <ExplList title="Unknowns" icon={<Question className="h-3.5 w-3.5 text-subtle" />} items={data.unknowns} />
    </div>
  );
}

function ExplList({ title, icon, items }: { title: string; icon: React.JSX.Element; items: string[] }) {
  return (
    <div className="mb-2.5 last:mb-0">
      <div className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-subtle">{title}</div>
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it} className="flex gap-1.5 text-[12.5px] leading-snug text-muted">
            <span className="mt-0.5 shrink-0">{icon}</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Filter chip ---------- */
function FilterChip({ icon, label }: { icon: React.JSX.Element; label: string }) {
  return (
    <button className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-ink transition hover:border-border-strong hover:bg-panel">
      <span className="text-muted">{icon}</span>
      {label}
    </button>
  );
}

/* ---------- Main component ---------- */
export default function Discover() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (id: string) => setOpen((cur) => (cur === id ? null : id));

  return (
    <div className="mx-auto max-w-[1180px] px-8 py-7">
      {/* Heading */}
      <div className="mb-7 flex items-start justify-between gap-4">
        <h1 className="font-display text-[34px] font-bold leading-none text-ink">Discover Opportunities</h1>
        <span className="mt-2 shrink-0 rounded-full bg-panel px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wide text-muted">
          342 New Matches
        </span>
      </div>

      {/* Search / filter bar */}
      <div className="mb-10 flex flex-wrap items-center gap-3">
        <div className="flex min-w-[240px] flex-1 items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
          <Search className="h-5 w-5 shrink-0 text-subtle" />
          <input
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-subtle"
            placeholder="Search by keywords, sector or reference number…"
          />
        </div>
        <FilterChip icon={<Bank className="h-4 w-4" />} label="Jurisdiction" />
        <FilterChip icon={<Wallet className="h-4 w-4" />} label="Budget" />
        <FilterChip icon={<Sector className="h-4 w-4" />} label="Sector" />
        <FilterChip icon={<Calendar className="h-4 w-4" />} label="Deadline" />
        <button
          aria-label="Advanced filters"
          className="flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-ink text-background transition hover:opacity-90"
        >
          <Sliders className="h-5 w-5" />
        </button>
      </div>

      {/* Trending */}
      <section className="mb-12">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold text-ink">Trending for Your Profile</h2>
          <div className="flex gap-2">
            <button aria-label="Previous" className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition hover:bg-panel">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button aria-label="Next" className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition hover:bg-panel">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 min-[1000px]:grid-cols-3">
          {trending.map((c) => (
            <article
              key={c.id}
              className="relative flex flex-col rounded-2xl border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="relative">
                  <button
                    onClick={() => toggle(c.id)}
                    aria-expanded={open === c.id}
                    className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide transition hover:ring-2 hover:ring-offset-1 hover:ring-current ${matchTint(
                      c.variant
                    )}`}
                  >
                    {c.variant === "ai" ? <Sparkle className="h-3.5 w-3.5" /> : c.variant === "healthy" ? <Bolt className="h-3.5 w-3.5" /> : <BarChart className="h-3.5 w-3.5" />}
                    {c.match}% Match
                    <Question className="h-3 w-3 opacity-70" />
                  </button>
                  {open === c.id && <ExplanationPanel data={c.explanation} onClose={() => setOpen(null)} />}
                </div>
                <button aria-label="Bookmark" className="text-subtle transition hover:text-ink">
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>

              <h3 className="mb-2 font-display text-[19px] font-bold leading-tight text-ink">{c.title}</h3>
              <p className="mb-4 text-sm leading-snug text-muted">{c.agency}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-md bg-panel px-2 py-1 text-xs font-medium text-muted">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto border-t border-border pt-4">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-mono text-[10px] font-semibold uppercase tracking-wide text-subtle">Est. Value</div>
                    <div className="font-mono text-base font-semibold text-ink">{c.value}</div>
                  </div>
                  <button className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover">
                    Review
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Live Feed */}
      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold text-ink">Live Feed</h2>
          <label className="flex items-center gap-2 text-xs">
            <span className="font-mono font-semibold uppercase tracking-wide text-subtle">Sort by:</span>
            <span className="flex cursor-pointer items-center gap-1 font-medium text-ink">
              Match Score
              <ChevronDown className="h-4 w-4 text-muted" />
            </span>
          </label>
        </div>

        <div className="space-y-4">
          {feed.map((row) => {
            const RowIcon = row.icon;
            return (
              <article
                key={row.id}
                className="rounded-2xl border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex flex-col gap-4 min-[900px]:flex-row min-[900px]:items-center">
                  <div className="flex flex-1 gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-panel text-muted">
                      <RowIcon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-wide text-subtle">
                          {row.type} • {row.posted}
                        </span>
                        {row.urgent && (
                          <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-warn">
                            <Warn className="h-3.5 w-3.5" />
                            {row.urgent}
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-lg font-bold leading-tight text-ink">{row.title}</h3>
                      <p className="mt-0.5 text-sm text-muted">{row.agency}</p>

                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted">
                        <span className="inline-flex items-center gap-1.5"><Pin className="h-4 w-4 text-subtle" />{row.location}</span>
                        <span className="inline-flex items-center gap-1.5"><Wallet className="h-4 w-4 text-subtle" />{row.budget}</span>
                        <span className="inline-flex items-center gap-1.5"><SetAside className="h-4 w-4 text-subtle" />{row.setAside}</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex shrink-0 items-center gap-6 min-[900px]:flex-col min-[900px]:items-end min-[900px]:gap-3">
                    <button
                      onClick={() => toggle(row.id)}
                      aria-expanded={open === row.id}
                      className="group text-left transition min-[900px]:text-right"
                    >
                      <div className="flex items-center gap-1.5 font-display text-2xl font-bold text-ink">
                        {row.match}%
                        <Question className="h-4 w-4 text-subtle transition group-hover:text-primary" />
                      </div>
                      <div className="font-mono text-[10px] font-semibold uppercase tracking-wide text-subtle group-hover:text-primary">
                        Match Score — Why?
                      </div>
                    </button>
                    {open === row.id && (
                      <div className="absolute right-0 top-full z-20">
                        <ExplanationPanel data={row.explanation} onClose={() => setOpen(null)} />
                      </div>
                    )}
                    <button className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover">
                      <Plus className="h-4 w-4" />
                      Pipeline
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-ink transition hover:bg-panel">
            Load More Opportunities
            <ChevronDown className="h-4 w-4 text-muted" />
          </button>
        </div>
      </section>
    </div>
  );
}
