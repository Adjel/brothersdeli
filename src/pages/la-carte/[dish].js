"use client";
import { useRouter } from "next/router";
import styles from "../../styles/dish.module.css";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
import OrderingButton from "@/components/OrderingButton";
import { fakeFetchOnApi, getItemByName } from "@/data/data";

export default function MenuDishPage() {
  const router = useRouter();
  const { name, src, width, height, desc, ingList, more, linkDesc, linkId } =
    router.query;

  function handleOnLinkClick(event, linkId) {
    event.preventDefault();
    const data = fakeFetchOnApi(linkId);
    console.log(data);
    router.push({
      pathname: `/la-carte/${data.id}`,
      query: {
        name: data.title ?? data.name,
        src: decodeURIComponent(data.product.src),
        width: data.width ?? 500,
        height: data.height ?? 300,
        desc: data.desc,
        ingList: data.ingList,
        more: data.more,
        linkDesc: data.link.desc,
        linkId: data.link.id,
      },
    });
  }

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
            {name && (
              <Image
                alt="une photo du produit"
                src={decodeURIComponent(src) ?? src ?? undefined}
                width={width ?? 500}
                height={height ?? 300}
                layout="responsive"
              />
            )}
          </div>
          <div className={styles.wrapper}>
            <header className={styles.header}>
              <h1 className={styles.title}>{name}</h1>
            </header>
            <p className={styles.itemContent}>{desc}</p>
            <ul className={styles.ingredientList}>
              {ingList?.map((item) => (
                <li key={crypto.randomUUID()} className={styles.ingredientItem}>
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
                    <Link
                      href=""
                      onClick={(event) => handleOnLinkClick(event, linkId)}
                      style={{ color: "var(--primary)" }}
                    >
                      {linkDesc}
                    </Link>
                    .
                  </>
                )}
              </p>
            </div>
            <div className={styles.orderingButtonWrapper}>
              <OrderingButton />
            </div>
          </div>
        </article>
      </section>
    </section>
  );
}
