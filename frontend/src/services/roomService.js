import axios from 'axios';

const API_URL = 'http://localhost:8080/hotels/rooms';

export const getRooms = () => axios.get(API_URL);
export const getRoomById = (id) => axios.get(`${API_URL}/${id}`);
export const addRoom = (room) => axios.post(API_URL, room);
export const updateRoom = (id, room ) => axios.put(`${API_URL}/${id}`, room);
export const deleteRoom = (id) => axios.delete(`${API_URL}/${id}`);