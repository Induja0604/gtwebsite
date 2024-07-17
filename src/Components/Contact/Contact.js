import React, { useState, useCallback } from "react";
import "./Contact.css";
import Watermark from "../Watermark/Watermark";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Contact = () => {
  const containerStyle = {
    width: '100%',
    height: '500px'
  };

  const center = {
    lat: 13.6448063,
    lng: 79.4175753
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.API_KEY
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const [formdata, setformdata] = useState({
    name: "",
    number: "",
    email: "",
    message: ""
  });

  const changeHandler = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Watermark/>
      
      <div className="contactflex">
        <div className="contactflexbox">
          <h1>Contact Us</h1>
          <p>Send us your query our team will get back to you soon</p>
          <div className="contact-feilds">
            <input type="text" name="name" value={formdata.name} onChange={changeHandler} placeholder="Your Name" required /><br />
            <input type="email" name="email" value={formdata.email} onChange={changeHandler} placeholder="Your email" required /><br />
            <input type="number" name="number" value={formdata.number} onChange={changeHandler} placeholder="Your number" required /><br />
            <input type="text" name="message" value={formdata.message} onChange={changeHandler} placeholder="Your message" required /><br />
            <button>Submit</button><br />
          </div>
        </div>
        <div className="contactflexbox2">
          <div>
            <p><b>Gangaaram Technologies Private Limited,</b></p>
            <p><b>First Floor, 6-1-184 Varadaraja Nagar,</b></p>
            <p><b>Tirupati, Chittoor Dist,</b></p>
            <p><b>Andhra Pradesh, 517501,</b></p>
            <p><b>India</b></p>
          </div>
          <br />
          <br />
          &&
          <br />
          <br />
          <div>
            <p><b>No 482 & 433, Ground Floor, 2nd Cross,</b></p>
            <p><b>25th Main, BTM 2nd Stage,</b></p>
            <p><b>Bangalore-560076,</b></p>
            <p><b>Karnataka,</b></p>
            <p><b>India</b></p>
          </div>
          <div>
            <h3>Email: jawahar@gangaaram-tech.com</h3>
          </div>
        </div>
      </div>
      <div>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : <></>}
      </div>
    </div>
    
  );
};

export default Contact;
