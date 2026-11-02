
import React, { useState } from "react";
import "./Booking.css";
import Banner from "../../components/Banner/Banner";

function Booking() {
  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    name: "",
    phone: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your appointment request has been submitted successfully!");

    setFormData({
      department: "",
      doctor: "",
      name: "",
      phone: "",
      date: "",
    });
  };

  return (
    <>
        <Banner title="Booking" smtitle="Booking"/>
    <section className="appointment-section" id="appointment">
      <div className="appointment-wrapper">
        <div className="appointment-card">
          <h2>Book Appointment</h2>

          <form onSubmit={handleSubmit}>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              >
              <option value="">Select Department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Dentistry">Dentistry</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Pediatrics">Pediatrics</option>
            </select>

            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
              >
              <option value="">Select Doctor</option>
              <option value="Dr. Ahmed">Dr. Ahmed</option>
              <option value="Dr. Mohamed">Dr. Mohamed</option>
              <option value="Dr. Sara">Dr. Sara</option>
            </select>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Numbers"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9+() -]{7,20}"
              title="Please enter a valid phone number"
              required
              />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toLocaleDateString("en-CA")}
              required
              />

            <button type="submit">Appointment Now</button>
          </form>
        </div>
      </div>
    </section>
              </>
  );
}

export default Booking;
