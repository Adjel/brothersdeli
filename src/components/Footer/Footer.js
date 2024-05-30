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
      <section className={styles.socials}>
        <ul className={styles.mobileUl}>
          <il>
            <Link
              className={styles.link}
              target="_blank"
              href={"https://www.facebook.com/brothersdeliph/"}
            >
              <FaFacebookF />
            </Link>
          </il>
          <il>
            <Link
              className={styles.link}
              target="_blank"
              href={"https://www.instagram.com/brothers.deli/"}
            >
              <GrInstagram />
            </Link>
          </il>
        </ul>
      </section>
      <section className={styles.tabletIcon}>
        <Image
          className={styles.icon}
          src={brandIcon}
          alt="L'icône brotherdeli. Cliquez dessus pour retourner à l'acceuil"
          layout="responsive"
        />
      </section>
      <section className={styles.tabletAbout}>
        <ul className={styles.ul}>
          <h2 className={styles.h2}>A propos</h2>
          <il className={styles.il}>
            <Link className={styles.link} href="notre-histoire">
              Notre histoire
            </Link>
          </il>
          <il className={styles.il}>
            <Link className={styles.link} href="la-carte">
              Notre carte
            </Link>
          </il>
          <il className={styles.il}>
            <Link className={styles.link} href="">
              Nos restaurants
            </Link>
          </il>
        </ul>
      </section>
      <section className={styles.tabletContact}>
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
      </section>
      <section className={styles.tabletSocials}>
        <ul className={styles.ul}>
          <h2 className={styles.h2}>Rejoignez-nous sur les réseaux</h2>
          <div className={styles.tabletSocialsWrapper}>
            <il className={styles.il}>
              <Link
                className={styles.link}
                target="_blank"
                href="https://www.instagram.com/brothers.deli/"
              >
                <GrInstagram size={`${30 / 16}rem`} />
              </Link>
            </il>
            <il className={styles.il}>
              <Link
                className={styles.link}
                target="_blank"
                href="https://www.tiktok.com/@brothers.deli"
              >
                <FaTiktok size={`${30 / 16}rem`} />
              </Link>
            </il>
          </div>
        </ul>
      </section>
      <section className={styles.aboutAndLegals}>
        <span className={styles.about}>
          © BROTHERS DELI 2023 - Tous droits réservés
          <span className={styles.dot}>.</span>
        </span>
        <span className={styles.circle} />
        <span className={styles.legals}>Mentions légales</span>
      </section>
    </footer>
  );
}

export default Footer;
