"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { SetSearchPopUp } from "../redux/stateSlice/clickActionSlice";
import store from "../redux/store/store";

const NavbarTwo = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const searchPopUp = useSelector((state) => state.clickAction.searchPopUp);

  useEffect(() => {
    // Check if we're in the browser before accessing window
    if (typeof window === 'undefined') return;
    
    // Handle scroll to apply sticky navbar
    const handleScroll = () => {
      setActive(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check if we're in the browser before accessing document
    if (typeof document === 'undefined') return;
    
    const items = document.querySelectorAll(".menu-item-has-children > a");

    items.forEach((item) => {
      const clickHandler = (e) => {
        const subMenu = item.parentElement.querySelector(".sub-menu");
        if (subMenu) {
          // e.preventDefault(); // ✅ Only prevent if submenu exists
          subMenu.classList.toggle("active");
          item.classList.toggle("open");
        }
      };
      item.addEventListener("click", clickHandler);
      item._clickHandler = clickHandler;
    });

    return () => {
      items.forEach((item) => {
        if (item._clickHandler) {
          item.removeEventListener("click", item._clickHandler);
        }
      });
    };
  }, []);

  return (
    <>
      {/* navbar start */}
      <header className="navbar-area">
        <nav
          className={
            active
              ? "navbar navbar-area-2 navbar-area navbar-expand-lg sticky-active"
              : "navbar navbar-area-2 navbar-area navbar-expand-lg"
          }
        >
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button
                onClick={() => setOpen(!open)}
                className={
                  open
                    ? "menu toggle-btn d-block d-lg-none open"
                    : "menu toggle-btn d-block d-lg-none"
                }
                data-target="#snag-packers-movers_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
            <div className="logo">
              <Link className="logo-1" href="/">
                <img src="/assets/img/home-2/logo.png" alt="Logo" />
              </Link>
              <Link className="logo-2" href="/">
                <img src="/assets/img/logo-2.png" alt="logo" />
              </Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              <Link className="btn btn-base" href="/book">
                <span></span> Book Now
              </Link>
            </div>
            <div
              className={
                open
                  ? "collapse navbar-collapse sopen"
                  : "collapse navbar-collapse"
              }
              id="snag-packers-movers_main_menu"
            >
              <ul className="navbar-nav menu-open text-end">
                <li>
                  <div className="nav-right-part nav-right-part-desktop"></div>
                </li>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>

                <li className="menu-item-has-children">
                  <Link href="/service">Services</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/house-moving-company">
                        House Moving Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/apartment-relocations">
                        Apartment Relocation Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/office-relocations">
                        Office Relocation Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/international-moves">
                        International Moving Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/shehzore-mazda-for-rent">
                        Mazda Shehzore for Rent
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <Link href="/service">Book A Vehicle</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/store-deliveries">Store Deliveries</Link>
                    </li>
                    <li>
                      <Link href="/storage-boxes-moves">
                        Storage Boxes Moves
                      </Link>
                    </li>
                    <li>
                      <Link href="/pets-and-animals-moves">
                        Pets and Animals Moves
                      </Link>
                    </li>
                    <li>
                      <Link href="/furniture-move">Furniture Move</Link>
                    </li>
                    <li>
                      <Link href="/electronic-moves">Electronic Moves</Link>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <Link href="/service">Cities</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/moving-company-lahore">
                        Packers And Movers In Lahore
                      </Link>
                    </li>
                    <li>
                      <Link href="/moving-company-karachi">
                        Packers And Movers In Karachi
                      </Link>
                    </li>
                    <li>
                      <Link href="/moving-company-islamabad">
                        Packers And Movers In Islamabad
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link href="/blogs">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="nav-right-part nav-right-part-desktop">
              <Link className="btn btn-base" href="/book">
                <span></span> Book Now
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {/* navbar end */}
    </>
  );
};

export default NavbarTwo;