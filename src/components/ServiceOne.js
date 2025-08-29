import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const ServiceOne = () => {
  return (
    <>
      {/* service area start */}
      <div
        className="service-area pd-top-115 pd-bottom-90 pb-lg-0"
        style={{ background: "url(assets/img/service/bg.webp)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h4 className="subtitle style-2">SERVICES</h4>
                <h2 className="title">OUR SERVICE FOR YOU</h2>
                <p>
                  As a leader in the Packers & Movers industry, NSAG Packers &
                  Movers Company is committed to delivering excellence in every
                  aspect of our service.

                  Moving can be a daunting task, but with
                  our expert packers and movers services in Pakistan, your
                  transition can be seamless and stress-free. We specialize in
                  providing top-notch relocation solutions tailored to meet your
                  specific needs in
                  <b>Lahore</b>, <b>Karachi</b>, <b>Islamabad</b>, and other
                  major cities across Pakistan.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-service-wrap">
                <div className="thumb">
                  <img src="/assets/img/service/3.webp" alt="snag-packers-movers" />
                  <div className="icon">
                    <img
                      src="/assets/img/service/service-icon-3.webp"
                      alt="snag-packers-movers"
                    />
                  </div>
                </div>
                <div className="details">
                  <h5>Packers and Movers</h5>
                  <p>
                    Optimal storage capacity ensures efficient inventory
                    management
                  </p>
                  <div className="btn-wrap">
                    <Link
                      className="read-more-text"
                      href="/house-moving-company"
                    >
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-wrap">
                <div className="thumb">
                  <img src="/assets/img/service/3.webp" alt="snag-packers-movers" />
                  <div className="icon">
                    <img
                      src="/assets/img/service/service-icon-3.webp"
                      alt="snag-packers-movers"
                    />
                  </div>
                </div>
                <div className="details">
                  <h5>House Shifting</h5>
                  <p>
                    Smart Warehousing optimizes logistics through automation
                  </p>
                  <div className="btn-wrap">
                    <Link
                      className="read-more-text"
                      href="/office-relocations" title="Targeting corporate and business clients for office moves"
                    >
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-wrap">
                <div className="thumb">
                  <img src="/assets/img/service/3.webp" alt="snag-packers-movers" />
                  <div className="icon">
                    <img
                      src="/assets/img/service/service-icon-3.webp"
                      alt="snag-packers-movers"
                    />
                  </div>
                </div>
                <div className="details">
                  <h5>Home & Office Relocation</h5>
                  <p>
                    Modern equipment employs cutting-edge technology o enhance.
                  </p>
                  <div className="btn-wrap">
                    <Link
                      className="read-more-text"
                      href="/house-moving-company"
                    >
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default ServiceOne;
