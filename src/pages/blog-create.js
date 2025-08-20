import { Fragment, Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Preloader from "../elements/Preloader";
 import BlogAdd from "../components/BlogAdd";
import { useRouter } from "next/navigation";


// Dynamic imports
const Breadcrumb = dynamic(() => import("../components/Breadcrumb"), { suspense: true });
const FooterBottomOne = dynamic(() => import("../components/FooterBottomOne"), { suspense: true });
const FooterOne = dynamic(() => import("../components/FooterOne"), { suspense: true });
const NavbarTwo = dynamic(() => import("../components/NavbarTwo"), { ssr: false, suspense: true });
const SearchPopup = dynamic(() => import("../elements/SearchPopup"), { suspense: true });
const SupportBarOne = dynamic(() => import("../components/SupportBarOne"), { suspense: true });

const BlogLCreate= () => {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login"); // redirect to login
    } else {
      setAuthChecked(true); // show page content
    }
  }, [router]);

  if (!authChecked) return <Preloader />;


  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <SearchPopup />
        <SupportBarOne />
        <NavbarTwo />
        <Breadcrumb title="Blog Create" />
        <BlogAdd />
        <FooterOne />
        <FooterBottomOne />
      </Suspense>
    </Fragment>
  );
};

export default BlogLCreate;
