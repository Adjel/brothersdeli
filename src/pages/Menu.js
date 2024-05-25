"use client";
import React from "react";
import Link from "next/link";
import styles from "../styles/menu.module.css";
import OrderingButton from "@/components/OrderingButton";
import Image from "next/image";
import leBrother from "../../public/images/dishes/Sandwich-Le-Brothers-125gr.jpg";
import leBigBrothers from "../../public/images/dishes/Sandwich-Le-Brothers-125gr.jpg";
import leOg from "../../public/images/dishes/Sandwich-Le-OG.jpg";
import lereuben from "../../public/images/dishes/Sandwich-Le-Reuben.jpg";
import leTurkeyClub from "../../public/images/dishes/Sandwich-Le-Turkey-Club.jpg";
import leGreenBrother from "../../public/images/dishes/Sandwich-Le-Green-Brother.jpg";
import leBabGanoush from "../../public/images/sides/Side-Baba-ganoush.jpg";
import laTchaktchouka from "../../public/images/sides/Side-Tchaktchouka-1.jpg";
import leHoumous from "../../public/images/sides/Side-Houmous-1.jpg";
import lesPdtGrenailles from "../../public/images/sides/Side-Grenailles.jpg";
import lesChipsAuSelDeMer from "../../public/images/sides/Side-Chips-sel-de-mer.jpg";
import ChipsAuCheddarEtOignons from "../../public/images/sides/Side-Chips-cheddar-et-oignon.jpg";
import leMarbre from "../../public/images/desserts/Dessert-Marbre-1.jpg";
import leCarrotCake from "../../public/images/desserts/Dessert-Carrot-cake-1.jpg";
import leCoockiesCbd from "../../public/images/desserts/Dessert-Cookies-au-CBD.jpg";
import leCheeseCake from "../../public/images/desserts/Dessert-Cheesecake-1.jpg";

export default function Menu() {
  const dishes = [
    {
      id: "le-brothers",
      name: `Le Brother${`&aposs;`}s 125gr`,
      src: leBrother,
    },
    {
      id: "le-big-brothers",
      name: "Le BIG Brother's 225gr",
      src: leBigBrothers,
    },
    { id: "le-og", name: "Le OG", src: leOg },
    { id: "le-reuben", name: "Le reuben", src: lereuben },
    { id: "le-turkey-club", name: "Le Turkey Club", src: leTurkeyClub },
    { id: "le-green-brothers", name: "Le Green Brothers", src: leGreenBrother },
  ];

  const sides = [
    { id: "le-bab-ganoush", name: `Le bab ganoush`, src: leBabGanoush },
    { id: "la-tchaktchouka", name: "Le Tchaktchouka", src: laTchaktchouka },
    { id: "le-houmous", name: "Le Houmous", src: leHoumous },
    {
      id: "les-pommes-de-terre-grenaille",
      name: "Les pommes de terre grenaille",
      src: lesPdtGrenailles,
    },
    {
      id: "chips-au-sel-de-mer",
      name: "Chips au sel de mer",
      src: lesChipsAuSelDeMer,
    },
    {
      id: "chips-au-cheddar-et-oignons",
      name: "Chips au cheddar et oignons",
      src: ChipsAuCheddarEtOignons,
    },
  ];

  const desserts = [
    { id: "le-marbre", name: "Le Marbre", src: leMarbre },
    { id: "le-carrot-cake", name: "Le carrot cake", src: leCarrotCake },
    { id: "le-coockies-cbd", name: "Le Cookies CBD", src: leCoockiesCbd },
    {
      id: "space1",
      name: "",
      src: "",
    },
    {
      id: "le-cheese-cake",
      name: "Le Cheesecake Coulis ananas yuzu",
      src: leCheeseCake,
    },
    {
      id: "space2",
      name: "",
      src: "",
    },
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
          <p className={styles.p}>
            Découvrez nos recettes originales de sandwich au pastrami, sans
            oublier la version végétarienne.
          </p>
        </header>
        <section className={styles.gridCatWrapper}>
          {dishes.map((dish) => (
            <Link
              className={styles.gridItem}
              key={dish.id}
              href={{
                pathname: `/la-carte/${dish.id}`,
                query: { title: dish.name },
              }}
            >
              <div className={styles.imageItemWrapper}>
                <Image
                  className={styles.imageItem}
                  src={dish.src}
                  layout="responsive"
                />
              </div>
              <h2 className={styles.itemName}>{dish.name}</h2>
            </Link>
          ))}
        </section>
      </section>
      <section className={styles.dishCatWrapper}>
        <header className={styles.dishCatHeader}>
          <h2 className={styles.title}>nos sides</h2>
        </header>
        <section className={styles.gridCatWrapper}>
          {sides.map((dish) => (
            <Link
              className={styles.gridItem}
              key={dish.id}
              href={{
                pathname: `/la-carte/${dish.id}`,
                query: { title: dish.name },
              }}
            >
              <div className={styles.imageItemWrapper}>
                <Image
                  className={styles.imageItem}
                  src={dish.src}
                  layout="responsive"
                />
              </div>
              <h2 className={styles.itemName}>{dish.name}</h2>
            </Link>
          ))}
        </section>
      </section>
      <section className={styles.dishCatWrapper}>
        <header className={styles.dishCatHeader}>
          <h2 className={styles.title}>nos desserts</h2>
        </header>
        <section className={styles.gridCatWrapper}>
          {desserts.map((dish) => (
            <Link
              className={styles.gridItem}
              key={dish.id}
              href={{
                pathname: `/la-carte/${dish.id}`,
                query: { title: dish.name },
              }}
            >
              <div className={styles.imageItemWrapper}>
                <Image
                  className={styles.imageItem}
                  src={dish.src}
                  layout="responsive"
                />
              </div>
              <h2 className={styles.itemName}>{dish.name}</h2>
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
