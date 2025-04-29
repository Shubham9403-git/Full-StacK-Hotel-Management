import React, { useEffect, useState } from 'react';
import { updateRoom, getRooms } from '../services/roomService';
import { useLocation, useNavigate } from 'react-router-dom';
import './room.css'; 

function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [availability, setAvailability] = useState({});
  const [selectedPriceRange, setSelectedPriceRange] = useState(''); // <-- New state

  const location = useLocation();
  const navigate = useNavigate();
  const hotelId = location.state?.hotelId;

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    const response = await getRooms();
    console.log(response.data)
    setRooms(response.data);
    const availStatus = {};
    response.data.forEach(room => {
      availStatus[room.roomId] = room.available;
    });
    setAvailability(availStatus);
  };

  const handleBook = async (room) => {
    try {
      const updatedRoom = { ...room, available: false };
      await updateRoom(room.roomId, updatedRoom);

      setAvailability(prev => ({ ...prev, [room.roomId]: false }));
    } catch (error) {
      console.error('Error booking room:', error.response?.data || error.message);
    }
  };

  const handlePriceRangeChange = (e) => {
    setSelectedPriceRange(e.target.value);
  };

  // Filter rooms based on selected price range
  const filteredRooms = rooms.filter((room) => {
    const price = room.price;
    switch (selectedPriceRange) {
      case 'less500':
        return price < 500;
      case '500to1000':
        return price >= 500 && price <= 1000;
      case '1000to2000':
        return price > 1000 && price <= 2000;
      case '2000to3000':
        return price > 2000 && price <= 3000;
      case 'more3000':
        return price > 3000;
      default:
        return true; // No filter
    }
  });

  return (
    <div className="room-list-container">
      <h2 className="room-title">Available Rooms</h2>

      {/* Price Range Select Dropdown */}
      <div className="filter-container">
        <select value={selectedPriceRange} onChange={handlePriceRangeChange} className="price-select">
          <option value="">All Prices</option>
          <option value="less500">Less than ₹500</option>
          <option value="500to1000">₹500 - ₹1000</option>
          <option value="1000to2000">₹1000 - ₹2000</option>
          <option value="2000to3000">₹2000 - ₹3000</option>
          <option value="more3000">More than ₹3000</option>
        </select>
      </div>

      <div className="room-grid">
        {filteredRooms.map((room) => (
          <div key={room.roomId} className="room-card">
            <img src={room.imageUrl} alt="room" className="room-image" />
            <div className="room-info">
              <h3 className="room-number">Room Number: {room.roomNumber}</h3>
              <p className="room-price">Room Price: ₹{room.price}</p>
              <p className="room-description">{room.description}</p>
              <p className="room-status">Room Availability: 
                {availability[room.roomId] ? " Available" : " Booked"}
              </p>
              <button 
                className={`book-button ${availability[room.roomId] ? '' : 'booked'}`}
                onClick={() => handleBook(room)}
                disabled={!availability[room.roomId]}
              >
                {availability[room.roomId] ? "Book Now" : "Booked"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomList;
