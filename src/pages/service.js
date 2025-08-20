import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic"; // Import dynamic from Next.js

// Dynamically import components using Next.js dynamic imports
const Breadcrumb = dynamic(() => import("../components/Breadcrumb"));
const ContactOne = dynamic(() => import("../components/ContactOne"));
const FooterBottomOne = dynamic(() => import("../components/FooterBottomOne"));
const FooterOne = dynamic(() => import("../components/FooterOne"));
const NavbarTwo = dynamic(() => import("../components/NavbarTwo"), { ssr: false }); // Disable server-side rendering for NavbarTwo
const PartnerOne = dynamic(() => import("../components/PartnerOne"));
const ServiceOneAll = dynamic(() => import("../components/ServiceOneAll"));
const SearchPopup = dynamic(() => import("../elements/SearchPopup"));
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"));
const Preloader = dynamic(() => import("../elements/Preloader"), { ssr: false }); // Only on the client-side

const Service = () => {
  return (
    <Fragment>
      {/* Preloader Component */}
      {/* <Preloader /> */}

      {/* Components */}
      <Suspense fallback={<Preloader />}>

      <SearchPopup />
      <SupportBarOne />
      <NavbarTwo />

      {/* Breadcrumb */}
      <Breadcrumb title={"SERVICES"} />

      {/* Service One All */}
      <ServiceOneAll />

      {/* Contact One */}
      <div className="call-to-contact-area pd-top-140 mt-0">
        <ContactOne />
      </div>

      {/* Partner One */}
      <PartnerOne />

      {/* Footer One */}
      <FooterOne />

      {/* Footer Bottom One */}
      <FooterBottomOne />
      </Suspense>
    </Fragment>
  );
};

export default Service;
