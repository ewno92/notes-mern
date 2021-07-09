import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>MERN App</title>
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
