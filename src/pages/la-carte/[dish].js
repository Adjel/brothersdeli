"use client";
import { useRouter } from "next/router";
import styles from "../../styles/dish.module.css";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
import OrderingButton from "@/components/OrderingButton";
import { useEffect } from "react";

export default function MenuDishPage() {
  const router = useRouter();
  const { name, src, width, height, desc, ingList, more, linkDesc, linkHref } =
    router.query;

  return (
    <section className={styles.dishWrapper}>
      <div className={styles.wrapper}>
        <Link href="/la-carte" className={styles.backButtonWrapper}>
          <span className={styles.iconButtonWrapper}>
            <IoMdArrowRoundBack size={"1.2em"} fontWeight={"bold"} />
            La carte
          </span>
        </Link>
      </div>
      <section className={styles.dishDescriptionWrapper}>
        <article className={styles.articleWrapper}>
          <div className={styles.imageWrapper}>
            <Image
              alt="une photo du produit"
              src={decodeURIComponent(src)}
              width={width}
              height={height}
              layout="responsive"
            />
          </div>
          <div className={styles.wrapper}>
            <header className={styles.header}>
              <h1 className={styles.title}>{name}</h1>
            </header>
            <p className={styles.itemContent}>{desc}</p>
            <ul className={styles.ingredientList}>
              {ingList?.map((item) => (
                <li className={styles.ingredientItem}>
                  <p className={styles.itemContent}>{item}</p>
                </li>
              ))}
            </ul>
            <div style={{ marginBottom: `${20 / 16}rem` }}>
              <p className={styles.itemContent}>
                {more}
                {linkDesc && (
                  <>
                    {" "}
                    <Link href={linkHref} style={{ color: "var(--primary)" }}>
                      {linkDesc}
                    </Link>
                    .
                  </>
                )}
              </p>
            </div>
            <OrderingButton />
          </div>
        </article>
      </section>
    </section>
  );
}
