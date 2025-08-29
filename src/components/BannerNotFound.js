import React from "react";
import Link from "next/link";
const BannerNotFound = () => {
  return (
    <>
      {/* banner start */}
      <div className="banner-area banner-area-1">
        <div className="banner-slider owl-carousel">
          <div
            className="item"
            style={{ backgroundImage: 'url("/assets/img/banner/1.webp")' }}
            loading="lazy"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-8">
                  <div className="banner-inner style-white">
                    <h2 className="b-animate-2 title">
                      Oops.! Page Not Found!
                    </h2>
                    <p className="b-animate-3 content">
                      The page you are looking for does not exist
                    </p>
                    <div className="btn-wrap">
                      <Link className="btn btn-base b-animate-4" href="/">
                        Back to home
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
    </>
  );
};

export default BannerNotFound;
