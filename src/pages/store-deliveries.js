import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic"; // Next.js dynamic import
import Head from "next/head"; // For SEO management
import Preloader from "../elements/Preloader"; // Ensure Preloader works as expected in client-side rendering
import SEOConfig from "../elements/SEOConfig";

// Dynamically import components using Next.js dynamic import
const BreadcrumbServices = dynamic(() => import("../components/BreadcrumbServices"));
const FooterBottomOne = dynamic(() => import("../components/FooterBottomOne"));
const FooterOne = dynamic(() => import("../components/FooterOne"));
const NavbarTwo = dynamic(() => import("../components/NavbarTwo"), { ssr: false }); // Disable server-side rendering for NavbarTwo
const SearchPopup = dynamic(() => import("../elements/SearchPopup"));
const ServiceArea = dynamic(() => import("../components/ServiceArea"));
const WhyChooseUsTwo = dynamic(() => import("../components/WhyChooseUsTwo"));
const CounterOne = dynamic(() => import("../components/CounterOne"));
const StoreDeliveries = dynamic(() => import("../components/StoreDeliveries"));
const BookToMove = dynamic(() => import("../components/Faq"));
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"));

const ServiceStoreDeliveries = () => {
  const seoData = SEOConfig.ServiceStoreDeliveries;

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

      {/* Preloader (ensure it works only on the client side) */}
      {/* <Preloader /> */}

      {/* Components */}
      <Suspense fallback={<Preloader />}>
      <SearchPopup />
      <SupportBarOne />
      <NavbarTwo />

      {/* Breadcrumb */}
      <BreadcrumbServices title={"STRESS-FREE STORE DELIVERIES IN JUST HOURS"} />

      {/* Store Deliveries */}
      <StoreDeliveries />

      {/* Service Area */}
      <ServiceArea />

      {/* Why Choose Us */}
      <WhyChooseUsTwo serviceId={5} />

      {/* Counter One */}
      <CounterOne />

      {/* FAQ */}
      <div className="faq-area pd-top-100">
        <BookToMove />
      </div>

      {/* Footer One */}
      <FooterOne />

      {/* Footer Bottom One */}
      <FooterBottomOne />
      </Suspense>
    </Fragment>
  );
};

export default ServiceStoreDeliveries;
