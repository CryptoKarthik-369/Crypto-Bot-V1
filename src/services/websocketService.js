// Thin wrapper around native WebSocket for backend dashboard/market/AI streams.
export function createSocket(path, { onMessage, onOpen, onClose, onError } = {}) {
  const base = (import.meta.env.VITE_WS_BASE_URL || `ws://${window.location.host}`)
  const ws = new WebSocket(`${base}${path}`)

  ws.onopen = (e) => onOpen?.(e)
  ws.onclose = (e) => onClose?.(e)
  ws.onerror = (e) => onError?.(e)
  ws.onmessage = (e) => {
    try {
      onMessage?.(JSON.parse(e.data))
    } catch {
      onMessage?.(e.data)
    }
  }

  return ws
}

export function createBinanceTradeSocket(symbol, onPrice) {
  const ws = new WebSocket(`wss://fstream.binance.com/ws/${symbol.toLowerCase()}@trade`)
  ws.onmessage = (e) => {
    const data = JSON.parse(e.data)
    onPrice(parseFloat(data.p))
  }
  return ws
}
