import React, { useState } from 'react'
import './Testimonial.css'

const testimonials = [
  {
    name: "John Deo",
    role: "PATIENT",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas suspendisse ultrices gravida.",
  },
  {
    name: "Sarah Ahmed",
    role: "PATIENT",
    text: "The doctors were very professional and caring. The appointment process was easy, and I received excellent treatment throughout my visit.",
  },
  {
    name: "Michael Smith",
    role: "PATIENT",
    text: "A wonderful medical center with a friendly team and excellent service. I highly recommend this place to anyone looking for quality healthcare.",
  },
];

const doctors = [
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=100&h=100&fit=crop&crop=faces",
];


export default function Testimonial() {

   const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

    
  return (
    <>
     <section className="testimonials-section">
      <div className="testimonial-plus">+</div>
      <div className="testimonial-circle"></div>
      <div className="testimonial-square"></div>
      <div className="testimonial-dots"></div>

      <div className="container">
        <div className="testimonial-heading">
          <span>Testimonial</span>
          <h2>
            See What Are The Patients
            <br />
            Saying About us
          </h2>
        </div>

        <div className="row align-items-center justify-content-center testimonial-row">
          {/* Doctors illustration */}
          <div className="col-lg-5 col-md-6">
            <div className="testimonial-doctors">
              <div className="doctor-orbit orbit-one"></div>
              <div className="doctor-orbit orbit-two"></div>
              <div className="doctor-center"></div>

              {doctors.map((doctor, index) => (
                <div
                  className={`doctor-avatar doctor-avatar-${index + 1}`}
                  key={doctor}
                >
                  <img src={doctor} alt={`Medical professional ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial card */}
          <div className="col-lg-5 col-md-6">
            <div className="testimonial-content">
              <div className="quote-open">“</div>

              <p>{testimonials[current].text}</p>

              <h3>{testimonials[current].name}</h3>
              <span className="testimonial-role">
                {testimonials[current].role}
              </span>

              <div className="quote-close">”</div>
            </div>

            <div className="testimonial-controls">
              <button onClick={previous} aria-label="Previous testimonial">
                ←
              </button>
              <button onClick={next} aria-label="Next testimonial">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
    
    </>
  )
}
