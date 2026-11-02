import React from 'react'
import doctor from '../../assets/doctor.png' ;
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import About from '../About/About';
import Aboutus from '../../components/About-us/About-us';
import WorkingProcess from '../../components/WorkingProcess/WorkingProcess';
import {
  FaStethoscope,
  FaMedkit,
  FaBriefcaseMedical,
  FaHeartbeat,
  FaTooth,
  FaEye,
} from "react-icons/fa";
import phoneImage from "../../assets/book.png";
import womanImage from "../../assets/women.png";
import { Link } from 'react-router-dom';

import LatestNews from '../../components/Navbar/LatestNews/LatestNews';
import Testimonial from '../../components/Testimonial/Testimonial';





const services = [
  {
    title: "Diagnostics",
    description:
      "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    icon: <FaStethoscope />,
  },
  {
    title: "Treatment",
    description:
      "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    icon: <FaMedkit />,
  },
  {
    title: "Surgery",
    description:
      "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    icon: <FaBriefcaseMedical />,
  },
  {
    title: "Cardiology",
    description:
      "Professional cardiac care and treatment for a healthier life.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Dental Care",
    description:
      "Complete dental services to keep your smile healthy and bright.",
    icon: <FaTooth />,
  },
  {
    title: "Eye Care",
    description:
      "Modern eye examinations and personalized vision care.",
    icon: <FaEye />,
  },
];



export default function Home() {


  return (
    <>
    
    <header>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <h5>We Provide All Health Care Solution</h5>
                    <h2>Protect Your Health And Take Care To Of Your Health</h2>
                    <button><Link to="/about">Read More</Link></button>
                    <span>+</span>
                </div>

                <div className="col-md-6 col-lg-6">
                    <div className="header-box">
                        <img src={doctor} alt="doctor" />
                          <FontAwesomeIcon icon={faSquare} />
                    </div>
                </div>
            </div>
        </div>
    </header>
    
<Aboutus/>

<WorkingProcess/>


 <section className="appointment-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Appointment Form */}
          <div className="col-lg-6">
            <div className="appointment-form">
              <h2>Book Appointment</h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Your appointment request has been submitted!");
                }}
              >
                <select className="appointment-input" required defaultValue="">
                  <option value="" disabled>
                    Select Department
                  </option>
                  <option >one</option>
                  <option >two</option>
                  <option >three</option>
                  
                </select>

                <select className="appointment-input" required defaultValue="">
                  <option value="" disabled>
                    Select Doctor
                  </option>
                  <option>one</option>
                  <option>two</option>
                  <option >three</option>
                </select>

                <input
                  className="appointment-input"
                  type="text"
                  placeholder="Your Name"
                  required
                />

                <input
                  className="appointment-input"
                  type="tel"
                  placeholder="Phone Numbers"
                  required
                />

                <input
                  className="appointment-input"
                  type="date"
                  required
                />

                <button type="submit" className="appointment-button">
                  Appointment Now
                </button>
              </form>
            </div>
          </div>

          {/* Images */}
          <div className="col-lg-6">
            <div className="appointment-visual">
              <div className="appointment-circle"></div>

              <img
                src={phoneImage}
                alt="Appointment booking on mobile"
                className="appointment-phone"
              />

              <img
                src={womanImage}
                alt="Woman pointing at the phone"
                className="appointment-woman"
              />

              <div className="appointment-check">✓</div>

              <div className="appointment-location">♥</div>

              <div className="appointment-settings">⚙</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="medical-services">
      <div className="services-intro">
        <div className="services-intro-content">
          <h5 className="services-subtitle">Services</h5>

          <h2>We Cover A Big Variety Of Medical Services</h2>

          <p>
            We provide the special tips and advice’s of health care
            treatment and high level of best.
          </p>

          <button className="all-services-btn">
            <Link to='/services'><font color='white'>All Services</font></Link>
          </button>
        </div>
      </div>

      <div className="services-cards-area">
        <div className="services-cards">
          {services.map((service, index) => (
            <article
              className={`medical-service-card ${
                index === 0 ? "featured-service" : ""
              }`}
              key={service.title}
            >
              <div className="medical-service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button className="service-view-btn">
                <Link to='serviceDetails'><font color='white'>View More</font></Link>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
    
    <Testimonial/>
    
    <LatestNews/>
    
    
    
    
    
    
    </>
  )
}
