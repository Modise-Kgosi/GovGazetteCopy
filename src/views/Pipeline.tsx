import React, { useState } from "react";

type Health = "healthy" | "warn" | "danger" | "muted";

type Pursuit = {
  id: string;
  name: string;
  identifier: string;
  dept: string;
  stage: string;
  progress: number;
  progressTone: "ink" | "warn" | "primary";
  health: Health;
  healthLabel: string;
  milestoneDate: string;
  milestoneDanger?: boolean;
  milestone: string;
  ownerInitials: string | null;
  owner: string;
  ownerColor?: string;
  value: string;
  rationale: string;
  factors: string[];
  risks: string[];
  tab: "active" | "watchlist" | "archive";
};

const PURSUITS: Pursuit[] = [
  {
    id: "1",
    name: "National Health ICT Modernization",
    identifier: "MOH/ICT/2026/014",
    dept: "Ministry of Health",
    stage: "DRAFTING",
    progress: 65,
    progressTone: "ink",
    health: "healthy",
    healthLabel: "ON TRACK",
    milestoneDate: "2026-11-15",
    milestone: "Technical Review",
    ownerInitials: "KM",
    owner: "Kabo Modise",
    ownerColor: "bg-[#1e2a78]",
    value: "BWP 18.4M",
    rationale:
      "Tender response is progressing on schedule with all major volumes in active drafting and no blocking dependencies.",
    factors: [
      "Technical volume 70% complete, ahead of internal baseline",
      "Capture team fully staffed with named leads",
      "Incumbent relationship strong; past performance references confirmed",
    ],
    risks: ["Technical review window is tight before submission"],
    tab: "active",
  },
  {
    id: "2",
    name: "Revenue Systems DB Migration",
    identifier: "BURS/IT/2026/009",
    dept: "Botswana Unified Revenue Service",
    stage: "REVIEW",
    progress: 90,
    progressTone: "warn",
    health: "danger",
    healthLabel: "AT RISK",
    milestoneDate: "2026-10-28",
    milestoneDanger: true,
    milestone: "Pricing Finalization",
    ownerInitials: "MJ",
    owner: "Marcus Johnson",
    ownerColor: "bg-[#5eead4] text-ink",
    value: "BWP 12.1M",
    rationale:
      "Pricing strategy is unresolved with the deadline imminent, creating material submission risk.",
    factors: ["Technical solution reviewed and approved"],
    risks: [
      "Price-to-win analysis incomplete two days before deadline",
      "Key subcontractor pricing still outstanding",
      "Reviewer flagged staffing gaps in operations volume",
    ],
    tab: "active",
  },
  {
    id: "3",
    name: "Cybersecurity Assessment",
    identifier: "MTI/SEC/2026/003",
    dept: "Ministry of Trade and Industry",
    stage: "QUALIFYING",
    progress: 25,
    progressTone: "ink",
    health: "muted",
    healthLabel: "UNKNOWN",
    milestoneDate: "2026-11-20",
    milestone: "Go/No-Go Decision",
    ownerInitials: null,
    owner: "Unassigned",
    value: "BWP 6.8M",
    rationale:
      "Health cannot be determined until an owner is assigned and qualification analysis is completed.",
    factors: ["Opportunity identified and logged in pipeline"],
    risks: [
      "No capture owner assigned",
      "Qualification and bid decision not yet made",
    ],
    tab: "active",
  },
  {
    id: "4",
    name: "Cloud Infrastructure Services",
    identifier: "WUC/CLD/2026/021",
    dept: "Water Utilities Corporation",
    stage: "SUBMITTED",
    progress: 100,
    progressTone: "primary",
    health: "healthy",
    healthLabel: "SATISFIED",
    milestoneDate: "2026-12-01",
    milestone: "Expected Award",
    ownerInitials: "LS",
    owner: "Lorato Seretse",
    ownerColor: "bg-[#1e2a78]",
    value: "BWP 7.9M",
    rationale:
      "Tender submitted on time and fully compliant; now awaiting the buyer award decision.",
    factors: [
      "Submission confirmed compliant against tender requirements",
      "Strong past performance on prior framework contracts",
      "Competitive pricing validated by pricing lead",
    ],
    risks: ["Award timeline dependent on buyer schedule"],
    tab: "active",
  },
];

function HealthBadge({ health, label }: { health: Health; label: string }) {
  const map: Record<Health, { cls: string; icon: React.JSX.Element }> = {
    healthy: {
      cls: "text-healthy",
      icon: (
        <path d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
    warn: {
      cls: "text-warn",
      icon: <path d="M12 9v4m0 4h.01M12 3l9 16H3l9-16z" />,
    },
    danger: {
      cls: "text-danger",
      icon: (
        <path d="M12 8v4m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18zM4.9 4.9l14.2 14.2" />
      ),
    },
    muted: {
      cls: "text-subtle",
      icon: (
        <path d="M9.5 9a2.5 2.5 0 115 0c0 1.5-2.5 2-2.5 3.5M12 17h.01M12 3a9 9 0 100 18 9 9 0 000-18z" />
      ),
    },
  };
  const m = map[health];
  return (
    <span className={`inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-wide ${m.cls}`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        {m.icon}
      </svg>
      {label}
    </span>
  );
}

function Avatar({
  initials,
  color,
}: {
  initials: string | null;
  color?: string;
}) {
  if (!initials) {
    return (
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-panel text-[10px] font-semibold text-subtle">
        UN
      </span>
    );
  }
  return (
    <span
      className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold text-white ${color ?? "bg-ink"}`}
    >
      {initials}
    </span>
  );
}

export default function Pipeline() {
  const [tab, setTab] = useState<"active" | "watchlist" | "archive">("active");
  const [selected, setSelected] = useState<Pursuit | null>(null);

  const rows = PURSUITS.filter((p) =>
    tab === "active" ? p.tab === "active" : tab === "watchlist" ? p.tab === "watchlist" : p.tab === "archive",
  );

  const tabs = [
    { key: "active" as const, label: "ACTIVE PURSUITS", count: 12 },
    { key: "watchlist" as const, label: "WATCHLIST", count: 5 },
    { key: "archive" as const, label: "ARCHIVE", count: null },
  ];

  return (
    <div className="px-8 py-7 max-w-[1200px]">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold text-ink">Pipeline</h1>
          <p className="mt-2 text-[15px] text-muted">
            Track and manage active pursuits and upcoming opportunities.
          </p>
        </div>
        <div className="flex items-center gap-3 pt-1">
          <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-ink hover:bg-panel">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M3 5h18l-7 8v5l-4 2v-7L3 5z" />
            </svg>
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white hover:opacity-90">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M12 5v14M5 12h14" />
            </svg>
            New Pursuit
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-7 flex items-center gap-8 border-b border-border">
        {tabs.map((t) => {
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`relative -mb-px flex items-center gap-2 pb-3 text-[13px] font-semibold tracking-wide ${
                active ? "text-ink" : "text-subtle hover:text-muted"
              }`}
            >
              {t.label}
              {t.count !== null && (
                <span className={`rounded-md px-1.5 py-0.5 text-[11px] ${active ? "bg-panel text-muted" : "bg-panel text-subtle"}`}>
                  {t.count}
                </span>
              )}
              {active && <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-primary" />}
            </button>
          );
        })}
      </div>

      {/* Metric cards */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          label="TOTAL PIPELINE VALUE"
          value="BWP 45.2M"
          mono
          note="+12% vs last quarter"
          noteTone="text-primary"
          noteIcon={<path d="M7 17L17 7M17 7H9M17 7v8" />}
          icon={<path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 4v10m2.5-7.5H10.5a1.5 1.5 0 000 3h3a1.5 1.5 0 010 3H9.5" />}
        />
        <MetricCard
          label="WIN RATE (YTD)"
          value="38.4%"
          mono
          note="Consistent with Q2"
          noteTone="text-warn"
          noteIcon={<path d="M5 12h14M13 6l6 6-6 6" />}
          icon={<path d="M8 4h8v3a4 4 0 01-8 0V4zM8 5H5v2a3 3 0 003 3M16 5h3v2a3 3 0 01-3 3M10 15h4v3h-4zM8 21h8" />}
        />
        <MetricCard
          label="PROPOSALS IN DRAFT"
          value="4"
          note="Due within 30 days"
          noteTone="text-muted"
          iconClass="text-ai"
          icon={<path d="M7 3h7l4 4v14H7a2 2 0 01-2-2V5a2 2 0 012-2zm7 0v4h4M9 13l2 2 4-4" />}
        />
        <MetricCard
          label="AT RISK PURSUITS"
          value="2"
          note="Requires immediate action"
          noteTone="text-danger"
          noteIcon={<path d="M12 5v14M6 13l6 6 6-6" />}
          iconClass="text-danger"
          icon={<path d="M12 3l9 16H3l9-16zM12 9v4m0 4h.01" />}
        />
      </div>

      {/* Table */}
      <div className="mt-6 overflow-hidden rounded-xl border border-border bg-surface">
        <div className="overflow-x-auto">
          <div className="min-w-[860px]">
            {/* Head */}
            <div className="grid grid-cols-[1.6fr_1.1fr_1fr_1.1fr_1fr] gap-4 bg-panel px-6 py-3 text-[11px] font-semibold tracking-wider text-muted">
              <div>OPPORTUNITY</div>
              <div>STAGE & PROGRESS</div>
              <div>HEALTH</div>
              <div>NEXT MILESTONE</div>
              <div>OWNER</div>
            </div>
            {/* Rows */}
            {rows.length === 0 ? (
              <div className="px-6 py-16 text-center text-sm text-muted">
                No pursuits in this view.
              </div>
            ) : (
              rows.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelected(p)}
                  className="grid w-full grid-cols-[1.6fr_1.1fr_1fr_1.1fr_1fr] items-center gap-4 border-t border-border px-6 py-5 text-left hover:bg-panel/60"
                >
                  <div>
                    <div className="font-display text-[17px] font-semibold text-ink">
                      {p.name}
                    </div>
                    <div className="mt-1 text-[12px] text-muted">
                      ID: <span className="font-mono">{p.identifier}</span> • {p.dept}
                    </div>
                  </div>
                  <div className="min-w-[150px]">
                    <div className="flex items-center justify-between text-[11px] font-semibold tracking-wide">
                      <span className="text-muted">{p.stage}</span>
                      <span className="font-mono text-muted">{p.progress}%</span>
                    </div>
                    <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-panel">
                      <div
                        className={`h-full rounded-full ${
                          p.progressTone === "warn"
                            ? "bg-warn"
                            : p.progressTone === "primary"
                              ? "bg-primary"
                              : "bg-ink"
                        }`}
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <HealthBadge health={p.health} label={p.healthLabel} />
                  </div>
                  <div>
                    <div className={`font-mono text-[13px] ${p.milestoneDanger ? "text-danger" : "text-ink"}`}>
                      {p.milestoneDate}
                    </div>
                    <div className="mt-0.5 text-[13px] text-muted">{p.milestone}</div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Avatar initials={p.ownerInitials} color={p.ownerColor} />
                    <span className={`text-[14px] ${p.ownerInitials ? "text-ink" : "italic text-subtle"}`}>
                      {p.owner}
                    </span>
                  </div>
                </button>
              ))
            )}
            {/* Footer */}
            <div className="flex items-center justify-between border-t border-border bg-panel px-6 py-3.5">
              <span className="text-[13px] text-muted">
                Showing 1-{rows.length} of {tab === "active" ? 12 : rows.length} pursuits
              </span>
              <div className="flex items-center gap-1">
                <button className="rounded-md p-1.5 text-muted hover:bg-surface">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M15 6l-6 6 6 6" />
                  </svg>
                </button>
                <button className="rounded-md p-1.5 text-muted hover:bg-surface">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer */}
      {selected && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-ink/30"
            onClick={() => setSelected(null)}
          />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-[460px] flex-col overflow-y-auto bg-surface shadow-2xl">
            <div className="flex items-start justify-between border-b border-border px-6 py-5">
              <div>
                <div className="text-[11px] font-semibold tracking-wider text-muted">
                  PURSUIT DETAIL
                </div>
                <h2 className="mt-1 font-display text-2xl font-bold text-ink">
                  {selected.name}
                </h2>
                <div className="mt-1.5 text-[12px] text-muted">
                  ID: <span className="font-mono">{selected.identifier}</span> • {selected.dept}
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="rounded-md p-1.5 text-muted hover:bg-panel"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="flex-1 space-y-6 px-6 py-6">
              {/* Stage + value */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-border bg-panel/50 p-4">
                  <div className="text-[11px] font-semibold tracking-wider text-muted">STAGE</div>
                  <div className="mt-1.5 text-[15px] font-semibold text-ink">{selected.stage}</div>
                </div>
                <div className="rounded-lg border border-border bg-panel/50 p-4">
                  <div className="text-[11px] font-semibold tracking-wider text-muted">VALUE</div>
                  <div className="mt-1.5 font-mono text-[15px] font-semibold text-ink">{selected.value}</div>
                </div>
              </div>

              {/* Progress */}
              <div>
                <div className="flex items-center justify-between text-[13px]">
                  <span className="font-semibold text-ink">Progress</span>
                  <span className="font-mono text-muted">{selected.progress}%</span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-panel">
                  <div
                    className={`h-full rounded-full ${
                      selected.progressTone === "warn"
                        ? "bg-warn"
                        : selected.progressTone === "primary"
                          ? "bg-primary"
                          : "bg-ink"
                    }`}
                    style={{ width: `${selected.progress}%` }}
                  />
                </div>
              </div>

              {/* Health */}
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-ink">Health</span>
                  <HealthBadge health={selected.health} label={selected.healthLabel} />
                </div>
                <div className="mt-3 text-[11px] font-semibold tracking-wider text-muted">
                  WHY THIS HEALTH STATUS
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  {selected.rationale}
                </p>
                <div className="mt-4 space-y-1.5">
                  <div className="text-[11px] font-semibold tracking-wider text-healthy">SUPPORTING FACTORS</div>
                  {selected.factors.map((f, i) => (
                    <div key={i} className="flex gap-2 text-[13px] text-ink">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-healthy">
                        <path d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-1.5">
                  <div className="text-[11px] font-semibold tracking-wider text-danger">RISKS</div>
                  {selected.risks.map((r, i) => (
                    <div key={i} className="flex gap-2 text-[13px] text-ink">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-danger">
                        <path d="M12 3l9 16H3l9-16zM12 9v4m0 4h.01" />
                      </svg>
                      {r}
                    </div>
                  ))}
                </div>
              </div>

              {/* Owner */}
              <div>
                <div className="text-[11px] font-semibold tracking-wider text-muted">OWNER</div>
                <div className="mt-2 flex items-center gap-2.5">
                  <Avatar initials={selected.ownerInitials} color={selected.ownerColor} />
                  <span className={`text-[14px] ${selected.ownerInitials ? "text-ink" : "italic text-subtle"}`}>
                    {selected.owner}
                  </span>
                </div>
              </div>

              {/* Milestones */}
              <div>
                <div className="text-[11px] font-semibold tracking-wider text-muted">MILESTONES</div>
                <div className="mt-2 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <div>
                      <div className={`font-mono text-[12px] ${selected.milestoneDanger ? "text-danger" : "text-ink"}`}>
                        {selected.milestoneDate}
                      </div>
                      <div className="text-[13px] text-ink">{selected.milestone}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-border-strong" />
                    <div>
                      <div className="font-mono text-[12px] text-muted">TBD</div>
                      <div className="text-[13px] text-muted">Final submission</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 border-t border-border px-6 py-5">
              <button className="flex-1 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white hover:opacity-90">
                Advance Stage
              </button>
              <button className="flex-1 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-ink hover:bg-panel">
                Reassign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MetricCard({
  label,
  value,
  mono,
  note,
  noteTone,
  noteIcon,
  icon,
  iconClass,
}: {
  label: string;
  value: string;
  mono?: boolean;
  note: string;
  noteTone: string;
  noteIcon?: React.JSX.Element;
  icon: React.JSX.Element;
  iconClass?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="flex items-start justify-between">
        <span className="text-[11px] font-semibold tracking-wider text-muted">
          {label}
        </span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 ${iconClass ?? "text-ink"}`}>
          {icon}
        </svg>
      </div>
      <div className={`mt-4 font-display text-4xl font-bold text-ink ${mono ? "font-mono" : ""}`}>
        {value}
      </div>
      <div className={`mt-4 flex items-center gap-1.5 text-[13px] font-medium ${noteTone}`}>
        {noteIcon && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            {noteIcon}
          </svg>
        )}
        {note}
      </div>
    </div>
  );
}
