package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.truckdetails;
import com.example.demo.Service.HotelService;
@CrossOrigin(origins="http://localhost:8080")
@RestController
public class HotelController {

	@Autowired
	private HotelService hm;

	@GetMapping("/get")
	public List<truckdetails> getDetails() {
		return hm.getAllDetails();
	}

	@PostMapping("/add")
	public truckdetails addDetails(@RequestBody truckdetails h) {
		return hm.addDetails(h);
	}

	@DeleteMapping("/del/{id}")
	public void delDetails(@PathVariable("id") int s) {
		hm.deleteId(s);
	}

	@GetMapping("/get/{id}")
	public Optional<truckdetails> getDetails(@PathVariable("id") int id) {
		return hm.getOne(id);
	}

	
}
