import React from "react";
import styles from "../styles/brand.module.css";
import Image from "next/image";
import Pierre from "../../public/images/pierre/Pierre-Brothers-Deli-scaled.jpg";
import Simon from "../../public/images/simon/Simon-Brothers-Deli-scaled.jpg";
import LHImage from "../../public/images/Photo-accueil-Sandwich-Green-Brothers-768x768.png";
import RHImage from "../../public/images/Une-main-qui-tient-un-sandwich.png";
import NewYork from "../../public/images/les-rues-de-new-york/Les-rues-de-New-York.jpg";
import ViandePastrami from "../../public/images/viande-pastrami/Viande-de-pastrami-fait-maison-scaled.jpg";

export default function Brand() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Image
          className={styles.headerImage}
          src={LHImage}
          layout="responsive"
        />
        <h1 className={styles.h1}>voici notre histoire !</h1>
        <Image
          className={styles.headerImage}
          src={RHImage}
          layout="responsive"
        />
      </header>
      <section className={styles.marqueeSection}>
        <span className={styles.marquee}>
          <h2 className={styles.marqueeContent}>
            BROTHERS DELI, LE OG DU PASTRAMI MADE IN FRANCE · RETROUVE TOI A NEW
            YORK DES 50'S LE TEMPS D'UN SANDWICH.
          </h2>
        </span>
      </section>
      <div className={styles.div}>
        <article className={styles.articleCreators}>
          <section className={styles.articleContent}>
            <h2 className={styles.h2}>le concept</h2>
            <p className={styles.p}>
              Brothers Deli c’est deux amis, Simon et Pierre, qui se sont réunis
              autour d’un projet commun : celui de proposer une street-food qui
              fusionne les saveurs de la Méditerranée et celles des Deli’ des
              années 50 à New York avec leur produit phare,<b> le pastrami</b>.
            </p>
            <b className={styles.b}>
              C’est en quelques sortes la cuisine du monde qu’ils ont voulu
              regrouper en un seul endroit.
            </b>
          </section>
          <section className={styles.creatorsPhotosSection}>
            <div className={styles.simonWrapper}>
              <Image
                className={styles.creatorPhotos}
                src={Simon}
                layout="responsive"
              />
            </div>
            <div className={styles.pierreWrapper}>
              <Image
                className={styles.creatorPhotos}
                src={Pierre}
                layout="responsive"
              />
            </div>
          </section>
        </article>
      </div>
      <article className={styles.article}>
        <Image className={styles.image} src={NewYork} layout="responsive" />
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
        <Image
          className={styles.image}
          src={ViandePastrami}
          layout="responsive"
        />
      </article>
    </section>
  );
}
