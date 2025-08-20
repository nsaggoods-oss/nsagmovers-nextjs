import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic"; // Import Next.js dynamic import
import SEO from "../elements/SEO";
import SEOConfig from "../elements/SEOConfig";
import Preloader from "../elements/Preloader";

// Dynamically import components using Next.js dynamic import
const BreadcrumbServices = dynamic(() => import("../components/BreadcrumbServices"));
const FooterBottomOne = dynamic(() => import("../components/FooterBottomOne"));
const FooterOne = dynamic(() => import("../components/FooterOne"));
const NavbarTwo = dynamic(() => import("../components/NavbarTwo"), { ssr: false });
const SearchPopup = dynamic(() => import("../elements/SearchPopup"));
const RequestQuoteOne = dynamic(() => import("../components/RequestQuoteOne"));
const ContactInnerLahore = dynamic(() => import("../components/ContactInnerLahore"));
const ServicePackerMoverLahore = dynamic(() => import("../components/ServicePackerMoverLahore"));
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"));

const ServiceLahore = () => {
  const seoData = SEOConfig.ServiceLahore;

  return (
    <Fragment>
      <SEO {...seoData} />
      
      {/* Suspense fallback for Preloader while components are loading */}
      <Suspense fallback={<Preloader />}>
        {/* Search Popup */}
        <SearchPopup />

        {/* SupportBarOne */}
        <SupportBarOne />

        {/* Navbar Two */}
        <NavbarTwo />

        {/* Breadcrumb Services */}
        <BreadcrumbServices title={"NSAG PACKERS & MOVERS IN LAHORE"} />

        {/* Request Quote One */}
        <RequestQuoteOne />

        {/* Service Packer Mover Lahore */}
        <ServicePackerMoverLahore />

        {/* Contact Inner Lahore */}
        <ContactInnerLahore />

        {/* Footer One */}
        <FooterOne />

        {/* Footer Bottom One */}
        <FooterBottomOne />
      </Suspense>
    </Fragment>
  );
};

export default ServiceLahore;
