
import React, { useState } from "react";
import "./ServicesDetails.css";
import Banner from "../../components/Banner/Banner";
import serDetails from '../../assets/servicesDetails.jpg'

const questions = [
  {
    question: "How Doctor Can Ease Your Pain?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    question: "How do I withdraw from a subject?",
    answer:
      "Our medical team is available to answer your questions and help you understand the treatment options that are suitable for your needs.",
  },
  {
    question: "Understand Doctor Before You Regret?",
    answer:
      "Our experienced doctors explain your medical condition and available treatment options to help you make informed decisions.",
  },
  {
    question: "What types of systems do you support?",
    answer:
      "We provide professional medical consultations, examinations, preventive care, and specialized healthcare services.",
  },
  {
    question: "We Teach You How To Feel Better?",
    answer:
      "Our specialists help you maintain a healthy lifestyle through personalized medical advice and appropriate treatment plans.",
  },
  {
    question: "How Can I Contact You?",
    answer:
      "You can contact our clinic through the Contact Us page to ask questions or arrange an appointment.",
  },
];

const services = [
  "Engine Diagnostics",
  "Lube Oil And Filters",
  "Belts And Hoses",
  "Air Conditioning",
  "Brake Repair",
  "Tire And Wheel Services",
];

function ServiceDetails() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [activeService, setActiveService] = useState(0);

  return (
    <>
     <Banner title='Service Details' smtitle='Service Details' />
    <section className="service-details">
      <div className="service-details-container">
        {/* Left Content */}
        <main className="service-main">
          
<div className="service-feature">
  <img
    src={serDetails}
    alt="Dental treatment"
    className="service-feature-image"
  />

  <h1>Why Medical Had Been So Popular Till</h1>

  <p className="service-feature-description">
    Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book.
  </p>

  <div className="service-features-grid">
    <ul className="service-check-list">
      <li>Then along come two they</li>
      <li>That's just a little bit more than</li>
      <li>Standard dummy text ever since</li>
      <li>Simply dummy text of the printing</li>
      <li>Make a type specimen book</li>
    </ul>

    <div className="service-progress-list">
      <div className="service-progress-item">
        <div className="service-progress-heading">
          <strong>Advanced Technology</strong>
          <span>96%</span>
        </div>
        <div className="service-progress-track">
          <span style={{ width: "96%" }}></span>
        </div>
      </div>

      <div className="service-progress-item">
        <div className="service-progress-heading">
          <strong>Certified Engineers</strong>
          <span>79%</span>
        </div>
        <div className="service-progress-track">
          <span style={{ width: "79%" }}></span>
        </div>
      </div>

      <div className="service-progress-item">
        <div className="service-progress-heading">
          <strong>6 years Experience</strong>
          <span>75%</span>
        </div>
        <div className="service-progress-track">
          <span style={{ width: "75%" }}></span>
        </div>
      </div>
    </div>
  </div>
</div>

          <div className="service-intro">
            <h2>Popular Questions</h2>

            <p>
              Standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
          </div>

          <div className="service-faq">
            {questions.map((item, index) => (
              <div
              className={`service-faq-item ${
                activeQuestion === index ? "active" : ""
              }`}
              key={item.question}
              >
                <button
                  className="service-faq-question"
                  onClick={() =>
                    setActiveQuestion(
                      activeQuestion === index ? -1 : index
                    )
                  }
                  aria-expanded={activeQuestion === index}
                >
                  <span>{item.question}</span>

                  <span className="service-faq-arrow">
                    {activeQuestion === index ? "⌃" : "⌄"}
                  </span>
                </button>

                {activeQuestion === index && (
                  <div className="service-faq-answer">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>

        {/* Right Sticky Sidebar */}
        <aside className="service-sidebar">
          <div className="service-sidebar-card">
            <div className="service-list">
              {services.map((service, index) => (
                <button
                className={`service-list-item ${
                  activeService === index ? "selected" : ""
                  }`}
                  key={service}
                  onClick={() => setActiveService(index)}
                  >
                  <span>{service}</span>
                  <span className="service-list-arrow">›</span>
                </button>
              ))}
            </div>
          </div>

         
<div className="service-sidebar-card download-card">
  <h3>Download</h3>

  <div className="download-divider">
    <span></span>
  </div>

  <div className="download-item">
    <span className="download-icon">PDF</span>

    <span>
      <strong>Download our Brochures</strong>
      <small>Coming Soon</small>
    </span>
  </div>

  <div className="download-item">
    <span className="download-icon">DOC</span>

    <span>
      <strong>Our Company Details</strong>
      <small>Coming Soon</small>
    </span>
  </div>
</div>

        </aside>
      </div>
    </section>
              </>
  );
}

export default ServiceDetails;
