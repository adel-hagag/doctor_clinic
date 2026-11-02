
import React, { useState } from "react";

export default function FormContact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [department, setdepartment] = useState("");
  const [message, setmessage] = useState("");

  const [errors, seterrors] = useState({});

  const changeName = (e) => {
    setname(e.target.value);
  };

  const formHandeler = (e) => {
    e.preventDefault();

    let newErrors = {};

    // Name validation
    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone validation
    if (phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(phone)) {
      newErrors.phone = "Phone must contain 10 to 15 digits";
    }

    // Department validation
    if (department === "") {
      newErrors.department = "Please select a department";
    }

    // Message validation
    if (message.trim() === "") {
      newErrors.message = "Message is required";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    seterrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");

      setname("");
      setemail("");
      setphone("");
      setdepartment("");
      setmessage("");
    }
  };

  return (
    <>
      <form onSubmit={formHandeler} noValidate>
        <div className="form-control">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={changeName}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className="form-control">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-control">
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>

        <div className="form-control">
          <select
            value={department}
            onChange={(e) => setdepartment(e.target.value)}
          >
            <option value="">Select Department</option>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
          {errors.department && <p>{errors.department}</p>}
        </div>

        <div className="form-control">
          <textarea
            placeholder="Type Message"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}