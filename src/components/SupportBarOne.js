"use client";

import React, { useEffect, useState } from "react";
import {
  FaBuffer,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaRegEnvelope,
  FaUserAlt,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast, Toaster } from "react-hot-toast";

const SupportBarOne = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    toast.success("User logged out");
    router.push("/");
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="support-bar">
        <div className="container">
          <div className="row reorder-xs clearfix">
            <div className="col-lg-6 align-self-center">
              <div className="support-left">
                <ul>
                  <li className="sign-nav ps-3">
                    {/* <Link className="sen-signin" href="#0"> */}
                      <FaUserAlt />
                      {isLoggedIn ? (
                        <button
                          onClick={handleLogout}
                          style={{
                            background: "none",
                            border: "none",
                            color: "white",
                            cursor: "pointer",
                          }}
                        >
                          Logout
                        </button>
                      ) : (
                        <Link href="/login">Sign In</Link>
                      )}
                    {/* </Link> */}
                  </li>

                  <li>
                    <Link href="mailto:info@nsagmovers.pk">
                      <FaRegEnvelope />
                      info@nsagmovers.pk
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+923208101750">
                      <FaPhoneAlt />
                      0320 8101750
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="support-right">
                <ul>
                  <li className="fare-rate-responsive">
                    <Link href="/book">
                      <FaBuffer />
                      Get a Quote
                    </Link>
                  </li>
                  <li>
                    <ul className="social-link">
                      <li>
                        <Link
                          href="https://www.facebook.com/nsaggoods.pk/"
                          className="facebook"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebookF />
                          Facebook
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.instagram.com/nsaggoodstransport/"
                          className="instagram"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram />
                          Instagram
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportBarOne;
