import React from "react";

const PetsMoves = () => {
  return (
    <>
      {/* Start Logistics area  */}
      <div className="logistics_area style-02 pt-5 pb-0">
        <div className="container-fluid">
          <div className="row justify-content-start">
            <div className="col-lg-6 remove-col-padding">
              {/* <div className="logistics-image" /> */}
              <img
                  src="/assets/img/service/04.png"
                  className="img-fluid"
                  alt="transport-service images"
                />
            </div>
            <div className="col-lg-5">
              <div className="logistics-content">
                <div className="section-title  text-left">
                  {/* <span className='subtitle'>Our Core Values</span> */}
                  <h2 className="title">
                  Let Us Ease the Journey Your Pet’s Stress-Free Move!
                  </h2>
                  <p>
                    Whether it’s a cat, dog, or any cherished pet, NSAG
                    understands the love and care they deserve during a move.
                    With our expert team of pet handlers, we guarantee a secure
                    and comfortable journey for your pets, no matter the
                    distance. Just book a truck through our easy-to-use
                    platform, and we’ll handle everything from there.
                  </p>

                  <h2 className="title">Your Pets Are Family to Us</h2>
                  <p>
                    At NSAG, we understand the bond you share with your pets,
                    which is why their safety and security are at the heart of
                    everything we do. From the moment they are picked up until
                    they arrive at their new home, our pet relocation
                    specialists ensure they are treated with the care and
                    respect they deserve. Choose NSAG for a smooth, secure, and
                    stress-free moving experience for you and your furry family
                    members.
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

export default PetsMoves;
