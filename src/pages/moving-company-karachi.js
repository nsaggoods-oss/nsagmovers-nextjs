import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic"; // Import dynamic from next.js
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
const ContactInnerKarachi = dynamic(() => import("../components/ContactInnerKarachi"));
const ServicePackerMoverKarachi = dynamic(() => import("../components/ServicePackerMoverKarachi"));
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"));

const ServiceKarachi = () => {
  const seoData = SEOConfig.ServiceKarachi;

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
        <BreadcrumbServices title={"NSAG PACKERS & MOVERS IN KARACHI"} />

        {/* Request Quote One */}
        <RequestQuoteOne />

        {/* Service Packer Mover Karachi */}
        <ServicePackerMoverKarachi />

        {/* Contact Inner Karachi */}
        <ContactInnerKarachi />

        {/* Footer One */}
        <FooterOne />

        {/* Footer Bottom One */}
        <FooterBottomOne />
      </Suspense>
    </Fragment>
  );
};

export default ServiceKarachi;
