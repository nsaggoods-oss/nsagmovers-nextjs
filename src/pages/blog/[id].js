import { Fragment, Suspense,useMemo, useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  const isMongoId = (s) => /^[a-f\d]{24}$/i.test(s || "");



  useEffect(() => {
    if (!router.isReady) return;
    if (!id) return;

    const raw = Array.isArray(id) ? id[0] : id;
    const parts = raw.split("-");
    const last = parts[parts.length - 1];

    const fetchData = async () => {
      try {
        let data;
        if (isMongoId(last)) {
          // URL form: /blog/some-title-<id>
          data = await getBlogById(last);
        } else {
          // URL form: /blog/some-title
          data = await getBlogById(raw); // implement this in your apiService
        }
        setBlog(data || null);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router.isReady, id]);

  const canonicalUrl = useMemo(() => {
    const base = "https://nsagmovers.pk/blog";
    if (!blog) return base;
    const slugPart = blog._id || slugify(blog.title || "");
    // If you like canonical with id when available:
    return blog._id ? `${base}/${slugPart}-${blog._id}` : `${base}/${slugPart}`;
  }, [blog]);

  if (loading) return <Preloader />;

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
