import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic";
import Preloader from "../elements/Preloader";
import SEO from "../elements/SEO";
import SEOConfig from "../elements/SEOConfig";
import { faqServices } from "../data/faqServices";

const BreadcrumbServices = dynamic(() => import("../components/BreadcrumbServices"), { suspense: true });
const ContactOne = dynamic(() => import("../components/ContactOne"), { suspense: true });
const FooterBottomOne = dynamic(() => import("../components/FooterBottomOne"), { suspense: true });
const FooterOne = dynamic(() => import("../components/FooterOne"), { suspense: true });
const NavbarTwo = dynamic(() => import("../components/NavbarTwo"), { ssr: false, suspense: true });
const SearchPopup = dynamic(() => import("../elements/SearchPopup"), { suspense: true });
const OurServices = dynamic(() => import("../components/OurServices"), { suspense: true });
const WhyChooseUsTwo = dynamic(() => import("../components/WhyChooseUsTwo"), { suspense: true });
const CounterTwo = dynamic(() => import("../components/CounterTwo"), { suspense: true });
const HomeRelocations = dynamic(() => import("../components/HomeRelocations"), { suspense: true });
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"), { suspense: true });
const FaqServices = dynamic(() => import("../components/FaqServices"), { suspense: true });
const OurServiceValues = dynamic(() => import("../components/OurServiceValues"), { suspense: true });

const ServiceHomeRelocations = () => {
  const seoData = SEOConfig.ServiceHouseMoving;

  return (
    <Fragment>
      <SEO {...seoData} />
      <Suspense fallback={<Preloader />}>
        <SearchPopup />
        <SupportBarOne />
        <NavbarTwo />
        <BreadcrumbServices title={"THE BEST HOME MOVING COMPANY IN PAKISTAN – NSAG"} />
        <HomeRelocations />
        <OurServiceValues serviceId={1} />
        <WhyChooseUsTwo serviceId={1} />
        <CounterTwo />
        <div className="call-to-contact-area pd-top-120" style={{ background: "#F9F9F9" }}>
          <ContactOne />
        </div>
        <OurServices />
        <FaqServices
          serviceId={1}
          faqData={faqServices}
          title="FAQ"
          subtitle="FREQUENTLY ASKED QUESTIONS"
        />
        <FooterOne />
        <FooterBottomOne />
      </Suspense>
    </Fragment>
  );
};

export default ServiceHomeRelocations;
