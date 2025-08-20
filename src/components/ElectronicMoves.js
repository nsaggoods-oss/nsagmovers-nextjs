import React from "react";

const ElectronicMoves = () => {
  return (
    <>
      {/* Start Logistics area  */}
      <div className="logistics_area style-02 pt-5 pb-0">
        <div className="container-fluid">
          <div className="row justify-content-start">
            <div className="col-lg-6 remove-col-padding">

              {/* <div className="logistics-image" /> */}
              <img
                  src="/assets/img/service/electronic-moves.png"
                  className="img-fluid"
                  alt="transport-service images"
                />
            </div>
            <div className="col-lg-5">
              <div className="logistics-content">
                <div className="section-title  text-left">
                  {/* <span className='subtitle'>Our Core Values</span> */}
                  <h2 className="title">Lets Electronics Right to Your Doorstep</h2>
                  <p>
                    From a brand-new refrigerator to that long-awaited
                    television, NSAG is your trusted partner for all your
                    electronics delivery needs. With just a few taps on our app,
                    you can leave the heavy lifting to us.
                  </p>{" "}
                  <p>
                    As expert movers, we ensure your appliances are transported
                    from the store to your home the same day, without any
                    inconvenience or delay. Shop with confidence, and let us
                    take care of the rest!
                  </p>
                  <h2 className="title">Protection You Can Trust</h2>
                  <p>
                    Your peace of mind matters to us. That’s why NSAG offers
                    comprehensive insurance to safeguard your belongings
                    throughout the delivery process. With NSAG, your electronics
                    are not only efficiently transported but also fully
                    protected, giving you complete confidence every step of the
                    way. Trust NSAG for a reliable, secure, and stress-free
                    delivery experience!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Logistics area  */}
    </>
  );
};

export default ElectronicMoves;
