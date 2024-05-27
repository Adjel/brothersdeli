import React from "react";
import Link from "next/link";
import styles from "./nav.module.css";
import { useRouter } from "next/navigation";

export default function DesktopNav() {
  const router = useRouter();
  const currentPath = router.pathname;

  const notreHistoire = "/Brand";
  const laCarte = "/Menu";
  const franchise = "/BecomeFranchise";
  const contact = "/Contact";
  return (
    // desktopNavWrapper is used to only display this component on pc
    <nav>
      <ul className={styles.desktopNavWrapper}>
        <il>
          <Link
            className={
              currentPath !== notreHistoire
                ? styles.navLink
                : styles.navLinkDesktopSelected
            }
            href="notre-histoire"
          >
            Notre histoire
          </Link>
        </il>
        <il>
          <Link
            className={
              currentPath !== laCarte
                ? styles.navLink
                : styles.navLinkDesktopSelected
            }
            href="la-carte"
          >
            La carte
          </Link>
        </il>
        <il>
          <Link
            className={
              currentPath !== franchise
                ? styles.navLink
                : styles.navLinkDesktopSelected
            }
            href="devenir-franchise"
          >
            devenir franchisé
          </Link>
        </il>
        <il>
          <Link
            className={
              currentPath !== contact
                ? styles.navLink
                : styles.navLinkDesktopSelected
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
