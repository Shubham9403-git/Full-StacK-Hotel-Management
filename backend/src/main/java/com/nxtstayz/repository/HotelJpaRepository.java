package com.nxtstayz.repository;

import com.nxtstayz.model.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelJpaRepository extends JpaRepository<Hotel, Integer> {
} 