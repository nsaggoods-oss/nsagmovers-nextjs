"use client";
import React, { useState } from "react";

import Link from "next/link";
const NavbarThree = () => {
  const [open, setOpen] = useState(false);

  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }
  return (
    <>
      {/* navbar start */}
      <header className='navbar-are'>
        <nav
          className={
            "navbar navbar-area-1  navbar-area-3 navbar-area navbar-expand-lg"
          }
        >
          <div className='container nav-container'>
            <div className='responsive-mobile-menu'>
              <button
                onClick={() => setOpen(!open)}
                className={
                  open
                    ? "menu toggle-btn d-block d-lg-none open"
                    : "menu toggle-btn d-block d-lg-none "
                }
                data-target='#snag-packers-movers_main_menu'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='icon-left' />
                <span className='icon-right' />
              </button>
            </div>
            <div className='logo'>
              <Link href='/'>
                <img src='/assets/img/logo.webp' alt='snag-packers-movers' />
              </Link>
            </div>
            <div className='nav-left-part'></div>

            <div
              className={
                open
                  ? "collapse navbar-collapse sopen"
                  : "collapse navbar-collapse"
              }
              id='snag-packers-movers_main_menu'
            >
              <ul className='navbar-nav menu-open'>
                <li className='menu-item-has-children current-menu-item'>
                  <Link href='#'>Home</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link href='/'>Home 01</Link>
                    </li>
                    <li>
                      <Link href='/home-2'>Home 02</Link>
                    </li>
                    <li>
                      <Link href='/home-3'>Home 03</Link>
                    </li>
                    <li>
                      <Link href='/home-4'>Home 04</Link>
                    </li>
                    <li>
                      <Link href='/home-5'>Home 05</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href='/about'>About Us</Link>
                </li>
                <li className='menu-item-has-children'>
                  <Link href='#'>Services</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link href='/service'>Service</Link>
                    </li>
                    <li>
                      <Link href='/service-details'>Service Details Page</Link>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <Link href='#'>Pages</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link href='/about'>About Us</Link>
                    </li>
                    <li>
                      <Link href='/service'>Service Page</Link>
                    </li>
                    <li>
                      <Link href='/service-details'>Service Details Page</Link>
                    </li>
                    <li>
                      <Link href='/blog'>Blog Page</Link>
                    </li>
                    <li>
                      <Link href='/blog-details'>Blog Details</Link>
                    </li>
                    <li>
                      <Link href='/pricing'>Pricing</Link>
                    </li>
                    <li>
                      <Link href='/faq'>FAQ</Link>
                    </li>
                    <li>
                      <Link href='/contact'>Contact</Link>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <Link href='#'>Blog</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link href='/blog'>Blog</Link>
                    </li>
                    <li>
                      <Link href='/blog-details'>Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href='/contact'>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* navbar end */}
    </>
  );
};

export default NavbarThree;
