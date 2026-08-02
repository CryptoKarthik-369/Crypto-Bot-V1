import api from '../api/axios.js'

export const getOpenPositions = () => api.get('/positions').then(r => r.data)
export const getOrders = () => api.get('/orders').then(r => r.data)
export const placeOrder = (payload) => api.post('/orders', payload).then(r => r.data)
export const closePosition = (positionId) => api.post(`/positions/${positionId}/close`).then(r => r.data)
