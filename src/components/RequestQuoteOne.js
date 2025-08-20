"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";
import { sendQuote } from "../lib/apiService";

const RequestQuoteOne = () => {
  const form = useRef();

  const sendQuotation = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const quoteData = Object.fromEntries(formData.entries());

    const checkboxes = [
      "GoodTransport",
      "FurnitureMove",
      "StoreDelivery",
      "HouseMove",
      "ShehzoreForRent",
    ];

    const checkboxStates = checkboxes.map((checkboxId) => {
      const checkboxElement = form.current?.querySelector(`#${checkboxId}`);
      return {
        name: checkboxId,
        checked: checkboxElement ? checkboxElement.checked : false,
      };
    });

    quoteData.checkboxStates = checkboxStates;

    try {
      const response = await sendQuote(quoteData);
      if (response.status === 200) {
        toast.success("Quotation Sent Successfully!");
        form.current.reset();
      } else {
        toast.error("Quotation Not Sent! Please try again.");
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
      {/*request-quote-area start*/}
      <Toaster position="bottom-center" reverseOrder={false} />

      <div className="request-quote-area">
        <div className="container">
          <div className="request-quote-inner">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  <img
                    src="/assets/img/request-quote/1.png"
                    alt="snag-packers-movers"
                  />
                  REQUEST A QUOTE
                </button>
              </li>
            </ul>
            <form ref={form} onSubmit={sendQuotation}>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
          

                  <div className="row">
                    <div className="col-lg-8">
                      <h6 className="subtitle">Personal Information :</h6>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="single-input-inner style-border">
                            <label>
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="single-input-inner styl e-border">
                            <input
                              type="text"
                              name="email"
                              placeholder="Your Email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="single-input-inner style-border">
                            <label>
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="phone"
                              placeholder="Phone Number"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <h6 className="subtitle ">Shipment Information :</h6>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="single-input-inner style-border">
                            <input
                              type="date"
                              name="date"
                              placeholder="Moving Date"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="single-input-inner style-border">
                            <input
                              type="text"
                              name="from"
                              placeholder="Moving From"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="single-input-inner style-border">
                            <input
                              type="text"
                              name="to"
                              placeholder="Moving To"
                            />
                          </div>
                        </div>
                      </div>

                      <h6 className="subtitle">Message :</h6>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="single-input-inner style-border">
                            <label>
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              placeholder="Write massage"
                              defaultValue={""}
                              id="massage"
                              name="message"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <h6 className="subtitle">Services :</h6>
                      <ul className="single-check-list">
                        <li>
                          <div className="form-check single-check-wrap">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="GoodTransport"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="GoodTransport"
                            >
                              Goods Transport
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check single-check-wrap">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="FurnitureMove"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="FurnitureMove"
                            >
                              Furniture Move
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check single-check-wrap">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="StoreDelivery"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="StoreDelivery"
                            >
                              Store Delivery
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check single-check-wrap">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="HouseMove"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="HouseMove"
                            >
                              House Moves
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check single-check-wrap">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="ShehzoreForRent"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="ShehzoreForRent"
                            >
                              Shehzore For Rent
                            </label>
                          </div>
                        </li>
                      </ul>

                      <button className="btn btn-base w-100" type="submit">
                        {" "}
                        REQUEST A QUOTE
                      </button>
                    </div>

                    <div className="col-lg-4 align-self-end">
                      <div
                        className="quote-wrap"
                        style={{ background: "var(--main-color)" }}
                      >
                        <h4>How Can We Help You!</h4>
                        <p>
                          Completely transform sticky ideas without leveraged
                          quality vectors. Continually negotiate compelling
                          partnerships before granular customer service.
                          Objectively.
                        </p>
                        <Link className="btn btn-white" href="/contact">
                          CONTACT US
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*request-quote-area end*/}
    </>
  );
};

export default RequestQuoteOne;
