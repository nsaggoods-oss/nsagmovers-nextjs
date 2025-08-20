import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic";
import Preloader from "../elements/Preloader";
import BlogView from "../components/BlogView";
import SEO from "../elements/SEO";
import SEOConfig from "../elements/SEOConfig";

// Dynamic imports
const Breadcrumb = dynamic(() => import("../components/Breadcrumb"), { suspense: true });
const FooterBottomOne = dynamic(() => import("../components/FooterBottomOne"), { suspense: true });
const FooterOne = dynamic(() => import("../components/FooterOne"), { suspense: true });
const NavbarTwo = dynamic(() => import("../components/NavbarTwo"), { ssr: false, suspense: true });
const SearchPopup = dynamic(() => import("../elements/SearchPopup"), { suspense: true });
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"), { suspense: true });

const BlogViews = () => {
  const seoData = SEOConfig.Blog;

  return (
    <Fragment>
      <SEO {...seoData} />

      <Suspense fallback={<Preloader />}>
        <SearchPopup />
        <SupportBarOne />
        <NavbarTwo />
        <Breadcrumb title="All Blog Details" />
        <BlogView />
        <FooterOne />
        <FooterBottomOne />
      </Suspense>
    </Fragment>
  );
};

export default BlogViews;
