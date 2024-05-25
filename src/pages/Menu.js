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
      title: `Le Brother's`,
      name: `Le Brother's 125gr`,
      src: leBrother,
      product: leBrotherDetails,
      desc: [
        "Découvrez notre best-seller, un délicieux sandwich avec 125gr de pastrami de bœuf. ",
      ],
      ingList: [
        "Du pain de seigle (Rye bread en anglais)",
        "Du pastrami de bœuf",
        "Des pickles",
        "Des oignons confits",
        "Une sauce moutarde-miel",
      ],
      more: "Existe également avec 220gr de pastrami pour un maximum de gourmandise, Le Big Brothers.",
    },
    {
      id: "le-big-brothers",
      title: "Le BIG Brother's",
      name: "Le BIG Brother's 225gr",
      src: leBigBrothers,
      product: leBigBrothersDetail,
      desc: [
        "Le sandwich idéal pour les plus gourmands avec une montagne de pastrami.",
      ],
      ingList: [
        "Du pain de seigle",
        "220gr de pastrami de bœuf",
        "Des pickles",
        "Des oignons confits",
        "Une sauce moutarde-miel",
      ],
      more: "Retrouvez son petit frère juste ici.",
    },
    {
      id: "le-og",
      name: "Le OG",
      src: leOg,
      product: leOgDetail,
      desc: [
        "Le sandwich qui colle parfaitement aux puristes, c’est l’original qui permet de revenir aux sources. C’est le sandwich au pastrami qu’on connait et qui nous décevra jamais.",
      ],
      ingList: [
        "Un pain de seigle (ou Rye bread en anglais)",
        "Du pastrami de bœuf maison",
        "Des pickles ",
        "Du cheddar",
        "Une sauce ketchup",
        "Les choses simples, on sait aussi les apprécier.",
      ],
      more: "",
    },
    {
      id: "le-reuben",
      name: "Le reuben",
      src: lereuben,
      product: lereubenDetail,
      desc: [
        "Encore une recette de sandwich au pastrami venant tout droit des Etats-Unis.",
      ],
      ingList: [
        "Du pain de seigle",
        "Du pastrami de bœuf",
        "Du choux blanc",
        "De l’emmental",
        "Des pickles",
        "De la sauce moutarde-miel",
      ],
      more: "",
    },
    {
      id: "le-turkey-club",
      name: "Le Turkey Club",
      src: leTurkeyClub,
      product: leTukeyDetail,
      desc: [
        "Bienvenue dans l’univers gourmand de notre sandwich au pastrami de dinde dans lequel se cache une symphonie de saveurs.",
      ],
      ingList: [
        "Du pastrami de dinde maison",
        "Du cheddar fondant",
        "Des pickles d’oignons pour une note de piquant subtil",
        "Des jeunes pousses fraîches pour la verdure",
        "Une onctueuse mayonnaise",
        "Une sauce zhoug, pour  la petite touche épicée",
      ],
      more: "",
    },
    {
      id: "le-green-brothers",
      name: "Le Green Brothers",
      src: leGreenBrother,
      product: leGreenDetail,
      desc: [
        "On prouve qu’un sandwich végé peut être gourmand, même sans pastrami. En somme, pas besoin d’être végétarien pour être conquis par le Green Brothers, à méditer.",
      ],
      ingList: [
        "Un pain buns préparé chaque matin par notre fournisseur",
        "Des falafels",
        "Des aubergines grillées",
        "Des poivrons ",
        "Des tomates marinées",
        "Et enfin la sauce du tonton Simon",
        "Alors, convaincus ? ",
      ],
      more: "",
    },
  ];

  const sides = [
    {
      id: "le-bab-ganoush",
      name: `Le bab ganoush`,
      src: leBabGanoush,
      product: leBabDetail,
      desc: [
        "Du soleil dans l’assiette avec ce magnifique caviar d’aubergines, une recette tout droit venue du Liban qui saura accompagner parfaitement votre sandwich.",
      ],
      ingList: [
        "Des aubergines (évidemment)",
        "Des gousses d’ail",
        "Du Tahini, une crème de sésame",
        "Du jus de citron",
        "Un beau filet d’huile d’olive",
        "Des graines de grenades",
        "Du Persil frais",
      ],
      more: "",
    },
    {
      id: "la-tchaktchouka",
      name: "Le Tchaktchouka",
      src: laTchaktchouka,
      product: laTchaktchouka,
      desc: [
        "Une petite ratatouille de poivrons et tomates aux saveurs du sud qui se déguste froide ou réchauffer très légèrement.",
      ],
      ingList: [
        "Des poivrons rouges",
        "Des tomates",
        "Des oignons",
        "De l’ail",
        "Des herbes fraîches",
      ],
      more: "",
    },
    {
      id: "le-houmous",
      name: "Le Houmous",
      src: leHoumous,
      product: leHoumousDetail,
      desc: ["Découvrez notre délicieux houmous maison aux saveurs du sud. "],
      ingList: [
        "Des pois chiches (logique)",
        "Un beau filet d’huile d’olive",
        "Une touche de paprika ",
        "Du persil frais",
      ],
      more: "",
    },
    {
      id: "les-pommes-de-terre-grenaille",
      name: "Les pommes de terre grenaille",
      src: lesPdtGrenailles,
      product: lesPdtGrenaillesDetail,
      desc: [
        "Les pommes de terres grenailles, délicieuses et savoureuses, sont de petites merveilles culinaires qui ajoutent une touche d’élégance à n’importe quel repas.",
      ],
      ingList: [
        "Des belles pommes de terre",
        "Du citron ",
        "Du thym",
        "Du persil frais",
      ],
      more: "",
    },
    {
      id: "chips-au-sel-de-mer",
      name: "Chips au sel de mer",
      src: lesChipsAuSelDeMer,
      product: lesChipsMerDetail,
      desc: ["Sel de mer - 40g"],
      ingList: [],
      more: "Découvrez les chips de pommes de terre de la marque Pipers aromatisées au sel de mer cristallisé. Le sel utilisé est récolté quotidiennement dans le détroit de Menai situé au nord-ouest du Pays de Galles. Simple et efficace, elles ne déçoivent jamais.",
    },
    {
      id: "chips-au-cheddar-et-oignons",
      name: "Chips au cheddar et oignons",
      src: lesChipsCheddarOignons,
      product: lesChipsCODetail,
      desc: ["Cheddar et oignon - 40g"],
      ingList: [],
      more: "Il y a les classiques, mais également les plus originales. Voici les chips aromatisés au cheddar et à l’oignon fabriqués au Royaume-Uni. Sans huile de palme, ni colorant artificiel, ni conservateur.",
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
                  name: item.title !== "" ? item.title : item.name,
                  src: encodeURIComponent(item.product.src),
                  width: item.product.width,
                  height: item.product.height,
                  desc: item.desc,
                  ingList: item.ingList,
                  more: item.more,
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
                  ingList: item.ingList,
                  more: item.more,
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
