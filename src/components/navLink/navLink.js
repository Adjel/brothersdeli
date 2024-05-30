import React from "react";
import Link from "next/link";
import styles from "../nav/nav.module.css";
import { usePathname } from "next/navigation";

function NavLink({ href, label }) {
  const currentPath = usePathname();

  return (
    <il key={crypto.randomUUID()} className={styles.itemLinkWrapper}>
      <Link
        className={
          currentPath !== href ? styles.navLink : styles.navLinkSelected
        }
        href={href}
      >
        {label}
      </Link>
    </il>
  );
}

export function DesktopNavLink({ href, label }) {
  const currentPath = usePathname();
  return (
    <il key={crypto.randomUUID()}>
      <Link
        className={
          currentPath !== href ? styles.navLink : styles.navLinkDesktopSelected
        }
        href={href}
      >
        {label}
      </Link>
    </il>
  );
}

export default NavLink;
