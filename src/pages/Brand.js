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
          alt="une photo de deux mains tenant un sandwich"
          className={styles.headerImage}
          src={LHImage}
          layout="responsive"
        />
        <h1 className={styles.h1}>voici notre histoire !</h1>
        <Image
          alt="une photo de deux mains tenant un autre sandwich"
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
          <section className={styles.articleCreatorsContent}>
            <h2 className={styles.h2}>le concept</h2>
            <div className={styles.content}>
              <p className={styles.p}>
                Brothers Deli c’est deux amis, Simon et Pierre, qui se sont
                réunis autour d’un projet commun : celui de proposer une
                street-food qui fusionne les saveurs de la Méditerranée et
                celles des Deli’ des années 50 à New York avec leur produit
                phare,<b> le pastrami</b>.
              </p>
              <p className={styles.p}>
                <b className={styles.b}>
                  C’est en quelques sortes la cuisine du monde qu’ils ont voulu
                  regrouper en un seul endroit.
                </b>
              </p>
              <p>&nbsp;</p>
            </div>
          </section>
          <section className={styles.creatorsPhotosSection}>
            <div className={styles.simonWrapper}>
              <Image
                alt="Simon l'un des fondateurs du restaurant"
                className={styles.creatorPhotos}
                src={Simon}
                layout="responsive"
              />
            </div>
            <div className={styles.pierreWrapper}>
              <Image
                alt="Pierre l'un des fondateurs du restaurant"
                className={styles.creatorPhotos}
                src={Pierre}
                layout="responsive"
              />
            </div>
          </section>
        </article>
      </div>
      <article className={styles.article}>
        <div className={styles.articleWrapper}>
          <section className={styles.articleSection}>
            <Image
              alt="une photo de New York"
              className={styles.image}
              src={NewYork}
              layout="responsive"
            />
          </section>
          <section className={styles.articleSection}>
            <section className={styles.endArticleContent}>
              <h2 className={styles.articleH2}>le pastrami, c'est quoi ?</h2>
              <p className={styles.articleP}>
                C’est une viande de bœuf marinée pendant quatre jours puis
                coupée en fines tranches qui fond en bouche. T’en as l’eau à la
                bouche, n’est-ce pas ? Nous aussi.
              </p>
              <p className={styles.articleP}>
                Popularisée par les Juifs venus d’Europe aux Etats-Unis, c’est
                avant tout une viande qui a vu le jour dans les Balkans, plus
                précisément en Roumanie.
              </p>
              <p className={styles.articleP}>
                <b>
                  Aujourd’hui, l’un de nos objectifs est de la rendre populaire
                  dans tout l’Hexagone.
                </b>
              </p>
            </section>
          </section>
        </div>
      </article>
      <article className={styles.article}>
        <div className={styles.articleWrapper}>
          <section className={styles.articleSection}>
            <section className={styles.startArticleContent}>
              <h2 className={styles.articleH2}>fait maison</h2>
              <p className={styles.articleP}>
                L’une des pierres angulaires de notre cuisine est la confection
                maison de
                <b>notre pastrami de qualité supérieure</b>.
              </p>
              <p className={styles.articleP}>
                Avec passion et dévouement, notre équipe d’experts culinaires
                prépare chaque morceau de viande avec soin, en utilisant des
                méthodes traditionnelles et des épices spécialement
                sélectionnées pour obtenir des saveurs uniques qui éveilleront
                vos papilles.
              </p>
              <p className={styles.articleP}>
                Chez nous, « fait maison » signifie bien plus qu’une simple
                étiquette, c’est le symbole de notre engagement envers
                l’authenticité, la fraîcheur et la qualité inégalée.
              </p>
            </section>
          </section>
          <section className={styles.articleSection}>
            <Image
              alt="une photo de pastrami"
              className={styles.image}
              src={ViandePastrami}
              layout="responsive"
            />
          </section>
        </div>
      </article>
    </section>
  );
}
