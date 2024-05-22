import React from "react";
import styles from "./footer.module.css";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import brandIcon from "../../../public/images/logos/Logo-blanc-sans-fond-1536x1536.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <small className={styles.socials}>
        <ul>
          <il>
            <Link className={styles.link} href={""}>
              <FaFacebookF />
            </Link>
          </il>
          <il>
            <Link className={styles.link} href={""}>
              <GrInstagram />
            </Link>
          </il>
        </ul>
      </small>
      <div className={styles.tabletIcon}>
        <Image
          className={styles.icon}
          src={brandIcon}
          alt="L'icône brotherdeli. Cliquez dessus pour retourner à l'acceuil"
          layout="responsive"
        />
      </div>
      <div className={styles.tabletAbout}>
        <ul className={styles.ul}>
          <h2 className={styles.h2}>A propos</h2>
          <il className={styles.il}>
            <Link className={styles.link} href="Notre-histoire">
              Notre histoire
            </Link>
          </il>
          <il className={styles.il}>
            <Link className={styles.link} href="Notre-carte">
              Notre carte
            </Link>
          </il>
          <il className={styles.il}>
            <Link className={styles.link} href="">
              Nos restaurants
            </Link>
          </il>
        </ul>
      </div>
      <div className={styles.tabletContact}>
        <ul className={styles.ul}>
          <h2 className={styles.h2}>Contact</h2>
          <il className={styles.il}>
            <Link className={styles.link} href="contact">
              Nous contacter
            </Link>
          </il>
          <il className={styles.il}>
            <Link className={styles.link} href="devenir-franchise">
              Devenir franchisé
            </Link>
          </il>
        </ul>
      </div>
      <div className={styles.tabletSocials}>
        <ul className={styles.ul}>
          <h2 className={styles.h2}>Rejoignez-nous sur les réseaux</h2>
          <div className={styles.tabletSocialsWrapper}>
            <il className={styles.il}>
              <Link className={styles.link} href="">
                <GrInstagram size={`${30 / 16}rem`} />
              </Link>
            </il>
            <il className={styles.il}>
              <Link className={styles.link} href="">
                <FaTiktok size={`${30 / 16}rem`} />
              </Link>
            </il>
          </div>
        </ul>
      </div>
      <div className={styles.aboutAndLegals}>
        <small className={styles.about}>
          © BROTHERS DELI 2023 - Tous droits réservés
          <small className={styles.dot}>.</small>
        </small>
        <span className={styles.circle} />
        <small className={styles.legals}>Mentions légales</small>
      </div>
    </footer>
  );
}

export default Footer;
