import React from "react";
import Link from "next/link";

const OurServices = () => {
  return (
    <>
      {/* Start Solution area  */}
      <div className="pd-top-120"></div>
      <div className="solution_area text-center ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title ">
                <h4 className="subtitle">OUR SERVICES</h4>
                <h2 className="title">Move Anything, Anytime, Anywhere</h2>

                <p>
                  With vast experience, NSAG is your trusted partner for diverse
                </p>
              </div>
            </div>
          </div>
          <div className="row  justify-content-center">
            <div className="col-lg-2 col-md-4 col-sm-4">
              <div className="solution-item">
              <Link href="/house-moving-company" title="Reliable and Affordable House Moving Services in Pakistan">
                <div className="solution-image">
                  <img
                    src="/assets/img/solution/01.png"
                    className="img-fluid"
                    alt="Reliable and Affordable House Moving Services in Pakistan"
                  />
                </div>
                <h4 className="title">House Moves</h4>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-4  col-sm-4">
              <div className="solution-item">
              <Link href="/apartment-relocations">
                <div className="solution-image">
                  <img
                    src="/assets/img/solution/02.png"
                    className="img-fluid"
                    alt="Reliable and Affordable House Moving Services in Pakistan"
                  />
                </div>
                <h4 className="title">Apartments Moves</h4>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-4   col-sm-4">
              <div className="solution-item">
              <Link href="/office-relocations" title="">
                <div className="solution-image">
                  <img
                    src="/assets/img/solution/03.png"
                    className="img-fluid"
                    alt="Targeting corporate and business clients for office moves"

                  />
                </div>
                <h4 className="title">Office/Corporate Moves</h4>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-4   col-sm-4">
              <div className="solution-item">
              <Link href="/international-moves">
                <div className="solution-image">
                  <img
                    src="/assets/img/solution/04.png"
                    className="img-fluid"
                    alt="solution image"
                  />
                </div>
                <h4 className="title">International Moves</h4>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-4   col-sm-4">
              <div className="solution-item">
              <Link href="/store-deliveries" title="Store delivery services for e-commerce or retailers">
                <div className="solution-image">
                  <img
                    src="/assets/img/solution/05.png"
                    className="img-fluid"
                    alt="Store delivery services for e-commerce or retailers"
                  />
                </div>
                <h4 className="title">Store Deliveries Move</h4>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-4   col-sm-4">
              <div className="solution-item">
              <Link href="/furniture-move">
                <div className="solution-image">
                  <img
                    src="/assets/img/solution/06.png"
                    className="img-fluid"
                    alt="solution image"
                  />
                </div>
                <h4 className="title">Furniture Moves</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Solution area  */}
    </>
  );
};

export default OurServices;
