import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  return (
    <div className="bg-white">
      <>
        <div className="border border-orange-600">
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </>
    </div>
  );
};

export default Main;
