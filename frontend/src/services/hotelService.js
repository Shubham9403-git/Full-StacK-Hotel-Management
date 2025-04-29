import axios from 'axios';

const API_URL = 'http://localhost:8080/hotels';

export const getHotels = () => axios.get(API_URL);
export const getHotelById = (id) => axios.get(`${API_URL}/${id}`);
export const addHotel = (hotel) => axios.post(API_URL, hotel);
export const updateHotel = (id, hotel) => axios.put(`${API_URL}/${id}`, hotel);
export const deleteHotel = (id) => axios.delete(`${API_URL}/${id}`);
