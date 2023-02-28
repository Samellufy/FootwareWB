import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaMobile, FaFacebookMessenger, FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div> <footer>
      <div className="footer_main">
        <div className="tag">
          <h1>Contact</h1>
          <Link to="/"><FaHome />123/Colombo/Sri Lanka</Link>
          <Link to="/"><FaMobile />+94 12 345 6789</Link>
          <Link to="/"><FaFacebookMessenger />contact@gmail.com</Link>
        </div>

        <div className="tag">
          <h1>Get Help</h1>
          <Link to="/" className="center">FAQ</Link>
          <Link to="/" className="center">Shipping</Link>
          <Link to="/" className="center">Returns</Link>
          <Link to="/" className="center">Payment Options</Link>
        </div>

        <div className="tag">
          <h1>Our Stores</h1>
          <Link to="/" className="center">Sri Lanka</Link>
          <Link to="/" className="center">USA</Link>
          <Link to="/" className="center">India</Link>
          <Link to="/" className="center">Japan</Link>
        </div>

        <div className="tag">
          <h1>Follw Us</h1>
          <div className="social_link">
            <Link to="/"><FaFacebook /></Link>
            <Link to="/"><FaTwitter /></Link>
            <Link to="/"><FaInstagram /></Link>
            <Link to="/"><FaLinkedin /></Link>
          </div>
        </div>

        <div className="tag">
          <h1>Newsletter</h1>
          <div className="search_bar">
            <input type="text" placeholder="You email id here" />
            <button type="submit">Subscribe</button>
          </div>
        </div>

      </div>
    </footer>
    </div>
  )
}
