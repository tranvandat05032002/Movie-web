import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
const Main = () => {
  const mainRef = React.useRef();
  return (
    <div className="bg-white" ref={mainRef}>
      <Header mainRef={mainRef}></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default React.forwardRef(Main);
