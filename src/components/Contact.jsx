import React from "react";

export default function Contact() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contact Me</h1>
      <p className="text-center text-muted mb-5">
        Feel free to reach out using the form below or through my contact details.
      </p>

      <div className="row">
        <div className="col-md-7 mb-4">
          <div className="card shadow-sm p-4 rounded">
            <form>

              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">Full Name </label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">Email Address </label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Write your message"></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">Send Message</button>

            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-md-5">
          <div className="card shadow-sm p-4 rounded h-100">
            <h5 className="fw-bold mb-3">Contact Information</h5>
            <p className="mb-2">
              <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
              Sangkhola, East Sikkim, India
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone-fill me-2 text-primary"></i>
              +91 8167259866
            </p>
            <p className="mb-2">
              <i className="bi bi-envelope-fill me-2 text-primary"></i>
              ansariabash2004@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}