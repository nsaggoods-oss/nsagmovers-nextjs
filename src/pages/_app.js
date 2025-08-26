// pages/_app.js
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import AOS from "aos";
import "aos/dist/aos.css";
// import "../styles/globals.css"; // Uncomment if needed
import '../index.scss';
import GlobalMeta from "../components/GlobalMeta";
import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";

function MyApp({ Component, pageProps }) {
  const router = useRouter();


  // define paths where you don’t want buttons
  const hiddenPaths = ["/login", "/blog-create", "/blog-list"];
  const shouldHideButtons = hiddenPaths.some((path) =>
    router.pathname.startsWith(path)
  );


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
       {/* ✅ Conditionally render buttons like in React Router */}
       {!shouldHideButtons && (
        <>

          <WhatsAppButton />
          <CallButton />
        </>
      )}
    </Provider>
  );
}

export default MyApp;
