"use client";

import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic";
import Preloader from "../../elements/Preloader";
import BlogAdd from "../../components/BlogAdd";

// Dynamic imports
const Breadcrumb = dynamic(() => import("../../components/Breadcrumb"), {
  ssr: false,
  suspense: true,
});
const FooterBottomOne = dynamic(
  () => import("../../components/FooterBottomOne"),
  { ssr: false, suspense: true }
);
const FooterOne = dynamic(() => import("../../components/FooterOne"), {
  ssr: false,
  suspense: true,
});
const NavbarTwo = dynamic(() => import("../../components/NavbarTwo"), {
  ssr: false,
  suspense: true,
});
const SearchPopup = dynamic(() => import("../../elements/SearchPopup"), {
  ssr: false,
  suspense: true,
});
const SupportBarOne = dynamic(() => import("../../components/SupportBarOne"), {
  ssr: false,
  suspense: true,
});

const BlogEdit = () => {
  return (
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <SearchPopup />
          <SupportBarOne />
          <NavbarTwo />
          <Breadcrumb title="Blog Edit" />
          <BlogAdd />
          <FooterOne />
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    // </ProtectedRoute>
  );
};

export default BlogEdit;
