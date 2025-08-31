import React from "react";


import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import SocialmediaIcons from "./SocialmediaIcons";
import ContactDesc from "./ContactDesc";

export default function Contact() {
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center mb-4">Contact Me</h1>
        <p className="text-center text-muted mb-5">
          Thinking about projects ?? Let's have some fun we can work together.
        </p>
      </div>

      <div className="card mb-6" >
        <div className="row g-0">
          <div className="col-md-6">
            <ContactDesc />
            <ContactDetails />
            <h2 className="container-start fw-bold mb-3">Follow Me</h2>
            <SocialmediaIcons />
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <ContactForm />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}