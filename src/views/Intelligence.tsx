import { useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/* ---------- palette ---------- */
const TEAL = "#0E8574";
const INK = "#1A1A17";
const SLATE = "#6C6A64";
const PURPLE = "#7C3AED";
const GRID = "#E7E3DD";

/* ---------- icons ---------- */
type IconProps = { className?: string };
const s = (p: IconProps) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: p.className,
});
const IconSpark = (p: IconProps) => (
  <svg {...s(p)}>
    <path d="M12 3l1.6 4.8L18 9.4l-4.4 1.6L12 16l-1.6-5L6 9.4l4.4-1.6z" />
  </svg>
);
const IconPipeline = (p: IconProps) => (
  <svg {...s(p)}>
    <path d="M3 12h6M15 12h6M9 12a3 3 0 013-3 3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3z" />
  </svg>
);
const IconMoney = (p: IconProps) => (
  <svg {...s(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v10M9.5 9.5A2 2 0 0112 8.5c1.5 0 2 .8 2 1.5 0 1.8-4 1-4 3 0 .8.7 1.5 2 1.5a2 2 0 002.2-1" />
  </svg>
);
const IconProb = (p: IconProps) => (
  <svg {...s(p)}>
    <path d="M4 15a8 8 0 1116 0" />
    <path d="M12 15l4-4" />
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
const months = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const volume = months.map((m, i) => ({
  month: m,
  yours: [6, 7, 5, 8, 9, 7, 10, 12, 11, 13, 12, 14][i],
  all: [42, 45, 40, 48, 52, 47, 55, 60, 58, 63, 61, 67][i],
}));

const agencies = [
  { name: "MoH", value: 42 },
  { name: "BURS", value: 31 },
  { name: "BDF", value: 28 },
  { name: "MoESD", value: 22 },
  { name: "BPC", value: 18 },
  { name: "BTC", value: 14 },
];

const sectors: Array<{ name: string; value: number; factors: string[] }> = [
  {
    name: "Cybersecurity",
    value: 62,
    factors: [
      "Strong track record: 3 comparable awards",
      "ISO 27001 evidence validated",
      "Below-median competition in last 6 tenders",
    ],
  },
  {
    name: "Cloud",
    value: 48,
    factors: [
      "2 relevant migrations delivered",
      "Cloud certs on file (AWS, Azure)",
      "Higher price sensitivity in recent awards",
    ],
  },
  {
    name: "Data Analytics",
    value: 39,
    factors: [
      "Limited public-sector references",
      "Growing addressable pipeline (+18%)",
      "Skills gap: senior data engineers",
    ],
  },
  {
    name: "Construction",
    value: 27,
    factors: [
      "No direct past performance",
      "High incumbent advantage observed",
      "Bonding capacity below typical ceiling",
    ],
  },
];

/* ---------- tooltip ---------- */
function ChartTooltip({ active, payload, label, unit }: any) {
  if (!active || !payload || payload.length === 0) return null;
  return (
    <div className="rounded-lg border border-border bg-surface px-3 py-2 shadow-md">
      {label && <div className="mb-1 text-xs font-semibold text-ink">{label}</div>}
      {payload.map((p: any) => (
        <div key={p.dataKey ?? p.name} className="flex items-center gap-2 text-xs">
          <span className="h-2 w-2 rounded-full" style={{ background: p.color ?? p.fill }} />
          <span className="text-muted">{p.name}:</span>
          <span className="font-mono text-ink">
            {unit === "$" ? `BWP ${p.value}M` : unit === "%" ? `${p.value}%` : p.value}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---------- KPI ---------- */
function Kpi({
  icon,
  label,
  value,
  note,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 transition-shadow hover:shadow-md">
      <div className="flex items-center gap-2 text-muted">
        <span className="text-primary">{icon}</span>
        <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
      </div>
      <div className="mt-3 font-display font-mono text-3xl font-bold text-ink">{value}</div>
      <div className="mt-1 text-xs text-subtle">{note}</div>
    </div>
  );
}

function ChartCard({
  title,
  subtitle,
  children,
  ai,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  ai?: boolean;
}) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-lg font-semibold text-ink">{title}</h2>
          {subtitle && <p className="mt-0.5 text-sm text-muted">{subtitle}</p>}
        </div>
        {ai && (
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ai-tint px-2.5 py-1 text-xs font-semibold text-ai">
            <IconSpark className="h-3.5 w-3.5" />
            Model estimate
          </span>
        )}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

/* ---------- main ---------- */
export default function Intelligence() {
  const [openSector, setOpenSector] = useState<string | null>("Cybersecurity");

  return (
    <main className="mx-auto max-w-[1200px] px-8 py-7">
      {/* header */}
      <header>
        <h1 className="font-display text-4xl font-bold text-ink">Intelligence</h1>
        <p className="mt-2 text-muted">
          Market signals and win-probability analytics across your sectors.
        </p>
      </header>

      {/* AI banner */}
      <div className="mt-5 flex items-center gap-2 rounded-xl bg-ai-tint px-4 py-3 text-sm text-ai">
        <IconSpark className="h-4 w-4 shrink-0" />
        <span>
          AI analysis updated <span className="font-mono">2h</span> ago · based on{" "}
          <span className="font-mono">4,210</span> historical awards. Predictive figures are model
          estimates, not guarantees.
        </span>
      </div>

      {/* KPIs */}
      <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Kpi icon={<IconPipeline className="h-4 w-4" />} label="Addressable Pipeline" value="BWP 128M" note="Across 4 tracked sectors" />
        <Kpi icon={<IconMoney className="h-4 w-4" />} label="Median Award" value="BWP 4.2M" note="Trailing 12 months" />
        <Kpi icon={<IconProb className="h-4 w-4" />} label="Your Win Probability" value="41%" note="Model estimate · blended" />
        <Kpi icon={<IconClock className="h-4 w-4" />} label="Avg. Days to Award" value="87" note="Tender close → award" />
      </section>

      {/* charts grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Award volume */}
        <div className="lg:col-span-2">
          <ChartCard
            title="Award volume by month"
            subtitle="Your sector vs. all sectors · trailing 12 months"
          >
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={volume} margin={{ top: 8, right: 12, left: -8, bottom: 0 }}>
                <defs>
                  <linearGradient id="yours" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={TEAL} stopOpacity={0.18} />
                    <stop offset="100%" stopColor={TEAL} stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="all" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={SLATE} stopOpacity={0.12} />
                    <stop offset="100%" stopColor={SLATE} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke={GRID} strokeWidth={1} vertical={false} />
                <XAxis dataKey="month" tick={{ fill: SLATE, fontSize: 12 }} axisLine={{ stroke: GRID }} tickLine={false} />
                <YAxis tick={{ fill: SLATE, fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip content={<ChartTooltip />} />
                <Legend wrapperStyle={{ fontSize: 12, color: SLATE }} />
                <Area type="monotone" dataKey="all" name="All sectors" stroke={SLATE} strokeWidth={1.5} fill="url(#all)" />
                <Area type="monotone" dataKey="yours" name="Your sector" stroke={TEAL} strokeWidth={2} fill="url(#yours)" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Awards by agency */}
        <ChartCard title="Awards by buyer" subtitle="Total awarded value · BWP M, trailing 12 months">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={agencies} margin={{ top: 8, right: 12, left: -8, bottom: 0 }}>
              <CartesianGrid stroke={GRID} strokeWidth={1} vertical={false} />
              <XAxis dataKey="name" tick={{ fill: SLATE, fontSize: 12 }} axisLine={{ stroke: GRID }} tickLine={false} />
              <YAxis tick={{ fill: SLATE, fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: "rgba(14,133,116,0.06)" }} content={<ChartTooltip unit="$" />} />
              <Bar dataKey="value" name="Awarded (BWP M)" fill={TEAL} radius={[4, 4, 0, 0]} maxBarSize={44} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Win probability by sector */}
        <ChartCard
          title="Win probability by sector"
          subtitle="Click a sector to see the drivers"
          ai
        >
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              layout="vertical"
              data={sectors}
              margin={{ top: 4, right: 40, left: 8, bottom: 0 }}
              onClick={(e: any) => {
                const n = e?.activePayload?.[0]?.payload?.name;
                if (n) setOpenSector((cur) => (cur === n ? null : n));
              }}
            >
              <CartesianGrid stroke={GRID} strokeWidth={1} horizontal={false} />
              <XAxis type="number" domain={[0, 100]} unit="%" tick={{ fill: SLATE, fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="name" width={110} tick={{ fill: INK, fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: "rgba(124,58,237,0.06)" }} content={<ChartTooltip unit="%" />} />
              <Bar dataKey="value" name="Win probability" radius={[0, 4, 4, 0]} maxBarSize={28} className="cursor-pointer">
                {sectors.map((sec) => (
                  <Cell
                    key={sec.name}
                    fill={PURPLE}
                    fillOpacity={openSector === sec.name ? 1 : 0.7}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          {/* explain panel */}
          <div className="mt-2 space-y-2">
            {sectors.map((sec) => (
              <div key={sec.name} className="rounded-xl border border-border">
                <button
                  onClick={() => setOpenSector((cur) => (cur === sec.name ? null : sec.name))}
                  className="flex w-full items-center justify-between px-4 py-3 text-left"
                  aria-expanded={openSector === sec.name}
                >
                  <span className="flex items-center gap-2 text-sm font-medium text-ink">
                    <IconChevron
                      className={`h-3.5 w-3.5 text-ai transition-transform ${
                        openSector === sec.name ? "rotate-90" : ""
                      }`}
                    />
                    {sec.name}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-sm font-semibold text-ink">{sec.value}%</span>
                    <span className="text-[11px] font-medium uppercase tracking-wide text-ai">
                      est.
                    </span>
                  </span>
                </button>
                {openSector === sec.name && (
                  <div className="border-t border-border bg-ai-tint/40 px-4 py-3">
                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ai">
                      <IconSpark className="h-3.5 w-3.5" />
                      Top factors driving this estimate
                    </div>
                    <ul className="mt-2 space-y-1.5 text-sm text-ink">
                      {sec.factors.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ai" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ChartCard>
      </div>
    </main>
  );
}
