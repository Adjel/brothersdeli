import React from "react";
import styles from "./nav.module.css";
import { DesktopNavLink } from "../navLink";

export default function DesktopNav() {
  return (
    // desktopNavWrapper is used to only display this component on pc
    <nav>
      <ul className={styles.desktopNavWrapper}>
        <DesktopNavLink href="/notre-histoire" label="Notre histoire" />
        <DesktopNavLink href="/la-carte" label="La carte" />
        <DesktopNavLink href="/devenir-franchise" label="Devenir franchisé" />
        <DesktopNavLink href="/contact" label="Contact" />
      </ul>
    </nav>
  );
}
