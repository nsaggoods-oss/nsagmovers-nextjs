"use client";
import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegEnvelopeOpen,
} from "react-icons/fa";
import Link from "next/link";
import { getRegionAndNumber } from "../geoService";

const FooterOne = () => {
  const [locationData, setLocationData] = useState({
    phoneNumber: "",
    region: "",
    city: "",
  });

  useEffect(() => {
    const fetchLocationData = async () => {
      const data = await getRegionAndNumber();
      setLocationData(data);
    };

    fetchLocationData();
  }, []);

  const openWhatsApp = () => {
    console.log(locationData.phoneNumber);
    const message = encodeURIComponent(
      "Hello, I would like to know more about your services!"
    );
    const whatsappURL = `https://wa.me/${locationData.phoneNumber}?text=${message}&type=phone_number&app_absent=0`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* footer area start */}
      <footer className="footer-area">
        <div
          className="footer-top"
          style={{ backgroundImage: 'url("/assets/img/footer/bg.png")' }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-6">
                <div className="single-footer-top">
                  <div className="icon">
                    <img
                      src="/assets/img/icon/map-marker.png"
                      alt="snag-packers-movers"
                    />
                  </div>
                  <div className="details">
                    <h6>OFFICE ADDRESS:</h6>
                    <p>
                      Building# 14, Street # 16, Sector-F, Main Shaheed-e-Millat
                    </p>
                    <p>
                      Express Way, Defence view service road, MainKhatm-e-Nabuat
                      Chowk
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="single-footer-top">
                  <div className="icon">
                    <img
                      src="/assets/img/icon/phone.png"
                      alt="snag-packers-movers"
                    />
                  </div>
                  <div className="details">
                    <h6>CONTACT US:</h6>
                    <p>info@nsagmovers.pk</p>
                    <p>+92 320 8101750</p>
                  </div>
                </div>
              </div>
              {/* <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top after-none'>
                  <div className='icon'>
                    <img src='assets/img/icon/clock.png' alt='snag-packers-movers' />
                  </div>
                  <div className='details'>
                    <h6>WORKING HOURS:</h6>
                    <p>Weekdays - Mon-Fri: 8am-21pm</p>
                    <p>Weekend - Sta &amp; Sun: Closed</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <img
                    src="/assets/img/logo-white.png"
                    alt="snag-packers-movers"
                  />
                </div>
                <div className="details">
                  <p>
                    We deliver seamless logistics and moving services tailored
                    to your needs, ensuring safety, speed, and satisfaction at
                    every step.
                  </p>
                  <ul className="social-media style-border">
                    <li>
                      <Link href="https://www.facebook.com/nsaggoods.pk/">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/nsaggoodstransport/">
                        <FaInstagram />
                      </Link>
                    </li>
                    {/* <li>
                    <Link href='#'>
                        <FaTwitter />
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        href="#"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent navigation
                          openWhatsApp(); // Call the function
                        }}
                        style={{ textDecoration: "none", cursor: "pointer" }}
                      >
                        <FaWhatsapp />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">CITIES</h4>
                <ul>
                  <li>
                    <Link
                      href="/moving-company-lahore"
                      title="Top Packers and Movers in Lahore for Stress-Free Relocation"
                    >
                      <FaArrowRight /> Moving Services Lahore
                    </Link>
                  </li>
                  <li>
                    <Link href="/moving-company-karachi">
                      <FaArrowRight /> Moving Services Karachi
                    </Link>
                  </li>
                  <li>
                    <Link href="/moving-company-islamabad">
                      <FaArrowRight /> Moving Services Islamabad
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">OUR SERVICES</h4>
                <ul>
                  <li>
                    <Link
                      href="/house-moving-company"
                      title="Reliable and Affordable House Moving Services in Pakistan"
                    >
                      <FaArrowRight /> House Moving Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/apartment-relocations">
                      <FaArrowRight /> Apartment Relocation Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/furniture-move">
                      <FaArrowRight /> Furniture Moving Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/storage-boxes-moves">
                      <FaArrowRight /> Storage Boxes Moves Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/shehzore-mazda-for-rent">
                      <FaArrowRight /> Mazda Shehzore for Rent
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="widget widget_contact">
                <h4 className="widget-title">CONTACT NOW</h4>
                <div className="single-contact-inner">
                  <div className="icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="details">
                    <p>
                      {" "}
                      Building# 14, Street # 16, Sector-F, Main Shaheed-e-Millat
                      Express Way, Defence view service road, Main
                      Khatm-e-Nabuat Chowk
                    </p>
                  </div>
                </div>
                <div className="single-contact-inner">
                  <div className="icon">
                    <FaMobileAlt />
                  </div>
                  <div className="details  mt-1">
                    <p>+92 320 8101750</p>
                  </div>
                </div>
                <div className="single-contact-inner">
                  <div className="icon">
                    <FaRegEnvelopeOpen />
                  </div>
                  <div className="details mt-1">
                    <p>info@nsagmovers.pk</p>
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

export default FooterOne;
