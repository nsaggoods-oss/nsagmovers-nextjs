import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const FooterThree = () => {
  return (
    <>
      {/* footer area start  */}
      <footer className='footer-area-3'>
        {/* Widget Area Starts */}
        <div className='footer-widget-area'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 tab-margin-bottom-30'>
                <div className='footer-widget widget about_us_widget'>
                  <div className='footer-logo'>
                    <Link href='/'>
                      <img src='assets/img/logo-white.png' alt='logo' />
                    </Link>
                  </div>
                  <p className='text-white'>
                    Affronting everything discretion men now own did. Still
                    round match we to. Frankness pronounce daughters remainder
                    extensive has but. Building mr concerns servants in he
                    outlived am breeding.
                  </p>
                </div>
              </div>
              <div className='col-lg-2 offset-lg-1 tab-margin-bottom-30'>
                <div className='footer-widget widget widget_nav_menu'>
                  <h5 className='widget-title text-white'>Valuable link</h5>
                  <ul>
                    <li>
                      <Link href='#'>Services</Link>
                    </li>
                    <li>
                      <Link href='#'>Classic List</Link>
                    </li>
                    <li>
                      <Link href='#'>About us</Link>
                    </li>
                    <li>
                      <Link href='#'>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-2 tab-margin-bottom-30'>
                <div className='footer-widget widget widget_nav_menu'>
                  <h5 className='widget-title text-white'>Address </h5>
                  <p>813 West Livingston Drive</p>
                  <p>King Of Prussia, PA 19406</p>
                  <p>Phone: +8801-234-567-890</p>
                  <p> Email: hemal.jms@gmail.com</p>
                </div>
              </div>
              <div className='col-lg-3 offset-lg-1'>
                <div className='footer-widget widget'>
                  <h5 className='widget-title text-white'>Latest Update</h5>
                  <p> Of friendship on inhabiting</p>
                  <p>Did friendly eat breeding</p>
                  <p>Object he barton no effect</p>
                  <p>Period so to oppose we</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Widget Area End */}
        {/* Copyright Area Starts */}
        <div className='footer-copyright-area'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='copyright-text'>
                  <span>
                    © 2022{" "}
                    <Link href='#' className='active'>
                      snag-packers-movers
                    </Link>{" "}
                    - All rights reserved. <Link href='#'>wowtheme7</Link>.
                  </span>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='footer-social'>
                  <ul className='social-link'>
                    <li>
                      <Link href='#' className='facebook'>
                        {" "}
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='twitter'>
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='https://www.youtube.com/channel/UCz1tS-oRzKeElBOd6pIjgLQ'
                        className='youtube'
                      >
                        <FaYoutube />
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='instagram'>
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright Area End */}
      </footer>
    </>
  );
};

export default FooterThree;
