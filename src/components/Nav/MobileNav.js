import React, { useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./nav.module.css";
import { useRouter } from "next/navigation";

export default function MobileNav({ isNavOpen }) {
  const navRef = useRef();
  const router = useRouter();
  const currentPath = router.pathname;

  const path = {
    notreHistoire: "/Brand",
    laCarte: "/Menu",
    franchise: "/BecomeFranchise",
    contact: "/Contact",
  };

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
        <il className={styles.itemLinkWrapper}>
          <Link
            className={
              currentPath !== path.notreHistoire
                ? styles.navLink
                : styles.navLinkSelected
            }
            href="notre-histoire"
          >
            Notre histoire
          </Link>
        </il>
        <il className={styles.itemLinkWrapper}>
          <Link
            className={
              currentPath !== path.laCarte
                ? styles.navLink
                : styles.navLinkSelected
            }
            href="la-carte"
          >
            La carte
          </Link>
        </il>
        <il className={styles.itemLinkWrapper}>
          <Link
            className={
              currentPath !== path.franchise
                ? styles.navLink
                : styles.navLinkSelected
            }
            href="devenir-franchise"
          >
            devenir franchisé
          </Link>
        </il>
        <il className={styles.itemLinkWrapper}>
          <Link
            className={
              currentPath != path.contact
                ? styles.navLink
                : styles.navLinkSelected
            }
            href="contact"
          >
            Contact
          </Link>
        </il>
      </ul>
    </nav>
  );
}
