import api from '../api/axios.js'

export const getSymbolPrice = (symbol) => api.get(`/market/price/${symbol}`).then(r => r.data)
export const getKlines = (symbol, interval) =>
  api.get(`/market/klines/${symbol}`, { params: { interval } }).then(r => r.data)
