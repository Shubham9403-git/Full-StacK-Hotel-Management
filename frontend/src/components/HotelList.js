import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getHotels } from '../services/hotelService';
import './hotel.css'; // Link the CSS

function HotelList() {
  const [hotels, setHotels] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    loadHotels();
  }, []);

  const loadHotels = async () => {
    try {
      const response = await getHotels();
      setHotels(response.data || []);
    } catch (error) {
      console.error('Error loading hotels:', error);
    }
  };

  const handleHotelClick = (hotelId) => {
    navigate('/rooms', { state: { hotelId } });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter hotels based on search query
  const filteredHotels = hotels.filter((hotel) =>
    hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="hotel-list-container">
      <h2 className="hotel-title">Hotels</h2>

      {/* Search Bar */}
      <div className="search-container">
        <input 
          type="text"
          placeholder="Search by location..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {/* Hotel List */}
      {filteredHotels.length > 0 ? (
        <ul className="hotel-list">
          {filteredHotels.map((hotel) => (
            <li key={hotel.hotelId} className="hotel-card">
              <img src={hotel.imageUrl} alt={hotel.hotelName} className="hotel-image" />
              <div className="hotel-info">
                <h3 className="hotel-name">{hotel.hotelName}</h3>
                <p className="hotel-location">Location: {hotel.location}</p>
                <p className="hotel-rating">Rating: {hotel.rating}⭐</p>
                <p className="hotel-description">{hotel.description}</p>
                <button 
                  onClick={() => handleHotelClick(hotel.hotelId)} 
                  className="view-rooms-button"
                >
                  View Rooms
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-hotels-message">No hotels found for "{searchQuery}"</p>
      )}
    </div>
  );
}

export default HotelList;
