import React, { useRef, useEffect } from "react";
import styles from "./nav.module.css";
import NavLink from "../navLink/navLink";

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
        <NavLink href="/notre-histoire" label="Notre histoire" />
        <NavLink href="/la-carte" label="La carte" />
        <NavLink href="/devenir-franchise" label="Devenir franchisé" />
        <NavLink href="/contact" label="Contact" />
      </ul>
    </nav>
  );
}
