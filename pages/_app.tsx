import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import React from "react";
import App from "next/app";
import Head from "next/head";
import Script from "next/script";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head
        children={
          <>
            <title>KMUTT Election 2022</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <Script
              src="https://kit.fontawesome.com/a7ef51f3aa.js"
              crossOrigin="anonymous"
            ></Script>
          </>
        }
      ></Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
