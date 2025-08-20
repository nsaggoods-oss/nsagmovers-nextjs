"use client";
import React, { useEffect, useRef, useState } from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import Link from "next/link";

const ShehzoreMazdaRent = () => {
  const containerRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const rows = containerRef.current?.querySelectorAll(".row");
    if (rows) {
      rows.forEach((row, index) => {
        if (index > 2) {
          row.style.display = showAll ? "flex" : "none";
        }
      });
    }
  }, [showAll]);

  return (
    <>
      {/* service area start */}
      <div className="about-area-2 pd-top-120">
        <div className="container">
          <div className="about-area-inner">
            <div className="service-details-wrap" ref={containerRef}>
              <div className="row">
                <div className="col-lg-5 order-lg-2">
                  <div className="about-thumb-wrap mb-lg-0 mb-4">
                    <img
                      className="img-1"
                      src="/assets/img/about/shape.png"
                      alt="snag-packers-movers"
                    />
                    <img
                      className="img-2"
                      src="/assets/img/service/shehzore-mazda-for-rent.png"
                      alt="snag-packers-movers"
                    />

                    <div className="exprience-wrap">
                      <img
                        src="/assets/img/about/shape-3.png"
                        alt="snag-packers-movers"
                      />
                      <div className="details">
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <h1>
                                <CountUp delay={0} start={0} end={10} />
                              </h1>
                            )
                          }
                        </TrackVisibility>
                        <p>YEARS EXPERIENCE</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 align-self-center order-lg-1">
                  <div className="about-inner-wrap ms-0">
                    <div className="section-title mb-0">
                      <h4 className="subtitle"> MAZDA SHEZORE FOR RENT</h4>
                      <h2 className="title mb-2">
                        Mazda Shehzore for Rent – Reliable Pickup Truck Rental
                        in Lahore, Karachi & Islamabad
                      </h2>
                      <p>
                        When it comes to transporting goods safely and
                        efficiently in Pakistan, the Mazda Shehzore for rent is
                        a top choice for both businesses and individuals.
                        Because it has a strong engine and resilient design, the
                        pickup truck easily deals with large loads and is
                        reliably used in deliveries, shifting, and commercial
                        logistics.
                      </p>
                      <p>
                        <Link href="/" style={{ color: "#fa4318" }}>
                          <strong> NSAG Movers </strong>
                        </Link>
                        provides professional and affordable Shehzore pickup for
                        rent services in Lahore, Karachi, and Islamabad,
                        tailored to meet your specific transportation needs. If
                        you need to shift belongings or give a delivery, our
                        Shehzore cars are prepared to assist you at any time.
                      </p>

                      <div className="row">
                        <div className="col-xl-6">
                          <div className="single-about-wrap">
                            <div className="icon">
                              <img
                                src="/assets/img/about/icon-1.png"
                                alt="snag-packers-movers"
                              />
                            </div>
                            <div className="details">
                              <h6>Unlimited Revisions &amp; Best Solutions</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="single-about-wrap">
                            <div className="icon">
                              <img
                                src="/assets/img/about/icon-2.png"
                                alt="snag-packers-movers"
                              />
                            </div>
                            <div className="details">
                              <h6>24/7 Support For Any Clients</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-5 order-lg-1">
                  <div className="about-thumb-wrap mb-lg-0 mb-4">
                    <img
                      className="img-2"
                      src="/assets/img/about/3.png"
                      alt="snag-packers-movers"
                    />
                  </div>
                </div>
                <div className="col-lg-7 align-self-center order-lg-2 ">
                  <div className="about-inner-wrap ms-0">
                    <div className="section-title mb-0">
                      <h2 className="title mb-2">
                        {/* Affordable House Moving Services by NSAG */}
                        Reliable City-to-City Shahzore/Mazda Transport Services
                      </h2>
                      <p>
                        At NSAG, we prioritize the safety of your cherished
                        belongings through secure containerization services. Our
                        expert team employs industry-leading techniques to pack
                        your items in durable containers, minimizing movement
                        and preventing damage during transit.
                      </p>
                      <p>
                        Our trained professionals use secure packing and
                        containerization techniques to protect your items from
                        damage during transit. From fragile belongings to bulky
                        essentials, we handle each item with care to ensure it
                        reaches its destination safely.
                      </p>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="single-about-wrap">
                            <div className="icon">
                              <img
                                src="/assets/img/about/icon-1.png"
                                alt="snag-packers-movers"
                              />
                            </div>
                            <div className="details">
                              <h6>Unlimited Revisions &amp; Best Solutions</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="single-about-wrap">
                            <div className="icon">
                              <img
                                src="/assets/img/about/icon-2.png"
                                alt="snag-packers-movers"
                              />
                            </div>
                            <div className="details">
                              <h6>24/7 Support For Any Clients</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    Mazda Shehzore for Rent in Lahore
                  </h2>
                  <p>
                    At Nsag, our pickup team knows the city roads very well. So,
                    whether you are moving, sending things, or changing your
                    shop’s place, our trucks are ready to work safely and
                    easily.
                  </p>

                  <ul className="list-inner-wrap">
                    <h4>We offer:</h4>
                    <li>Shehzore pickup rental Lahore</li>
                    <li>Rent Shehzore truck in Lahore</li>
                    <li>Lahore Mazda Shehzore with driver</li>
                    <li>
                      Our team will serve you with reliability and show
                      professionalism no matter what your cargo entails.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    Mazda Shehzore for Rent in Karachi
                  </h2>
                  <p>
                    If you’re based in Karachi and need a trusted transport
                    solution, choose our Mazda Shehzore for rent in Karachi.
                    Because roads in Karachi are always hectic, both drivers and
                    vehicles have to be highly skilled and reliable.
                  </p>

                  <ul className="list-inner-wrap">
                    <h4>We offer various services in the city of Karachi</h4>
                    <li>Shehzore pickup rental Karachi</li>
                    <li>Rent a Shehzore in Karachi</li>
                    <li>Karachi Shehzore truck rental service</li>
                    <li>
                      Our team will serve you with reliability and show
                      professionalism no matter what your cargo entails.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    Mazda Shehzore for Rent in Islamabad
                  </h2>
                  <p>
                    For those in the capital city, our Mazda Shehzor for
                    <Link href="/office-relocations" style={{ color: "#fa4318" }}>
                      <strong> office shifting </strong>
                    </Link>
                    or rent in Islamabad comes with professional drivers and
                    excellent customer support. We know what both individuals
                    and companies require from their transport service.
                  </p>
                  <ul className="list-inner-wrap">
                    <h4>The choices that are offered in Islamabad:</h4>
                    <li>Shehzore pickup rental Islamabad</li>
                    <li>Rent Shehzore truck in Islamabad</li>
                    <li>Islamabad Mazda Shehzore with driver </li>
                  </ul>
                </div>
                <br></br>
                <p>
                  Your things will be moved rapidly and safely, whether you are
                  shipping for home or business, thanks to Nsag.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    Affordable and Convenient Shehzore Rental with Driver
                  </h2>
                  <p>
                    One of the major benefits of choosing Nsag is the
                    convenience of our Shehzore pickup rental with driver
                    service. All our drivers are taught how to drive safely,
                    load goods properly, and always arrive on time.
                  </p>
                  <ul className="list-inner-wrap">
                    <h4>What are the reasons to choose to rent from us?</h4>
                    <li>All the charges are upfront.</li>
                    <li>An easy process for making bookings</li>
                    <li>Help is constantly available for customers.</li>
                    <li>Vehicles that are well-kept and sparkling clean</li>
                    <li>Affordable Shehzore truck rental packages </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 order-lg-2">
                  <h2 className="title mb-2">
                    Get Started – Rent Mazda Shehzore Today!
                  </h2>
                  <p>
                    Whether you're looking to rent a Mazda Shehzore for a single
                    day or multiple weeks, Nsag offers flexible rental options
                    for your convenience. We are ready to help with even the
                    smallest task as well as large freight job distribution.
                  </p>
                </div>
              </div>

              <div className="text-center mt-4">
                <button
                  className="btn btn-base"
                  type="submit"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default ShehzoreMazdaRent;
