import { Fragment, Suspense } from "react";
import dynamic from "next/dynamic";
import Preloader from "../elements/Preloader";
import List from "../components/List";

// Dynamic imports
const Breadcrumb = dynamic(() => import("../components/Breadcrumb"), { suspense: true });
const FooterBottomOne = dynamic(() => import("../components/FooterBottomOne"), { suspense: true });
const FooterOne = dynamic(() => import("../components/FooterOne"), { suspense: true });
const NavbarTwo = dynamic(() => import("../components/NavbarTwo"), { ssr: false, suspense: true });
const SearchPopup = dynamic(() => import("../elements/SearchPopup"), { suspense: true });
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"), { suspense: true });

const BlogList = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <SearchPopup />
        <SupportBarOne />
        <NavbarTwo />
        <Breadcrumb title="Blog List" />
        <List />
        <FooterOne />
        <FooterBottomOne />
      </Suspense>
    </Fragment>
  );
};

export default BlogList;
