import { Fragment, Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Head from "next/head";
import Preloader from "../../elements/Preloader";
import { getBlogById } from "../../lib/apiService";

// Dynamically import components
const Breadcrumb = dynamic(() => import("../../components/Breadcrumb"));
const FooterBottomOne = dynamic(() =>
  import("../../components/FooterBottomOne")
);
const FooterOne = dynamic(() => import("../../components/FooterOne"));
const NavbarTwo = dynamic(() => import("../../components/NavbarTwo"), {
  ssr: false,
});
const SearchPopup = dynamic(() => import("../../elements/SearchPopup"));
const SupportBarOne = dynamic(() => import("../../components/SupportBarOne"));
const BlogInnerDetail = dynamic(() =>
  import("../../components/BlogInnerDetail")
);

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (id) {
      const parts = id.split("-");
      const blogId = parts[parts.length - 1];

      getBlogById(blogId)
        .then(setBlog)
        .catch((err) => {
          console.error("Failed to fetch blog:", err);
        });

    }
  }, [id]);

  const canonicalUrl = `https://nsagmovers.pk/blog/${
    blog?.slug || blog?.title.replace(/\s+/g, "-").toLowerCase()
  }`;

  return (
    <Fragment>
      {/* SEO Meta Tags using Next.js Head component */}
      <Head>
        <title>{blog?.title}</title>
        <meta
          name="description"
          content={blog?.metaDescription || blog?.shortDescription}
        />
        <meta property="og:title" content={blog?.title} />
        <meta
          property="og:description"
          content={blog?.metaDescription || blog?.shortDescription}
        />
        <meta property="og:image" content={blog?.images?.[0]?.url} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      {/* Components */}
      <Suspense fallback={<Preloader />}>
        {/* Search Popup */}
        <SearchPopup />

        {/* SupportBarOne */}
        <SupportBarOne />

        {/* Navbar Two */}
        <NavbarTwo />

        {/* Breadcrumb */}
        <Breadcrumb title={"Blog Detail"} />

        {/* Blog Inner Detail */}
        <BlogInnerDetail blog={blog} />

        {/* Footer One */}
        <FooterOne />

        {/* Footer Bottom One */}
        <FooterBottomOne />
      </Suspense>
    </Fragment>
  );
};

export default BlogDetails;
