package com.nxtstayz.service;

import com.nxtstayz.model.Room;
import com.nxtstayz.model.Hotel;
import com.nxtstayz.repository.RoomJpaRepository;
import com.nxtstayz.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoomJpaService implements RoomRepository {
    
    @Autowired
    private RoomJpaRepository roomJpaRepository;

    @Autowired
    private HotelJpaService hotelJpaService;

    @Override
    public ArrayList<Room> getRooms() {
        List<Room> roomList = roomJpaRepository.findAll();
        return new ArrayList<>(roomList);
    }

    @Override
    public Room getRoomById(int roomId) {
        return roomJpaRepository.findById(roomId)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @Override
    public Room addRoom(Room room) {
        int hotelId = room.getHotel().getHotelId();
        Hotel hotel = hotelJpaService.getHotelById(hotelId);
        room.setHotel(hotel);

        return roomJpaRepository.save(room);
    }

    @Override
    public Room updateRoom(int roomId, Room room) {
        Room existingRoom = getRoomById(roomId);

        if (room.getRoomNumber() != null) {
            existingRoom.setRoomNumber(room.getRoomNumber());
        }
        if (room.getRoomType() != null) {
            existingRoom.setRoomType(room.getRoomType());
        }
        if (room.getPrice() != 0) {
            existingRoom.setPrice(room.getPrice());
        }
        if (room.getDescription() != null) {
            existingRoom.setDescription(room.getDescription());
        }
        if (room.getImageUrl() != null) {
            existingRoom.setImageUrl(room.getImageUrl());
        }
        if (room.getHotel() != null) {
            Hotel hotel = hotelJpaService.getHotelById(room.getHotel().getHotelId());
            existingRoom.setHotel(hotel);
        }
        existingRoom.setAvailable(room.isAvailable());

        return roomJpaRepository.save(existingRoom);
    }

    @Override
    public void deleteRoom(int roomId) {
        if (!roomJpaRepository.existsById(roomId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        roomJpaRepository.deleteById(roomId);
    }

    @Override
    public Hotel getRoomHotel(int roomId) {
        Room room = getRoomById(roomId);
        return room.getHotel();
    }
}
