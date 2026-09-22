import { useState } from "react";

/* ---------- inline icons (stroke 1.5) ---------- */
type IconProps = { className?: string };
const s = (p: IconProps) => ({
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: p.className,
});

const IconTarget = (p: IconProps) => (
  <svg {...s(p)}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </svg>
);
const IconSpark = (p: IconProps) => (
  <svg {...s(p)}>
    <path d="M12 3l1.6 4.8L18 9.4l-4.4 1.6L12 16l-1.6-5L6 9.4l4.4-1.6z" />
  </svg>
);
const IconTrophy = (p: IconProps) => (
  <svg {...s(p)}>
    <path d="M8 4h8v4a4 4 0 01-8 0z" />
    <path d="M8 6H5v1a3 3 0 003 3M16 6h3v1a3 3 0 01-3 3M10 14h4M9 20h6M12 14v6" />
  </svg>
);
const IconGauge = (p: IconProps) => (
  <svg {...s(p)}>
    <path d="M4 15a8 8 0 1116 0" />
    <path d="M12 15l4-4" />
  </svg>
);
const IconUp = (p: IconProps) => (
  <svg {...s(p)}>
    <path d="M4 17l6-6 4 4 6-6" />
    <path d="M20 9V5h-4" />
  </svg>
);
const IconFlat = (p: IconProps) => (
  <svg {...s(p)}>
    <path d="M5 12h14M15 8l4 4-4 4" />
  </svg>
);
const IconWarn = (p: IconProps) => (
  <svg {...s(p)}>
    <path d="M12 4l9 16H3z" />
    <path d="M12 10v4M12 17h.01" />
  </svg>
);
const IconCheck = (p: IconProps) => (
  <svg {...s(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.5l2.5 2.5 4.5-5" />
  </svg>
);
const IconMove = (p: IconProps) => (
  <svg {...s(p)}>
    <path d="M4 12h12M12 8l4 4-4 4" />
    <path d="M20 5v14" />
  </svg>
);
const IconClock = (p: IconProps) => (
  <svg {...s(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
const IconChevron = (p: IconProps) => (
  <svg {...s(p)}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

/* ---------- data ---------- */
type Explain = {
  eligibility: { label: string; ok: boolean };
  supporting: string[];
  weaknesses: string[];
  unknowns: string[];
};

const recommended: Array<{
  id: string;
  title: string;
  agency: string;
  tags: string[];
  value: string;
  score: number;
  explain: Explain;
}> = [
  {
    id: "r1",
    title: "Managed Network Services — Ministry of Health",
    agency: "Ministry of Health · Gaborone",
    tags: ["Networking", "SLA", "Managed Services"],
    value: "BWP 8M – 12M",
    score: 91,
    explain: {
      eligibility: { label: "Eligible — meets citizen-owned + CIPA criteria", ok: true },
      supporting: [
        "3 past awards in health-sector networking",
        "ISO 27001 evidence validated",
        "Local presence in Gaborone matches delivery area",
      ],
      weaknesses: ["No named PM with PMP on current roster"],
      unknowns: ["Incumbent relationship strength unclear"],
    },
  },
  {
    id: "r2",
    title: "Cloud Migration & Hosting — BURS",
    agency: "Botswana Unified Revenue Service",
    tags: ["Cloud", "Migration", "Hosting"],
    value: "BWP 5M – 7M",
    score: 78,
    explain: {
      eligibility: { label: "Eligible — pending updated tax clearance", ok: true },
      supporting: ["Azure & AWS certs on file", "2 comparable migrations delivered"],
      weaknesses: ["Limited public-sector data-residency references"],
      unknowns: ["Budget ceiling not published", "Set-aside status not confirmed"],
    },
  },
];

const activity: Array<{
  id: string;
  kind: "warn" | "move" | "match" | "ok";
  text: React.ReactNode;
  meta: string;
  action?: string;
}> = [
  {
    id: "a1",
    kind: "warn",
    text: "Tax Clearance Certificate expires in 14 days",
    meta: "Compliance · today",
    action: "Renew now",
  },
  {
    id: "a2",
    kind: "move",
    text: "Elena Smith moved Project OSPREY to Drafting",
    meta: "Pipeline · 2h ago",
    action: "View pursuit",
  },
  {
    id: "a3",
    kind: "match",
    text: "New open tender matched: Managed IT Services (76%)",
    meta: "Discover · 5h ago",
    action: "Review",
  },
  {
    id: "a4",
    kind: "ok",
    text: "Evidence validated: ISO 27001",
    meta: "Company profile · 1d ago",
  },
];

const deadlines = [
  { name: "Managed Network Services", date: "2026-09-03", days: 7, urgent: true },
  { name: "Cloud Migration — BURS", date: "2026-09-11", days: 15, urgent: false },
  { name: "Data Analytics Framework", date: "2026-09-24", days: 28, urgent: false },
];

/* ---------- small components ---------- */
function StatCard({
  icon,
  label,
  value,
  trend,
  trendUp,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  trendUp: "up" | "flat";
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 transition-shadow hover:shadow-md">
      <div className="flex items-center gap-2 text-muted">
        <span className="text-primary">{icon}</span>
        <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
      </div>
      <div className="mt-3 font-display text-3xl font-bold text-ink">{value}</div>
      <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-muted">
        {trendUp === "up" ? (
          <IconUp className="h-3.5 w-3.5 text-healthy" />
        ) : (
          <IconFlat className="h-3.5 w-3.5 text-muted" />
        )}
        <span>{trend}</span>
      </div>
    </div>
  );
}

function ExplainList({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "healthy" | "warn" | "muted";
}) {
  const dot = tone === "healthy" ? "bg-healthy" : tone === "warn" ? "bg-warn" : "bg-subtle";
  if (items.length === 0) return null;
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wide text-muted">{title}</div>
      <ul className="mt-1 space-y-1">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-ink">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MatchExplain({ e }: { e: Explain }) {
  return (
    <div className="mt-4 rounded-xl border border-ai/20 bg-ai-tint/50 p-4 text-sm">
      <div className="flex items-center gap-2 text-ai">
        <IconSpark className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-wide">
          Why this score — model estimate
        </span>
      </div>
      <div className="mt-3 grid gap-3">
        <div className="flex items-start gap-2">
          {e.eligibility.ok ? (
            <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-healthy" />
          ) : (
            <IconWarn className="mt-0.5 h-4 w-4 shrink-0 text-warn" />
          )}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-muted">
              Eligibility
            </div>
            <div className="text-ink">{e.eligibility.label}</div>
          </div>
        </div>
        <ExplainList title="Supporting factors" items={e.supporting} tone="healthy" />
        <ExplainList title="Weaknesses" items={e.weaknesses} tone="warn" />
        <ExplainList title="Unknowns" items={e.unknowns} tone="muted" />
      </div>
    </div>
  );
}

function activityIcon(kind: string) {
  if (kind === "warn") return <IconWarn className="h-4 w-4 text-warn" />;
  if (kind === "move") return <IconMove className="h-4 w-4 text-ink" />;
  if (kind === "match") return <IconSpark className="h-4 w-4 text-ai" />;
  return <IconCheck className="h-4 w-4 text-healthy" />;
}

function ReadinessRing({ value }: { value: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  return (
    <div className="relative h-20 w-20 shrink-0">
      <svg viewBox="0 0 64 64" className="h-20 w-20 -rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" stroke="#E7E3DD" strokeWidth="6" />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke="#0E8574"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={off}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-mono text-lg font-bold text-ink">
        {value}%
      </div>
    </div>
  );
}

/* ---------- main ---------- */
export default function Dashboard() {
  const [openScore, setOpenScore] = useState<string | null>(null);
  const today = new Date("2026-08-27").toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="mx-auto max-w-[1200px] px-8 py-7">
      {/* header */}
      <header>
        <h1 className="font-display text-4xl font-bold text-ink">Good morning, Amara</h1>
        <p className="mt-2 text-muted">
          <span className="font-mono text-sm">{today}</span>
          <span className="mx-2 text-border-strong">·</span>
          3 new high-match opportunities · 2 pursuits need attention
        </p>
      </header>

      {/* KPIs */}
      <section className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={<IconTarget />} label="Active Pursuits" value="12" trend="+3 this month" trendUp="up" />
        <StatCard icon={<IconSpark />} label="New Matches / wk" value="34" trend="+12% vs last week" trendUp="up" />
        <StatCard icon={<IconTrophy />} label="Win Rate YTD" value="38.4%" trend="Consistent with Q2" trendUp="flat" />
        <StatCard icon={<IconGauge />} label="Profile Readiness" value="62%" trend="+8% this month" trendUp="up" />
      </section>

      {/* two-column */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
        {/* MAIN */}
        <div className="space-y-8">
          {/* recommended */}
          <section>
            <h2 className="font-display text-xl font-semibold text-ink">Recommended for you</h2>
            <div className="mt-4 space-y-4">
              {recommended.map((op) => (
                <article
                  key={op.id}
                  className="rounded-2xl border border-border bg-surface p-5 transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-ai-tint px-2.5 py-1 text-xs font-semibold text-ai">
                        <IconSpark className="h-3.5 w-3.5" />
                        AI MATCH
                      </span>
                      <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                        {op.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{op.agency}</p>
                    </div>
                    <button
                      onClick={() => setOpenScore(openScore === op.id ? null : op.id)}
                      className="shrink-0 rounded-xl border border-border px-3 py-2 text-right transition-colors hover:border-ai hover:bg-ai-tint"
                      aria-expanded={openScore === op.id}
                    >
                      <div className="font-mono text-2xl font-bold text-ink">{op.score}%</div>
                      <div className="flex items-center justify-end gap-1 text-[11px] font-medium uppercase tracking-wide text-ai">
                        Explain
                        <IconChevron
                          className={`h-3 w-3 transition-transform ${
                            openScore === op.id ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                    </button>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {op.tags.map((t) => (
                      <span key={t} className="rounded-md bg-panel px-2 py-1 text-xs text-muted">
                        {t}
                      </span>
                    ))}
                  </div>

                  {openScore === op.id && <MatchExplain e={op.explain} />}

                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-wide text-subtle">
                        Est. value
                      </div>
                      <div className="font-mono text-sm text-ink">{op.value}</div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => console.log("add to pipeline", op.id)}
                        className="rounded-lg border border-border px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-panel"
                      >
                        + Pipeline
                      </button>
                      <button
                        onClick={() => console.log("review", op.id)}
                        className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                      >
                        Review
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* activity */}
          <section>
            <h2 className="font-display text-xl font-semibold text-ink">Activity</h2>
            <div className="mt-4 rounded-2xl border border-border bg-surface">
              <ul>
                {activity.map((a, i) => (
                  <li
                    key={a.id}
                    className={`flex items-start gap-3 px-5 py-4 ${
                      i !== activity.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-panel">
                      {activityIcon(a.kind)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm text-ink">{a.text}</div>
                      <div className="mt-0.5 text-xs text-subtle">{a.meta}</div>
                    </div>
                    {a.action && (
                      <button
                        onClick={() => console.log("activity action", a.id)}
                        className="shrink-0 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
                      >
                        {a.action}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6">
          {/* deadlines */}
          <section className="rounded-2xl border border-border bg-surface p-5">
            <h2 className="font-display text-base font-semibold text-ink">Deadlines</h2>
            <ul className="mt-4 space-y-3">
              {deadlines.map((d) => (
                <li key={d.name} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                      d.urgent ? "bg-warn-bg text-warn" : "bg-panel text-muted"
                    }`}
                  >
                    <IconClock className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm text-ink">{d.name}</div>
                    <div className="mt-0.5 flex items-center gap-2 text-xs">
                      <span className="font-mono text-muted">{d.date}</span>
                      <span className={`font-medium ${d.urgent ? "text-warn" : "text-subtle"}`}>
                        {d.urgent ? "Closing soon" : "Upcoming"} · {d.days}d
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* readiness */}
          <section className="rounded-2xl border border-border bg-surface p-5">
            <h2 className="font-display text-base font-semibold text-ink">Readiness</h2>
            <div className="mt-4 flex items-center gap-4">
              <ReadinessRing value={62} />
              <div className="text-sm text-muted">
                <p className="text-ink">Profile is nearly bid-ready.</p>
                <p className="mt-1">Resolve the items below to reach 100%.</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <IconWarn className="h-4 w-4 shrink-0 text-warn" />
                <span className="text-ink">2 evidence items missing</span>
              </li>
              <li className="flex items-center gap-2">
                <IconClock className="h-4 w-4 shrink-0 text-warn" />
                <span className="text-ink">1 certificate expiring (14d)</span>
              </li>
            </ul>
            <button
              onClick={() => console.log("complete profile")}
              className="mt-4 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Complete profile
            </button>
          </section>
        </aside>
      </div>
    </main>
  );
}
