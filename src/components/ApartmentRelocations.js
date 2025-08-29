"use client";
import React, { useEffect, useRef, useState } from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import Link from "next/link";

const ApartmentRelocations = () => {
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
      {/* about area start */}
      <div className="about-area-2 pd-top-120">
        <div className="container">
          <div className="about-area-inner">
            <div className="service-details-wrap" ref={containerRef}>
              <div className="row">
                <div className="col-lg-5 order-lg-2">
                  <div className="about-thumb-wrap mb-lg-0 mb-4">
                    <img
                      className="img-1"
                      src="/assets/img/about/shape.webp"
                      alt="snag-packers-movers"
                    />
                    <img
                      className="img-2"
                      src="/assets/img/service/apartment-relocations.webp"
                      alt="snag-packers-movers"
                    />
                    {/* <img
                    className="img-3"
                    src="/assets/img/about/8.webp"
                    alt="snag-packers-movers"
                  /> */}
                    <div className="exprience-wrap">
                      <img
                        src="/assets/img/about/shape-3.webp"
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
                      <h4 className="subtitle">APARTMENT RELOCATIONS</h4>
                      <h2 className="title mb-2">
                        Affordable Apartment Relocation Services in Pakistan
                      </h2>
                      <p>
                        Every move is different, and at   <Link href="/" style={{ color: "#fa4318" }}>
                      <strong> NSAG Movers </strong>
                    </Link>, we offer tailored
                        solutions to suit your unique requirements. Whether
                        you’re moving into a cozy studio, a one-bedroom
                        <Link href="/" style={{ color: "#fa4318" }}>
                      <strong> apartment </strong>
                    </Link>, or a more spacious residence, our
                        professional movers handle every task with care.
                      </p>
                      <p>
                        From carefully packing delicate items to navigating
                        tight hallways and staircases, we’re equipped to manage
                        every aspect of your relocation. Whether you're moving
                        within the same city or to a different one, NSAG is
                        dedicated to making your move seamless and worry-free.
                      </p>
                      <p>
                        Our experienced team uses secure packing methods and
                        efficient delivery practices to ensure your belongings
                        arrive at your new home safely.
                      </p>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="single-about-wrap">
                            <div className="icon">
                              <img
                                src="/assets/img/about/icon-1.webp"
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
                                src="/assets/img/about/icon-2.webp"
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
                      src="/assets/img/about/3.webp"
                      alt="snag-packers-movers"
                    />
                  </div>
                </div>
                <div className="col-lg-7 align-self-center order-lg-2 ">
                  <div className="about-inner-wrap ms-0">
                    <div className="section-title mb-0">
                      <h2 className="title mb-2">
                        {/* Affordable House Moving Services by NSAG */}
                        Simplifying Inter & Intra-City Apartment Moving
                        Experience
                      </h2>
                      <p>
                        Moving to a new apartment marks an exciting milestone,
                        but the challenges of packing, organizing, and
                        relocating can be daunting. With NSAG, it's a breeze!
                      </p>
                      <p>
                        At   <Link href="/" style={{ color: "#fa4318" }}>
                      <strong> NSAG Movers </strong>
                    </Link>, we’re committed to being your top choice for
                        relocation services. Offering a comprehensive range of
                        solutions, including premium packaging, loading,
                        unloading, and secure transportation, we aim to exceed
                        your expectations with every move.
                      </p>
                      <p>
                        Choose NSAG for a reliable, efficient, and stress-free
                        <Link href="/" style={{ color: "#fa4318" }}>
                      <strong> apartment moving</strong>
                    </Link>  experience.
                      </p>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="single-about-wrap">
                            <div className="icon">
                              <img
                                src="/assets/img/about/icon-1.webp"
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
                                src="/assets/img/about/icon-2.webp"
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
                <div className="col-lg-12 order-lg-2">
                  <h2 className="title mb-2">
                    Apartment Relocation Services in Lahore, Islamabad & Karachi{" "}
                  </h2>
                  <p>
                    Any problems you have with moving can be fixed easily with
                    Nsag. We give apartment relocation services in Lahore,
                    Islamabad, and Karachi that are safe, fast, and not too
                    costly. Our team is ready to help you move and set up,
                    whether you live in a small studio or any kind of apartment.
                    Nsag is one of the most trusted moving companies in
                    Pakistan. We help you move easily and on time, in a way that
                    fits your apartment, place, and time.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    Tailored Relocation Solutions for Every Apartment Type
                  </h2>
                  <p>
                    Every apartment is special, the moving will be different
                    too. So, we make sure our help fits your apartment’s size,
                    place, and things. This way, your move is just right for
                    you.
                  </p>
                  <div className="col-lg-12 align-self-center">
                    <ul className="list-inner-wrap">
                      <li>
                        Studio & One-Bedroom Apartments: Our compact moving
                        services are perfect for students and small families
                        because they are both fast and not expensive.
                      </li>
                      <li>
                        Multi-Room Apartments: Our service covers the whole
                        process of moving furniture and appliances for families
                        relocating to bigger flats.
                      </li>
                      <li>
                        Furniture and Appliance Movers: We specialize in
                        furniture movers for apartments to ensure no scratches,
                        dents, or damages during transport.
                      </li>

                      <li>
                        Emergency Apartment Shifting Services: Are you in a
                        hurry to get to a different place? Nsag provides
                        emergency apartment shifting services in Pakistan with
                        prompt response and quick turnaround.
                      </li>
                    </ul>
                  </div>
                  <br></br>
                  <p>
                    Whether our clients need to move to Islamabad, Lahore, or
                    Karachi, our team has the solution personally tailored to
                    each person.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    Get a Free Quote for Your Apartment Move Today!
                  </h2>
                  <p>
                    Do you want to move your apartment? Nsag makes the process
                    simple for you. Since we are a top-rated apartment moving
                    company in Islamabad and nearby, we are ready to give top
                    service at a reasonable price. We have transportation
                    services to all the major cities.
                  </p>

                  <ul className="list-inner-wrap">
                    <li>Apartment relocation services in Lahore</li>
                    <li>Karachi flat shifting services</li>
                    <li>Apartment movers in Islamabad</li>
                    <li>
                      From local apartment moving solutions to secure apartment
                      relocation, Nsag guarantees quality, care, and speed.
                    </li>
                  </ul>
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
      {/* about area end */}
    </>
  );
};

export default ApartmentRelocations;
