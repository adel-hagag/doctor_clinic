
import React from "react";
import {
  FaStethoscope,
  FaPrescriptionBottleMedical,
  FaBriefcaseMedical,
//   FaAmbulance,
  FaSyringe,
  FaBedPulse,
} from "react-icons/fa6";
import "./Services.css";
import { FaAmbulance } from "react-icons/fa";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Doctors from "../../components/Doctors/Doctors";
import Testimonial from "../../components/Testimonial/Testimonial";
import LatestNews from "../../components/Navbar/LatestNews/LatestNews";

const services = [
  {
    id: 1,
    title: "Diagnostics",
    description:
      "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    icon: <FaStethoscope />,
  },
  {
    id: 2,
    title: "Treatment",
    description:
      "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    icon: <FaPrescriptionBottleMedical />,
  },
  {
    id: 3,
    title: "Surgery",
    description:
      "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    icon: <FaBriefcaseMedical />,
  },
  {
    id: 4,
    title: "Emergency",
    description:
      "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    icon: <FaAmbulance />,
  },
  {
    id: 5,
    title: "Vaccine",
    description:
      "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    icon: <FaSyringe />,
  },
  {
    id: 6,
    title: "Qualified Doctors",
    description:
      "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    icon: <FaBedPulse />,
  },
];

function Services() {
  return (
    <>
    <Banner title='Services' smtitle='Services' />
    <section className="services-section">
      <div className="services-container">
        {services.map((service) => (
            <article className="service-card" key={service.id}>
            <div className="service-icon">
              {service.icon}
            </div>

            <h2>{service.title}</h2>

            <p>{service.description}</p>

           <Link
  to={`/services/${service.id}`}
  className="service-button"
>
  View More
</Link>
          </article>
        ))}
      </div>
    </section>

    <Cards/>
    <Doctors/>
    <Testimonial/>
    <LatestNews/>
        </>
  );
}

export default Services;
