package com.nxtstayz.service;

import com.nxtstayz.model.Hotel;
import com.nxtstayz.repository.HotelJpaRepository;
import com.nxtstayz.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Service
public class HotelJpaService implements HotelRepository {

    @Autowired
    private HotelJpaRepository hotelJpaRepository;

    @Override
    public ArrayList<Hotel> getHotels() {
        List<Hotel> hotelList = hotelJpaRepository.findAll();
        return new ArrayList<>(hotelList);
    }

    @Override
    public Hotel getHotelById(int hotelId) {
        return hotelJpaRepository.findById(hotelId)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @Override
    public Hotel addHotel(Hotel hotel) {
        return hotelJpaRepository.save(hotel);
    }

    @Override
    public Hotel updateHotel(int hotelId, Hotel hotel) {
        Hotel existingHotel = getHotelById(hotelId);

        if (hotel.getHotelName() != null) {
            existingHotel.setHotelName(hotel.getHotelName());
        }
        if (hotel.getLocation() != null) {
            existingHotel.setLocation(hotel.getLocation());
        }
        if (hotel.getRating() != 0) {
            existingHotel.setRating(hotel.getRating());
        }
        if (hotel.getImageUrl() != null) {    
            existingHotel.setImageUrl(hotel.getImageUrl());
        }
        if (hotel.getDescription() != null) { 
            existingHotel.setDescription(hotel.getDescription());
        }

        return hotelJpaRepository.save(existingHotel);
    }

    @Override
    public void deleteHotel(int hotelId) {
        if (!hotelJpaRepository.existsById(hotelId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        hotelJpaRepository.deleteById(hotelId);
    }
}
