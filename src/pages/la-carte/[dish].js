import { useRouter } from "next/router";
import styles from "../../styles/dish.module.css";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import { useEffect } from "react";

export default function MenuDishPage() {
  const router = useRouter();
  const { name, src, desc, width, height } = router.query;

  useEffect(() => {
    console.log({ name });
    console.log({ src });
    console.log({ desc });
  });

  return (
    <section className={styles.dishWrapper}>
      <Link href="/la-carte" className={styles.backButtonWrapper}>
        La carte
      </Link>
      <article className={styles.articleWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src={decodeURIComponent(src)}
            width={width}
            height={height}
            layout="responsive"
          />
        </div>
        <div className={styles.dishDescriptionWrapper}>
          <header>
            <h1>{name}</h1>
          </header>
        </div>
      </article>
    </section>
  );
}
