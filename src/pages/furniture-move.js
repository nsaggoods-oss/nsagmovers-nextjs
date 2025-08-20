import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic";
import Preloader from "../elements/Preloader";
import SEO from "../elements/SEO";
import SEOConfig from "../elements/SEOConfig";

const BreadcrumbServices = dynamic(() => import("../components/BreadcrumbServices"), { suspense: true });
const FooterBottomOne = dynamic(() => import("../components/FooterBottomOne"), { suspense: true });
const FooterOne = dynamic(() => import("../components/FooterOne"), { suspense: true });
const NavbarTwo = dynamic(() => import("../components/NavbarTwo"), { ssr: false, suspense: true });
const SearchPopup = dynamic(() => import("../elements/SearchPopup"), { suspense: true });
const ServiceArea = dynamic(() => import("../components/ServiceArea"), { suspense: true });
const WhyChooseUsTwo = dynamic(() => import("../components/WhyChooseUsTwo"), { suspense: true });
const CounterOne = dynamic(() => import("../components/CounterOne"), { suspense: true });
const FurnitureMoves = dynamic(() => import("../components/FurnitureMoves"), { suspense: true });
const Faq = dynamic(() => import("../components/Faq"), { suspense: true });
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"), { suspense: true });

const ServiceFurnitureMoves = () => {
  const seoData = SEOConfig.ServiceFurnitureMove;

  return (
    <Fragment>
      <SEO {...seoData} />
      <Suspense fallback={<Preloader />}>
        <SearchPopup />
        <SupportBarOne />
        <NavbarTwo />
        <BreadcrumbServices title="NEED TO SHIFT FURNITURE?" />
        <FurnitureMoves />
        <ServiceArea />
        <WhyChooseUsTwo serviceId={6} />
        <CounterOne />
        <div className="faq-area pd-top-100">
          <Faq />
        </div>
        <FooterOne />
        <FooterBottomOne />
      </Suspense>
    </Fragment>
  );
};

export default ServiceFurnitureMoves;
