import React from "react";
import Contact from "./Contact";
import NavBar from "./NavBar";
const Layout = ({ children }) => {
  return (
    <>
      <div className="p-0 m-0 bg-black text-white">
        <NavBar />
        <main>{children}</main>
        <Contact />
      </div>
    </>
  );
};

export default Layout;
