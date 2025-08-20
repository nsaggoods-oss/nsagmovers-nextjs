"use client";
import React, { useEffect, useRef, useState } from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import Link from "next/link";


const InternationalMoves = () => {
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
                      src="/assets/img/about/shape.png"
                      alt="snag-packers-movers"
                    />
                    <img
                      className="img-2"
                      src="/assets/img/service/international-moves.png"
                      alt="snag-packers-movers"
                    />
                    {/* <img
                    className="img-3"
                    src="/assets/img/about/8.png"
                    alt="snag-packers-movers"
                  /> */}
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
                      <h4 className="subtitle">INTERNATION MOVES</h4>
                      <h2 className="title mb-2">
                        Say Goodbye to the Hassles of Moving Abroad
                      </h2>
                      <p>
                        Relocating to another country can be overwhelming, but
                        with NSAG by your side, the process becomes smooth and
                        stress-free. We understand the challenges of packing and
                        ensuring the safe transit of your belongings, and we’re
                        here to simplify it for you.
                      </p>
                      <p>
                        With NSAG, your items are expertly packed and securely
                        transported to your new destination. Let us handle the
                        logistics while you focus on the excitement of starting
                        a new chapter. Say goodbye to moving stress and hello to
                        a seamless relocation experience.
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
                        Simplifying Inter & Intra-State Moving Experience
                      </h2>
                      <p>
                        At NSAG, we prioritize the safety of your cherished
                        belongings through secure containerization services. Our
                        expert team employs industry-leading techniques to pack
                        your items in durable containers, minimizing movement
                        and preventing damage during transit.
                      </p>
                      <p>
                        Whether you’re relocating delicate heirlooms or
                        household essentials, our comprehensive approach
                        guarantees stability and protection. With advanced
                        security measures and careful handling, your belongings
                        arrive at your destination intact, ready for your new
                        home. Trust NSAG to safeguard your shipments and make
                        your move worry-free.
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
                <div className="col-lg-12 order-lg-2">
                  <h2 className="title mb-2">
                    Trusted International Moving Services from Lahore, Karachi &
                    Islamabad
                  </h2>
                  <p>
                    NSAG gives professional and trusted international moving
                    services from Lahore, Karachi, and Islamabad. We help
                    people, families, and businesses move to other countries
                    easily. We have many years of experience. Next, we have good
                    friends in other countries who help us. Then, we work
                    together to move homes, offices, or other things. Also, we
                    make it simple and easy for you. That’s why people like to
                    move with us.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    Comprehensive Door-to-Door Relocation Solutions Worldwide
                  </h2>
                  <p>
                    At
                    <Link href="/" style={{ color: "#fa4318" }}>
                      <strong> NSAG Movers </strong>
                    </Link>
                    we give door-to-door international moving help. We take care
                    of every part of your move with care and make sure
                    everything goes right. Here are the things we do:
                  </p>
                  <div className="col-lg-12 align-self-center">
                    <ul className="list-inner-wrap">
                      <li>
                        International packing and shipping with premium
                        protective materials
                      </li>
                      <li>
                        Custom air and sea shipping services designed to fit
                        your delivery needs and budget.
                      </li>
                      <li>
                        Customs clearance support Pakistan, ensuring smooth
                        processing and compliance
                      </li>
                      <li>
                        International home relocation and office relocation
                        abroad services available for moves of any size.
                      </li>
                      <li>
                        Pet relocation services from Pakistan under safe,
                        regulated procedures
                      </li>
                      <li>
                        Reliable ways of transporting vehicles from Lahore,
                        Karachi, and Islamabad are available.
                      </li>
                    </ul>
                  </div>
                  <br></br>
                  <p>
                    As a result, when you choose Nsag, you have a trusted
                    partner who stays with you until the project is complete.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    Serving All Major Destinations: UK, USA, Canada, UAE & More
                  </h2>
                  <p>
                    Nsag is happy to give trusted international relocation
                    services to some of the most popular places in the world,
                    like:
                  </p>

                  <ul className="list-inner-wrap">
                    <li>
                      Safe international relocation from Islamabad – Expert
                      planning and safe transit
                    </li>
                    <li>
                      Pet relocation services from Pakistan – Full compliance
                      with international regulations
                    </li>
                    <li>
                      Vehicle shipping from Lahore/Karachi/Islamabad – Enclosed
                      and Ro-Ro options.
                    </li>
                    <li>
                      Overseas relocation Islamabad: Easy and well-planned
                      moving from the big city. No matter where you're starting
                      from, whether it’s Lahore to abroad moving services or
                      moving from Karachi or Islamabad to another country, Nsag
                      ensures your move goes Pakistan international movers
                      smoothly.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    Nsag – The Best Choice for Global Moving from Pakistan
                  </h2>
                  <p>
                    Due to this very reason, when wanting to find the best and
                    safest international moving company in Karachi, the safest
                    and affordable overseas moving company in Islamabad, the
                    best and cheap international movers in Lahore, a secure
                    <Link
                      href="/apartment-relocations"
                      style={{ color: "#fa4318" }}
                    >
                      <strong> apartment movers </strong>
                    </Link>
                    in Karachi or any other city of Pakistan they want to shift
                    apartments to, Nsag is the one place that they trust. Our
                    reputation has been on quality service provision, safety and
                    ensuring every move is stress free.
                  </p>
                  <ul className="list-inner-wrap">
                    <h4>Our strengths:</h4>
                    <li>Industry-leading international relocation services</li>
                    <li>
                      Trusted international movers in Lahore, Karachi &
                      Islamabad
                    </li>
                    <li>
                      One of the top for personal and corporate relocations
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 order-lg-2">
                  <h2 className="title mb-2">Get a Free Moving Quote Today</h2>
                  <p>
                    Start your move to another country without any worry. You
                    can talk to Nsag and get a free price today. In addition,
                    whether you need door-to-door international moving, office
                    relocation abroad, or help with sending pets and cars, our
                    team is ready to assist you. With Nsag, your overseas
                    relocation will be free from stress and issues.
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
      {/* about area end */}
    </>
  );
};

export default InternationalMoves;
