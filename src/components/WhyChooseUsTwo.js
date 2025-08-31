import React from "react";
import { chooseServices } from "../data/chooseServices"; // Update path as needed


const WhyChooseUsTwo = ({ serviceId  }) => {
  // console.log(chooseServices)
  const service = chooseServices.find((item) => item.serviceId === serviceId);
  if (!service) return null;

  const leftItems = service.features.slice(0, 2);
  const rightItems = service.features.slice(2, 4);

  return (
    <div
      className="wcu-area-2 pd-top-115"
      style={{ backgroundImage: "url(/assets/img/wcu/bg-2.webp)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title style-white text-center">
              <h4 className="subtitle style-2">WHY CHOOSE US</h4>
              <h2 className="title">{service.serviceTitle}</h2>
              <p className="content">{service.whyChooseUs}</p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Left Column */}
          <div className="col-lg-4">
            {leftItems.map((item, index) => (
              <div className="single-wcu-wrap style-2" key={index}>
                <div className="icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="details">
                  <h6>{item.title}</h6>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="col-lg-4">
            <div className="thumb text-center">
              <img src="/assets/img/wcu/1.webp" alt="snag-packers-movers" />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-4">
            {rightItems.map((item, index) => (
              <div className="single-wcu-wrap style-2" key={index + 2}>
                <div className="icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="details">
                  <h6>{item.title}</h6>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default WhyChooseUsTwo;
