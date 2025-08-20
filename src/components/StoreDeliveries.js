import React from "react";

const StoreDeliveries = () => {
  return (
    <>
      {/* Start Logistics area  */}
      <div className="logistics_area style-02 pt-5 pb-0">
        <div className="container-fluid">
          <div className="row justify-content-start">
            <div className="col-lg-6 remove-col-padding">
            <img
                  src="/assets/img/service/store-eliveries.png"
                  className="img-fluid"
                  alt="transport-service images"
                />

              {/* <div className="logistics-image" /> */}
            </div>
            <div className="col-lg-5">
              <div className="logistics-content">
                <div className="section-title  text-left">
                  {/* <span className='subtitle'>Our Core Values</span> */}
                  <h2 className="title">
                    Move Your Favorites From Store to Home With NSAG
                  </h2>
                  <p>
                    Concerned about scratches or damage during furniture
                    transport? NSAG ensures a safe and hassle-free moving
                    experience. Simply provide a few details, and let us handle
                    the rest. Whether it's a single chair or an entire set,
                    we’ll deliver your items from the store to your home on the
                    same day. Shop with confidence and leave the heavy lifting
                    to us!
                  </p>

                  <h2 className="title">Safety & Security</h2>
                  <p>
                    At NSAG, your peace of mind is our priority. We treat your
                    cherished belongings with the utmost care, offering
                    comprehensive insurance coverage to protect against
                    unexpected circumstances. Our dedicated team and rigorous
                    safety measures ensure your items are secure from start to
                    finish. Trust NSAG to provide a reliable, professional, and
                    worry-free moving experience every time.
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

export default StoreDeliveries;
