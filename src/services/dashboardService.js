import api from '../api/axios.js'

export const getDashboardSummary = () => api.get('/dashboard/summary').then(r => r.data)
export const getEquityCurve = () => api.get('/dashboard/equity-curve').then(r => r.data)
