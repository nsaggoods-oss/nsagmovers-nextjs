import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Slider from "react-slick";

const ServiceTwo = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* service area start */}
      <div
        className="service-area pd-top-115 pd-bottom-120"
        style={{ background: "#f9f9f9" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="section-title">
                <h4 className="subtitle style-2">SERVICES</h4>
                <h2 className="title">OUR SERVICE FOR YOU</h2>
                <p>
                Opting for NSAG Movers and Packers means choosing unmatched efficiency and reliability. Our extensive network and state-of-the-art tracking systems provide real-time updates, keeping you informed throughout your move. We offer a comprehensive range of services, including local and long-distance relocations, office moves, and specialized packing for fragile items.
                </p>
             </div>
            </div>
            <div className="col-lg-3 text-lg-end align-self-center">
              <div className="btn-wrap mb-5 mb-lg-0">
                <Link className="btn btn-base" href="/service">
                  VIEW ALL SERVICES
                </Link>
              </div>
            </div>
          </div>
          <div className="service-slider owl-carousel">
            <Slider {...settings}>
              <div className="item">
                <div
                  className="single-service-wrap-2"
                  style={{ backgroundImage: "url(assets/img/service/10.png)" }}
                >
                  <div className="thumb">
                    <div className="icon">
                      <img
                        src="/assets/img/service/service-icon-003.png"
                        alt="snag-packers-movers"
                      />
                      <img
                        className="img-2"
                        src="/assets/img/service/service-icon-03.png"
                        alt="snag-packers-movers"
                      />
                    </div>
                  </div>
                  <div className="details">
                    <h5> RELOCATIONS </h5>
                    <p>
                    Relocate your home effortlessly with NSAG’s expert movers. We handle everything from packing to setting up your new space.
                    </p>
                    <div className="btn-wrap">
                      <Link className="read-more-text" href="/house-moving-company">
                        READ MORE{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="single-service-wrap-2"
                  style={{ backgroundImage: "url(assets/img/service/10.png)" }}
                >
                  <div className="thumb">
                    <div className="icon">
                      <img
                        src="/assets/img/service/service-icon-003.png"
                        alt="snag-packers-movers"
                      />
                      <img
                        className="img-2"
                        src="/assets/img/service/service-icon-03.png"
                        alt="snag-packers-movers"
                      />
                    </div>
                  </div>
                  <div className="details">
                    <h5>BOOK A VECHICLE </h5>
                    <p>
                    Move your office seamlessly with NSAG’s professional team. We ensure secure and efficient transitions for businesses of all sizes.
                    </p>
                    <div className="btn-wrap">
                      <Link className="read-more-text" href="/office-relocations" title="Targeting corporate and business clients for office moves">
                        READ MORE{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="single-service-wrap-2"
                  style={{ backgroundImage: "url(assets/img/service/11.png)" }}
                >
                  <div className="thumb">
                    <div className="icon">
                      <img
                        src="/assets/img/service/service-icon-003.png"
                        alt="snag-packers-movers"
                      />
                      <img
                        className="img-2"
                        src="/assets/img/service/service-icon-03.png"
                        alt="snag-packers-movers"
                      />
                    </div>
                  </div>
                  <div className="details">
                    <h5>STORE DELIVERIES </h5>
                    <p>
                    Safely store and deliver your items with NSAG’s reliable service. From pickup to delivery, we ensure secure handling every step.
                    </p>
                    <div className="btn-wrap">
                      <Link className="read-more-text" href="/store-deliveries" title="Store delivery services for e-commerce or retailers">
                        READ MORE{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="single-service-wrap-2"
                  style={{ backgroundImage: "url(assets/img/service/12.png)" }}
                >
                  <div className="thumb">
                    <div className="icon">
                      <img
                        src="/assets/img/service/service-icon-003.png"
                        alt="snag-packers-movers"
                      />
                      <img
                        className="img-2"
                        src="/assets/img/service/service-icon-03.png"
                        alt="snag-packers-movers"
                      />
                    </div>
                  </div>
                  <div className="details">
                    <h5>PACKERS AND MOVERS</h5>
                    <p>
                    Our skilled packers and movers handle every detail of your move and relocation. Enjoy stress-free relocation with NSAG’s all-in-one service.
                    </p>
                    <div className="btn-wrap">
                      <Link
                        className="read-more-text"
                        href="/moving-company-lahore" title="Top Packers and Movers in Lahore for Stress-Free Relocation"
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
            </Slider>
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default ServiceTwo;
