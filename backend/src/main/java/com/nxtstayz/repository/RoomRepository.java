package com.nxtstayz.repository;

import com.nxtstayz.model.Room;
import com.nxtstayz.model.Hotel;
import java.util.*;

public interface RoomRepository {
    ArrayList<Room> getRooms();
    Room getRoomById(int roomId);
    Room addRoom(Room room);
    Room updateRoom(int roomId, Room room);
    void deleteRoom(int roomId);
    Hotel getRoomHotel(int roomId);
}