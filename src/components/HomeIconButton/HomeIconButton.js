import React from "react";
import Link from "next/link";
import homeIcon from "../../../public/images/logos/logo-vert-brothers-deli.png";
import Image from "next/image";
import styles from "./homeIconButton.module.css";

function HomeIconButton() {
  return (
    <Link className={styles.wrapper} href="/">
      <Image
        className={styles.icon}
        src={homeIcon}
        alt="L'icône brotherdeli. Cliquez dessus pour retourner à l'acceuil"
        layout="responsive"
      />
    </Link>
  );
}

export default HomeIconButton;
