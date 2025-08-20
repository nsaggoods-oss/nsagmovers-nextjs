import React from "react";
import { flexibleServices } from "../data/flexibleServices"; // Update path as needed


const OurServiceValues = ({ serviceId }) => {
  const filteredServices = flexibleServices.filter(
    (item) => item.serviceId === serviceId
  );
  if (filteredServices.length === 0) return null;

  // Assuming all items in this group have the same description
  const sectionDescription = filteredServices[0].serviceDescription;
  return (
    <>
      {/* pricing area start */}
      <div className="pricing-area pd-top-60">
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h5 className="subtitle">OUR VALUES</h5>
              <h2 className="title">OUR FLEXIBLE SERVICES</h2>
              <p className="content mt-2">{sectionDescription}</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row justify-content-center">
          {filteredServices.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="single-pricing-inner">
                <div className="header">
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt="nsag-packers-movers"
                      style={{ height: 48, marginBottom: 10 }}
                    />
                  )}
                  <div className="price">
                    <h2 className="d-inline-block">{item.title}</h2>
                  </div>
                  <h4>{item.subtitle}</h4>
                </div>
                <div className="details">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      {/* pricing area end */}
    </>
  );
};

export default OurServiceValues;
