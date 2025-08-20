import React from "react";

const OurOffice = () => {
  return (
    <>
      {/* pricing area start */}
      <div className="pricing-area pd-top-50 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h5 className="subtitle">OUR OFFICES</h5>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner">
                <div className="header">
                  <h4>Lahore Office</h4>
                  <div className="address">
                    <h2 className="d-inline-block">+92 320 8101755</h2>
                    <br></br>
                    <span className="ps-2">
                      <p> Lahore Office: Plot No 109 Sabzazar</p>
                      <p>Truck Stand Band Road Lahore</p>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="details">
                  <div className="contact-g-map">
                    <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.925765300724!2d74.27567287545133!3d31.526198774211334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190310c6377cb9%3A0xebeb4806d5a4734a!2sPlot%20109%2C%20Sabzazar%20Block%20B%20Sabzazar%20Housing%20Scheme%20Phase%201%20%26%202%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1735838515346!5m2!1sen!2s"></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner">
                <div className="header">
                  <h4>Karachi Office (Head Office)</h4>
                  <div className="address">
                    <h2 className="d-inline-block">+92 320 8101750</h2>
                    <br></br>
                    <span className="ps-2">
                      <p>
                        {" "}
                        Building# 14, Street # 16, Sector-F, Main
                        Shaheed-e-Millat Express Way, Defence view service road,
                        Main Khatm-e-Nabuat Chowk
                      </p>
                    </span>
                  </div>
                </div>
                <div className="details">
                  <div className="contact-g-map">
                    <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14219.139252281087!2d67.08028324999997!3d24.836896099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c12f77d3911%3A0xa308699e025e34c3!2sDefence%20View%20Housing%20Society%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1736789182309!5m2!1sen!2s"></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner">
                <div className="header">
                  <h4>Islamabad Office</h4>
                  <div className="address">
                    <h2 className="d-inline-block">+92 320 8101991</h2>
                    <br></br>
                    <span className="ps-2">
                      <p> Al-Yasir Market Near</p>
                      <p>Sabzi Mandi Mor I-10, Islamabad</p>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="details">
                  <div className="contact-g-map">
                    <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.671443118646!2d73.03075678574054!3d33.63976010000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df955a943fa64d%3A0xc4e394d78630d39d!2sSuper%20Five%20Star%20Goods%20Al%20yasir%20Market%20I-10!5e0!3m2!1sen!2s!4v1735980308349!5m2!1sen!2s" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pricing area end */}
    </>
  );
};

export default OurOffice;
