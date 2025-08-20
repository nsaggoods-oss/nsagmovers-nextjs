import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic";
import Preloader from "../elements/Preloader";
import SEO from "../elements/SEO";
import SEOConfig from "../elements/SEOConfig";
import BreadcrumbAbout from "../components/BreadcrumbAbout";

// Dynamically imported components
const AboutOne = dynamic(() => import("../components/AboutOne"), { suspense: true });
const CounterOne = dynamic(() => import("../components/CounterOne"), { suspense: true });
const FooterBottomOne = dynamic(() => import("../components/FooterBottomOne"), { suspense: true });
const FooterOne = dynamic(() => import("../components/FooterOne"), { suspense: true });
const NavbarTwo = dynamic(() => import("../components/NavbarTwo"), { ssr: false, suspense: true });
const PartnerOne = dynamic(() => import("../components/PartnerOne"), { suspense: true });
const SearchPopup = dynamic(() => import("../elements/SearchPopup"), { suspense: true });
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"), { suspense: true });

const About = () => {
  const seoData = SEOConfig.About;

  return (
    <>
      <Fragment>
        <SEO {...seoData} />

        <Suspense fallback={<Preloader />}>
          <SearchPopup />
          <SupportBarOne />
          <NavbarTwo />
          <BreadcrumbAbout title="ABOUT US" />

          <div className="pd-top-120 pd-bottom-120">
            <AboutOne />
          </div>

          <div className="fact-area" style={{ background: "#f9f9f9" }}>
            <CounterOne />
          </div>

          <PartnerOne />
          <FooterOne />
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default About;
