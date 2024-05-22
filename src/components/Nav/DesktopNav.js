import React from "react";
import Link from "next/link";
import styles from "./nav.module.css";

export default function DesktopNav() {
  return (
    // desktopNavWrapper is used to only display this component on pc
    <nav>
      <ul className={styles.desktopNavWrapper}>
        <il>
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
