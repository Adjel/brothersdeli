"use client";
import React from "react";

import styles from "../styles/menu.module.css";
import OrderingButton from "@/components/OrderingButton";

import { dishes, sides, desserts } from "@/data/data";
import ScrollButton from "@/components/ScrollButton";
import { ResponsiveScrollButton } from "@/components/ScrollButton";
import MenuHeader from "@/components/menuHeader";
import MenuProducts from "@/components/menuProducts";

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
      <section className={styles.dishCatWrapper}>
        <MenuHeader
          id="sandwichs"
          title="nos sandwichs"
          content="Découvrez nos recettes originales de sandwich au pastrami, sans
            oublier la version végétarienne."
        />
        <MenuProducts itemList={dishes} alt="une photo d'un sandwich" />
      </section>
      <section className={styles.dishCatWrapper}>
        <MenuHeader id="sides" title="nos sides" />
        <MenuProducts itemList={sides} alt="une photo d'un side" />
      </section>
      <section className={styles.dishCatWrapper}>
        <MenuHeader id="desserts" title="nos desserts" />
        <MenuProducts itemList={desserts} alt="une photo d'un dessert" />
      </section>
      <div style={{ backgroundColor: "var(--secondary)", width: "100%" }}>
        <section className={styles.actionWrapper}>
          <p className={styles.actionP}>Alors t'attends quoi ?</p>
          <OrderingButton />
        </section>
      </div>
    </section>
  );
}
