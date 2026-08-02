import { createContext, useContext, useState, useCallback } from 'react'

const DashboardContext = createContext(null)

export function DashboardProvider({ children }) {
  const [symbol, setSymbol] = useState('SUIUSDT')
  const [price, setPrice] = useState(null)
  const [connectionStatus, setConnectionStatus] = useState('disconnected')
  const [demoMode, setDemoMode] = useState(
    (import.meta.env.VITE_DEMO_MODE || 'true') === 'true'
  )

  const updatePrice = useCallback((p) => setPrice(p), [])

  const value = {
    symbol, setSymbol,
    price, updatePrice,
    connectionStatus, setConnectionStatus,
    demoMode, setDemoMode,
  }

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  )
}

export function useDashboardContext() {
  const ctx = useContext(DashboardContext)
  if (!ctx) throw new Error('useDashboardContext must be used within DashboardProvider')
  return ctx
}
