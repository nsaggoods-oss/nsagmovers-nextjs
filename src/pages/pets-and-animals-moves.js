import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic"; // Use Next.js dynamic import
import SEO from "../elements/SEO";
import SEOConfig from "../elements/SEOConfig";

// Dynamically import components using Next.js dynamic import
const BreadcrumbServices = dynamic(() => import("../components/BreadcrumbServices"));
const FooterBottomOne = dynamic(() => import("../components/FooterBottomOne"));
const FooterOne = dynamic(() => import("../components/FooterOne"));
const NavbarTwo = dynamic(() => import("../components/NavbarTwo"), { ssr: false });
const SearchPopup = dynamic(() => import("../elements/SearchPopup"));
const ServiceArea = dynamic(() => import("../components/ServiceArea"));
const WhyChooseUsTwo = dynamic(() => import("../components/WhyChooseUsTwo"));
const CounterOne = dynamic(() => import("../components/CounterOne"));
const PetsMoves = dynamic(() => import("../components/PetsMoves"));
const Faq = dynamic(() => import("../components/Faq"));
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"));
const Preloader = dynamic(() => import("../elements/Preloader"));

const ServicePetsMoves = () => {
  const seoData = SEOConfig.ServicePetsAndAnimalsMoves;

  return (
    <Fragment>
      {/* SEO Component for Meta Tags */}
      <SEO {...seoData} />

      {/* Components */}
      <Suspense fallback={<Preloader />}>
      
      <SearchPopup />
      <SupportBarOne />
      <NavbarTwo />

      {/* Breadcrumb Services */}
      <BreadcrumbServices title={"RELOCATE YOUR PETS ACROSS PAKISTAN"} />

      {/* Pets Moves Component */}
      <PetsMoves />

      {/* Service Area */}
      <ServiceArea />

      {/* Why Choose Us */}
      <WhyChooseUsTwo serviceId={5} />

      {/* Counter */}
      <CounterOne />

      {/* FAQ */}
      <div className="faq-area pd-top-100">
        <Faq />
      </div>

      {/* Footer */}
      <FooterOne />
      <FooterBottomOne />
      </Suspense>
    </Fragment>
  );
};

export default ServicePetsMoves;
