
import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Doctor.css";
import doc1 from "../../assets/doc1.jpg";
import doc2 from "../../assets/doc2.jpg";
import doc3 from "../../assets/doc3.jpg";


const doctors = [
  {
    id: 1,
    name: "Dr. Addition Smith",
    specialty: "Dentist",
    image:doc1,
    featured: false,
  },
  {
    id: 2,
    name: "Dr. Mahfuz Riad",
    specialty: "Chiropractor",
    image: doc2,
    featured: false,
  },
  {
    id: 3,
    name: "Dr. David Benjamin",
    specialty: "Cardiologist",
    image: doc3,
    featured: false,
  },
];

function Doctors() {
  return (
    <section className="doctors-section">
      <span className="doctors-decoration decoration-triangle" />
      <span className="doctors-decoration decoration-dots" />
      <span className="doctors-decoration decoration-circle" />

      <div className="doctors-container">
        <div className="doctors-heading">
          <span className="doctors-subtitle">Our Doctor</span>
          <h2>Meet Best Doctors</h2>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <article
              className={`doctor-card`}
              key={doctor.id}
            >
              <div className="doctor-image-wrapper">
                <div className="doctor-shape doctor-shape-outer" />
                <div className="doctor-shape doctor-shape-inner" />

                <div className="doctor-image">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    loading="lazy"
                  />
                </div>
              </div>

              <h3>{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>

              <div className="doctor-socials">
                <a href="#" aria-label="Twitter">
                  <FaTwitter size={18} />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin size={18} />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Doctors;
