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
const CounterTwo = dynamic(() => import("../components/CounterTwo"), { suspense: true });
const WhyChooseUsTwo = dynamic(() => import("../components/WhyChooseUsTwo"), { suspense: true });
const InternationalMoves = dynamic(() => import("../components/InternationalMoves"), { suspense: true });
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"), { suspense: true });
const FaqServices = dynamic(() => import("../components/FaqServices"), { suspense: true });
const OurServiceValues = dynamic(() => import("../components/OurServiceValues"), { suspense: true });

const ServiceInternationalMoves = () => {
  const seoData = SEOConfig.ServiceInternationalMoving;

  return (
    <Fragment>
      <SEO {...seoData} />

      <Suspense fallback={<Preloader />}>
        {/* Search Popup */}
        <SearchPopup />

        {/* SupportBarOne */}
        <SupportBarOne />

        {/* Navbar Two */}
        <NavbarTwo />

        {/* Breadcrumb Services */}
        <BreadcrumbServices title={"THE BEST INTERNATIONAL MOVING COMPANY IN PAKISTAN – NSAG"} />

        {/* Home Relocations */}
        <InternationalMoves />

        {/* Our ServiceValues */}
        <OurServiceValues serviceId={4} />

        {/* Why Choose Us Two */}
        <WhyChooseUsTwo serviceId={3} />

        {/* CounterTwo */}
        <CounterTwo />

        {/* Contact One */}
        <div className="call-to-contact-area pd-top-120" style={{ background: "#F9F9F9" }}>
          <ContactOne />
        </div>

        {/* Our Services */}
        <OurServices />

        {/* Faq Services */}
        <FaqServices
          serviceId={5}
          faqData={faqServices}
          title="FAQ"
          subtitle="FREQUENTLY ASKED QUESTIONS"
        />

        {/* Footer One */}
        <FooterOne />

        {/* Footer Bottom One */}
        <FooterBottomOne />
      </Suspense>
    </Fragment>
  );
};

export default ServiceInternationalMoves;
