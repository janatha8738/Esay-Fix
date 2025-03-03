import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './pages/AdminDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import TechnicianDashboard from './pages/TechnicianDashboard';
import ServiceCenterDashboard from './pages/ServiceCenterDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route Redirects to Login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        
        {/* Admin Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        
        {/* Customer Dashboard */}
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        
        {/* Technician Dashboard */}
        <Route path="/technician-dashboard" element={<TechnicianDashboard />} />
        
        {/* Service Center Dashboard */}
        <Route path="/service-center-dashboard" element={<ServiceCenterDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
