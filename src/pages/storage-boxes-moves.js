import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic"; // For dynamic import
import Head from "next/head"; // For SEO management
import Preloader from "../elements/Preloader";
import SEOConfig from "../elements/SEOConfig";

// Dynamically import components with Next.js dynamic import
const BreadcrumbServices = dynamic(() => import("../components/BreadcrumbServices"));
const FooterBottomOne = dynamic(() => import("../components/FooterBottomOne"));
const FooterOne = dynamic(() => import("../components/FooterOne"));
const NavbarTwo = dynamic(() => import("../components/NavbarTwo"), { ssr: false });
const SearchPopup = dynamic(() => import("../elements/SearchPopup"));
const ServiceArea = dynamic(() => import("../components/ServiceArea"));
const WhyChooseUsTwo = dynamic(() => import("../components/WhyChooseUsTwo"));
const CounterOne = dynamic(() => import("../components/CounterOne"));
const StorageBoxesMoves = dynamic(() => import("../components/StorageBoxesMoves"));
const Faq = dynamic(() => import("../components/Faq"));
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"));

const ServiceStorageBoxesMoves = () => {
  const seoData = SEOConfig.ServiceStorageBoxesMoves;

  return (
    <Fragment>
      {/* SEO Meta Tags */}
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Preloader (ensure it only runs client-side) */}
      {/* <Preloader /> */}

      {/* Components */}
      <Suspense fallback={<Preloader />}>
      <SearchPopup />
      <SupportBarOne />
      <NavbarTwo />

      {/* Breadcrumb */}
      <BreadcrumbServices title={"MOVE YOUR STORAGE BOXES ACROSS PAKISTAN"} />

      {/* Storage Boxes Moves */}
      <StorageBoxesMoves />

      {/* Service Area */}
      <ServiceArea />

      {/* Why Choose Us */}
      <WhyChooseUsTwo serviceId={5} />

      {/* Counter One */}
      <CounterOne />

      {/* FAQ */}
      <div className="faq-area pd-top-100">
        <Faq />
      </div>

      {/* Footer One */}
      <FooterOne />

      {/* Footer Bottom One */}
      <FooterBottomOne />
      </Suspense>
    </Fragment>
  );
};

export default ServiceStorageBoxesMoves;
