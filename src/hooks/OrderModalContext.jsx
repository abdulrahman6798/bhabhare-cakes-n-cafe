import { createContext, useContext, useMemo, useState, useCallback } from 'react'

const OrderModalContext = createContext(null)

export function OrderModalProvider({ children }) {
  const [state, setState] = useState({ open: false, mode: null, product: null })

  const openOrderModal = useCallback((product = null) => {
    setState({ open: true, mode: 'order', product })
  }, [])

  const openCustomCakeModal = useCallback(() => {
    setState({ open: true, mode: 'custom', product: null })
  }, [])

  const close = useCallback(() => {
    setState((s) => ({ ...s, open: false }))
  }, [])

  const value = useMemo(
    () => ({ ...state, openOrderModal, openCustomCakeModal, close }),
    [state, openOrderModal, openCustomCakeModal, close],
  )

  return <OrderModalContext.Provider value={value}>{children}</OrderModalContext.Provider>
}

export function useOrderModal() {
  const ctx = useContext(OrderModalContext)
  if (!ctx) throw new Error('useOrderModal must be used within OrderModalProvider')
  return ctx
}
