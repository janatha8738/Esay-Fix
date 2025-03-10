import { useState } from 'react';
import Header from '../Header'; 
import Footer from '../footer'; 

import ovenRepairBg from '../../assets/bookingbackground.jpg'; 


const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    preferredDate: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      serviceType: '',
      preferredDate: '',
      description: ''
    });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ovenRepairBg})` }}
    >
      <Header />

      <div className="max-w-2xl mx-auto p-8 mt-10 backdrop-filter backdrop-blur-md bg-white/30 rounded-lg shadow-lg border border-white/30">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Book Your Repair Service
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 bg-white/70 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 p-3 shadow-sm"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 bg-white/70 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 p-3 shadow-sm"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 bg-white/70 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 p-3 shadow-sm"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-900">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 bg-white/70 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 p-3 shadow-sm"
              placeholder="Enter your address"
            />
          </div>

          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-900">
              Appliance Type
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 bg-white/70 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 p-3 shadow-sm"
            >
              <option value="">Select an appliance</option>
              <option value="refrigerator">Refrigerator</option>
              <option value="washing-machine">Washing Machine</option>
              <option value="dryer">Dryer</option>
              <option value="dishwasher">Dishwasher</option>
              <option value="oven">Oven</option>
              <option value="microwave">Microwave</option>
              <option value="air-conditioner">Air Conditioner</option>
              <option value="heater">Heater</option>
              <option value="water-heater">Water Heater</option>
              <option value="vacuum-cleaner">Vacuum Cleaner</option>
            </select>
          </div>

          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-900">
              Preferred Date
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              required
              className="mt-1 block w-full rounded-md border-gray-300 bg-white/70 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 p-3 shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-900">
              Problem Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 bg-white/70 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 p-3 shadow-sm"
              placeholder="Please describe the issue you're experiencing..."
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Book Service
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default BookingForm;