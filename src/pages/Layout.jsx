import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";


function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </Fragment>
  );
}

export default Layout;
