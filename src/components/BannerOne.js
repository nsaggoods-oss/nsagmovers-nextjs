import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
const BannerOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      {/* banner start */}
      <div className="banner-area banner-area-1">
        <div className="banner-slider owl-carousel">
          <Slider {...settings}>
            <div>
              <div
                className="item"
                style={{ backgroundImage: 'url("/assets/img/banner/1.png")' }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7 col-md-8">
                      <div className="banner-inner style-white">
                        <h2 className="b-animate-2 title">
                          Relocate with Ease and Confidence
                        </h2>
                        <p className="b-animate-3 content">
                          Say goodbye to the stress of moving with NSAG by your
                          side. Count on us to handle your relocation seamlessly
                          and professionally. We excel at making your move
                          worry-free.
                        </p>
                        <div className="btn-wrap">
                          <Link
                            className="btn btn-base b-animate-4"
                            href="/service"
                          >
                            {" "}
                            Explore The Services
                          </Link>
                          <Link
                            className="btn btn-white b-animate-4"
                            href="/contact"
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="item"
                style={{ backgroundImage: 'url("/assets/img/banner/2.png")' }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7 col-md-8">
                      <div className="banner-inner style-white">
                        <h2 className="b-animate-2 title">
                          Hassle-Free Deliveries Like Never Before
                        </h2>
                        <p className="b-animate-3 content">
                          Whether it’s picking up online orders or delivering
                          items from local stores, we’ve got you covered. Best
                          of all, we can complete these tasks in under an hour!
                          Rely on NSAG for swift and reliable furniture-shifting
                          and transportation services.
                        </p>
                        <div className="btn-wrap">
                          <Link
                            className="btn btn-base b-animate-4"
                            href="/service"
                          >
                            {" "}
                            Explore The Services
                          </Link>
                          <Link
                            className="btn btn-white b-animate-4"
                            href="/contact"
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="item"
                style={{ backgroundImage: 'url("/assets/img/banner/4.png")' }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7 col-md-8">
                      <div className="banner-inner style-white">
                        <h2 className="b-animate-2 title">
                          Ship Anything, Anywhere with NSAG Deliveries
                        </h2>
                        <p className="b-animate-3 content">
                          From local to national and even international
                          shipments, NSAG’s enhanced Deliveries feature ensures
                          smooth and secure shipping. Be it a single item or a
                          valuable package, NSAG is your trusted partner for all
                          your delivery needs.
                        </p>
                        <div className="btn-wrap">
                          <Link
                            className="btn btn-base b-animate-4"
                            href="/service"
                          >
                            {" "}
                            Explore The Services
                          </Link>
                          <Link
                            className="btn btn-white b-animate-4"
                            href="/contact"
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* banner end */}
    </>
  );
};

export default BannerOne;
