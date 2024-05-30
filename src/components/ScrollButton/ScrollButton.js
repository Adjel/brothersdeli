import React from "react";
import styles from "./scrollButton.module.css";
import Link from "next/link";

function ScrollButton({ href, content }) {
  return (
    <button className={styles.scrollButton}>
      <h2 className={styles.h2}>
        <Link href={href} className={styles.buttonLink}>
          {content}
        </Link>
      </h2>
    </button>
  );
}

export function ResponsiveScrollButton({ href, content }) {
  const words = content.split(" ");
  return (
    <button className={styles.scrollButton}>
      <h2 className={styles.h2oneLine}>
        <Link href={href} className={styles.buttonLink}>
          {content}
        </Link>
      </h2>
      <h2 className={styles.h2twoLines}>
        <Link href={href} className={styles.buttonLink}>
          {words.map((word, index) => (
            <span key={index}>{word}</span>
          ))}
        </Link>
      </h2>
    </button>
  );
}

export default ScrollButton;
