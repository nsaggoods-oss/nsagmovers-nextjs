import React from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegEnvelopeOpen,
  FaRegPaperPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

const FooterTwo = () => {
  return (
    <>
      {/* footer area start */}
      <footer className='footer-area style-2'>
        <div className='footer-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 align-self-center'>
                <div className='footer-top-subscribe'>
                  <div className='thumb'>
                    <img src='/assets/img/logo-white.webp' alt='snag-packers-movers' />
                  </div>
                  <div className='media-left'>
                    <h3>SUBSCRIBE OUR LATEST NEWS &amp; ARTICLES.</h3>
                  </div>
                  <div className='media-body widget widget_subscribe mb-0'>
                    <div className='single-subscribe-inner'>
                      <input type='text' placeholder='Email Address' />
                      <Link className='btn btn-base' href='#'>
                        <FaRegPaperPlane />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-lg-6'>
              <div className='widget widget_about'>
                <h4 className='widget-title'>ABOUT COMPANY</h4>
                <div className='details'>
                  <p>
                    Quickly supply alternative strategic theme areas vis-a-vis
                    B2C mindshare. Objectively repurpose stand-alone synergy via
                    user-centric architectures.
                  </p>
                  <ul className='social-media style-border'>
                    <li>
                      <Link href='#'>
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <FaWhatsapp />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-lg-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>USEFULL LINKS</h4>
                <ul>
                  <li>
                    <Link href='/about'>
                      <FaArrowRight /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link href='/service'>
                      <FaArrowRight /> Services
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <FaArrowRight /> Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href='/blog'>
                      <FaArrowRight />
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact'>
                      <FaArrowRight /> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-2 col-lg-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>OUR SERVICES</h4>
                <ul>
                  <li>
                    <Link href='#'>
                      <FaArrowRight /> Air Freight
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <FaArrowRight /> Ocean Freight
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <FaArrowRight /> Railway Freight
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <FaArrowRight /> Warehousing
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <FaArrowRight /> Distribution
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6'>
              <div className='widget widget_contact'>
                <h4 className='widget-title'>CONTACT NOW</h4>
                <div className='single-contact-inner'>
                  <div className='icon'>
                    <FaMapMarkerAlt />
                  </div>
                  <div className='details'>
                    <p>2245 Gilbert Ave, Cincinnati, OH</p>
                    <p>45206, United States</p>
                  </div>
                </div>
                <div className='single-contact-inner'>
                  <div className='icon'>
                    <FaMobileAlt />
                  </div>
                  <div className='details'>
                    <p>+1 800-226-4054</p>
                    <p>+1 800-654-7896</p>
                  </div>
                </div>
                <div className='single-contact-inner'>
                  <div className='icon'>
                    <FaRegEnvelopeOpen />
                  </div>
                  <div className='details'>
                    <p>info.logic@snag-packers-movers.com</p>
                    <p>info@snag-packers-movers.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </>
  );
};

export default FooterTwo;
