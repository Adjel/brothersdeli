"use client";
import React from "react";
import styles from "../styles/menu.module.css";
import OrderingButton from "@/components/OrderingButton";
import { dishes, sides, desserts } from "@/data/data";
import ScrollButton from "@/components/ScrollButton";
import { ResponsiveScrollButton } from "@/components/ScrollButton";
import ProductsCategorySection from "@/components/ProductsCategoryComponent/ProductsCategoryComponent";

export default function Menu() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1 className={styles.title}>La carte</h1>
        <div className={styles.scrollButtonsWrapper}>
          <ScrollButton href="#sandwichs" content="nos sandwichs" />
          <ResponsiveScrollButton href="#sides" content="nos sides" />
          <ScrollButton href="#desserts" content="nos desserts" />
        </div>
      </header>
      <ProductsCategorySection
        itemList={dishes}
        id="sandwichs"
        title="nos sandwichs"
        content="Découvrez nos recettes originales de sandwich au pastrami, sans
            oublier la version végétarienne."
      />
      <ProductsCategorySection itemList={sides} id="sides" title="nos sides" />
      <ProductsCategorySection
        itemList={desserts}
        id="desserts"
        title="nos desserts"
      />
      <div style={{ backgroundColor: "var(--secondary)", width: "100%" }}>
        <section className={styles.actionWrapper}>
          <p className={styles.actionP}>Alors t'attends quoi ?</p>
          <OrderingButton />
        </section>
      </div>
    </section>
  );
}
