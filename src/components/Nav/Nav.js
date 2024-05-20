import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <>
      <Link href="notre-histoire">Notre histoire</Link>
      <Link href="la-carte">La carte</Link>
      <Link href="devenir-franchise">devenir franchisé</Link>
      <Link href="contact">Contact</Link>
    </>
  );
}

export default Nav;
