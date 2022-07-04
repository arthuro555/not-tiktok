import React from "react";
import "../styles/globals.css";
import initAuth from "../utils/initAuth";

initAuth();

const MyApp = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
