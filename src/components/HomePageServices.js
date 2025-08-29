"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const HomePageServices = () => {
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
      <div className="about-area">
        <div className="container">
          <div className="about-area-inner">
            <div className="service-details-wrap" ref={containerRef}>
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="service-inner-wrap">
                    <div className="section-title mb-0">
                      <h2 className="title">
                        NSAG Mover – Your Trusted Partner for Professional
                        Packers and Movers in Pakistan
                      </h2>
                      <p className="content left-line">
                        Relocating your property, whether home or office,
                        usually leads to stress, takes up a lot of time, and is
                        a big event. The process of moving will be less
                        stressful if you choose the right people for the
                        job.Packers and movers from <Link href="/" style={{ color: "#fa4318" }}>
                          <strong> NSAG Mover </strong>
                        </Link> in Islamabad,
                        Lahore, Karachi, and Pakistan ensure a stress-free and
                        organized move. Years in the industry, the latest tools,
                        and a focus on helping you make our company the right
                        choice for any type of move, anywhere.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pd-top-60">
                <div className="col-lg-4">
                  <div className="about-thumb-wrap">
                    <img
                      className="img-2"
                      src="/assets/img/about/1.webp"
                      alt="snag-packers-movers"
                    />
                  </div>
                </div>
                <div className="col-lg-8 align-self-center">
                  <div className="service-inner-wrap">
                    <div className="section-title mb-0">
                      <h2 className="title">
                        Comprehensive Range of Moving & Shifting Services
                      </h2>
                      <p className="content left-line">
                        Realize that moves can be very different from one
                        another. Whether you need home shifting services in
                        Islamabad,
                        <Link
                          href="/office-relocations"
                          style={{ color: "#fa4318" }}
                        >
                          <strong> office relocation service </strong>
                        </Link>
                        in Karachi, or commercial equipment movers in Lahore,
                        NSAG Mover customizes services to meet your exact
                        requirements.
                      </p>
                      <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-6">
                          <ul className="list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0">
                            <li>Home Shifting Services Tailored to You</li>
                            <li>House Shifting Services in Islamabad</li>
                            <li>Home Shifting Services in Lahore</li>
                            <li>House Shifting Services in Karachi</li>
                            <li>Commercial and Corporate Relocation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 order-lg-2">
                  <h2 className="title mb-2">
                    Services Standards as International Movers
                  </h2>
                  <p>
                    NSAG Mover as an
                    <Link href="/international-moves" style={{ color: "#fa4318" }}>
                      <strong> international mover service </strong>
                    </Link>
                    complies with strict international rules and requirements in
                    relocation services. Because we stick to international
                    packing, loading, and transportation rules, you trust that
                    your move will be risk-free. Handling customs documents,
                    insurance and freight forwarding worldwide is something our
                    team is trained to do so your items arrive at your
                    destination safely and on time.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 order-lg-2">
                  <h2 className="title mb-2">
                    Best Furniture Movers in Pakistan
                  </h2>
                  <p>
                    Moving furniture needs concern for detail, training and the
                    right items. The team of 
                    <Link href="/" style={{ color: "#fa4318" }}>
                          <strong> NSAG Movers </strong>
                        </Link>
                    
                  can dismantle,
                    transport, pack and reassemble your furniture safely. We
                    wrap, box and crate items that are delicate or bulky, so
                    they are kept safe all the way from your home to ours.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 order-lg-2">
                  <h2 className="title mb-2">
                    Affordable and Reliable Packers and Movers Near You
                  </h2>
                  <p>
                    Finding trustworthy and affordable packers and movers near
                    me is easy with <Link href="/" style={{ color: "#fa4318" }}>
                          <strong> NSAG Mover </strong>
                        </Link>. Quality service comes together
                    with affordable rates so that you get the most for your
                    money. Because we use clear billing, there are no hidden
                    costs and this makes us the best choice for removalists.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    Specialized Cargo & Transport Services
                  </h2>
                  <p>
                    As well as its
                    <Link
                      href="/house-moving-company"
                      style={{ color: "#fa4318" }}
                    >
                      <strong> house shifting services, </strong>
                    </Link>
                    NSAG Mover supports many people and businesses with their
                    transport and cargo needs.
                  </p>

                  <ul className="list-inner-wrap">
                    <li>
                      Fast and safe air shipping services are available for
                      Karachi, Lahore and Islamabad and to many far places.
                    </li>
                    <li>
                      Vehicle Transport and Car Shipping: Reliable car carrier
                      services for safe automobile transport.
                    </li>
                    <li>
                      Logistics for goods transport: Full assistance for goods
                      delivery all across Pakistan.
                    </li>
                    <li>
                      Freight Forwarding Companies help manage the shipping
                      process for a well-organized supply chain.
                    </li>
                    <li>
                      Group Transportation Services: Less expensive by shipping
                      cargo in a group.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 order-lg-2">
                  <h2 className="title mb-2">
                    Efficient and Secure Storage Solutions
                  </h2>
                  <p>
                    Do you require a temporary place to hold your belongings
                    while you move? NSAG Mover has safe climate-controlled
                    facilities where you can store goods and items during your
                    move. Our self-storage units provide safe and accessible
                    storage solutions near you, perfect for short or long-term
                    needs.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    Why NSAG Mover Stands Out Among Packers and Movers in
                    Pakistan
                  </h2>
                  <p>
                    When you pick NSAG Mover, you get expertise, guarantee, and
                    a sense of safety. What makes us distinctive is:
                  </p>

                  <ul className="list-inner-wrap">
                    <li>
                      All the movers and packers we send are screened and
                      thoroughly trained for safe handling.
                    </li>
                    <li>
                      Ups-to-date trucks, packing items, and protective gear are
                      used by moving companies.
                    </li>
                    <li>
                      Comprehensive Insurance: Plans that will cover your things
                      in the event of an unexpected event.
                    </li>
                    <li>
                      Services that can be customized for homes, businesses, and
                      moves overseas.
                    </li>
                    <li>
                      Service Centres are Present in Islamabad, Lahore, Karachi,
                      Rawalpindi, Multan, and Elsewhere as Well.
                    </li>
                    <li>
                      People can receive stock market information and answers at
                      any time of day.
                    </li>
                    <li>
                      You can watch all the movements of your shipment every
                      step of its journey.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    Movers and Packers in Major Pakistani Cities
                  </h2>

                  <ul className="list-inner-wrap">
                    <li>
                      NSAG Mover is recognized as the top company in several
                      main markets.
                    </li>
                    <li>
                      Packers and Movers in Islamabad offer moving services to
                      nearby and different cities.
                    </li>
                    <li>
                      Professionals dealing with move-related tasks for both
                      residential and commercial clients in Lahore.
                    </li>
                    <li>
                      Many Packers and Movers in Karachi specialize in handling
                      large, detailed moving jobs.
                    </li>
                    <li>
                      Reliably move from Multan or Rawalpindi with the help of
                      Packers and Movers.
                    </li>
                    <li>
                      Having both local operations and a national network means
                      NSAG Mover can support any move you plan.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 order-lg-2">
                  <h2 className="title mb-2">
                    Tailored Moving Solutions for Every Need
                  </h2>
                  <p>
                    NSAG Mover realises that every moving experience is
                    different. Whether you're relocating a small apartment, a
                    large family home, or an entire office, our team designs
                    custom moving solutions that fit your budget and timeline.
                    We look after all types of items, fragile ones and big ones,
                    always giving them personal attention.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 order-lg-2">
                  <h2 className="title mb-2">
                    Rapid and Efficient Local Movers Near You
                  </h2>
                  <p>
                    Want to hire people who can move you fast, without cutting
                    corners on quality? Teams at NSAG Mover focus on operating
                    precisely and fast which helps ensure trouble-free and
                    speedy results. The company serves neighbourhoods of
                    Islamabad, Lahore and Karachi and your items arrive on the
                    day they are scheduled.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 order-lg-2">
                  <h2 className="title mb-2">
                    Commercial Equipment Movers for Your Business Needs
                  </h2>
                  <p>
                    Organizations depend on NSAG Mover to move their large and
                    sensitive commercial items with care. Relocating machinery,
                    office things, and tech hardware while causing little impact
                    on your work is what we specialize in which makes us a top
                    choice for the best companies in Pakistan.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h2 className="subtitle">
                    Additional Services to Complement Your Move
                  </h2>
                  <p>
                    Many related services from NSAG Mover help make your move
                    easier:
                  </p>
                  <ul className="list-inner-wrap">
                    <li>
                      Plumbing and HVAC Services: Need some support installing
                      an air conditioner or fixing plumbing at your new
                      property? Your trusted partners are ready to assist.
                    </li>
                    <li>
                      International moves involve us filing the necessary
                      customs paperwork and managing clearance to minimize
                      delays.
                    </li>
                    <li>
                      Porta Cabin and Container Offices: Temporary office space
                      solutions for commercial moves.
                    </li>
                    <li>
                      Airport baggage help: Taking care of travelers’ bags when
                      they move overseas.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 order-lg-2">
                  <h2 className="title mb-2">
                    Commitment to 100% Satisfaction Guaranteed
                  </h2>
                  <p>
                    Ensuring your satisfaction is and always will be the main
                    point at NSAG Mover. Since we believe in our work, we offer
                    a 100% satisfaction guarantee so we meet or beat what you
                    expect. The teams responsible for communication, quality
                    assurance and customer service are always on standby to make
                    sure that any challenge is quickly addressed, making your
                    move a success.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 order-lg-2">
                  <h2 className="title mb-2">
                    Contact NSAG Mover Today for a Stress-Free Move
                  </h2>
                  <p>
                    Are you ready to experience professional, reliable, and
                    affordable moving services? NSAG Mover will make your move
                    easier than before. Whether you require home shifting
                    services in Islamabad, Lahore, or Karachi, or comprehensive
                    cargo transport across Pakistan, we are just a call or click
                    away.
                  </p>
                  <p>
                    Go ahead and get a free estimate and NSAG Mover will take
                    care of your move with the professionalism it requires.
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

export default HomePageServices;
