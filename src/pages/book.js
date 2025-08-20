import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic";
import Preloader from "../elements/Preloader";
import SEO from "../elements/SEO";
import SEOConfig from "../elements/SEOConfig";

// Dynamic components
const Breadcrumb = dynamic(() => import("../components/Breadcrumb"), { suspense: true });
const FooterBottomOne = dynamic(() => import("../components/FooterBottomOne"), { suspense: true });
const FooterOne = dynamic(() => import("../components/FooterOne"), { suspense: true });
const NavbarTwo = dynamic(() => import("../components/NavbarTwo"), { ssr: false, suspense: true });
const SearchPopup = dynamic(() => import("../elements/SearchPopup"), { suspense: true });
const RequestQuoteOne = dynamic(() => import("../components/RequestQuoteOne"), { suspense: true });
const WhyChooseUsTwo = dynamic(() => import("../components/WhyChooseUsTwo"), { suspense: true });
const PartnerOne = dynamic(() => import("../components/PartnerOne"), { suspense: true });
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"), { suspense: true });

const BookNow = () => {
  const seoData = SEOConfig.BookGetAQuote;

  return (
    <Fragment>
      <SEO {...seoData} />
      <Suspense fallback={<Preloader />}>
        <SearchPopup />
        <SupportBarOne />
        <NavbarTwo />
        <Breadcrumb title="BOOK NOW" />
        <RequestQuoteOne />
        <WhyChooseUsTwo />
        <PartnerOne />
        <FooterOne />
        <FooterBottomOne />
      </Suspense>
    </Fragment>
  );
};

export default BookNow;
