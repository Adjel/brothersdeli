"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import styles from "../styles/menu.module.css";
import OrderingButton from "@/components/OrderingButton";
import Image from "next/image";

// imports sandwiches
import leBrother from "../../public/images/dishes/Sandwich-Le-Brothers-125gr.jpg";
import leBrotherDetails from "../../public/images/dishes/products/Sandwich-Fiche-Produit-Le-Brothers-125gr.png";
import leBigBrothers from "../../public/images/dishes/Sandwich-Le-Brothers-125gr.jpg";
import leBigBrothersDetail from "../../public/images/dishes/products/Sandwich-Fiche-Produit-Le-Brothers-220gr.png";
import leOg from "../../public/images/dishes/Sandwich-Le-OG.jpg";
import leOgDetail from "../../public/images/dishes/products/Sandwich-Fiche-Produit-Le-OG.png";
import lereuben from "../../public/images/dishes/Sandwich-Le-Reuben.jpg";
import lereubenDetail from "../../public/images/dishes/products/Sandwich-Fiche-Produit-Le-reuben.png";
import leTurkeyClub from "../../public/images/dishes/Sandwich-Le-Turkey-Club.jpg";
import leTukeyDetail from "../../public/images/dishes/products/Sandwich-Fiche-Produit-Turkey-Club.png";
import leGreenBrother from "../../public/images/dishes/Sandwich-Le-Green-Brother.jpg";
import leGreenDetail from "../../public/images/dishes/products/Sandwich-Fiche-Produit-Green-Brothers.png";

// import sides
import leBabGanoush from "../../public/images/sides/Side-Baba-ganoush.jpg";
import leBabDetail from "../../public/images/sides/products/Baba-ganoush.png";
import laTchaktchouka from "../../public/images/sides/Side-Tchaktchouka-1.jpg";
import laTchakDetail from "../../public/images/sides/products/Tchaktchouka.png";
import leHoumous from "../../public/images/sides/Side-Houmous-1.jpg";
import leHoumousDetail from "../../public/images/sides/products/Houmous.png";
import lesPdtGrenailles from "../../public/images/sides/Side-Grenailles.jpg";
import lesPdtGrenaillesDetail from "../../public/images/sides/products/Pommes-de-terre-grenailles.png";
import lesChipsAuSelDeMer from "../../public/images/sides/Side-Chips-sel-de-mer.jpg";
import lesChipsMerDetail from "../../public/images/sides/products/Chips-sel-de-mer.png";
import lesChipsCheddarOignons from "../../public/images/sides/Side-Chips-cheddar-et-oignon.jpg";
import lesChipsCODetail from "../../public/images/sides/products/Chips-cheddar-oignons.png";

// import dessert
import leMarbre from "../../public/images/desserts/Dessert-Marbre-1.jpg";
import leCarrotCake from "../../public/images/desserts/Dessert-Carrot-cake-1.jpg";
import leCoockiesCbd from "../../public/images/desserts/Dessert-Cookies-au-CBD.jpg";
import leCheeseCake from "../../public/images/desserts/Dessert-Cheesecake-1.jpg";

export default function Menu() {
  const dishes = [
    {
      id: "le-brothers",
      name: `Le Brother's 125gr`,
      src: leBrother,
      product: leBrotherDetails,
      desc: [],
    },
    {
      id: "le-big-brothers",
      name: "Le BIG Brother's 225gr",
      src: leBigBrothers,
      product: leBigBrothersDetail,
      desc: [
        "Le sandwich idéal pour les plus gourmands avec une montagne de pastrami.",
        "Du pain de seigle",
        "220gr de pastrami de bœuf",
        "Des pickles",
        "Des oignons confits",
        "Une sauce moutarde-miel",
      ],
    },
    { id: "le-og", name: "Le OG", src: leOg, product: leOgDetail, desc: [] },
    {
      id: "le-reuben",
      name: "Le reuben",
      src: lereuben,
      product: lereubenDetail,
      desc: [],
    },
    {
      id: "le-turkey-club",
      name: "Le Turkey Club",
      src: leTurkeyClub,
      product: leTukeyDetail,
      desc: [],
    },
    {
      id: "le-green-brothers",
      name: "Le Green Brothers",
      src: leGreenBrother,
      product: leGreenDetail,
      desc: [],
    },
  ];

  const sides = [
    {
      id: "le-bab-ganoush",
      name: `Le bab ganoush`,
      src: leBabGanoush,
      product: leBabDetail,
      desc: [],
    },
    {
      id: "la-tchaktchouka",
      name: "Le Tchaktchouka",
      src: laTchaktchouka,
      product: laTchaktchouka,
      desc: [],
    },
    {
      id: "le-houmous",
      name: "Le Houmous",
      src: leHoumous,
      product: leHoumousDetail,
      desc: [],
    },
    {
      id: "les-pommes-de-terre-grenaille",
      name: "Les pommes de terre grenaille",
      src: lesPdtGrenailles,
      product: lesPdtGrenaillesDetail,
      desc: [],
    },
    {
      id: "chips-au-sel-de-mer",
      name: "Chips au sel de mer",
      src: lesChipsAuSelDeMer,
      product: lesChipsMerDetail,
      desc: [],
    },
    {
      id: "chips-au-cheddar-et-oignons",
      name: "Chips au cheddar et oignons",
      src: lesChipsCheddarOignons,
      product: lesChipsCODetail,
      desc: [],
    },
  ];

  const desserts = [
    { id: "le-marbre", name: "Le Marbre", src: leMarbre },
    { id: "le-carrot-cake", name: "Le carrot cake", src: leCarrotCake },
    { id: "le-coockies-cbd", name: "Le Cookies CBD", src: leCoockiesCbd },
    {
      id: "le-cheese-cake",
      name: "Le Cheesecake Coulis ananas yuzu",
      src: leCheeseCake,
    },
  ];

  useEffect(() => {
    console.log({ dishes });
  });

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
          {dishes.map((item) => (
            <Link
              className={styles.gridItem}
              key={item.id}
              href={{
                pathname: `/la-carte/${item.id}`,
                query: {
                  name: item.name,
                  src: encodeURIComponent(item.product.src),
                  width: item.product.width,
                  height: item.product.height,
                  desc: item.desc,
                },
              }}
            >
              <div className={styles.imageItemWrapper}>
                <Image
                  className={styles.imageItem}
                  src={item.src}
                  layout="responsive"
                  width={500}
                  height={300}
                />
              </div>
              <h2 className={styles.itemName}>{item.name}</h2>
            </Link>
          ))}
        </section>
      </section>
      <section className={styles.dishCatWrapper}>
        <header className={styles.dishCatHeader}>
          <h2 className={styles.title}>nos sides</h2>
        </header>
        <section className={styles.gridCatWrapper}>
          {sides.map((item) => (
            <Link
              className={styles.gridItem}
              key={item.id}
              href={{
                pathname: `/la-carte/${item.id}`,
                query: {
                  name: item.name,
                  src: encodeURIComponent(item.product.src),
                  width: item.product.width,
                  height: item.product.height,
                  desc: item.desc,
                },
              }}
            >
              <div className={styles.imageItemWrapper}>
                <Image
                  className={styles.imageItem}
                  src={item.src}
                  layout="responsive"
                />
              </div>
              <h2 className={styles.itemName}>{item.name}</h2>
            </Link>
          ))}
        </section>
      </section>
      <section className={styles.dishCatWrapper}>
        <header className={styles.dishCatHeader}>
          <h2 className={styles.title}>nos desserts</h2>
        </header>
        <section className={styles.gridCatWrapper}>
          {desserts.map((item) => (
            <div className={styles.gridItem} key={item.id}>
              <div className={styles.imageItemWrapper}>
                <Image
                  className={styles.imageItem}
                  src={item.src}
                  layout="responsive"
                />
              </div>
              <h2 className={styles.itemName}>{item.name}</h2>
            </div>
          ))}
        </section>
      </section>
      <section className={styles.actionWrapper}>
        <p className={styles.actionP}>Alors t'attends quoi ?</p>
        <OrderingButton />
      </section>
    </section>
  );
}
