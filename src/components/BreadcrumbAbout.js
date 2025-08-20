import React from "react";
import Link from "next/link";

const BreadcrumbAbout = ({ title }) => {
  return (
    <>
      {/* breadcrumb start */}
      <div
        className='breadcrumb-area bg-overlay-22'
        style={{ backgroundImage: 'url("/assets/img/banner/about.png")' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='breadcrumb-inner'>
                <div className='section-title mb-0'>
                  <h2 className='page-title'>{title}</h2>
                  <ul className='page-list'>
                    <li>
                      <Link href='/'>HOME</Link>
                    </li>{" "}
                    /<li className='ps-0'>{title}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb end */}
    </>
  );
};

export default BreadcrumbAbout;
