import React from "react";
import "../styles/globals.scss";
import { MainProvider } from "../stateContainers/stateContainer";

function MyApp({ Component, pageProps }) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  );
}

export default MyApp;
