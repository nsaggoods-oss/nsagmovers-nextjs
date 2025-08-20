import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic"; // Next.js dynamic import
import SEO from "../elements/SEO";
import SEOConfig from "../elements/SEOConfig";
import Preloader from "../elements/Preloader";
import { faqServices } from "../data/faqServices";

// Dynamically import components using Next.js dynamic import
const BreadcrumbServices = dynamic(() => import("../components/BreadcrumbServices"));
const ContactOne = dynamic(() => import("../components/ContactOne"));
const FooterBottomOne = dynamic(() => import("../components/FooterBottomOne"));
const FooterOne = dynamic(() => import("../components/FooterOne"));
const NavbarTwo = dynamic(() => import("../components/NavbarTwo"), { ssr: false });
const SearchPopup = dynamic(() => import("../elements/SearchPopup"));
const OurServices = dynamic(() => import("../components/OurServices"));
const CounterTwo = dynamic(() => import("../components/CounterTwo"));
const WhyChooseUsTwo = dynamic(() => import("../components/WhyChooseUsTwo"));
const OfficeRelocations = dynamic(() => import("../components/OfficeRelocations"));
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"));
const FaqServices = dynamic(() => import("../components/FaqServices"));
const OurServiceValues = dynamic(() => import("../components/OurServiceValues"));

const ServiceOfficeRelocations = () => {
  const seoData = SEOConfig.ServiceOfficeRelocation;

  return (
    <Fragment>
      <SEO {...seoData} />

      {/* Suspense fallback for Preloader */}
      <Suspense fallback={<Preloader />}>
        {/* Search Popup */}
        <SearchPopup />
        
        {/* SupportBarOne */}
        <SupportBarOne />

        {/* Navbar Two */}
        <NavbarTwo />

        {/* Breadcrumb Services */}
        <BreadcrumbServices title={"THE BEST OFFICE MOVING COMPANY IN PAKISTAN – NSAG"} />

        {/* Office Relocations */}
        <OfficeRelocations />

        {/* Our Service Values */}
        <OurServiceValues serviceId={2} />

        {/* Why Choose Us Two */}
        <WhyChooseUsTwo serviceId={2} />

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
          serviceId={2}
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

export default ServiceOfficeRelocations;
