import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic";
import Preloader from "../elements/Preloader";
import SEO from "../elements/SEO";
import SEOConfig from "../elements/SEOConfig";
import { faqServices } from "../data/faqServices";

// Dynamically imported components
const BreadcrumbServices = dynamic(() => import("../components/BreadcrumbServices"), { suspense: true });
const ContactOne = dynamic(() => import("../components/ContactOne"), { suspense: true });
const FooterBottomOne = dynamic(() => import("../components/FooterBottomOne"), { suspense: true });
const WhyChooseUsTwo = dynamic(() => import("../components/WhyChooseUsTwo"), { suspense: true });
const FooterOne = dynamic(() => import("../components/FooterOne"), { suspense: true });
const NavbarTwo = dynamic(() => import("../components/NavbarTwo"), { ssr: false, suspense: true });
const SearchPopup = dynamic(() => import("../elements/SearchPopup"), { suspense: true });
const OurServices = dynamic(() => import("../components/OurServices"), { suspense: true });
const CounterTwo = dynamic(() => import("../components/CounterTwo"), { suspense: true });
const ApartmentRelocations = dynamic(() => import("../components/ApartmentRelocations"), { suspense: true });
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"), { suspense: true });
const FaqServices = dynamic(() => import("../components/FaqServices"), { suspense: true });
const OurServiceValues = dynamic(() => import("../components/OurServiceValues"), { suspense: true });

const ServiceApartmentRelocations = () => {
  const seoData = SEOConfig.ServiceApartmentRelocation;

  return (
    <Fragment>
      <SEO {...seoData} />

      <Suspense fallback={<Preloader />}>
        <SearchPopup />
        <SupportBarOne />
        <NavbarTwo />
        
        <BreadcrumbServices title="THE BEST APARTMENT MOVING COMPANY IN PAKISTAN – NSAG" />

        <ApartmentRelocations />

        <OurServiceValues serviceId={3} />

        <WhyChooseUsTwo serviceId={2} />

        <CounterTwo />

        <div className="call-to-contact-area pd-top-120" style={{ background: "#F9F9F9" }}>
          <ContactOne />
        </div>

        <OurServices />

        <FaqServices
          serviceId={3}
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

export default ServiceApartmentRelocations;
