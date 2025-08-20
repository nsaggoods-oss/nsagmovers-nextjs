// pages/_app.js
"use client";

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import AOS from "aos";
import "aos/dist/aos.css";
// import "../styles/globals.css"; // Uncomment if needed
import '../index.scss';
import GlobalMeta from "../components/GlobalMeta";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <Provider store={store}>
      <GlobalMeta />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
