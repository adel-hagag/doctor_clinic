
import React from "react";
import "./WorkingProcess.css";

const steps = [
  {
    number: "01",
    title: "Make Appointment",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of.",
  },
  {
    number: "02",
    title: "Take Treatment",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of.",
  },
  {
    number: "03",
    title: "Registration",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of.",
  },
];

export default function WorkingProcess() {
  return (
    <section className="working-process">
      <div className="container">
        <div className="working-heading">
          <h5>Working Process</h5>
          <h2>How we works?</h2>
        </div>

        <div className="row justify-content-center align-items-center">
          {steps.map((step, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={step.number}>
              <div
                className={`process-card ${
                  index === 1 ? "active" : ""
                }`}
              >
                <h3 className="process-number">{step.number}</h3>

                <h4>{step.title}</h4>

                <p>{step.description}</p>

                <button className="process-button">
                  <span>View More</span>
                  <span className="button-arrow">›</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="process-plus">+</div>
      <div className="process-circle"></div>
    </section>
  );
}