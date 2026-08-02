import { Routes, Route } from 'react-router-dom'
import DashboardPage from '../pages/dashboard/DashboardPage.jsx'
import AnalysisPage from '../pages/analysis/AnalysisPage.jsx'
import ScannerPage from '../pages/scanner/ScannerPage.jsx'
import OrdersPage from '../pages/orders/OrdersPage.jsx'
import PositionsPage from '../pages/positions/PositionsPage.jsx'
import PortfolioPage from '../pages/portfolio/PortfolioPage.jsx'
import JournalPage from '../pages/journal/JournalPage.jsx'
import RiskPage from '../pages/risk/RiskPage.jsx'
import SettingsPage from '../pages/settings/SettingsPage.jsx'
import ApiPage from '../pages/api/ApiPage.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/analysis" element={<AnalysisPage />} />
      <Route path="/scanner" element={<ScannerPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/positions" element={<PositionsPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/journal" element={<JournalPage />} />
      <Route path="/risk" element={<RiskPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/api" element={<ApiPage />} />
    </Routes>
  )
}
