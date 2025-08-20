import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic";
import Preloader from "../elements/Preloader";
import SEO from "../elements/SEO";
import SEOConfig from "../elements/SEOConfig";

// Dynamically import components with suspense
const BannerNotFound = dynamic(() => import("../components/BannerNotFound"), { suspense: true });
const FooterBottomOne = dynamic(() => import("../components/FooterBottomOne"), { suspense: true });
const FooterOne = dynamic(() => import("../components/FooterOne"), { suspense: true });
const NavbarTwo = dynamic(() => import("../components/NavbarTwo"), { ssr: false, suspense: true });
const SearchPopup = dynamic(() => import("../elements/SearchPopup"), { suspense: true });
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"), { suspense: true });

const NotFoundPage = () => {
  const seoData = SEOConfig.NotFoundPage;

  return (
    <>
      <Fragment>
        <SEO {...seoData} />

        <Suspense fallback={<Preloader />}>
          <SearchPopup />
          <SupportBarOne />
          <NavbarTwo />
          <BannerNotFound />
          <FooterOne />
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default NotFoundPage;
