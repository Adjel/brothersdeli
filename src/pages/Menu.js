"use client";
import React from "react";
import Link from "next/link";
import styles from "../styles/menu.module.css";
import OrderingButton from "@/components/OrderingButton";

export default function Menu() {
  const dishes = [
    { id: "le-brothers", name: `Le Brother${`&aposs;`}` },
    { id: "le-big-brothers", name: "Le BIG Brother's" },
    { id: "le-og", name: "Le OG" },
    { id: "le-reuben", name: "Le reuben" },
    { id: "le-turkey-club", name: "Le Turkey Club" },
    { id: "le-green-brothers", name: "Le Green Brothers" },
  ];

  const sides = [
    { id: "le-bab-ganoush", name: `Le Brother${`&aposs;`}` },
    { id: "la-tchaktchouka", name: "Le Tchaktchouka" },
    { id: "le-houmous", name: "Le Houmous" },
    {
      id: "les-pommes-de-terre-grenaille",
      name: "Les pommes de terre grenaille",
    },
    { id: "chips-au-sel-de-mer", name: "Chips au sel de mer" },
    { id: "chips-au-cheddar-et-oignons", name: "Chips au cheddar et oignons" },
  ];

  const desserts = [
    { id: "le-marbre", name: "Le Marbre" },
    { id: "le-carrot-cake", name: "Le carrot cake" },
    { id: "le-coockies-cbd", name: "Le Cookies CBD" },
  ];

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1 className={styles.title}>La carte</h1>
        <div className={styles.scrollButtonsWrapper}>
          <button className={styles.scrollButton}>
            <h2 className={styles.h2}>
              <Link href={""} className={styles.buttonLink}>
                nos sandwichs
              </Link>
            </h2>
          </button>
          <button className={styles.scrollButton}>
            {" "}
            <h2 className={styles.h2oneLine}>
              <Link href={""} className={styles.buttonLink}>
                nos sides
              </Link>
            </h2>
            <h2 className={styles.h2twoLines}>
              <Link href={""} className={styles.buttonLink}>
                <span>nos</span>
                <span>sides</span>
              </Link>
            </h2>
          </button>
          <button className={styles.scrollButton}>
            {" "}
            <h2 className={styles.h2}>
              <Link href={""} className={styles.buttonLink}>
                nos desserts
              </Link>
            </h2>
          </button>
        </div>
      </header>
      <section className={styles.dishCatWrapper}>
        <header className={styles.dishCatHeader}>
          <h2 className={styles.title}>nos sandwichs</h2>
        </header>
        <section className={styles.gridCatWrapper}>
          {dishes.map((dish) => (
            <Link
              key={dish.id}
              href={{
                pathname: `/la-carte/${dish.id}`,
                query: { title: dish.name },
              }}
            >
              {dish.name}
            </Link>
          ))}
        </section>
      </section>
      <section className={styles.dishCatWrapper}>
        <header className={styles.dishCatHeader}>
          <h2 className={styles.title}>nos sides</h2>
        </header>
        <section className={styles.gridCatWrapper}>
          {dishes.map((dish) => (
            <Link
              key={dish.id}
              href={{
                pathname: `/la-carte/${dish.id}`,
                query: { title: dish.name },
              }}
            >
              {dish.name}
            </Link>
          ))}
        </section>
      </section>
      <section className={styles.dishCatWrapper}>
        <header className={styles.dishCatHeader}>
          <h2 className={styles.title}>nos desserts</h2>
        </header>
        <section className={styles.gridCatWrapper}>
          {dishes.map((dish) => (
            <Link
              key={dish.id}
              href={{
                pathname: `/la-carte/${dish.id}`,
                query: { title: dish.name },
              }}
            >
              {dish.name}
            </Link>
          ))}
        </section>
      </section>
      <section className={styles.actionWrapper}>
        <p>Alors t'attends quoi</p>
        <OrderingButton />
      </section>
    </section>
  );
}
