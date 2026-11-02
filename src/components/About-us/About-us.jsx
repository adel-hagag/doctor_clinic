import React from 'react'
import doctors from "../../assets/about1.jpg";
import doctor from "../../assets/about2.jpg";
import family from "../../assets/about3.jpg";

import {
  FaAmbulance,
  FaBed,
  FaTint,
  FaSyringe,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

const services = [
  {
    title: "Emergency Help",
    icon: <FaAmbulance />,
    color: "blue",
  },
  {
    title: "Qualified Doctors",
    icon: <FaBed />,
    color: "green",
  },
  {
    title: "Best Professionals",
    icon: <FaTint />,
    color: "red",
  },
  {
    title: "Medical Treatment",
    icon: <FaSyringe />,
    color: "purple",
  },
];

export default function Aboutus() {
  return (
    <>
    
     <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Images */}
          <div className="col-lg-6">
            <div className="about-images">
              <div className="about-image-one">
                <img src={doctors} alt="Medical team" />
              </div>

              <div className="about-image-two">
                <img src={doctor} alt="Doctor" />
              </div>

              <div className="about-image-three">
                <img src={family} alt="Family healthcare" />
              </div>

              <div className="experience-box">
                <h2>20</h2>
                <h5>Year Experience</h5>
              </div>

              
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-6">
            <div className="about-content">
              <h5 className="about-subtitle">About Us</h5>

              <h2>
                The Great Place Of
                <br />
                Medical Hospital Center
              </h2>

              <p className="about-description">
                We provide the special tips and advice’s of health care
                treatment and high level of best technology involve in
                the our hospital.
              </p>

              <div className="about-services">
                {services.map((service, index) => (
                  <div
                    className={`about-service ${service.color}`}
                    key={index}
                  >
                    <div className="service-icon">
                      {service.icon}
                    </div>

                    <h5>{service.title}</h5>
                  </div>
                ))}
              </div>

              <button className="about-button">
              <Link to='/about'><font color='white'>Read More</font></Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}
