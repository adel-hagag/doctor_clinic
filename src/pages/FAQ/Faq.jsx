
import React, { useState } from "react";
import "./FAQ.css";
import Banner from "../../components/Banner/Banner";
import LatestNews from "../../components/Navbar/LatestNews/LatestNews";

const questions = [
  {
    question: "How Doctor Can Ease Your Pain?",
    answer:
      "Our doctors provide personalized treatment plans, modern medical solutions, and professional care to help you feel better and live a healthier life.",
  },
  {
    question: "How do I withdraw from a subject?",
    answer:
      "You can contact our medical team to discuss your concerns and receive the guidance you need.",
  },
  {
    question: "Understand Doctor Before You Regret?",
    answer:
      "Our experienced doctors explain your diagnosis and treatment options clearly so you can make informed decisions about your health.",
  },
  {
    question: "What types of systems do you support?",
    answer:
      "We provide a wide range of healthcare services, including general consultations, medical examinations, and specialized treatments.",
  },
  {
    question: "We Teach You How To Feel Better?",
    answer:
      "We help you improve your health through professional advice, preventive care, and personalized treatment plans.",
  },
  {
    question: "How Can I Contact You?",
    answer:
      "You can contact us through our contact page, call our clinic, or send us a message to book your appointment.",
  },
  {
    question: "How do I withdraw from a subject?",
    answer:
      "Please contact our support team for assistance and further information about our services.",
  },
  {
    question: "What's a payment statement?",
    answer:
      "Our team can explain consultation fees, payment methods, and any other questions related to your appointment.",
  },
  {
    question: "How Can I Contact You?",
    answer:
      "Call our clinic or visit the Contact Us page to get in touch with our team.",
  },
  {
    question: "How do I withdraw from a subject?",
    answer:
      "Our support team is available to answer your questions and help you find the right service.",
  },
  {
    question: "Understand Doctor Before You Regret?",
    answer:
      "We believe that understanding your health is the first step toward choosing the right treatment.",
  },
  {
    question: "How Doctor Can Ease Your Pain?",
    answer:
      "Our medical specialists work with you to identify your needs and recommend the right care.",
  },
];

function FAQ() {
  const [openItems, setOpenItems] = useState([0, 8]);

  const toggleQuestion = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const columns = [questions.slice(0, 6), questions.slice(6, 12)];

  let questionIndex = 0;

  return (
<>
    <Banner title="Faq's" smtitle="Faq's"/>
    <section className="faq-section" id="faq">
      <div className="faq-container">
     
        <div className="faq-grid">
          {columns.map((column, columnIndex) => (
              <div className="faq-column" key={columnIndex}>
              {column.map((item) => {
                  const index = questionIndex++;
                  
                  return (
                  <div
                  className={`faq-item ${
                      openItems.includes(index) ? "active" : ""
                    }`}
                    key={index}
                    >
                    <button
                      className="faq-question"
                      onClick={() => toggleQuestion(index)}
                      aria-expanded={openItems.includes(index)}
                    >
                      <span>{item.question}</span>

                      <span className="faq-arrow">
                        {openItems.includes(index) ? "⌃" : "⌄"}
                      </span>
                    </button>

                    <div
                      className={`faq-answer ${
                          openItems.includes(index) ? "show" : ""
                        }`}
                    >
                      <div className="faq-answer-content">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
            })}
            </div>
          ))}
        </div>
      </div>
    </section>

    <LatestNews/>
          </>
  );
}

export default FAQ;

