import React from "react";
import Link from "next/link";
import styles from "./nav.module.css";

function Nav() {
  return (
    <nav>
      <div className={styles.navLink}>TEST</div>
      <Link className={styles.navLink} href="notre-histoire">
        Notre histoire
      </Link>
      <Link href="la-carte">La carte</Link>
      <Link href="devenir-franchise">devenir franchisé</Link>
      <Link href="contact">Contact</Link>
    </nav>
  );
}

export default Nav;
