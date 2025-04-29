import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HotelList from '../../src/components/HotelList';
import RoomList from '../../src/components/RoomList';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/hotels">Hotels</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/hotels" element={<HotelList />} />
          <Route path="/rooms" element={<RoomList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
