import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HotelList from './components/HotelList';
import RoomList from './components/RoomList';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/hotels">Hotels</Link></li>
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
