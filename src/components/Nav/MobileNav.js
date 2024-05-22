import React, { useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./nav.module.css";

export default function MobileNav({ isNavOpen }) {
  const navRef = useRef();

  useEffect(() => {
    if (isNavOpen) {
      navRef.current.style.maxHeight = `${navRef.current.scrollHeight}px`;
    } else {
      navRef.current.style.maxHeight = "0px";
    }
  }, [isNavOpen]);

  return (
    <nav
      ref={navRef}
      className={`${styles.wrapper} ${isNavOpen ? styles.open : styles.closed}`}
    >
      <ul className={styles.mobileNavWrapper}>
        <il style={{ width: "100%" }}>
          <Link className={styles.navLink} href="notre-histoire">
            Notre histoire
          </Link>
        </il>
        <il>
          <Link className={styles.navLink} href="la-carte">
            La carte
          </Link>
        </il>
        <il>
          <Link className={styles.navLink} href="devenir-franchise">
            devenir franchisé
          </Link>
        </il>
        <il>
          <Link className={styles.navLink} href="contact">
            Contact
          </Link>
        </il>
      </ul>
    </nav>
  );
}
