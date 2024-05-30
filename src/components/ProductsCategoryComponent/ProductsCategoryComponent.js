import React from "react";
import styles from "./productCategory.module.css";
import Link from "next/link";
import Image from "next/image";

function ProductsCategorySection({ id, title, content, itemList }) {
  return (
    <section className={styles.dishCatWrapper}>
      <header className={styles.dishCatHeader}>
        <h2 className={styles.title} id={id}>
          {title}
        </h2>
        {content && <p className={styles.p}>{content}</p>}
      </header>
      <section className={styles.gridCatWrapper}>
        {itemList.map((item) =>
          item.product ? (
            <Link
              className={styles.gridItem}
              key={item.id}
              href={{
                pathname: `/la-carte/{item.id}`,
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
                  alt={`photo non crontactuelle: ${item.name}`}
                  className={styles.imageItem}
                  src={item.src}
                  layout="responsive"
                  width={500}
                  height={300}
                />
              </div>
              <h2 className={styles.itemName}>{item.name}</h2>
            </Link>
          ) : (
            <div className={styles.gridItem} key={item.id}>
              <div className={styles.imageItemWrapper}>
                <Image
                  alt={`photo non crontactuelle: ${item.name}`}
                  className={styles.imageItem}
                  src={item.src}
                  layout="responsive"
                  width={500}
                  height={300}
                />
              </div>
              <h2 className={styles.itemName}>{item.name}</h2>
            </div>
          )
        )}
      </section>
    </section>
  );
}

export default ProductsCategorySection;
