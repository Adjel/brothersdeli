import { useRouter } from "next/router";
import styles from "../../styles/dish.module.css";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import OrderingButton from "@/components/OrderingButton";

export default function MenuDishPage() {
  const router = useRouter();
  const { name, src, desc, width, height } = router.query;

  return (
    <section className={styles.dishWrapper}>
      <Link href="/la-carte" className={styles.backButtonWrapper}>
        La carte
      </Link>
      <section className={styles.dishDescriptionWrapper}>
        <article className={styles.articleWrapper}>
          <div className={styles.imageWrapper}>
            <Image
              src={decodeURIComponent(src)}
              width={width}
              height={height}
              layout="responsive"
            />
          </div>
          <header>
            <h1>{name}</h1>
          </header>
          <ul>
            {desc?.map((item) => (
              <li>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>
        <div>
          <OrderingButton />
        </div>
      </section>
    </section>
  );
}
