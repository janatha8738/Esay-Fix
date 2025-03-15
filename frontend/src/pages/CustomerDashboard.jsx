import React from 'react';

const CustomerDashboard = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="EasyFix Logo" className="h-8" />
          <span className="text-xl font-bold text-gray-800">EasyFix</span>
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Book Repair</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Track</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Support</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Profile</a>
        </nav>
      </div>
    </header>
    
  );
};

export default CustomerDashboard;
