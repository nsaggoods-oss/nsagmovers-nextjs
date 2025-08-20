"use client";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
const WhyChooseUsOne = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/*wcu-area start*/}
      <div
        className="wcu-area bg-overlay "
        style={{ background: "url(assets/img/wcu/bg.png)" }}
      >
        <img className="img-1" src="/assets/img/wcu/1.png" alt="snag-packers-movers" />
        <img className="img-2" src="/assets/img/wcu/2.png" alt="snag-packers-movers" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-6 order-lg-2">
              <div className="video-thumb-wrap">
                <img src="/assets/img/wcu/video.png" alt="snag-packers-movers" />
                <span
                  className="video-play-btn cursor-pointer"
                  data-effect="mfp-zoom-in"
                  onClick={() => setOpen(true)}
                >
                  <FaPlay />
                </span>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 order-lg-1">
              <div className="section-title style-white mb-0">
                <h4 className="subtitle style-2">WHY CHOOSE US</h4>
                <h2 className="title">WHY CHOOSE FOR US</h2>
                <p className="content">
                  Benefits of Hiring NSAG Office Shifting Company
                </p>
              </div>
              <div className="single-wcu-wrap">
                <div className="icon">
                  <img src="/assets/img/wcu/icon-1.png" alt="snag-packers-movers" />
                </div>
                <div className="details">
                  <h6>Timely Delivery</h6>
                  <p>
                    We prioritize speed without compromising on safety or
                    quality, ensuring your shipments arrive on schedule.
                  </p>
                </div>
              </div>
              <div className="single-wcu-wrap">
                <div className="icon">
                  <img src="/assets/img/wcu/icon-2.png" alt="snag-packers-movers" />
                </div>
                <div className="details">
                  <h6>Customized Solutions</h6>
                  <p>
                    We understand that every shipment is unique. That's why we
                    offer customized transportation solutions.
                  </p>
                </div>
              </div>
              <div className="single-wcu-wrap">
                <div className="icon">
                  <img src="/assets/img/wcu/icon-3.png" alt="snag-packers-movers" />
                </div>
                <div className="details">
                  <h6>Extensive Experience</h6>
                  <p>
                    With years of experience in the industry, we bring expertise
                    in handling diverse goods.
                  </p>
                </div>
              </div>
              <div className="single-wcu-wrap">
                <div className="icon">
                  <img src="/assets/img/wcu/icon-3.png" alt="snag-packers-movers" />
                </div>
                <div className="details">
                  <h6>Reliability and Security</h6>
                  <p>
                    Your goods are in safe hands. We prioritize security
                    measures and employ.
                  </p>
                </div>
              </div>
              <div className="single-wcu-wrap">
                <div className="icon">
                  <img src="/assets/img/wcu/icon-3.png" alt="snag-packers-movers" />
                </div>
                <div className="details">
                  <h6>Expert Handling</h6>
                  <p>
                    With our experienced logistics professionals and
                    well-maintained fleet.
                  </p>
                </div>
              </div>
              <div className="single-wcu-wrap">
                <div className="icon">
                  <img src="/assets/img/wcu/icon-3.png" alt="snag-packers-movers" />
                </div>
                <div className="details">
                  <h6>Efficiency</h6>
                  <p>
                    Our streamlined processes & dedicated team your goods reach
                    their destination quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*wcu-area end*/}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="XM6kTQPzzpQ"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default WhyChooseUsOne;
