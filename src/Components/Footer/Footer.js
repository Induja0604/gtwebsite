import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-addresses">
          <div className="footer-address">
            <h3>Address: USA</h3>
            <p>
              6376 Birdhill lane,<br />
              Frisco, Texas,<br />
              USA - 75035
            </p>
          </div>
          <div className="footer-address">
            <h3>Address: USA</h3>
            <p>
              440 N, Wolfe Road Sunnyvale,<br />
              CA 94085, USA.<br />
              Phone: +1- (408)730 - 4100
            </p>
          </div>
          <div className="footer-address">
            <h3>Address: INDIA</h3>
            <p>
              No.37, First Floor, 5th Cross,<br />
              Venkatapura New EXTN.,<br />
              Koramangala, Bangalore-560034,<br />
              Karnataka.
            </p>
          </div>
          <div className="footer-address">
            <h3>Address: INDIA</h3>
            <p>
              Gangaaram Technologies Private,<br />
              Limited, First Floor, 6-1-184,<br />
              Varadaraja Nagar, Tirupati,<br />
              Andhra Pradesh-517501.
            </p>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="copyright-content">
            &copy; 2019-2024 Gangaaram Technologies Pvt Ltd - All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
