import React from "react";
import Nav from "../Nav";
import HomeIconButton from "../HomeIconButton";
import OrderingButton from "../OrderingButton";

function Header() {
  return (
    <>
      <HomeIconButton />
      <Nav />
      <OrderingButton />
    </>
  );
}

export default Header;
