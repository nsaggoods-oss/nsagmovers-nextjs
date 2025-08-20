import React from "react";
import Link from "next/link";

const FooterBottomOne = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* footer-bottom area start */}
      <div className='footer-bottom-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 text-lg-start text-center'>
              <div className='copyright-area'>
                <p>
                  © Copyright {currentYear} By <Link href='https://www.linkedin.com/in/waseem-sattar/'>Waseem Sattar</Link>, All right
                  reserved.
                </p>
              </div>
            </div>
            {/* <div className='col-lg-6 text-lg-end text-center'>
              <ul>
                <li>
                  <Link href='#'>Terms &amp; Condition</Link>
                </li>
                <li>
                  <Link href='#'>Privacy &amp; Policy</Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      {/* footer-bottom area end */}
    </>
  );
};

export default FooterBottomOne;
