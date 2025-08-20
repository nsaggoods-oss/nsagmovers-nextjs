import React from "react";
import Link from "next/link";

const OurValues = () => {
  return (
    <>
      {/* pricing area start */}
      <div className="pricing-area pd-top-50 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="section-title text-center">
                <h5 className="subtitle">OUR VALUES</h5>
                <h2 className="title">OUR MISSION</h2>
                <p className="content mt-2">
                  At
                  <Link href="/" style={{ color: "#fa4318" }}>
                    <strong> NSAG Movers and Packers </strong>
                  </Link>
                  our mission is to redefine the moving experience by providing
                  seamless, reliable, and customer-centric relocation solutions.
                  We are committed to delivering excellence in every move,
                  ensuring the safe handling of your belongings with care and
                  professionalism. Through innovation, efficiency, and a
                  dedicated team, we strive to make every transition stress-free
                  and convenient, helping our clients start their next chapter
                  with confidence and peace of mind.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="single-pricing-inner flex-grow-1 d-flex flex-column">
                <div className="header">
                  <h4>Responsibility</h4>
                </div>
                <div className="details">
                  <p>
                    We take shared accountability seriously and approach every
                    challenge with a proactive, solution-focused mindset,
                    ensuring that we prioritize progress over obstacles.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="single-pricing-inner flex-grow-1 d-flex flex-column">
                <div className="header">
                  <h4>Integrity</h4>
                </div>
                <div className="details">
                  <p>
                    Guided by a steadfast commitment to transparency, we foster
                    an environment where stakeholders feel empowered to question
                    and challenge our practices, driving trust and
                    accountability in all we do.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="single-pricing-inner flex-grow-1 d-flex flex-column">
                <div className="header">
                  <h4>Teamwork</h4>
                </div>
                <div className="details">
                  <p>
                    Our success is built on the foundation of teamwork, where
                    diverse skills and perspectives come together to create
                    meaningful and impactful results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* pricing area end */}
    </>
  );
};

export default OurValues;
