"use client";
import React, { useState } from "react";
import MobileNav from "../Nav/MobileNav";
import DesktopNav from "../Nav/DesktopNav";
import HomeIconButton from "../HomeIconButton";
import OrderingButton from "../OrderingButton";
import styles from "./header.module.css";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.homeIconWrapper}>
        <HomeIconButton />
      </div>
      {/*  mobileNavWrapper is not showed on pc version */}
      <div className={styles.mobileNavWrapper}>
        <button
          className={styles.iconButton}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? (
            <IoClose className={styles.icon} />
          ) : (
            <IoMenu className={styles.icon} />
          )}
        </button>
        {isNavOpen && <MobileNav />}
        {/* the deskopt nav is already display on pc */}
      </div>
      <div className={styles.desktopNav}>
        <DesktopNav />
      </div>
      <div className={styles.orderingButtonWrapper}>
        <OrderingButton />
      </div>
    </header>
  );
}

export default Header;
