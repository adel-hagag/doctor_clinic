import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import face from '../../assets/face.png';
import insta from '../../assets/insta.png';
import twiter from '../../assets/twiter.png';
import linkedin from '../../assets/linkedin.png';
import footerlogo from '../../assets/download.png';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <img src={footerlogo} alt="" className="footerlogo" />
              <p>
                Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
                smod tempor incididunt ut labore et.
              </p>
              <div className="footer-contact">
                <div className="footer-icon">
                    <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="footer-text">
                    <h6>Contact Us</h6>
                    <h4>+01 123 456 7890</h4>
                </div>
              </div>
            </div>

        <div className="col-md-3 col-sm-6">
            <h2>Quick Links</h2>
            <ul>
                <li><Link to="about">About Us</Link></li>
                <li><Link to="services">Services</Link></li>
                <li><Link to="booking">Booking</Link></li>
                <li><Link to="faq">Faq's</Link></li>
                <li><Link to="blogs">Blogs</Link></li>
                <li><Link to="team">Out Team</Link></li>
            </ul>
        </div>

        <div className="col-md-3 col-sm-6">
            <h2>Our Service</h2>
            <ul>
                <li><a href="#">Dental Care</a></li>
                <li><a href="#">Cardiac Clinic</a></li>
                <li><a href="#">Massege Therapy</a></li>
                <li><a href="#">Cardiology</a></li>
                <li><a href="#">Precise Diagnosis</a></li>
                <li><a href="#">Abmbulance Services</a></li>
            </ul>
        </div>

        <div className="col-md-3 col-sm-6">
            <h2>Subcribe</h2>
            <form action="">
                <input type="email" placeholder="Enter Address" />
                <button type="submit">Subscribe now</button>
            </form>
            <ul className="social">
                <li><a href="#"><img src={face} alt="" /></a></li>
                <li><a href="#"><img src={insta} alt="" /></a></li>
                <li><a href="#"><img src={twiter} alt="" /></a></li>
                <li><a href="#"><img src={linkedin} alt="" /></a></li>
            </ul>
        </div>

          </div>
        </div>

        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <p>Copyright © 2023 Design & Developed by <span><font color='orange'>ThemeTrades</font></span></p>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </>
  );
}
