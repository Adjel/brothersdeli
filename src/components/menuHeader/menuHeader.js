import React from "react";
import styles from "./menuHeader.module.css";

function MenuHeader({ id, title, content }) {
  return (
    <header className={styles.dishCatHeader}>
      <h2 className={styles.title} id={id}>
        {title}
      </h2>
      {content && <p className={styles.p}>{content}</p>}
    </header>
  );
}

export default MenuHeader;
