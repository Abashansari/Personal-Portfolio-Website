import React from "react";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import SocialmediaIcons from "./SocialmediaIcons";
import ContactDesc from "./ContactDesc";

export default function Contact() {
  return (
    <div id="contact">
      <div className="container my-5">
        <h1 className="text-center fw-bold mb-4 text-primary">Contact Me</h1>
        <p className="text-center text-muted mb-5">
          Thinking about projects? Let’s collaborate and build something great together.
        </p>
      </div>

      <div className="card shadow-lg border-0 rounded-4 mb-6 p-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="row g-0">

          {/* Left Side */}
          <div className="col-md-6 p-4 border-end">
            <ContactDesc />
            <ContactDetails />
            <h2 className="fw-bold mb-3">Follow Me</h2>
            <SocialmediaIcons />
          </div>

          {/* Right Side */}
          <div className="col-md-6 p-4">
            <div className="card-body">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
