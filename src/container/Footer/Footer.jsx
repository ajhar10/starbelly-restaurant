import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-links-headertext">Contact Us</h1>
        <p className="p__opensans">4th St, Dhanmondi, Dhaka-1206 </p>
        <p className="p__opensans">+880 1639076052</p>
        <p className="p__opensans">+880 1639076051</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.logo2} alt="starbelly" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img src={images.spoon} alt="spoon" srcset="" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-links-headertext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday: </p>
        <p className="p__opensans">08:00 am -12:00 am </p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans"> 07:00am -11:00 pm</p>
      </div>
    </div>
    <div className="app__footer-copyright">
      <p className="p__opensans">2023 Starbelly. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
