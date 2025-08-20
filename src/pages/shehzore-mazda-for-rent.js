import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic"; // Next.js dynamic import
import Head from "next/head"; // For SEO optimization
import Preloader from "../elements/Preloader";
import SEOConfig from "../elements/SEOConfig";
import { faqServices } from "../data/faqServices";

// Dynamically import components using Next.js dynamic import
const BreadcrumbServices = dynamic(() => import("../components/BreadcrumbServices"));
const ContactOne = dynamic(() => import("../components/ContactOne"));
const FooterBottomOne = dynamic(() => import("../components/FooterBottomOne"));
const WhyChooseUsTwo = dynamic(() => import("../components/WhyChooseUsTwo"));
const FooterOne = dynamic(() => import("../components/FooterOne"));
const NavbarTwo = dynamic(() => import("../components/NavbarTwo"), { ssr: false});
const SearchPopup = dynamic(() => import("../elements/SearchPopup"));
const OurServices = dynamic(() => import("../components/OurServices"));
const CounterTwo = dynamic(() => import("../components/CounterTwo"));
const ShehzoreMazdaRent = dynamic(() => import("../components/ShehzoreMazdaRent"));
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"));
const FaqServices = dynamic(() => import("../components/FaqServices"));
const OurServiceValues = dynamic(() => import("../components/OurServiceValues"));

const ServiceShehzoreMazdaRent = () => {
  const seoData = SEOConfig.ServiceApartmentRelocation;

  return (
    <Fragment>
      {/* SEO meta tags */}
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Preloader - Client-side only */}
      {/* <Preloader /> */}

      {/* Components */}
      <Suspense fallback={<Preloader />}>
      <SearchPopup />
      <SupportBarOne />
      <NavbarTwo />

      {/* Breadcrumb Services */}
      <BreadcrumbServices title={"MAZDA SHEZORE FOR RENT"} />

      {/* ShehzoreMazdaRent */}
      <ShehzoreMazdaRent />

      {/* Our Service Values */}
      <OurServiceValues serviceId={3} />

      {/* Why Choose Us Two */}
      <WhyChooseUsTwo serviceId={4} />

      {/* Counter Two */}
      <CounterTwo />

      {/* Contact One */}
      <div
        className="call-to-contact-area pd-top-120"
        style={{ background: "#F9F9F9" }}
      >
        <ContactOne />
      </div>

      {/* Our Services */}
      <OurServices />

      {/* FAQ Services */}
      <FaqServices
        serviceId={6}
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

export default ServiceShehzoreMazdaRent;
