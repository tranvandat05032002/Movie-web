import React from "react";

export default function useShow() {
  const [show, setShow] = React.useState(false);
  //   const handleShow = () => {
  //     if (show) {
  //       setShow(false);
  //     }
  //   };
  return {
    show,
    setShow,
  };
}
