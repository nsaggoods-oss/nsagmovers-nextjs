"use client";
import React, { useEffect, useRef, useState } from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import Link from "next/link";

const OfficeRelocations = () => {
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
                      alt="Targeting corporate and business clients for office moves"
                    />
                    <img
                      className="img-2"
                      src="/assets/img/service/office-relocations.webp"
                      alt="Targeting corporate and business clients for office moves"
                    />
                    {/* <img
                    className="img-3"
                    src="/assets/img/about/8.webp"
                    alt="snag-packers-movers"
                  /> */}
                    <div className="exprience-wrap">
                      <img
                        src="/assets/img/about/shape-3.webp"
                        alt="Targeting corporate and business clients for office moves"
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
                      <h4 className="subtitle">OFFICE RELOCATIONS</h4>
                      <h2 className="title mb-2">
                        Affordable Office Relocation Services in Pakistan
                      </h2>
                      <p>
                        Relocate your office effortlessly—locally, nationally,
                        or even internationally! With NSAG’s specialized office
                        move services, we make the transition seamless. Whether
                        it’s a single workstation or an entire office setup,
                        NSAG handles it all.
                      </p>
                      <p>
                        Need to move your office equipment and furniture swiftly
                        within the city or across borders? NSAG ensures fast,
                        dependable, and stress-free relocation services. Choose
                        NSAG for a secure, efficient, and smooth office move
                        experience.
                      </p>

                      <div className="row">
                        <div className="col-xl-6">
                          <div className="single-about-wrap">
                            <div className="icon">
                              <img
                                src="/assets/img/about/icon-1.webp"
                                alt="Targeting corporate and business clients for office moves"
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
                                alt="Targeting corporate and business clients for office moves"
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
                        Simplifying Inter & Intra-City Office Moving Experience
                      </h2>
                      <p>
                        Moving to a new office marks an exciting milestone, but
                        the challenges of packing, organizing, and relocating
                        can be daunting. With NSAG, it's a breeze!
                      </p>
                      <p>
                        NSAG makes office relocations smoother than ever.
                        Whether it’s a small office within the city or a
                        large-scale corporate move across regions, we ensure
                        speed, reliability, and professionalism from start to
                        finish. Our experienced team specializes in handling
                        office equipment, documents, and furniture with care,
                        delivering them to the destination securely and
                        efficiently.
                      </p>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="single-about-wrap">
                            <div className="icon">
                              <img
                                src="/assets/img/about/icon-1.webp"
                                alt="Targeting corporate and business clients for office moves"
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
                                alt="Targeting corporate and business clients for office moves"
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
                    Professional Office Shifting Services in Lahore
                  </h2>
                  <p>
                    When you move to an office, you need to minimize how much it
                    interrupts your daily activities.  <Link
                      href="/"
                      style={{ color: "#fa4318" }}
                    >
                      <strong> NSAG Mover </strong>
                    </Link> provides
                    top-tier office shifting services in Lahore that are secure,
                    fast, and efficient. Whether you're relocating a startup, a
                    mid-sized business, or a corporate headquarters, our team of
                    professional office movers in Lahore ensures a seamless
                    transition with attention to detail and service excellence.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    Tailored Commercial Relocation Solutions for Every Business
                  </h2>
                  <p>
                    We realize every business is different from the others. That
                    is the reason  <Link
                      href="/"
                      style={{ color: "#fa4318" }}
                    >
                      <strong> NSAG Movers </strong>
                    </Link>  has packages designed for
                    specialized commercial move requests, covering businesses as
                    diverse as IT and retail. Our office relocation services in
                    Lahore cover everything from initial planning to final
                    setup, all while maintaining full transparency.
                  </p>
                  <div className="col-lg-12 align-self-center">
                    <ul className="list-inner-wrap">
                      <h4>Our Services Include</h4>
                      <li>
                        People should get advice from a moving company before
                        moving.
                      </li>
                      <li>Organizing and labeling all the office equipment</li>
                      <li>Setting up and moving apart different components</li>
                      <li>Safe transport that uses GPS to keep an eye on it</li>
                      <li>Moving and installing equipment at the new place</li>
                    </ul>
                  </div>
                  <br></br>
                  <p>
                    With NSAG Mover, you're choosing a business relocation
                    services Lahore provider that focuses on efficiency and
                    speed while keeping your assets safe.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 order-lg-2">
                  <h2 className="title mb-2">
                    Flexible Schedules and Minimal Downtime
                  </h2>
                  <p>
                    NSAG Mover understands that time is money, which is why we
                    offer office shifting and  <Link
                      href="/apartment-relocations"
                      style={{ color: "#fa4318" }}
                    >
                      <strong> apartment relocation service </strong>
                    </Link>  with
                    minimal downtime in Lahore, ensuring your business
                    operations continue smoothly during relocation. As reliable
                    weekend office movers in Lahore, we also provide after-hours
                    moves tailored to your work schedule and priority service
                    for time-sensitive relocations. As a trusted corporate
                    office shifting services Lahore provider, we respect your
                    calendar and work around your business hours to deliver
                    efficient, disruption-free service.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    Expertise in IT and Furniture Handling
                  </h2>
                  <p>
                    Special attention is needed for electronics and furniture
                    while moving which our team here at NSAG Mover always
                    provides. As experts in IT equipment moving services in
                    Lahore, we ensure the proper disconnection and
                    reinstallation of servers, careful packing of monitors,
                    CPUs, and printers, and the secure handling of all
                    networking gear to guarantee a safe and smooth transition.
                  </p>
                  <div className="col-lg-12 align-self-center">
                    <ul className="list-inner-wrap">
                      <h4>Office Furniture Shifting Lahore</h4>
                      <li>
                        The inclusion of tasks to break down and put together
                        workstations
                      </li>
                      <li>Putting labels on and shipping big furniture</li>
                      <li>
                        Riding does not lead to injuries because of padded
                        vehicles.
                      </li>
                    </ul>
                  </div>
                  <br></br>
                  <p>
                    Our team’s expertise guarantees a smooth move, making us a
                    preferred office relocation company in Lahore for businesses
                    with complex needs.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    How to Shift an Office in Lahore – Checklist for Success
                  </h2>
                  <p>
                    Besides normal moving services, NSA Mover also specializes
                    in these areas:
                  </p>

                  <ul className="list-inner-wrap">
                    <li>
                      For management purposes, put in charge of the move a
                      relocation team leader.
                    </li>
                    <li>
                      Make sure everyone in every department is informed well in
                      advance.
                    </li>
                    <li>Duplicate your key data for a backup.</li>
                    <li>
                      Cut off the equipment from the power and give each item a
                      label.
                    </li>
                    <li>List out every asset your organization owns.</li>
                    <li>Hire professional office movers in Lahore. .</li>

                    <li>
                      Share when the move should happen with all employees
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 order-lg-2">
                  <h2 className="title mb-2">
                    Serving All of Pakistan – Regional Reach with Local
                    Expertise
                  </h2>
                  <p>
                    Though based in Lahore, NSAG Mover extends its services
                    nationwide with dedicated office shifting services in
                    Pakistan. Whether you’re moving locally or from Lahore to
                    another city, our commercial Movers Pakistan network ensures
                    consistent quality and customer satisfaction.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    
                    Cost of Office Shifting in Lahore – What to Expect
                  </h2>
                  <p>
                    The cost of office shifting in Lahore depends on several
                    factors, including office size, distance, service type, and
                    equipment volume. NSAG Mover allows you to get a free
                    estimate and pays special attention to your particular
                    needs.
                  </p>
                  <ul className="list-inner-wrap">
                    <h4> Factors Affecting Pricing</h4>

                    <li>Office products used in the firm</li>
                    <li>Different locations.</li>
                    <li>
                      The need arises to remove and then install these machines.
                    </li>
                    <li>
                      IT or fragile items need to be specially instructed for
                      handling.
                    </li>
                    <li>
                      The procedure needs to be done at a certain date and time.
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

export default OfficeRelocations;
