import React from "react";
import Link from "next/link";

const ServiceArea = () => {
  return (
    <>
      {/*  service area start */}
      <div className="transport-service-area pd-top-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title  text-center">
                <span className="subtitle">OUR SERVICES</span>
                <h2 className="title">What We Can Do For You</h2>
              </div>
            </div>
          </div>
          <div className="row transport-service-single">
            <div className="col-lg-6">
              <div className="transport-service-image wow fadeInLeft">
                <img
                  src="/assets/img/service/01.png"
                  className="img-fluid"
                  alt="transport-service images"
                />
                <div className="transport-service-item-hover">
                  <Link href="#">
                    <div className="transport-service-link">
                      <span className="fa fa-eye" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 d-flex">
              <div className="transport-service-content wow fadeInRight">
                <h3 className="title">Furniture</h3>
                <p>
                  Need help moving furniture? Whether it’s a sofa or a bed, our
                  skilled movers ensure your items reach their destination
                  safely and securely.
                </p>
                <div className="btn-wrapper animated fadeInUpBig text-left">
                <Link href="/book" className="boxed-btn blank">
                    Contact for transport
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row transport-service-single">
            <div className="col-lg-6 offset-lg-1 order-lg-2">
              <div className="transport-service-image wow fadeInRight">
                <img
                  src="/assets/img/service/02.png"
                  className="img-fluid"
                  alt="transport-service images"
                />
                <div className="transport-service-item-hover">
                  <Link href="#">
                    <div className="transport-service-link">
                      <span className="fa fa-eye" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 d-flex ">
              <div className="transport-service-content wow fadeInLeft">
                <h3 className="title">Electronics</h3>
                <p>
                  Moving appliances like refrigerators, TVs, or air
                  conditioners? Let us take care of it with precision and care.
                </p>
                <div className="btn-wrapper animated fadeInUpBig text-left">
                <Link href="/book" className="boxed-btn blank">
                    Contact for transport
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row transport-service-single">
            <div className="col-lg-6">
              <div className="transport-service-image wow fadeInLeft">
                <img
                  src="/assets/img/service/03.png"
                  className="img-fluid"
                  alt="transport-service images"
                />
                <div className="transport-service-item-hover">
                  <Link href="#">
                    <div className="transport-service-link">
                      <span className="fa fa-eye" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 d-flex">
              <div className="transport-service-content wow fadeInRight">
                <h3 className="title">Storage Boxes</h3>
                <p>
                  Relocating cardboard-packed belongings? No problem! NSAG
                  movers prioritize the safety of your possessions during
                  transit.
                </p>
                <div className="btn-wrapper animated fadeInUpBig text-left">
                <Link href="/book" className="boxed-btn blank">
                    Contact for transport
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row transport-service-single">
            <div className="col-lg-6 offset-lg-1 order-lg-2">
              <div className="transport-service-image wow fadeInRight">
                <img
                  src="/assets/img/service/04.png"
                  className="img-fluid"
                  alt="transport-service images"
                />
                <div className="transport-service-item-hover">
                  <Link href="#">
                    <div className="transport-service-link">
                      <span className="fa fa-eye" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 d-flex ">
              <div className="transport-service-content wow fadeInLeft">
                <h3 className="title">Pets and Animals
</h3>
                <p>
                Worried about moving your pets? Our specialized movers provide safe and comfortable journeys for your furry friends.
                </p>
                <div className="btn-wrapper animated fadeInUpBig text-left">
                <Link href="/book" className="boxed-btn blank">
                    Contact for transport
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default ServiceArea;
