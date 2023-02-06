import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
const Main = () => {
  const [yOffset, setYOffset] = React.useState(window.pageYOffset);
  const [visible, setVisible] = React.useState(true);
  React.useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(yOffset);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yOffset]);

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;
    setYOffset(currentYOffset);
    setVisible(visible);
  }
  return (
    <div className="bg-white">
      <Header visible={visible}></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default React.forwardRef(Main);
