import React from "react";

const FurnitureMoves = () => {
  return (
    <>
      {/* Start Logistics area  */}
      <div className="logistics_area style-02 pt-5 pb-0">
        <div className="container-fluid">
          <div className="row justify-content-start">
            <div className="col-lg-6 remove-col-padding">
            <img
                  src="/assets/img/service/furniture-moves.webp"
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
                    Move Your Furniture Anywhere, Anytime
                  </h2>
                  <p>
                    Whether you're bringing home new furniture from stores or
                    relocating existing pieces to a different location within
                    Pakistan, NSAG has you covered.
                  </p>
                  <p>
                    With our reliable furniture moving services, you can count
                    on us for careful packing and efficient handling of your
                    items. Whether you're moving into a new home, setting up an
                    office, or simply reorganizing, our skilled team ensures a
                    smooth and hassle-free experience.
                  </p>

                  <h2 className="title">Expert Care Every Step of the Way</h2>
                  <p>
                    From booking to final delivery, our professional movers
                    handle every detail with care and precision. Whether it’s a
                    new purchase or a cherished item with sentimental value, we
                    treat every piece with the respect it deserves.
                    </p>
                    <p>At NSAG,
                    safety is our top priority. Your furniture is securely
                    packed and transported to ensure it reaches its destination
                    in perfect condition. With us, your valuables are always in
                    good hands.
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

export default FurnitureMoves;
