import { useState, type ReactElement } from "react";

// ---- Icons (inline SVG, stroke 1.5) ----
type IconProps = { className?: string };

function IconColumns({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}
function IconDownload({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
function IconUser({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function IconChevronDown({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
function IconCalendar({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function IconKey({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="15.5" r="4.5" /><path d="M10.7 12.3 21 2" /><path d="m17 6 3 3" /><path d="m14 9 3 3" />
    </svg>
  );
}
function IconCheckCircle({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
function IconLogin({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" />
    </svg>
  );
}
function IconLock({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
function IconPolicy({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="6" x2="14" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="12" y2="18" />
      <circle cx="18" cy="6" r="2" /><circle cx="16" cy="18" r="2" />
    </svg>
  );
}
function IconSync({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}
function IconTrash({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}
function IconSettings({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
function IconShieldOff({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2" /><path d="M4.7 4.7 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.6-4.6" /><line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}
function IconChevronLeft({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
function IconChevronRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
function IconX({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ---- Data ----
type EventType = "AUTH_LOGIN" | "DATA_ACCESS" | "POLICY_UPDATE" | "FILE_EXPORT" | "DATA_SYNC" | "USER_DELETE" | "CONFIG_CHANGE";

const EVENT_ICONS: Record<EventType, (p: IconProps) => ReactElement> = {
  AUTH_LOGIN: IconLogin,
  DATA_ACCESS: IconLock,
  POLICY_UPDATE: IconPolicy,
  FILE_EXPORT: IconDownload,
  DATA_SYNC: IconSync,
  USER_DELETE: IconTrash,
  CONFIG_CHANGE: IconSettings,
};

type AuditEvent = {
  id: string;
  ts: string;
  actor: string;
  initials: string;
  email: string;
  role: string;
  type: EventType;
  resource: string;
  description: string;
  privileged: boolean;
  ip: string;
  agent: string;
  hash: string;
};

const EVENTS: AuditEvent[] = [
  { id: "evt_9f21", ts: "2023-10-24 14:32:01.142", actor: "Sarah Jenkins", initials: "SJ", email: "sjenkins@gsa.gov", role: "Program Analyst", type: "AUTH_LOGIN", resource: "System", description: "User authenticated via SSO", privileged: false, ip: "10.14.22.8", agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Chrome/118.0", hash: "sha256:a3f9c1e8b204d7f6e1a9c0d5b8f2e4a7" },
  { id: "evt_9f20", ts: "2023-10-24 14:31:45.091", actor: "Service Account", initials: "SV", email: "svc-ingest@gsa.gov", role: "Machine Identity", type: "DATA_ACCESS", resource: "Evidence", description: "Attempted to read sealed evidence artifact", privileged: false, ip: "10.14.9.101", agent: "GovGazette-Ingest/2.4 (+svc)", hash: "sha256:88be21c4a9f0d3e5c7b1a6f8d0e2c4b9" },
  { id: "evt_9f19", ts: "2023-10-24 14:30:12.884", actor: "Elena Hayes", initials: "EH", email: "ehayes@gsa.gov", role: "System Administrator", type: "POLICY_UPDATE", resource: "Organization", description: "Modified global retention policy", privileged: true, ip: "10.14.4.17", agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Firefox/119.0", hash: "sha256:c0ffee12deadbeef9a8b7c6d5e4f3021" },
  { id: "evt_9f18", ts: "2023-10-24 14:28:55.302", actor: "David Chen", initials: "DC", email: "dchen@gsa.gov", role: "Compliance Officer", type: "FILE_EXPORT", resource: "Tenant", description: "Exported Q3 Compliance report", privileged: false, ip: "10.14.31.55", agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/17.0", hash: "sha256:11223344556677889900aabbccddeeff" },
  { id: "evt_9f17", ts: "2023-10-24 14:25:10.005", actor: "API Sync Bot", initials: "API", email: "svc-sync@gsa.gov", role: "Machine Identity", type: "DATA_SYNC", resource: "System", description: "Incremental metadata sync completed", privileged: false, ip: "10.14.9.204", agent: "GovGazette-Sync/1.9 (+svc)", hash: "sha256:0a1b2c3d4e5f60718293a4b5c6d7e8f9" },
  { id: "evt_9f16", ts: "2023-10-24 14:22:47.610", actor: "Marcus Vance", initials: "MK", email: "mvance@gsa.gov", role: "Audit Lead", type: "CONFIG_CHANGE", resource: "System", description: "Enabled audit override window", privileged: true, ip: "10.14.4.9", agent: "Mozilla/5.0 (X11; Linux x86_64) Chrome/118.0", hash: "sha256:feedface00112233445566778899aabb" },
  { id: "evt_9f15", ts: "2023-10-24 14:20:33.219", actor: "Sarah Jenkins", initials: "SJ", email: "sjenkins@gsa.gov", role: "Program Analyst", type: "DATA_ACCESS", resource: "Tenant", description: "Viewed contractor performance record", privileged: false, ip: "10.14.22.8", agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Chrome/118.0", hash: "sha256:9988776655443322110ffeeddccbbaa0" },
  { id: "evt_9f14", ts: "2023-10-24 14:17:02.778", actor: "David Chen", initials: "DC", email: "dchen@gsa.gov", role: "Compliance Officer", type: "AUTH_LOGIN", resource: "System", description: "User authenticated via SSO", privileged: false, ip: "10.14.31.55", agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/17.0", hash: "sha256:1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d" },
  { id: "evt_9f13", ts: "2023-10-24 14:12:19.441", actor: "Priya Nair", initials: "PN", email: "pnair@gsa.gov", role: "Data Steward", type: "FILE_EXPORT", resource: "Evidence", description: "Exported evidence chain manifest", privileged: false, ip: "10.14.18.72", agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edge/118.0", hash: "sha256:7f6e5d4c3b2a1908f7e6d5c4b3a29180" },
  { id: "evt_9f12", ts: "2023-10-24 14:08:56.913", actor: "Elena Hayes", initials: "EH", email: "ehayes@gsa.gov", role: "System Administrator", type: "USER_DELETE", resource: "Organization", description: "Deactivated dormant service identity", privileged: true, ip: "10.14.4.17", agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Firefox/119.0", hash: "sha256:deadc0de12345678abcdef9876543210" },
  { id: "evt_9f11", ts: "2023-10-24 14:03:41.028", actor: "API Sync Bot", initials: "API", email: "svc-sync@gsa.gov", role: "Machine Identity", type: "DATA_SYNC", resource: "System", description: "Nightly reconciliation job started", privileged: false, ip: "10.14.9.204", agent: "GovGazette-Sync/1.9 (+svc)", hash: "sha256:5566778899aabbccddeeff0011223344" },
  { id: "evt_9f10", ts: "2023-10-24 13:59:12.700", actor: "Marcus Vance", initials: "MK", email: "mvance@gsa.gov", role: "Audit Lead", type: "DATA_ACCESS", resource: "Evidence", description: "Reviewed sealed evidence under override", privileged: true, ip: "10.14.4.9", agent: "Mozilla/5.0 (X11; Linux x86_64) Chrome/118.0", hash: "sha256:abcabcabc123123123defdefdef45645" },
  { id: "evt_9f0f", ts: "2023-10-24 13:54:38.155", actor: "Priya Nair", initials: "PN", email: "pnair@gsa.gov", role: "Data Steward", type: "POLICY_UPDATE", resource: "Tenant", description: "Adjusted tenant access scope", privileged: false, ip: "10.14.18.72", agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edge/118.0", hash: "sha256:0f0e0d0c0b0a09080706050403020100" },
  { id: "evt_9f0e", ts: "2023-10-24 13:50:04.622", actor: "David Chen", initials: "DC", email: "dchen@gsa.gov", role: "Compliance Officer", type: "CONFIG_CHANGE", resource: "System", description: "Updated alert threshold configuration", privileged: false, ip: "10.14.31.55", agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/17.0", hash: "sha256:33221100ffeeddccbbaa99887766554" },
];

type Grant = {
  actor: string; initials: string; email: string; scope: string; reason: string; approver: string; expiry: string; expiryMono: boolean;
};

const GRANTS: Grant[] = [
  { actor: "Elena Hayes", initials: "EH", email: "ehayes@gsa.gov", scope: "SYSTEM_ADMIN", reason: "Emergency patch de…", approver: "J. Admin", expiry: "02:45:12", expiryMono: true },
  { actor: "Marcus Vance", initials: "MK", email: "mvance@gsa.gov", scope: "AUDIT_OVERRIDE", reason: "Quarterly complianc…", approver: "S. Director", expiry: "2023-11-01", expiryMono: false },
  { actor: "Priya Nair", initials: "PN", email: "pnair@gsa.gov", scope: "DATA_STEWARD", reason: "Evidence migration…", approver: "J. Admin", expiry: "06:12:40", expiryMono: true },
];

const EVENT_TYPES = ["All", "AUTH_LOGIN", "DATA_ACCESS", "POLICY_UPDATE", "FILE_EXPORT", "DATA_SYNC", "USER_DELETE", "CONFIG_CHANGE"];
const RESOURCES = ["Any", "System", "Evidence", "Organization", "Tenant"];

// ---- Small UI helpers ----
function Avatar({ initials, className = "" }: { initials: string; className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full bg-panel border border-border text-[10px] font-semibold text-muted font-mono shrink-0 ${className}`}>
      {initials}
    </span>
  );
}

function EventChip({ type }: { type: EventType }) {
  const Icon = EVENT_ICONS[type];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-panel border border-border px-2 py-1 font-mono text-xs text-ink">
      <Icon className="w-3.5 h-3.5 text-muted" />
      {type}
    </span>
  );
}

function Dropdown({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink hover:bg-panel/60 transition-colors"
      >
        <span className="text-muted">{label}:</span>
        <span className="font-medium">{value}</span>
        <IconChevronDown className="w-4 h-4 text-subtle" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-full mt-1 z-20 min-w-full rounded-lg border border-border bg-surface shadow-lg py-1">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`block w-full text-left px-3.5 py-2 text-sm whitespace-nowrap hover:bg-panel/60 ${opt === value ? "text-primary font-medium" : "text-ink"}`}
              >
                {opt === "All" || opt === "Any" ? opt : <span className="font-mono text-xs">{opt}</span>}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ---- Main component ----
export default function Administration() {
  const [actorFilter, setActorFilter] = useState("");
  const [eventType, setEventType] = useState("All");
  const [resource, setResource] = useState("Any");
  const [privilegedOnly, setPrivilegedOnly] = useState(false);
  const [grantsOpen, setGrantsOpen] = useState(true);
  const [selected, setSelected] = useState<AuditEvent | null>(null);

  const filtered = EVENTS.filter((e) => {
    if (actorFilter && !e.actor.toLowerCase().includes(actorFilter.toLowerCase())) return false;
    if (eventType !== "All" && e.type !== eventType) return false;
    if (resource !== "Any" && e.resource !== resource) return false;
    if (privilegedOnly && !e.privileged) return false;
    return true;
  });

  return (
    <div className="px-8 py-7 max-w-[1200px]">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl text-ink">Audit Logs</h1>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted">
            <span className="inline-block w-2 h-2 rounded-full bg-healthy" aria-hidden />
            <span>Live tailing</span>
            <span className="text-subtle">•</span>
            <span>1,492 events in last 24h</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-xs font-semibold tracking-wide text-ink hover:bg-panel/60 transition-colors">
            <IconColumns className="w-4 h-4 text-muted" />
            COLUMNS
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-xs font-semibold tracking-wide text-white hover:opacity-90 transition-opacity">
            <IconDownload className="w-4 h-4" />
            EXPORT CSV
          </button>
        </div>
      </div>

      {/* Filter toolbar */}
      <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl border border-border bg-surface p-3">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3.5 py-2.5 min-w-[220px] flex-1 sm:flex-none">
          <IconUser className="w-4 h-4 text-subtle" />
          <input
            value={actorFilter}
            onChange={(e) => setActorFilter(e.target.value)}
            placeholder="Filter by Actor…"
            className="bg-transparent text-sm text-ink placeholder:text-subtle outline-none w-full"
          />
        </div>
        <Dropdown label="Event Type" value={eventType} options={EVENT_TYPES} onChange={setEventType} />
        <Dropdown label="Resource" value={resource} options={RESOURCES} onChange={setResource} />
        <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink">
          <IconCalendar className="w-4 h-4 text-subtle" />
          <span className="text-muted">Range:</span>
          <span className="font-medium">Last 7 Days</span>
        </div>
        <div className="ml-auto flex items-center gap-3 pl-2">
          <button
            role="switch"
            aria-checked={privilegedOnly}
            onClick={() => setPrivilegedOnly((p) => !p)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${privilegedOnly ? "bg-warn" : "bg-border-strong"}`}
          >
            <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${privilegedOnly ? "translate-x-5" : "translate-x-0.5"}`} />
          </button>
          <span className="text-xs font-semibold tracking-wide text-muted">PRIVILEGED ONLY</span>
        </div>
      </div>

      {/* Privileged Access Grants panel */}
      <div className="mt-6 rounded-xl border border-border bg-surface">
        <button
          onClick={() => setGrantsOpen((o) => !o)}
          className="flex w-full items-center gap-3 px-5 py-4 text-left"
        >
          <IconKey className="w-5 h-5 text-warn" />
          <span className="text-base font-semibold text-ink">Active Privileged Access Grants</span>
          <span className="rounded-md bg-panel border border-border px-2 py-0.5 text-[11px] font-semibold tracking-wide text-muted">3 ACTIVE</span>
          <IconChevronDown className={`ml-auto w-5 h-5 text-subtle transition-transform ${grantsOpen ? "rotate-180" : ""}`} />
        </button>
        {grantsOpen && (
          <div className="overflow-x-auto border-t border-border">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="text-[11px] font-semibold uppercase tracking-wide text-subtle">
                  <th className="text-left font-semibold px-5 py-3">Actor</th>
                  <th className="text-left font-semibold px-5 py-3">Scope</th>
                  <th className="text-left font-semibold px-5 py-3">Reason</th>
                  <th className="text-left font-semibold px-5 py-3">Approver</th>
                  <th className="text-left font-semibold px-5 py-3">Expiry</th>
                  <th className="text-left font-semibold px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {GRANTS.map((g) => (
                  <tr key={g.email} className="border-t border-border">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar initials={g.initials} className="w-9 h-9 text-xs" />
                        <div>
                          <div className="font-medium text-ink">{g.actor}</div>
                          <div className="font-mono text-xs text-muted">{g.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="rounded-md bg-panel border border-border px-2 py-1 font-mono text-xs text-ink">{g.scope}</span>
                    </td>
                    <td className="px-5 py-4 text-muted">{g.reason}</td>
                    <td className="px-5 py-4 text-ink">{g.approver}</td>
                    <td className={`px-5 py-4 ${g.expiryMono ? "font-mono text-warn font-medium" : "font-mono text-muted"}`}>{g.expiry}</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1.5 text-healthy font-medium">
                        <IconShieldOff className="w-4 h-4" />
                        ACTIVE
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Audit event log table */}
      <div className="mt-6 rounded-xl border border-border bg-surface">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-sm">
            <thead>
              <tr className="text-[11px] font-semibold uppercase tracking-wide text-subtle">
                <th className="text-left font-semibold px-5 py-4">Timestamp (UTC)</th>
                <th className="text-left font-semibold px-5 py-4">Actor</th>
                <th className="text-left font-semibold px-5 py-4">Event Type</th>
                <th className="text-left font-semibold px-5 py-4">Resource</th>
                <th className="text-left font-semibold px-5 py-4">Description</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((e) => (
                <tr
                  key={e.id}
                  onClick={() => setSelected(e)}
                  className={`border-t border-border cursor-pointer transition-colors ${e.privileged ? "bg-warn-bg/40 hover:bg-warn-bg/70" : "hover:bg-panel/60"}`}
                >
                  <td className="px-5 py-4 font-mono text-[13px] text-ink whitespace-nowrap">{e.ts}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2.5">
                      <Avatar initials={e.initials} className="w-7 h-7" />
                      <span className="font-medium text-ink whitespace-nowrap">{e.actor}</span>
                      {e.privileged && <IconKey className="w-3.5 h-3.5 text-warn" />}
                    </div>
                  </td>
                  <td className="px-5 py-4"><EventChip type={e.type} /></td>
                  <td className="px-5 py-4 text-muted">{e.resource}</td>
                  <td className="px-5 py-4 text-muted whitespace-nowrap">{e.description}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr className="border-t border-border">
                  <td colSpan={5} className="px-5 py-12 text-center text-muted text-sm">No events match the current filters.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* Footer / pager */}
        <div className="flex items-center justify-between border-t border-border px-5 py-4">
          <span className="text-sm text-muted">Showing 1-50 of 1,492 events</span>
          <div className="flex items-center gap-2">
            <button className="rounded-lg border border-border bg-surface p-2 text-muted hover:bg-panel/60 transition-colors" aria-label="Previous page">
              <IconChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-sm text-ink px-1">Page 1 of 30</span>
            <button className="rounded-lg border border-border bg-surface p-2 text-muted hover:bg-panel/60 transition-colors" aria-label="Next page">
              <IconChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Detail drawer */}
      {selected && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-[1px]"
            onClick={() => setSelected(null)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-[520px] bg-surface shadow-2xl border-l border-border overflow-y-auto animate-[slideIn_0.2s_ease-out]"
            style={{ animationName: "none" }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-5">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-subtle">Event Detail</div>
                <div className="mt-1 font-mono text-sm text-ink">{selected.id}</div>
              </div>
              <button onClick={() => setSelected(null)} className="rounded-lg p-1.5 text-muted hover:bg-panel/60 transition-colors" aria-label="Close">
                <IconX className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 py-5 space-y-5">
              {selected.privileged && (
                <div className="flex items-center gap-2 rounded-lg bg-warn-bg border border-warn/30 px-3 py-2.5 text-sm text-warn font-medium">
                  <IconKey className="w-4 h-4" />
                  Privileged action — elevated access used
                </div>
              )}

              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-subtle mb-1.5">Timestamp (UTC)</div>
                <div className="font-mono text-sm text-ink">{selected.ts}</div>
              </div>

              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-subtle mb-2">Actor</div>
                <div className="flex items-center gap-3">
                  <Avatar initials={selected.initials} className="w-11 h-11 text-sm" />
                  <div>
                    <div className="font-medium text-ink flex items-center gap-1.5">
                      {selected.actor}
                      {selected.privileged && <IconKey className="w-3.5 h-3.5 text-warn" />}
                    </div>
                    <div className="font-mono text-xs text-muted">{selected.email}</div>
                    <div className="text-xs text-subtle">{selected.role}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-subtle mb-1.5">Event Type</div>
                  <EventChip type={selected.type} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-subtle mb-1.5">Resource</div>
                  <div className="text-sm text-ink pt-1">{selected.resource}</div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-subtle mb-1.5">IP Address</div>
                  <div className="font-mono text-sm text-ink">{selected.ip}</div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-subtle mb-1.5">Status</div>
                  <span className="inline-flex items-center gap-1.5 text-healthy font-medium text-sm">
                    <IconCheckCircle className="w-4 h-4" />
                    Recorded
                  </span>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-subtle mb-1.5">Description</div>
                <div className="text-sm text-ink">{selected.description}</div>
              </div>

              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-subtle mb-1.5">User Agent</div>
                <div className="font-mono text-xs text-muted break-all">{selected.agent}</div>
              </div>

              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-subtle mb-1.5">Raw Metadata</div>
                <pre className="rounded-lg bg-ink-panel text-white font-mono text-xs leading-relaxed p-4 overflow-x-auto">{`{
  "event_id": "${selected.id}",
  "type": "${selected.type}",
  "actor": "${selected.email}",
  "role": "${selected.role}",
  "resource": "${selected.resource}",
  "privileged": ${selected.privileged},
  "source_ip": "${selected.ip}",
  "timestamp": "${selected.ts}Z"
}`}</pre>
              </div>

              <div className="rounded-lg border border-border bg-panel/60 px-4 py-3">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-subtle mb-1.5">
                  <IconLock className="w-3.5 h-3.5" />
                  Tamper-Evident Signature
                </div>
                <div className="font-mono text-xs text-ink break-all">{selected.hash}</div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-healthy font-medium">
                  <IconCheckCircle className="w-3.5 h-3.5" />
                  Integrity verified — chain intact
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
