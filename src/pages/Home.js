"use client";
import React from "react";
import styles from "../styles/home.module.css";
import Link from "next/link";
import OrderingButton from "@/components/OrderingButton";

export default function Home() {
  return (
    <section className={styles.section}>
      <Link className={styles.link} href="/">
        <h1 className={styles.h1}>BROTHERS DELI, LA RÉFÉRENCE DU PASTRAMI</h1>
      </Link>
      <OrderingButton />
    </section>
  );
}
