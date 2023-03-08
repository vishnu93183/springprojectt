import React, { useState } from 'react';
import"./App.css"

const RegistrationForm = () => {
  const [truckno, settruckno] = useState('');
  const [drivername, setdrivername] = useState('');
  const [milage, setmilage] = useState('');
  const [ownername, setownername] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [totalkilometers, settotalkilometers] = useState('');
  const [truckacle, settruckacle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('truckno:', truckno);
    console.log('drivername:', drivername);
    console.log('milage:', milage);
    console.log('ownername:', ownername);
    console.log('phonenumber:', phonenumber);
    console.log('totalkilometers:', totalkilometers);
    console.log('truckacle:', truckacle);


  };

  return (
    <form onSubmit={handleSubmit}><center>
      <div>
        <label htmlFor="truckno">truckno:</label>
        <input
          type="text"
          id="truckno"
          value={truckno}
          onChange={(e) => settruckno(e.target.value)}
          required
        />
      </div><br></br>
      <div>
        <label htmlFor="drivername">drivername:</label>
        <input
          type="text"
          id="drivername"
          value={drivername}
          onChange={(e) => setdrivername(e.target.value)}
          required
        />
      </div><br></br>
      <div>
        <label htmlFor="milage">milage:</label>
        <input
          type="text"
          id="milage"
          value={milage}
          onChange={(e) => setmilage(e.target.value)}
          required
        />
      </div><br></br>
      <div>
        <label htmlFor="ownername">ownername:</label>
        <input
          type="text"
          id="ownername"
          value={ownername}
          onChange={(e) => setownername(e.target.value)}
          required
        />
      </div><br></br>
      <div>
        <label htmlFor="phonenumber">phonenumber:</label>
        <input
          type="text"
          id="phonenumber"
          value={phonenumber}
          onChange={(e) => setphonenumber(e.target.value)}
          required
        />
      </div><br></br>
      <div>
        <label htmlFor="totalkilometers">totalkilometers:</label>
        <input
          type="text"
          id="totalkilometers"
          value={totalkilometers}
          onChange={(e) => settotalkilometers(e.target.value)}
          required
        />
      </div><br></br>
      <div>
        <label htmlFor="truckacle">truckacle:</label>
        <input
          type="text"
          id="truckacle"
          value={truckacle}
          onChange={(e) => settruckacle(e.target.value)}
          required
        />
      </div><br></br> 
      <button type="submit">Register</button></center>
    </form>
  );
};

export default RegistrationForm;