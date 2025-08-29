import React from "react";

const Faq = () => {
  return (
    <>
      {/*faq-area start*/}
      <div>
        <div className="container p-sm-0">
          <div className="row">
            <div className="col-xl-6 col-lg-5 order-lg-2">
              <div className="thumb text-center mb-4 mb-lg-0">
                <img src="/assets/img/contact/1.webp" alt="snag-packers-movers" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 order-lg-1">
              <div className="section-title">
                <h2 className="title"> HOW TO BOOK A MOVE WITH NSAG? </h2>

              </div>
              <div className="accordion faq-accordion" id="accordionExample">
                <div className="accordion-item single-accordion-inner">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span>1.</span> Select Your Service
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Choose “Moving/Relocation” for a full-house move or “Small
                      Moves” for single items.
                    </div>
                  </div>
                </div>
                <div className="accordion-item single-accordion-inner">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span>2.</span> Provide Your Details
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Fill in the required information about your move.
                    </div>
                  </div>
                </div>
                <div className="accordion-item single-accordion-inner ">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span>3.</span> Get an Instant Quote
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Receive your estimated cost within seconds.
                    </div>
                  </div>
                </div>
                <div className="accordion-item single-accordion-inner mb-0">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <span>4.</span> Relax and Let Us NSAG
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    Confirm your booking and let our reliable movers handle the rest.


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*faq-area end*/}
    </>
  );
};

export default Faq;
