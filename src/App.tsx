import { useState } from 'react'
import { NavContext, type View } from './context/NavContext'
import AppShell from './components/AppShell'
import Login from './views/Login'
import Signup from './views/Signup'
import Onboarding from './views/Onboarding'
import Dashboard from './views/Dashboard'
import Discover from './views/Discover'
import Pipeline from './views/Pipeline'
import Company from './views/Company'
import Workspaces from './views/Workspaces'
import Intelligence from './views/Intelligence'
import Administration from './views/Administration'

const FULLSCREEN: View[] = ['login', 'signup', 'onboarding']

// nav id used by AppShell to highlight the active item
const NAV_ID: Partial<Record<View, string>> = {
  dashboard: 'dashboard',
  discover: 'discover',
  pipeline: 'pipeline',
  company: 'company',
  workspaces: 'workspaces',
  intelligence: 'intelligence',
  administration: 'administration',
}

const DEMO: { id: View; label: string }[] = [
  { id: 'login', label: 'Login' },
  { id: 'signup', label: 'Sign up' },
  { id: 'onboarding', label: 'Onboarding' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'discover', label: 'Discover' },
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'company', label: 'Company' },
  { id: 'workspaces', label: 'Workspaces' },
  { id: 'intelligence', label: 'Intelligence' },
  { id: 'administration', label: 'Admin' },
]

export default function App() {
  const [view, setView] = useState<View>('login')
  const [showDemo, setShowDemo] = useState(false)

  const content = () => {
    switch (view) {
      case 'login': return <Login />
      case 'signup': return <Signup />
      case 'onboarding': return <Onboarding />
      case 'dashboard': return <Dashboard />
      case 'discover': return <Discover />
      case 'pipeline': return <Pipeline />
      case 'company': return <Company />
      case 'workspaces': return <Workspaces />
      case 'intelligence': return <Intelligence />
      case 'administration': return <Administration />
    }
  }

  const isFull = FULLSCREEN.includes(view)

  return (
    <NavContext.Provider value={{ view, navigate: setView }}>
      <div className="min-h-screen bg-background font-sans text-ink">
        {isFull ? content() : <AppShell activeNav={NAV_ID[view] ?? ''}>{content()}</AppShell>}

        {/* Demo screen switcher */}
        <div className="fixed bottom-4 right-4 z-[100]">
          {showDemo && (
            <div className="mb-2 flex flex-col items-end gap-1 bg-surface border border-border rounded-2xl shadow-xl p-1.5 w-40">
              {DEMO.map(d => (
                <button
                  key={d.id}
                  onClick={() => setView(d.id)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    view === d.id ? 'bg-ink text-white' : 'text-muted hover:bg-panel hover:text-ink'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          )}
          <button
            onClick={() => setShowDemo(s => !s)}
            className="ml-auto flex items-center gap-2 bg-ink text-white text-xs font-medium rounded-full pl-3 pr-3.5 py-2 shadow-lg hover:bg-ink/90 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Demo
          </button>
        </div>
      </div>
    </NavContext.Provider>
  )
}
