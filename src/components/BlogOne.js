"use client";
import React from "react";
import { FaRegCalendarAlt, FaUserAlt } from "react-icons/fa";
import Link from "next/link";

const BlogOne = () => {
  return (
    <>
      {/*blog-area start*/}
      <div className="blog-area pd-top-115 pt-lg-0">
        <div className="container p-sm-0">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h4 className="subtitle">LATEST BLOG</h4>
                <h2 className="title">Latest Blog & News</h2>
                {/* <p className='content'>
                  Dramatically enhance interactive metrics for reliable
                  services. Proactively unleash fully researched e-commerce.
                </p> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="thumb">
                  <img src="/assets/img/blog/1.png" alt="snag-packers-movers" />
                </div>
                <div className="details">
                  <h4>
                    <Link href="/blog-details">
                      Home & Office Relocation !Reliable Cold Storage Solutions
                    </Link>
                  </h4>
                  <ul className="blog-meta">
                    <li>
                      <FaUserAlt /> by NSAGGoods
                    </li>
                    <li>
                      <FaRegCalendarAlt /> 12 August
                    </li>
                  </ul>
                  <Link className="read-more-text" href="/blog-details">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="thumb">
                  <img src="/assets/img/blog/2.png" alt="snag-packers-movers" />
                </div>
                <div className="details">
                  <h4>
                    <Link href="/blog-details">
                      Reliable Office Shifting Services for Your Business
                    </Link>
                  </h4>
                  <ul className="blog-meta">
                    <li>
                      <FaUserAlt /> By{" "}
                      <Link className="ms-1" href="#">
                        {" "}
                        Admin
                      </Link>
                    </li>
                    <li>
                      <FaRegCalendarAlt /> 12 August
                    </li>
                  </ul>
                  <Link className="read-more-text" href="/blog-details">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-inner">
                <div className="thumb">
                  <img src="/assets/img/blog/3.png" alt="snag-packers-movers" />
                </div>
                <div className="details">
                  <h4>
                    <Link href="/blog-details">
                      Home Shifting: Safe Vehicle Transport Solutions
                    </Link>
                  </h4>
                  <ul className="blog-meta">
                    <li>
                      <FaUserAlt /> by NSAGGoods
                    </li>
                    <li>
                      <FaRegCalendarAlt /> 12 August
                    </li>
                  </ul>
                  <Link className="read-more-text" href="/blog-details">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*blog-area end*/}
    </>
  );
};

export default BlogOne;
