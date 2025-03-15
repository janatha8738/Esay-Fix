import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import TechnicianDashboard from './pages/TechnicianDashboard';
import ServiceCenterDashboard from './pages/ServiceCenterDashboard';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import HowItWorksSection from './components/HowItWorksSection';
import Footer from './components/footer';


function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <Footer />

    </div>
  );
}

function App() {
  return (
    
    <Router>
      <Routes>
        {/* Default Route Redirects to Login */}
        <Route path="/" element={<HomePage />} />

        {/* Admin Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        
        {/* Customer Dashboard */}
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        
        {/* Technician Dashboard */}
        <Route path="/technician-dashboard" element={<TechnicianDashboard />} />
        
        {/* Service Center Dashboard */}
        <Route path="/service-center-dashboard" element={<ServiceCenterDashboard />} />
        
        <Route path='/booking-form' element={<BookingForm />} />

      </Routes>
    </Router>
  );
}

export default App;
