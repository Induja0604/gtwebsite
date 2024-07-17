import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTwitter, faLinkedin, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Addressbar.css';

const Addressbar = () => {
  return (
    <div className="address-bar">
      <div className="left">
        <span className="email">
          <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:info@gangaaram-tech.com">info@gangaaram-tech.com</a>
        </span>
        <span className="location">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Gangaaram Technologies, KT Rd, Varadaraja Nagar, Tirupati-517501
        </span>
      </div>
      <div className="right">
        <span className="number">
          <FontAwesomeIcon icon={faPhone} /> 7207075697
        </span>
        <a href="https://wa.me/1234567890" className="social-icon whatsapp">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://twitter.com/yourprofile" className="social-icon twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://in.linkedin.com/in/gangaaram-technologies-9b72b01a5?original_referer=https%3A%2F%2Fwww.google.com%2F" className="social-icon linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.facebook.com/yourprofile" className="social-icon facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/yourprofile" className="social-icon instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.youtube.com/channel/yourchannel" className="social-icon youtube">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </div>
  );
}

export default Addressbar;
