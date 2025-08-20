import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
const FeatureOne = () => {
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
    initialSlide: 0,
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
      {/* feature area start */}
      <div className="container">
        <div className="feature-area mb-60">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-title mb-0">
                <h4 className="subtitle">FEATURES</h4>
                <h2 className="title">WHAT WE OFFER</h2>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-title">
                <p className="content left-line">
                  NSAG Office Shifting Company offers reliable and efficient
                  goods transportation services designed to meet the diverse
                  needs of businesses across various industries. With a focus on
                  safety and timely deliveries, NSAG ensures that your goods are
                  handled with the utmost care and professionalism. Our fleet of
                  modern vehicles and experienced drivers are equipped to manage
                  both local and long-distance hauls, making us a trusted
                  partner for all your logistics needs. Whether you’re
                  transporting heavy machinery or delicate items, NSAG provides
                  tailored solutions to ensure your goods reach their
                  destination securely and on schedule.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-slider owl-carousel">
            <Slider {...settings}>
              <div className="item">
                <div className="feature-wrap bg-pink">
                  <div className="icon">
                    <img src="/assets/img/icon/feature-1.png" alt="snag-packers-movers" />
                  </div>
                  <h5>Online Truck Booking</h5>
                  <p>
                    Optimal storage capacity ensures efficient inventory
                    management
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="feature-wrap bg-ash">
                  <div className="icon">
                    <img src="/assets/img/icon/feature-2.png" alt="snag-packers-movers" />
                  </div>
                  <h5>Goods Transportation</h5>
                  <p>
                    Smart Warehousing optimizes logistics through automation
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="feature-wrap bg-sky">
                  <div className="icon">
                    <img src="/assets/img/icon/feature-3.png" alt="snag-packers-movers" />
                  </div>
                  <h5>Home & Office Relocation</h5>
                  <p>
                    Modern equipment employs cutting-edge technology o enhance.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="feature-wrap bg-ash">
                  <div className="icon">
                    <img src="/assets/img/icon/feature-2.png" alt="snag-packers-movers" />
                  </div>
                  <h5>Home Shifting</h5>
                  <p>
                    Convenient shelving solutions maximize space and
                    organization
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="feature-wrap bg-ash">
                  <div className="icon">
                    <img src="/assets/img/icon/feature-2.png" alt="snag-packers-movers" />
                  </div>
                  <h5>Crane Rental Services</h5>
                  <p>
                    Efficient house shifting services ensure a smooth and
                    hassle-free.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* feature area end */}
    </>
  );
};

export default FeatureOne;
