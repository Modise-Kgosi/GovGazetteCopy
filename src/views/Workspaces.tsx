import { useState } from "react";

// ---- Icons (inline SVG, stroke 1.5) ----
type IconProps = { className?: string };

const IconFilter = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 5h16M7 12h10M10 19h4" />
  </svg>
);
const IconBoard = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="5" height="16" rx="1" />
    <rect x="10" y="4" width="5" height="11" rx="1" />
    <rect x="17" y="4" width="4" height="16" rx="1" />
  </svg>
);
const IconTable = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="M3 10h18M9 10v9" />
  </svg>
);
const IconPlus = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);
const IconX = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
const IconDots = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <circle cx="5" cy="12" r="1.6" />
    <circle cx="12" cy="12" r="1.6" />
    <circle cx="19" cy="12" r="1.6" />
  </svg>
);
const IconSparkle = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6L12 2z" />
    <path d="M19 14l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14z" />
  </svg>
);
const IconAddUser = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0M18 8v6M15 11h6" />
  </svg>
);
const IconClock = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 1.7" />
  </svg>
);
const IconCheckCircle = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M8.5 12.2l2.3 2.3 4.7-4.8" />
  </svg>
);
const IconAlert = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5v5M12 15.8v.2" />
  </svg>
);
const IconList = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" />
  </svg>
);
const IconArrowRight = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

// ---- Types & data ----
type Health = "healthy" | "warn" | "danger" | "muted";

type ComplianceLabel =
  | "SATISFIED"
  | "PARTIALLY SATISFIED"
  | "MISSING"
  | "EXPIRED"
  | "NOT APPLICABLE"
  | "UNKNOWN"
  | "FAILED";

type Proposal = {
  id: string;
  sol: string;
  title: string;
  agency: string;
  stage: string;
  recommended?: boolean;
  reqMet: number;
  reqTotal: number;
  compliance: number;
  complianceLabel: ComplianceLabel;
  complianceHealth: Health;
  openTasks?: number;
  blockers: number;
  assignees: string[];
  closesDays: number;
  progress: number;
};

const STAGES = ["QUALIFYING", "PLANNING", "DRAFTING", "REVIEW", "APPROVAL", "READY", "SUBMITTED"];

const PROPOSALS: Proposal[] = [
  {
    id: "p1",
    sol: "MOH/ICT/2026/014",
    title: "National Referral Hospital ICT Services",
    agency: "Ministry of Health",
    stage: "QUALIFYING",
    reqMet: 12,
    reqTotal: 150,
    compliance: 14,
    complianceLabel: "MISSING",
    complianceHealth: "danger",
    blockers: 4,
    assignees: ["JW", "KL"],
    closesDays: 30,
    progress: 15,
  },
  {
    id: "p2",
    sol: "BURS/IT/2026/009",
    title: "Revenue Systems Modernization Support",
    agency: "Botswana Unified Revenue Service",
    stage: "QUALIFYING",
    recommended: true,
    reqMet: 0,
    reqTotal: 98,
    compliance: 0,
    complianceLabel: "UNKNOWN",
    complianceHealth: "muted",
    blockers: 0,
    assignees: [],
    closesDays: 45,
    progress: 4,
  },
  {
    id: "p3",
    sol: "WUC/CON/2026/031",
    title: "North-East District Water Infrastructure Consulting",
    agency: "Water Utilities Corporation",
    stage: "PLANNING",
    reqMet: 33,
    reqTotal: 74,
    compliance: 45,
    complianceLabel: "PARTIALLY SATISFIED",
    complianceHealth: "warn",
    openTasks: 8,
    blockers: 2,
    assignees: ["AS"],
    closesDays: 12,
    progress: 35,
  },
  {
    id: "p4",
    sol: "MTI/CLD/2026/022",
    title: "Government Cloud Migration Services",
    agency: "Ministry of Trade and Industry",
    stage: "REVIEW",
    reqMet: 118,
    reqTotal: 132,
    compliance: 89,
    complianceLabel: "SATISFIED",
    complianceHealth: "healthy",
    blockers: 1,
    assignees: ["MR", "TP"],
    closesDays: 8,
    progress: 82,
  },
  {
    id: "p6",
    sol: "MIH/RD/2026/041",
    title: "A1 Highway Rehabilitation Works",
    agency: "Ministry of Infrastructure and Housing",
    stage: "APPROVAL",
    reqMet: 121,
    reqTotal: 130,
    compliance: 92,
    complianceLabel: "SATISFIED",
    complianceHealth: "healthy",
    blockers: 0,
    assignees: ["BM", "TG"],
    closesDays: 6,
    progress: 90,
  },
  {
    id: "p7",
    sol: "WUC/CON/2026/052",
    title: "Maun Water Treatment Plant Upgrade",
    agency: "Water Utilities Corporation",
    stage: "APPROVAL",
    reqMet: 88,
    reqTotal: 110,
    compliance: 71,
    complianceLabel: "EXPIRED",
    complianceHealth: "danger",
    blockers: 3,
    assignees: ["NL"],
    closesDays: 18,
    progress: 74,
  },
  {
    id: "p8",
    sol: "GCC/WM/2026/018",
    title: "Gaborone City Council Waste Management Framework",
    agency: "Gaborone City Council",
    stage: "READY",
    reqMet: 126,
    reqTotal: 130,
    compliance: 97,
    complianceLabel: "SATISFIED",
    complianceHealth: "healthy",
    blockers: 0,
    assignees: ["DL", "PK"],
    closesDays: 4,
    progress: 98,
  },
  {
    id: "p5",
    sol: "BPC/GRID/2026/005",
    title: "National Grid Telemetry Platform Modernization",
    agency: "Botswana Power Corporation",
    stage: "SUBMITTED",
    reqMet: 140,
    reqTotal: 140,
    compliance: 100,
    complianceLabel: "SATISFIED",
    complianceHealth: "healthy",
    blockers: 0,
    assignees: ["DL"],
    closesDays: 3,
    progress: 100,
  },
];

// ---- Health helpers (icon + text, never color alone) ----
const healthClasses: Record<Health, string> = {
  healthy: "text-healthy",
  warn: "text-warn",
  danger: "text-danger",
  muted: "text-muted",
};
const healthIcon = (h: Health, className: string) => {
  if (h === "healthy") return <IconCheckCircle className={className} />;
  if (h === "muted") return <IconList className={className} />;
  return <IconAlert className={className} />;
};

function ProgressRing({ value }: { value: number }) {
  const r = 13;
  const c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  return (
    <div className="relative h-9 w-9 shrink-0" title={`${value}% complete`}>
      <svg viewBox="0 0 32 32" className="h-9 w-9 -rotate-90">
        <circle cx="16" cy="16" r={r} fill="none" stroke="currentColor" strokeWidth="2.5" className="text-border" />
        <circle
          cx="16"
          cy="16"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={off}
          className="text-ink"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-mono text-[9px] font-semibold text-ink">
        {value}%
      </span>
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border-strong bg-panel font-mono text-[10px] font-semibold text-muted">
      {initials}
    </span>
  );
}

function ClosesChip({ days }: { days: number }) {
  const urgent = days <= 14;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium ${
        urgent ? "bg-warn-bg text-warn" : "bg-panel text-muted"
      }`}
    >
      <IconClock className="h-3.5 w-3.5" />
      Closes <span className="font-mono">{days}d</span>
    </span>
  );
}

// ---- Card ----
function Card({ p, onOpen }: { p: Proposal; onOpen: (p: Proposal) => void }) {
  return (
    <button
      onClick={() => onOpen(p)}
      className="group relative w-full rounded-xl border border-border bg-surface p-4 text-left transition-shadow hover:shadow-md hover:shadow-black/5"
    >
      {p.recommended && (
        <span className="absolute -top-2 right-3 inline-flex items-center gap-1 rounded-md bg-ai-tint px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-ai">
          <IconSparkle className="h-3 w-3" />
          Recommended
        </span>
      )}
      <div className="font-mono text-xs text-subtle">{p.sol}</div>
      <h3 className="mt-1.5 text-[15px] font-semibold leading-snug text-ink">{p.title}</h3>

      <div className="mt-3 flex items-center gap-1.5 text-sm text-muted">
        <span className="h-2 w-2 shrink-0 rounded-full bg-warn" />
        {p.agency}
      </div>

      <div className="mt-3 space-y-1.5 rounded-lg bg-panel px-3 py-2.5 text-sm">
        {p.openTasks != null ? (
          <div className="flex items-center justify-between">
            <span className="text-muted">Tasks</span>
            <span className="inline-flex items-center gap-1 font-medium text-warn">
              <IconAlert className="h-3.5 w-3.5" />
              <span className="font-mono">{p.openTasks}</span> Open
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <span className="text-muted">Requirements</span>
            <span className="font-mono text-ink">
              {p.reqMet}/{p.reqTotal}
            </span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span className="text-muted">Compliance</span>
          <span className={`inline-flex items-center gap-1 font-medium ${healthClasses[p.complianceHealth]}`}>
            {healthIcon(p.complianceHealth, "h-3.5 w-3.5")}
            {p.complianceLabel}
            <span className="font-mono">{p.compliance}%</span>
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
        <div className="flex items-center gap-1">
          {p.assignees.length > 0 ? (
            p.assignees.map((a) => <Avatar key={a} initials={a} />)
          ) : (
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-dashed border-border-strong text-subtle">
              <IconAddUser className="h-4 w-4" />
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <ClosesChip days={p.closesDays} />
          <ProgressRing value={p.progress} />
        </div>
      </div>
    </button>
  );
}

// ---- Column ----
function Column({
  stage,
  proposals,
  onOpen,
}: {
  stage: string;
  proposals: Proposal[];
  onOpen: (p: Proposal) => void;
}) {
  const items = proposals.filter((p) => p.stage === stage);
  return (
    <div className="flex w-[300px] shrink-0 flex-col">
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">{stage}</span>
          <span className="rounded-md bg-panel px-1.5 py-0.5 font-mono text-xs text-muted">{items.length}</span>
        </div>
        <button className="text-subtle hover:text-ink" aria-label="Column menu">
          <IconDots className="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-col gap-3 border-t border-border pt-3">
        {items.map((p) => (
          <Card key={p.id} p={p} onOpen={onOpen} />
        ))}
        {items.length === 0 && (
          <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-border-strong text-sm text-subtle">
            Drop workspace here
          </div>
        )}
      </div>
    </div>
  );
}

// ---- Table view ----
function TableView({ proposals, onOpen }: { proposals: Proposal[]; onOpen: (p: Proposal) => void }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-surface">
      <table className="w-full min-w-[900px] text-left text-sm">
        <thead>
          <tr className="border-b border-border text-xs uppercase tracking-wider text-subtle">
            <th className="px-4 py-3 font-medium">Tender Ref #</th>
            <th className="px-4 py-3 font-medium">Title</th>
            <th className="px-4 py-3 font-medium">Agency</th>
            <th className="px-4 py-3 font-medium">Stage</th>
            <th className="px-4 py-3 font-medium">Compliance</th>
            <th className="px-4 py-3 font-medium">Closes</th>
          </tr>
        </thead>
        <tbody>
          {proposals.map((p) => (
            <tr
              key={p.id}
              onClick={() => onOpen(p)}
              className="cursor-pointer border-b border-border last:border-0 hover:bg-panel"
            >
              <td className="px-4 py-3 font-mono text-xs text-muted">{p.sol}</td>
              <td className="px-4 py-3 font-medium text-ink">
                <span className="flex items-center gap-1.5">
                  {p.recommended && <IconSparkle className="h-3.5 w-3.5 text-ai" />}
                  {p.title}
                </span>
              </td>
              <td className="px-4 py-3 text-muted">{p.agency}</td>
              <td className="px-4 py-3">
                <span className="rounded-md bg-panel px-2 py-0.5 text-xs font-medium text-muted">{p.stage}</span>
              </td>
              <td className="px-4 py-3">
                <span className={`inline-flex items-center gap-1 font-medium ${healthClasses[p.complianceHealth]}`}>
                  {healthIcon(p.complianceHealth, "h-3.5 w-3.5")}
                  {p.complianceLabel}
                  <span className="font-mono">{p.compliance}%</span>
                </span>
              </td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex items-center gap-1 font-medium ${
                    p.closesDays <= 14 ? "text-warn" : "text-muted"
                  }`}
                >
                  <IconClock className="h-3.5 w-3.5" />
                  <span className="font-mono">{p.closesDays}d</span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ---- Detail drawer ----
function Drawer({ p, onClose }: { p: Proposal | null; onClose: () => void }) {
  if (!p) return null;
  const openReqs = p.reqTotal - p.reqMet;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-ink/30 backdrop-blur-[1px]" onClick={onClose} />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col overflow-y-auto bg-surface shadow-2xl">
        <div className="flex items-start justify-between border-b border-border p-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-subtle">{p.sol}</span>
              {p.recommended && (
                <span className="inline-flex items-center gap-1 rounded-md bg-ai-tint px-1.5 py-0.5 text-[10px] font-bold uppercase text-ai">
                  <IconSparkle className="h-3 w-3" />
                  Recommended
                </span>
              )}
            </div>
            <h2 className="mt-1 text-xl font-semibold leading-snug text-ink">{p.title}</h2>
            <div className="mt-2 flex items-center gap-1.5 text-sm text-muted">
              <span className="h-2 w-2 rounded-full bg-warn" />
              {p.agency}
            </div>
          </div>
          <button onClick={onClose} className="rounded-md p-1 text-subtle hover:bg-panel hover:text-ink" aria-label="Close">
            <IconX className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 space-y-6 p-6">
          {/* Requirements progress */}
          <section>
            <h3 className="mb-2 text-sm font-semibold text-ink">Requirements Progress</h3>
            <div className="flex items-center justify-between text-sm text-muted">
              <span>Met</span>
              <span className="font-mono text-ink">
                {p.reqMet}/{p.reqTotal}
              </span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-panel">
              <div className="h-full rounded-full bg-primary" style={{ width: `${(p.reqMet / p.reqTotal) * 100}%` }} />
            </div>
            <div className="mt-1.5 flex items-center gap-1 text-xs text-subtle">
              <IconList className="h-3.5 w-3.5" />
              <span className="font-mono">{openReqs}</span> requirements still open
            </div>
          </section>

          {/* Compliance breakdown (explainable) */}
          <section>
            <h3 className="mb-2 text-sm font-semibold text-ink">Compliance Breakdown</h3>
            <div className="rounded-xl border border-border bg-panel p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">Overall compliance</span>
                <span className={`inline-flex items-center gap-1 font-semibold ${healthClasses[p.complianceHealth]}`}>
                  {healthIcon(p.complianceHealth, "h-4 w-4")}
                  {p.complianceLabel}
                  <span className="font-mono">{p.compliance}%</span>
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-muted">
                    <IconCheckCircle className="h-4 w-4 text-healthy" />
                    Requirements met
                  </span>
                  <span className="font-mono text-ink">{p.reqMet}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-muted">
                    <IconAlert className="h-4 w-4 text-warn" />
                    Requirements open
                  </span>
                  <span className="font-mono text-ink">{openReqs}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-muted">
                    <IconAlert className="h-4 w-4 text-danger" />
                    Active blockers
                  </span>
                  <span className="font-mono text-ink">{p.blockers}</span>
                </li>
              </ul>
              <p className="mt-3 border-t border-border pt-3 text-xs text-subtle">
                Compliance is the share of tender requirements marked met, reduced by active blockers.
              </p>
            </div>
          </section>

          {/* Assignees */}
          <section>
            <h3 className="mb-2 text-sm font-semibold text-ink">Assignees</h3>
            <div className="flex items-center gap-2">
              {p.assignees.length > 0 ? (
                p.assignees.map((a) => <Avatar key={a} initials={a} />)
              ) : (
                <span className="text-sm text-subtle">No assignees yet</span>
              )}
              <button className="flex h-7 w-7 items-center justify-center rounded-full border border-dashed border-border-strong text-subtle hover:text-ink">
                <IconAddUser className="h-4 w-4" />
              </button>
            </div>
          </section>

          {/* Closing */}
          <section>
            <h3 className="mb-2 text-sm font-semibold text-ink">Closing Date</h3>
            <div className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium ${
              p.closesDays <= 14 ? "bg-warn-bg text-warn" : "bg-panel text-muted"
            }`}>
              <IconClock className="h-4 w-4" />
              Closes in <span className="font-mono">{p.closesDays}</span> days
            </div>
          </section>
        </div>

        <div className="sticky bottom-0 flex gap-3 border-t border-border bg-surface p-6">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white hover:opacity-90">
            Open Workspace
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-hover">
            Advance Stage
            <IconArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ---- Main ----
export default function Workspaces() {
  const [view, setView] = useState<"board" | "table">("board");
  const [selected, setSelected] = useState<Proposal | null>(null);
  const [chips, setChips] = useState<string[]>(["Open Tender", "Closing < 14 Days"]);

  const removeChip = (c: string) => setChips((prev) => prev.filter((x) => x !== c));

  return (
    <div className="px-8 py-7">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-6">
        <h1 className="font-display text-5xl font-bold leading-[1.05] text-ink">
          Active
          <br />
          Proposals
        </h1>

        <div className="flex flex-wrap items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-muted hover:text-ink">
            <IconFilter className="h-4 w-4" />
            Filters
          </button>

          {chips.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 rounded-lg bg-panel px-3 py-2 text-sm text-ink"
            >
              {c}
              <button onClick={() => removeChip(c)} className="text-subtle hover:text-ink" aria-label={`Remove ${c}`}>
                <IconX className="h-3.5 w-3.5" />
              </button>
            </span>
          ))}

          <div className="inline-flex overflow-hidden rounded-lg border border-border">
            <button
              onClick={() => setView("board")}
              className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-medium ${
                view === "board" ? "bg-panel text-ink" : "bg-surface text-muted hover:text-ink"
              }`}
            >
              <IconBoard className="h-4 w-4" />
              Board
            </button>
            <button
              onClick={() => setView("table")}
              className={`inline-flex items-center gap-2 border-l border-border px-3 py-2 text-sm font-medium ${
                view === "table" ? "bg-panel text-ink" : "bg-surface text-muted hover:text-ink"
              }`}
            >
              <IconTable className="h-4 w-4" />
              Table
            </button>
          </div>

          <button className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white hover:opacity-90">
            <IconPlus className="h-4 w-4" />
            New Workspace
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="mt-8">
        {view === "board" ? (
          <div className="flex gap-6 overflow-x-auto pb-4">
            {STAGES.map((stage) => (
              <Column key={stage} stage={stage} proposals={PROPOSALS} onOpen={setSelected} />
            ))}
          </div>
        ) : (
          <TableView proposals={PROPOSALS} onOpen={setSelected} />
        )}
      </div>

      <Drawer p={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
