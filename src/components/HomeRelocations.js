"use client";
import React, { useEffect, useRef, useState } from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import Link from "next/link";

const HomeRelocations = () => {
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
                      alt="Reliable and Affordable House Moving Services in Pakistan"
                    />
                    <img
                      className="img-2"
                      src="/assets/img/service/house-moving-company.webp"
                      alt="Reliable and Affordable House Moving Services in Pakistan"
                    />
                    {/* <img
                    className="img-3"
                    src="/assets/img/about/8.webp"
                    alt="snag-packers-movers"
                  /> */}
                    <div className="exprience-wrap">
                      <img
                        src="/assets/img/about/shape-3.webp"
                        alt="Reliable and Affordable House Moving Services in Pakistan"
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
                      <h4 className="subtitle">HOUSE MOVES</h4>
                      <h2 className="title mb-2">
                        Affordable House Moving Services by NSAG
                      </h2>
                      <p>
                        NSAG delivers cost-effective house-moving solutions,
                        ensuring a smooth and hassle-free relocation experience.
                        Whether you’re moving within the city or across town,
                        our services are designed to meet your specific
                        requirements and provide unparalleled convenience. As
                        Pakistan’s trusted home movers and packers, NSAG
                        guarantees the secure transportation of your furniture,
                        electronics, and valuables. Experience relocation like
                        never before with our reliable and affordable services.
                      </p>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="single-about-wrap">
                            <div className="icon">
                              <img
                                src="/assets/img/about/icon-1.webp"
                                alt="Reliable and Affordable House Moving Services in Pakistan"
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
                                alt="Reliable and Affordable House Moving Services in Pakistan"
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
                      alt="Reliable and Affordable House Moving Services in Pakistan"
                    />
                  </div>
                </div>
                <div className="col-lg-7 align-self-center order-lg-2 ">
                  <div className="about-inner-wrap ms-0">
                    <div className="section-title mb-0">
                      <h2 className="title mb-2">
                        {/* Affordable House Moving Services by NSAG */}
                        Simplifying Inter & Intra-City House Moving Experience
                      </h2>
                      <p>
                        NSAG delivers cost-effective house-moving solutions,
                        ensuring a smooth and hassle-free relocation experience.
                        Whether you’re moving within the city or across town,
                        our services are designed to meet your specific
                        requirements and provide unparalleled convenience. As
                        Pakistan’s trusted home movers and packers, NSAG
                        guarantees the secure transportation of your furniture,
                        electronics, and valuables. Experience relocation like
                        never before with our reliable and affordable services.
                      </p>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="single-about-wrap">
                            <div className="icon">
                              <img
                                src="/assets/img/about/icon-1.webp"
                                alt="Reliable and Affordable House Moving Services in Pakistan"
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
                                alt="Reliable and Affordable House Moving Services in Pakistan"
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
                    Reliable House Shifting Services
                  </h2>
                  <p>
                    Moving to another home is important, so it demands being
                    trusting, having expertise, and being precise. NSA Mover
                    offers the most reliable house-shifting services across
                    Pakistan, including major cities like Lahore, Islamabad,
                    Karachi, Rawalpindi, and Multan. Moving to another city or
                    just around the corner? We make the whole process easy,
                    safe, and stress-free with our professionals. We realize it
                    is important to take care of each item, even the most
                    fragile crockery and the most heavy furniture, and deliver
                    everything promptly. whether that’s in Lahore, Islamabad or
                    other places, finding the best solutions and customising
                    them for their budgets and tidmings.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    Packers & Movers / Shifting: Serving Pakistan’s Major Cities
                  </h2>
                  <p>
                  <Link href="/" style={{ color: "#fa4318" }}>
                      <strong> NSAG Mover </strong>
                    </Link> has a strong presence in Pakistan’s major cities.
                    Because of this, we can deliver efficient moving services
                    everywhere you need. Moreover, we work hard to make your
                    move smooth and easy.
                  </p>
                  <div className="col-lg-12 align-self-center">
                    <ul className="list-inner-wrap">
                      <li>
                        Because of our skilled teams and efficient transport
                        options, we are recognized as one of the top packers and
                        movers in Karachi.
                      </li>
                      <li>
                        Our aim in Rawalpindi is to provide, safe and speedy,
                        relocation services that meet the particular needs of
                        the people here.
                      </li>
                      <li>
                        Expertise local to Multan enables us to support seamless
                        house or office relocation within the city and other
                        parts nearby.
                      </li>
                      <li>
                        When it comes to home shifting in Lahore, Packers and
                        Movers is widely known as a dependable and professional
                        name. Therefore, many people trust us to make their move
                        smooth and hassle-free.
                      </li>
                      <li>
                        Packers and Movers in Islamabad are known for expert
                        handling and secure transit. Because of this, we offer
                        reliable house shifting services or
                        <Link
                          href="/office-relocations"
                          style={{ color: "#fa4318" }}
                        >
                          <strong> office shifting service </strong>
                        </Link>
                        in Islamabad. Additionally, we work hard to make your
                        move safe and stress-free.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    Specialized Moving & Transport Solutions
                  </h2>
                  <p>
                    Besides normal moving services, NSA Mover also specializes
                    in these areas:
                  </p>

                  <ul className="list-inner-wrap">
                    <li>
                      Secure storage is available from our company if you need
                      storage for just a short or long period.
                    </li>
                    <li>
                      Group Transportation Services: For larger moves involving
                      multiple families or corporate setups, we provide
                      consolidated moving solutions.
                    </li>
                    <li>
                      We take care of household items and shipment of goods at
                      the business level.
                    </li>
                    <li>
                      Transport your vehicle under our car carrier service in
                      Karachi and other places to make certain it arrives
                      without suffering damage.
                    </li>
                    <li>
                      We also provide specialized services like furniture moving
                      services near me and commercial equipment movers, making
                      us a one-stop solution for all moving and transport needs.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 order-lg-2">
                  <h2 className="title mb-2">
                    Affordable and Transparent Pricing
                  </h2>
                  <p>
                    Are you worried how much house shifting might cost? You get
                    a high standard of services at NSAG Mover yet at competitive
                    costs. Since we see how important the budget is, we aim to
                    offer removalists services that satisfy you for less money.
                    Our transparent pricing policy means no surprise fees or
                    hidden charges. After checking your home, we give you an
                    itemized estimate immediately so you can move with peace of
                    mind. We can help you with short moves within town or big
                    ones across cities by customizing our service and fee plan.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle"> Tips for a Smooth Home Shifting</h2>
                  <p>
                    To get ready for the move, here are some useful tips from
                    Experts for home shifting services:
                  </p>
                  <ul className="list-inner-wrap">
                    <li>
                      Set a date for your move early and confirm the moving
                      company well before the agreed date.
                    </li>
                    <li>
                      Reduce the amount of things you are moving by decluttering
                      at home.
                    </li>
                    <li>
                      Write what the package holds in its box so you can find
                      things distributed evenly around the home as you unpack.
                    </li>
                    <li>
                      Store valuables and important papers apart from your
                      regular things.
                    </li>
                    <li>
                      Choose boxes that are tough and pack with good packing
                      materials.
                    </li>
                    <li>
                      Let the movers know about anything you want them to be
                      careful with such as fragile items.
                    </li>
                    <li>
                      Using the checklist in NSA Mover, you can see every step
                      of the moving process to be sure nothing gets missed.
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

export default HomeRelocations;
