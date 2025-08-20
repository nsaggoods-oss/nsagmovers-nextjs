"use client";
import React, { useRef } from "react";
import {
  FaCalculator,
  FaFileAlt,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaUserAlt,
} from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";
import { sendEmail } from "../lib/apiService";


const ContactInnerLahore = () => {
  const form = useRef();

  const sendMail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const mailData = Object.fromEntries(formData.entries());


    try {
      const response = await sendEmail(mailData);
      if (response.status === 200) {
        toast.success("Message Sent Successfully!");
        form.current.reset();
      } else {
        toast.error("Message Not Sent! Please try again.");
      }
    } catch (error) {
      if (error.response) {
        // Server-side error
        console.error("Server error:", error.response.data);
        toast.error(error.response.data.message || "Server error occurred.");
      } else if (error.request) {
        // Network error
        console.error("Network error:", error.request);
        toast.error("Unable to connect to the server. Please try again.");
      } else {
        // Other errors
        console.error("Error:", error.message);
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      {/* contact area start */}
      <div className="container">
        <div className="contact-area mg-top-120 mb-120">
          <div className="row g-0 justify-content-center">
            <div className="col-lg-7">
              <form
                className="contact-form text-center"
                ref={form}
                onSubmit={sendMail}
              >
                <h3>SEND A MESSAGE</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-input-inner">
                      <label>
                        <span className="text-danger">*</span>
                        <FaUserAlt />
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input-inner">
                      <label>
                        <span className="text-danger">*</span>
                        <FaRegEnvelope />
                      </label>
                      <input
                        type="text"
                        placeholder="Your email"
                        name="to"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input-inner">
                      <label>
                        <span className="text-danger">*</span>
                        <FaCalculator />
                      </label>
                      <input
                        type="text"
                        placeholder=" Phone number"
                        name="contact"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input-inner">
                      <label>
                        <span className="text-danger">*</span>
                        <FaFileAlt />
                      </label>
                      <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single-input-inner">
                      <label>
                        <span className="text-danger">*</span>
                        <FaPencilAlt />
                      </label>
                      <textarea
                        placeholder="Write massage"
                        defaultValue={""}
                        id="massage"
                        name="message"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-base" type="submit">
                      {" "}
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5">
              <div className="contact-information-wrap">
                <h3>CONTACT INFORMATION</h3>
                <div className="single-contact-info-wrap">
                  <h6>Contact Number:</h6>
                  <div className="media">
                    <div className="icon">
                      <FaPhoneAlt />
                    </div>

                    <div className="media-body">
                      <p> +92 320 8101755</p>
                    </div>
                  </div>
                </div>
                <div className="single-contact-info-wrap">
                  <h6>Mail Address:</h6>
                  <div className="media">
                    <div className="icon" style={{ background: "#080C24" }}>
                      <FaRegEnvelope />
                    </div>
                    <div className="media-body">
                      <p>info@nsagmovers.pk</p>
                    </div>
                  </div>
                </div>
                <div className="single-contact-info-wrap mb-0">
                  <h6>Office Location (Lahore):</h6>
                  <div className="media">
                    <div className="icon" style={{ background: "#565969" }}>
                      <FaMapMarkerAlt />
                    </div>
                    <div className="media-body">
                      <p> Plot No 109 Sabzazar</p>
                      <p>Truck Stand Band Road Lahore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact area end */}
      <div className="contact-g-map">
        <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.925765300724!2d74.27567287545133!3d31.526198774211334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190310c6377cb9%3A0xebeb4806d5a4734a!2sPlot%20109%2C%20Sabzazar%20Block%20B%20Sabzazar%20Housing%20Scheme%20Phase%201%20%26%202%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1735838515346!5m2!1sen!2s" />
      </div>
    </>
  );
};

export default ContactInnerLahore;
