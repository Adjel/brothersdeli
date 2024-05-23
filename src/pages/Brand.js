import React from "react";
import styles from "../styles/brand.module.css";
import Image from "next/image";

export default function Brand() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1>voici notre histoire</h1>
      </header>
      <section className={styles.newYork}>
        <h2>
          BROTHERS DELI, LE OG DU PASTRAMI MADE IN FRANCE · RETROUVE TOI A NEW
          YORK DES 50'S LE TEMPS D'UN SANDWICH.
        </h2>
      </section>
      <article className={styles.article}>
        <section className={styles.articleContent}>
          <h2>le concept</h2>
          <span>
            Brothers Deli c’est deux amis, Simon et Pierre, qui se sont réunis
            autour d’un projet commun : celui de proposer une street-food qui
            fusionne les saveurs de la Méditerranée et celles des Deli’ des
            années 50 à New York avec leur produit phare,<b>le pastrami</b>.
          </span>
          <b>
            C’est en quelques sortes la cuisine du monde qu’ils ont voulu
            regrouper en un seul endroit.
          </b>
        </section>
        <Image className={styles.image} />
      </article>
      <article className={styles.article}>
        <section className={styles.articleContent}>
          <h2>le pastrami, c'est quoi ?</h2>
          <p>
            C’est une viande de bœuf marinée pendant quatre jours puis coupée en
            fines tranches qui fond en bouche. T’en as l’eau à la bouche,
            n’est-ce pas ? Nous aussi.
          </p>
          <p>
            Popularisée par les Juifs venus d’Europe aux Etats-Unis, c’est avant
            tout une viande qui a vu le jour dans les Balkans, plus précisément
            en Roumanie.
          </p>
          <b>
            Aujourd’hui, l’un de nos objectifs est de la rendre populaire dans
            tout l’Hexagone.
          </b>
        </section>
        <Image className={styles.image} />
      </article>
      <article className={styles.article}>
        <section className={styles.articleContent}>
          <h2>fait maison</h2>
          <p>
            L’une des pierres angulaires de notre cuisine est la confection
            maison de
            <b>notre pastrami de qualité supérieure</b>.
          </p>
          <p>
            Avec passion et dévouement, notre équipe d’experts culinaires
            prépare chaque morceau de viande avec soin, en utilisant des
            méthodes traditionnelles et des épices spécialement sélectionnées
            pour obtenir des saveurs uniques qui éveilleront vos papilles.
          </p>
          <p>
            Chez nous, « fait maison » signifie bien plus qu’une simple
            étiquette, c’est le symbole de notre engagement envers
            l’authenticité, la fraîcheur et la qualité inégalée.
          </p>
        </section>
        <Image className={styles.image} />
      </article>
    </section>
  );
}
