import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import Link from "next/link";
import OurValues from "./OurValues";
const AboutOne = () => {
  return (
    <>
      {/* about area start */}
      <div className="about-area pd-bottom-120">
        <div className="container">
          <div className="about-area-inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-thumb-wrap">
                  <img
                    className="img-1"
                    src="./assets/img/about/shape.png"
                    alt="snag-packers-movers"
                  />
                  <img
                    className="img-2"
                    src="./assets/img/about/1.png"
                    alt="snag-packers-movers"
                  />
                  <img
                    className="img-3"
                    src="./assets/img/about/2.png"
                    alt="snag-packers-movers"
                  />
                  <div className="exprience-wrap">
                    <img
                      src="/./assets/img/about/shape-3.png"
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
              <div className="col-lg-6 align-self-center">
                <div className="about-inner-wrap">
                  <div className="section-title mb-0">
                    <h4 className="subtitle">ABOUT US</h4>
                    <h2 className="title">
                      Welcome to NSAG Packers and Movers – Since 2015
                    </h2>
                    <p className="content left-line">
                      At
                      <Link href="/" style={{ color: "#fa4318" }}>
                        <strong> NSAG Movers and Packers </strong>
                      </Link>
                      we pride ourselves on delivering reliable, efficient, and
                      stress-free moving solutions across Pakistan. Whether
                      you're an individual, a family, or a business, our
                      dedicated team ensures your relocation is seamless and
                      hassle-free. We understand that moving can be a
                      challenging and overwhelming experience. That’s why our
                      experienced professionals work tirelessly to simplify the
                      process for you. From local moves to international
                      relocations, we’re here to handle every detail with care
                      and precision, ensuring your belongings are safely
                      transported to their destination.
                    </p>
                    <div className="row">
                      <div className="col-xl-6 col-lg-12 col-md-6">
                        <ul className="list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0">
                          <li>
                            <img
                              src="./assets/img/icon/check.png"
                              alt="snag-packers-movers"
                            />
                            Timely Delivery
                          </li>
                          <li>
                            <img
                              src="./assets/img/icon/check.png"
                              alt="snag-packers-movers"
                            />
                            Customized Solutions
                          </li>
                          <li>
                            <img
                              src="./assets/img/icon/check.png"
                              alt="snag-packers-movers"
                            />
                            Extensive Experience
                          </li>
                          <li>
                            <img
                              src="./assets/img/icon/check.png"
                              alt="snag-packers-movers"
                            />
                            Reliability and Security
                          </li>
                          <li>
                            <img
                              src="./assets/img/icon/check.png"
                              alt="snag-packers-movers"
                            />
                            Expert Handling
                          </li>
                          <li>
                            <img
                              src="./assets/img/icon/check.png"
                              alt="snag-packers-movers"
                            />
                            Efficiency
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-6 align-self-center">
                        <div className="thumb">
                          <img
                            src="/./assets/img/about/9.png"
                            alt="snag-packers-movers"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="btn-wrap">
                      <Link className="btn btn-base" href="/about">
                        ABOUT MORE
                      </Link>
                      <div className="author-wrap">
                        <div className="thumb">
                          <img
                            src="/./assets/img/about/4.png"
                            alt="snag-packers-movers"
                          />
                        </div>
                        <div className="details">
                          <img
                            src="./assets/img/about/signature.png"
                            alt="snag-packers-movers"
                          />
                          <p>CEO, Of Company</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about area end */}
      <OurValues></OurValues>
    </>
  );
};

export default AboutOne;
