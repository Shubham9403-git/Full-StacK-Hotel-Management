# Hotel Booking System

A hotel booking platform that allows users to browse and book rooms based on location and availability. The platform features hotel listings, room availability, booking functionality, and dynamic search filters for both hotels and rooms.

## Features

- **Hotel Listings**: Displays hotels with their information including location, rating, and description.
- **Room Listings**: Shows available rooms in a hotel with price, room number, description, and status (available/booked).
- **Search Functionality**: Search hotels by location with a dynamic search bar.
- **Room Booking**: Allows users to book rooms, updating their availability status.

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For routing between pages (hotels and rooms).
- **CSS**: For styling the components.
- **Axios**: For handling HTTP requests to get hotel and room data.
- **React Hooks**: For managing state and lifecycle methods.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/hotel-booking-system.git
    cd hotel-booking-system
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:3000` to view the application.

## Folder Structure
/hotel-booking-system │ 
                      ├── /public 
                      │ └── index.html # HTML template 
                      ├── /src │ 
                               ├── /components │ │ 
                               |                ├── HotelList.js # Displays list of hotels │ 
                               |               ├── RoomList.js # Displays list of rooms │ 
                               ├── /services │ │ 
                                               ├── hotelService.js # Service to fetch hotel data │ 
                                               │ └── roomService.js # Service to fetch room data │ 
                                               ├── App.js # Main app component │ 
                                               ├── App.css # Styling for App │ 
                                               └── index.js # Entry point for React 
                                               └── package.json # Project metadata and dependencies



## Usage

1. **Hotel List Page**: Displays a list of hotels with their details and an option to view rooms.
2. **Room List Page**: Displays rooms of a selected hotel, showing availability, price, and the option to book the room.

The **Room Booking** feature updates the room availability status when a room is booked.

### Search Functionality
- Users can filter hotels by location using the search bar at the top of the hotel listing page.

## Future Enhancements

- Add **User Authentication** (Login/Signup).
- Implement **User Profile Management** (Booking history, etc.).
- Add **Admin Panel** for managing hotels and rooms.
- Integrate **Payment Gateway** for booking confirmation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [React Docs](https://reactjs.org/docs/getting-started.html) for making it easy to get started with React.
- Inspired by several hotel booking systems around the web for UI/UX ideas.
