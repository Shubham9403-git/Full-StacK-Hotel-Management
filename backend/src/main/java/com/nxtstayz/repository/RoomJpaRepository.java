package com.nxtstayz.repository;

import com.nxtstayz.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomJpaRepository extends JpaRepository<Room, Integer> {
}