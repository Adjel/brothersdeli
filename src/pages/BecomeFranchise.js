import React, { useEffect, useState } from "react";
import styles from "../styles/bFranchise.module.css";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function BecomeFranchise() {
  const [input, setInput] = useState({
    lastName: "",
    firstName: "",
    email: "",
    city: "",
    local: false,
    phone: "",
    project: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  function handleOnSubmit(event) {
    event.preventDefault();
  }

  useEffect(() => {
    console.log(input.local);
    console.log(input);
  }, [input]);

  return (
    <section className={styles.wrapper}>
      <section className={styles.responsiveWrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>devenir franchisé</h1>
          <p className={styles.subTitle}>
            Vous souhaitez faire partie de l'aventure ? Faisons connaissance !
          </p>
        </header>
        <section className={styles.formWrapper}>
          <form className={styles.form}>
            <div className={styles.inputsNameWrapper}>
              <div className={styles.inputName}>
                <label className={styles.label} htmlFor="lastName">
                  Nom
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={input.lastName}
                  onChange={(event) => handleInputChange(event)}
                ></input>
              </div>
              <div className={styles.inputName}>
                <label className={styles.label} htmlFor="firstName">
                  Prénom
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={input.firstName}
                  onChange={(event) => handleInputChange(event)}
                ></input>
              </div>
            </div>
            <label className={styles.label} htmlFor="email">
              E-mail
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              value={input.email}
              onChange={(event) => handleInputChange(event)}
            ></input>
            <label className={styles.label} htmlFor="city">
              Ville d'implantation
            </label>
            <input
              className={styles.input}
              type="text"
              id="city"
              name="city"
              value={input.city}
              onChange={(event) => handleInputChange(event)}
            ></input>
            <div className={styles.checkboxbWrapper}>
              <p className={styles.option}>Avez-vous déjà un local ?</p>
              <span className={styles.option}>
                <label htmlFor="localYes">Oui</label>
                <input
                  type="checkbox"
                  id="localYes"
                  name="local"
                  value={true}
                  checked={input.local === "true"}
                  onChange={(event) => handleInputChange(event)}
                ></input>
              </span>
              <span className={styles.option}>
                <label htmlFor="localNo">Non</label>
                <input
                  type="checkbox"
                  id="localNo"
                  name="local"
                  value={false}
                  checked={input.local === "false"}
                  onChange={(event) => handleInputChange(event)}
                ></input>
              </span>
            </div>
            <label className={styles.label} htmlFor="phone">
              Téléphone
            </label>
            <input
              className={styles.input}
              type="number"
              id="phone"
              name="phone"
              value={input.phone}
              onChange={(event) => handleInputChange(event)}
            ></input>
            <label className={styles.label} htmlFor="project">
              Dites-nous en plus sur le projet ?
            </label>
            <textarea
              className={styles.textarea}
              type="text"
              id="project"
              name="project"
              value={input.project}
              onChange={(event) => handleInputChange(event)}
            ></textarea>
            <div className={styles.submitButtonWrapper}>
              <button
                className={styles.submitButton}
                type="submit"
                onClick={(event) => handleOnSubmit(event)}
              >
                Envoyer
              </button>
            </div>
          </form>
        </section>
      </section>
      <section className={styles.actionWrapper}>
        <button className={styles.actionButton}>
          Découvrez nos resaurants
          <IoMdArrowRoundForward size={`${32 / 16}rem`} />
        </button>
      </section>
    </section>
  );
}
