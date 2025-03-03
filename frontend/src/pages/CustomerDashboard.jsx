import React from 'react';

const CustomerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800">Customer Dashboard</h1>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">Booking Repair</h2>
          <form className="mt-4">
            <input
              type="text"
              placeholder="Enter Appliance Name"
              className="border-gray-300 border p-2 rounded-md w-full mb-4"
            />
            <textarea
              placeholder="Describe the Issue"
              className="border-gray-300 border p-2 rounded-md w-full mb-4"
            ></textarea>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Book Repair</button>
          </form>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">Track Repairs</h2>
          <div className="mt-4">
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg">View Repair Status</button>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">Payments & Invoices</h2>
          <div className="mt-4">
            <button className="bg-gray-800 text-white py-2 px-4 rounded-lg">View Invoices</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
