package com.example.demo.Service;


import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.truckdetails;
import com.example.demo.Repositroy.Hotel;

@Service
public class HotelService {

	@Autowired
	public Hotel hs;

	public truckdetails addDetails(truckdetails h) {
		return hs.save(h);
	}

	public List<truckdetails> getAllDetails() {
		return hs.findAll();
	}

	public void deleteId(int id) {
		hs.deleteById(id);
	}

	public Optional<truckdetails> getOne(int id) {
		return hs.findById(id);
	}
	
	public truckdetails update(int id,truckdetails h)
	{
		truckdetails hm=hs.findById(id).get();
		
		if(Objects.nonNull(hm)&&(!(Objects.isNull(h.getDrivername()))))
		{
			hm.setDrivername(h.getDrivername());
		}
		if(Objects.nonNull(hm)&&(!(Objects.isNull(h.getOwnername()))))
		{
			hm.setOwnername(h.getOwnername());
		}
		if(Objects.nonNull(hm)&&(!(Objects.isNull(h.getTruckacle()))))
		{
			hm.setTruckacle(h.getTruckacle());
		}
		if(Objects.nonNull(hm)&&(!(Objects.isNull(h.getTyre()))))
		{
			hm.setTyre(h.getTyre());
		}
		if(Objects.nonNull(hm)&&(!(Objects.isNull(h.getMilage()))))
		{
			hm.setMilage(h.getMilage());
		}
		
		if(Objects.nonNull(hm)&&(!(Objects.isNull(h.getTkilometers()))))
		{
			hm.setTkilometers(h.getTkilometers());
		}
		if(Objects.nonNull(hm)&&(h.getPhn()!=0))
		{
			hm.setPhn(h.getPhn());
		}
		return hs.save(hm);
	}
}