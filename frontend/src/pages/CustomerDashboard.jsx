import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  // Fetch all bookings data
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bookings');
        console.log('Bookings fetched:', response.data); // Log fetched bookings
        setBookings(response.data.data); // Assuming response.data.data contains the bookings
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  // Handle booking cancellation
  const cancelBooking = async (id) => {
    try {
      console.log("Cancel booking triggered for id:", id); // Debugging log
      const confirmation = window.confirm("Are you sure you want to cancel this booking?");
      if (confirmation) {
        const response = await axios.delete(`http://localhost:5000/api/bookings/${id}`);
        console.log('Cancel booking response:', response); // Debugging log
        if (response.status === 200) {
          // Remove canceled booking from the state
          setBookings((prevBookings) => prevBookings.filter((booking) => booking._id !== id));
          alert("Booking canceled successfully!");
        } else {
          alert("Failed to cancel the booking.");
        }
      }
    } catch (error) {
      console.error('Error canceling booking:', error);
      alert("Error canceling the booking.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customer Dashboard</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="p-3 border-b">Name</th>
            <th className="p-3 border-b">Service</th>
            <th className="p-3 border-b">Date</th>
            <th className="p-3 border-b">Status</th>
            <th className="p-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td className="p-3 border-b">{booking.name}</td>
              <td className="p-3 border-b">{booking.serviceType}</td>
              <td className="p-3 border-b">{new Date(booking.preferredDate).toLocaleDateString()}</td>
              <td className="p-3 border-b">{booking.status}</td>
              <td className="p-3 border-b flex space-x-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => navigate(`/update-booking/${booking._id}`)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => cancelBooking(booking._id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerDashboard;
