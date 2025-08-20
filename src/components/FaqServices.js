import React from "react";

const FaqServices = ({
  serviceId,
  faqData = [],
  title ,
  subtitle,
}) => {
  const filteredFaqs = faqData.filter((faq) => faq.serviceId === serviceId);
  return (
    <>
      {/*faq-area start*/}
      <div>
      <div className='container p-sm-0'>
        <div className='row'>
          <div className='col-xl-6 col-lg-5 order-lg-2'>
            <div className='thumb text-center mb-4 mb-lg-0'>
              <img src='assets/img/faq/1.png' alt='faq-image' />
            </div>
          </div>
          <div className='col-xl-6 col-lg-7 order-lg-1'>
            <div className='section-title'>
              <h4 className='subtitle'>{title}</h4>
              <h2 className='title'>{subtitle}</h2>
              <p className='content'>
                Progressively utilize integrated bandwidth via vertical relationships. Objectively impact emerging human capital via tactical methods of empowerment.
              </p>
            </div>
            <div className='accordion faq-accordion' id='accordionExample'>
              {filteredFaqs.map((faq, index) => (
                <div className='accordion-item single-accordion-inner' key={index}>
                  <h2 className='accordion-header' id={`heading${index}`}>
                    <button
                      className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 0 ? 'true' : 'false'}
                      aria-controls={`collapse${index}`}
                    >
                      <span>{index + 1}.</span> {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
      {/*faq-area end*/}
    </>
  );
};

export default FaqServices;
