package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "truck")
public class truckdetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "truck_no")
	private int truckno;
	
	@Column(name = "milage")
	private String milage;
	@Column(name = "total_kilometers")
	private String tkilometers;
	@Column(name = "owner_name")
	private String ownername;
	@Column(name = "driver_name")
	private String drivername;
	@Column(name = "truck_acle")
	private int truckacle;
	@Column(name = "tyres")
	private int tyre;
	@Column(name = "Phone_Number")
	private long phn;

	public truckdetails() {
	}

	public int getTruckno() {
		return truckno;
	}

	public void setTruckno(int truckno) {
		this.truckno = truckno;
	}

	public String getMilage() {
		return milage;
	}

	public void setMilage(String milage) {
		this.milage = milage;
	}

	public String getTkilometers() {
		return tkilometers;
	}

	public void setTkilometers(String tkilometers) {
		this.tkilometers = tkilometers;
	}

	public String getOwnername() {
		return ownername;
	}

	public void setOwnername(String ownername) {
		this.ownername = ownername;
	}

	public String getDrivername() {
		return drivername;
	}

	public void setDrivername(String drivername) {
		this.drivername = drivername;
	}

	public int getTruckacle() {
		return truckacle;
	}

	public void setTruckacle(int truckacle) {
		this.truckacle = truckacle;
	}

	public int getTyre() {
		return tyre;
	}

	public void setTyre(int tyre) {
		this.tyre = tyre;
	}

	public long getPhn() {
		return phn;
	}

	public void setPhn(long phn) {
		this.phn = phn;
	}

	public truckdetails(int truckno, String milage, String tkilometers, String ownername, String drivername, int truckacle,
			int tyre, long phn) {
		super();
		this.truckno = truckno;
		this.milage = milage;
		this.tkilometers = tkilometers;
		this.ownername = ownername;
		this.drivername = drivername;
		this.truckacle = truckacle;
		this.tyre = tyre;
		this.phn = phn;
	}

	
}
