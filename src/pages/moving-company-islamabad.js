import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic";
import SEO from "../elements/SEO";
import SEOConfig from "../elements/SEOConfig";
import Preloader from "../elements/Preloader";

// Dynamically import components using Next.js dynamic
const BreadcrumbServices = dynamic(() => import("../components/BreadcrumbServices"));
const FooterBottomOne = dynamic(() => import("../components/FooterBottomOne"));
const FooterOne = dynamic(() => import("../components/FooterOne"));
const NavbarTwo = dynamic(() => import("../components/NavbarTwo"), { ssr: false });
const SearchPopup = dynamic(() => import("../elements/SearchPopup"));
const RequestQuoteOne = dynamic(() => import("../components/RequestQuoteOne"));
const ContactInnerIslamabad = dynamic(() => import("../components/ContactInnerIslamabad"));
const ServicePackerMoverIslamabad = dynamic(() => import("../components/ServicePackerMoverIslamabad"));
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"));

const ServiceIslamabad = () => {
  const seoData = SEOConfig.ServiceIslamabad;

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
        <BreadcrumbServices title={"NSAG PACKERS & MOVERS IN ISLAMABAD"} />

        {/* Request Quote One */}
        <RequestQuoteOne />

        {/* Service Packer Mover Islamabad */}
        <ServicePackerMoverIslamabad />

        {/* Contact Inner Islamabad */}
        <ContactInnerIslamabad />

        {/* Footer One */}
        <FooterOne />

        {/* Footer Bottom One */}
        <FooterBottomOne />
      </Suspense>
    </Fragment>
  );
};

export default ServiceIslamabad;
