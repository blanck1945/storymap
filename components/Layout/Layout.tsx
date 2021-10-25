import React from "react";
import Head from "next/head";
import Navigator from "./Navigator";
import Footer from "./Footer";

interface layoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: layoutProps) => {
  return (
    <div>
      <Head>
        <title>Story Map</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigator />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;