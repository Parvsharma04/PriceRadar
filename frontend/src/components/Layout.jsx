import React from "react";
import Footer from "./Contact";
import NavBar from './NavBar';


const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
