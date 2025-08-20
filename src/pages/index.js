import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic";
import Preloader from "../elements/Preloader";
import SEO from "../elements/SEO";
import SEOConfig from "../elements/SEOConfig";

const BannerOne = dynamic(() => import("../components/BannerOne"), { suspense: true });
const ContactOne = dynamic(() => import("../components/ContactOne"), { suspense: true });
const FooterBottomOne = dynamic(() => import("../components/FooterBottomOne"), { suspense: true });
const FooterOne = dynamic(() => import("../components/FooterOne"), { suspense: true });
const NavbarTwo = dynamic(() => import("../components/NavbarTwo"), { ssr: false, suspense: true });
const PartnerOne = dynamic(() => import("../components/PartnerOne"), { suspense: true });
const ServiceTwo = dynamic(() => import("../components/ServiceTwo"), { suspense: true });
const TestimonialOne = dynamic(() => import("../components/TestimonialOne"), { suspense: true });
const SearchPopup = dynamic(() => import("../elements/SearchPopup"), { suspense: true });
const RequestQuoteOne = dynamic(() => import("../components/RequestQuoteOne"), { suspense: true });
const WhyChooseUsTwo = dynamic(() => import("../components/WhyChooseUsTwo"), { suspense: true });
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"), { suspense: true });
const BlogTwo = dynamic(() => import("../components/BlogTwo"), { suspense: true });
const FaqOne = dynamic(() => import("../components/FaqOne"), { suspense: true });
const HomePageServices = dynamic(() => import("../components/HomePageServices"), { suspense: true });

const HomeOne = () => {
  const seoData = SEOConfig.Home;

  return (
    <Fragment>
      <SEO {...seoData} />
      <Suspense fallback={<Preloader />}>
        <SearchPopup />
        <SupportBarOne />
        <NavbarTwo />
        <BannerOne />
        <RequestQuoteOne />
        <div className="pd-top-120">
          <HomePageServices />
        </div>
        <ServiceTwo />
        <WhyChooseUsTwo serviceId={1} />
        <TestimonialOne />
        <PartnerOne />
        <div className="call-to-contact-area pd-top-115" style={{ background: "#F9F9F9" }}>
          <ContactOne />
        </div>
        <BlogTwo />
        <FaqOne />
        <FooterOne />
        <FooterBottomOne />
      </Suspense>
    </Fragment>
  );
};

export default HomeOne;
