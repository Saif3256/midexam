
import React from "react";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa"; 
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="footer-section">
            <h4 className="footer-title">About</h4>
            <div className="footer-links">
            
              <li></li>
              <li>Hindi</li>
              <li>Bollywood</li>
              <li>Hollywood</li>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Community</h4>
            <div className="footer-links">
              <li>Discrimination disclaimer</li>
              <li>Diversity & Belonging</li>
              <li>Accessibility</li>
              <li>Invite friends</li>
              
            </div>
          </div>

          

          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <div className="footer-links">
              <li>Help Center</li>
              <li>Safety Information</li>
              <li>Cancellation options</li>
              <li>Our COVID-19 Response</li>
              <li>Report a neighborhood concern</li>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10">
          <div className="social-icons">
            <BsTwitter className="social-icon" />
            <BsInstagram className="social-icon" />
            <BsFacebook className="social-icon" />
            <FaSnapchatGhost className="social-icon" />
          </div>
          <p className="footer-note">© 2024 MoviesHub, Inc. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

