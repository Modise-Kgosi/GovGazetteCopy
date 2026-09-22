import { useState, type ReactNode } from 'react'
import { useNav, NAV_TO_VIEW } from '../context/NavContext'
import { BrandMark, Wordmark } from './Brand'

const NAV = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="6" height="6" rx="1.5" />
        <rect x="10" y="2" width="6" height="4" rx="1.5" />
        <rect x="10" y="8" width="6" height="8" rx="1.5" />
        <rect x="2" y="10" width="6" height="6" rx="1.5" />
      </svg>
    ),
  },
  {
    id: 'discover',
    label: 'Discover',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="7" />
        <path d="M12 6l-1.8 4.2L6 12l1.8-4.2L12 6Z" />
      </svg>
    ),
  },
  {
    id: 'pipeline',
    label: 'Pipeline',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="1.5" width="6" height="4" rx="1" />
        <rect x="1.5" y="12.5" width="5" height="4" rx="1" />
        <rect x="11.5" y="12.5" width="5" height="4" rx="1" />
        <path d="M9 5.5v3M9 8.5H4v4M9 8.5h5v4" />
      </svg>
    ),
  },
  {
    id: 'company',
    label: 'Company',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="2" width="9" height="14" rx="1" />
        <path d="M12 6h3v10M3 16h12" />
        <path d="M5.5 5h3M5.5 8h3M5.5 11h3" />
      </svg>
    ),
  },
  {
    id: 'workspaces',
    label: 'Workspaces',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h3.2l1.3 1.5h6.5A1.5 1.5 0 0 1 16 7v6.5A1.5 1.5 0 0 1 14.5 15h-11A1.5 1.5 0 0 1 2 13.5V5.5Z" />
      </svg>
    ),
  },
  {
    id: 'intelligence',
    label: 'Intelligence',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12.5l3.5-4 3 2.5L14 5" />
        <path d="M10.5 5H14v3.5" />
      </svg>
    ),
  },
  {
    id: 'administration',
    label: 'Administration',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 1.5l6 2.5v4c0 3.6-2.5 6.5-6 8-3.5-1.5-6-4.4-6-8v-4l6-2.5Z" />
        <path d="M6.8 9l1.6 1.6L11.4 7.4" />
      </svg>
    ),
  },
]

interface AppShellProps {
  activeNav: string
  children: ReactNode
  mainClass?: string
  defaultCollapsed?: boolean
}

export default function AppShell({ activeNav, children, mainClass, defaultCollapsed = false }: AppShellProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed)
  const { navigate } = useNav()

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <aside
        className={`flex-shrink-0 border-r border-border bg-surface flex flex-col transition-all duration-200 ${
          collapsed ? 'w-16' : 'w-[230px]'
        }`}
      >
        {/* Logo row */}
        <div className={`h-16 flex items-center flex-shrink-0 ${collapsed ? 'justify-center px-0' : 'justify-between px-5'}`}>
          {!collapsed ? (
            <div className="flex items-center gap-2.5">
              <BrandMark size={28} />
              <Wordmark />
            </div>
          ) : (
            <BrandMark size={28} />
          )}
        </div>

        {/* Nav */}
        <nav className={`flex-1 py-2 overflow-y-auto ${collapsed ? 'px-2.5' : 'px-3'}`}>
          {NAV.map(item => (
            <div key={item.id} className="relative group/nav">
              <button
                onClick={() => { const v = NAV_TO_VIEW[item.id]; if (v) navigate(v) }}
                className={`w-full flex items-center mb-1 rounded-xl transition-colors ${
                  collapsed ? 'justify-center px-0 py-2.5' : 'gap-3 px-3 py-2.5'
                } ${
                  activeNav === item.id
                    ? 'bg-ink text-white'
                    : 'text-muted hover:bg-panel hover:text-ink'
                }`}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
              </button>
              {collapsed && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 z-50 pointer-events-none opacity-0 group-hover/nav:opacity-100 transition-opacity">
                  <div className="bg-ink text-white text-xs font-medium px-2.5 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
                    {item.label}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(c => !c)}
          className={`mx-3 mb-2 h-9 rounded-lg flex items-center justify-center text-muted hover:bg-panel hover:text-ink transition-colors ${collapsed ? 'px-0' : 'gap-2 text-xs font-medium'}`}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? (
            <svg width="15" height="15" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M5 3l4 4-4 4" /></svg>
          ) : (
            <>
              <svg width="15" height="15" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M9 3L5 7l4 4" /></svg>
              Collapse
            </>
          )}
        </button>

        {/* User profile */}
        <div className={`border-t border-border ${collapsed ? 'py-3 flex justify-center' : 'p-3'}`}>
          <button className={`flex items-center rounded-full transition-colors hover:bg-panel ${collapsed ? 'p-0' : 'w-full gap-2.5 px-2 py-1.5'}`}>
            <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
              JA
            </div>
            {!collapsed && (
              <div className="flex-1 text-left min-w-0">
                <div className="text-xs font-semibold text-ink truncate">John Admin</div>
                <div className="text-[10px] uppercase tracking-wide text-subtle truncate">GSA Operations</div>
              </div>
            )}
          </button>
        </div>
      </aside>

      {/* Right column */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Top nav */}
        <header className="h-16 border-b border-border bg-background/80 backdrop-blur-sm flex items-center px-6 gap-4 flex-shrink-0">
          <div className="flex-1 max-w-2xl relative flex items-center gap-2.5 bg-surface rounded-xl px-4 py-2.5 border border-border focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all">
            <svg width="15" height="15" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-subtle flex-shrink-0">
              <circle cx="5.5" cy="5.5" r="4" />
              <path d="m9 9 2 2" />
            </svg>
            <input
              type="text"
              placeholder="Search tenders, ministries, or reference numbers…"
              className="flex-1 bg-transparent text-sm text-ink placeholder:text-subtle outline-none min-w-0"
            />
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <button className="hidden sm:flex items-center gap-2 bg-surface border border-border rounded-xl px-3 py-2 text-xs font-medium text-ink hover:bg-panel transition-colors">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="2" width="12" height="12" rx="1.5" /><path d="M2 6h12" /></svg>
              Federal Agency
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted"><path d="M2.5 4L5 6.5L7.5 4" /></svg>
            </button>
            <button className="relative w-9 h-9 rounded-xl flex items-center justify-center text-muted hover:bg-panel hover:text-ink transition-colors">
              <svg width="17" height="17" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M8 1.5A4.5 4.5 0 0 0 3.5 6v3.5L2 12h12l-1.5-2.5V6A4.5 4.5 0 0 0 8 1.5Z" />
                <path d="M6.5 12.5a1.5 1.5 0 0 0 3 0" />
              </svg>
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-danger rounded-full ring-2 ring-background" />
            </button>
            <div className="w-9 h-9 rounded-full bg-ink flex items-center justify-center text-white flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="9" cy="6" r="3" /><path d="M3.5 15.5a5.5 5.5 0 0 1 11 0" /></svg>
            </div>
          </div>
        </header>

        <main className={`flex-1 ${mainClass ?? 'overflow-y-auto'}`}>
          {children}
        </main>
      </div>
    </div>
  )
}
