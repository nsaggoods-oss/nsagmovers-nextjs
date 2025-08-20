import React from "react";
import { Helmet } from "react-helmet";

const GlobalMeta = () => {
  return (
    <Helmet>
      <meta name="author" content="NSAG Packers & Movers" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default GlobalMeta;
