import { createContext, useContext } from 'react'

export type View =
  | 'login'
  | 'signup'
  | 'onboarding'
  | 'dashboard'
  | 'discover'
  | 'pipeline'
  | 'company'
  | 'workspaces'
  | 'intelligence'
  | 'administration'

interface NavCtx {
  view: View
  navigate: (v: View) => void
}

export const NavContext = createContext<NavCtx>({ view: 'login', navigate: () => {} })
export const useNav = () => useContext(NavContext)

// Sidebar id === View id for the in-app screens.
export const NAV_TO_VIEW: Record<string, View> = {
  dashboard: 'dashboard',
  discover: 'discover',
  pipeline: 'pipeline',
  company: 'company',
  workspaces: 'workspaces',
  intelligence: 'intelligence',
  administration: 'administration',
}
