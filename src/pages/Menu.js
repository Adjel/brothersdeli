"use client";
import React from "react";
import Link from "next/link";
import styles from "../styles/menu.module.css";
import OrderingButton from "@/components/OrderingButton";
import Image from "next/image";
import { dishes, sides, desserts } from "@/data/data";
import ScrollButton from "@/components/ScrollButton";
import { ResponsiveScrollButton } from "@/components/ScrollButton";

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
        <header className={styles.dishCatHeader}>
          <h2 className={styles.title} id="sandwichs">
            nos sandwichs
          </h2>
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
                  name: item.title ?? item.name,
                  src: encodeURIComponent(item.product.src),
                  width: item.product.width,
                  height: item.product.height,
                  desc: item.desc,
                  ingList: item.ingList,
                  more: item.more,
                  linkDesc: item.link?.desc,
                  linkHref: item.link?.href,
                },
              }}
            >
              <div className={styles.imageItemWrapper}>
                <Image
                  alt="une photo d'un sandwich"
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
          <h2 className={styles.title} id="sides">
            nos sides
          </h2>
        </header>
        <section className={styles.gridCatWrapper}>
          {sides.map((item) => (
            <Link
              className={styles.gridItem}
              key={item.id}
              href={{
                pathname: `/la-carte/${item.id}`,
                query: {
                  name: item.title ?? item.name,
                  src: encodeURIComponent(item.product.src),
                  width: item.product.width,
                  height: item.product.height,
                  desc: item.desc,
                  ingList: item.ingList,
                  more: item.more,
                  linkDesc: item.link?.desc,
                  linkHref: item.link?.href,
                },
              }}
            >
              <div className={styles.imageItemWrapper}>
                <Image
                  alt="une photo d'un side"
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
          <h2 className={styles.title} id="desserts">
            nos desserts
          </h2>
        </header>
        <section className={styles.gridCatWrapper}>
          {desserts.map((item) => (
            <div className={styles.gridItem} key={item.id}>
              <div className={styles.imageItemWrapper}>
                <Image
                  alt="une photo d'un dessert"
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
      <div style={{ backgroundColor: "var(--secondary)", width: "100%" }}>
        <section className={styles.actionWrapper}>
          <p className={styles.actionP}>Alors t'attends quoi ?</p>
          <OrderingButton />
        </section>
      </div>
    </section>
  );
}
