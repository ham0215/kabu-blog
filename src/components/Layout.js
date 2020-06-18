import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import AmazonFrame from "../components/AmazonFrame";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="ja" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/kabu.jpg`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/kabu.jpg`}
          sizes="32x32"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="国内株の話を中心に競馬やキャッシュレスのキャンペーンなどお金に関わることをつぶやくサイト"
        />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content="https://kabu.hamchance.com/img/hamtoshi2.jpg"
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <div>
        <AmazonFrame
          src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=businessbooks&banner=10NWG2EN02RWQSDQCHR2&f=ifr&linkID=d4e95c7fd3ddf556bcdfa3c33c2d7c71&t=hamchance0215-22&tracking_id=hamchance0215-22"
          width="300"
          height="250"
          scrolling="no"
          border="0"
          marginwidth="0"
          frameborder="0"
        ></AmazonFrame>
      </div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
