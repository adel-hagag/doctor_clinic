import React from 'react'
import "../Doctors/Doctor.css";
import doc4 from "../../assets/doc4.jpg";
import doc5 from "../../assets/doc5.jpg";
import doc6 from "../../assets/doc6.jpg";
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function CardDoctor() {

    const doctors = [
      {
        id: 1,
        name: "Dr. Addition Smith",
        specialty: "Dentist",
        image:doc4,
        featured: false,
      },
      {
        id: 2,
        name: "Dr. Mahfuz Riad",
        specialty: "Chiropractor",
        image: doc5,
        featured: false,
      },
      {
        id: 3,
        name: "Dr. David Benjamin",
        specialty: "Cardiologist",
        image: doc6,
        featured: false,
      },
    ];

  return (
    <>
       <section className="doctors-section mt-0">
         
    
          <div className="doctors-container">
        
    
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
    
    
    
    
    
    </>
  )
}
