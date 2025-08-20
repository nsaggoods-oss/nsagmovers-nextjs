import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title,
  description,
  keywords,
  url,
  image,
  images = [],
  jsonLd,
  canonical,
  robots,
}) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      {description && image && <meta property="og:image:alt" content={description} />}
      {images.length > 0 &&
        images.map((img, index) => (
          <meta key={index} property="og:image" content={img} />
        ))}
      {canonical && <link rel="canonical" href={canonical} />}
      {robots && <meta name="robots" content={robots} />}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
