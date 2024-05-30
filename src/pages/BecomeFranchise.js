import React, { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import styles from "../styles/contact.module.css";
import {
  handleError,
  resetErrors,
} from "@/components/HandlingErrors/handleErrors";
import { emailRegex, phoneRegex } from "@/utils/regex";
import {
  ErrorMessage,
  SubmitMessage,
} from "@/components/HandlingErrors/displayErrors";

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

  const [errors, setErrors] = useState({
    isError: undefined,
    firstName: undefined,
    lastName: undefined,
    email: {
      isEmpty: undefined,
      isRegexError: undefined,
    },
    phone: {
      isEmpty: undefined,
      isRegexError: undefined,
    },
    subject: undefined,
    message: undefined,
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  }

  // place regex before empty tests because regex will also be true if
  // input is empty, but we want to show empty
  function handleOnSubmit(event) {
    event.preventDefault();
    // reset errors
    resetErrors(setErrors);

    if (input.city.trim("") === "") handleError(setErrors, "city");
    if (input.project.trim("") === "") handleError(setErrors, "project");

    if (!emailRegex.test(input.email))
      handleError(setErrors, "email", "isRegexError");

    if (input.email.trim("") === "") handleError(setErrors, "email", "isEmpty");

    if (!phoneRegex.test(input.phone))
      handleError(setErrors, "phone", "isRegexError");

    if (input.phone === "") handleError(setErrors, "phone", "isEmpty");

    if (!errors.isError) fakeHandleSubmitInProvider();
  }

  async function fakeHandleSubmitInProvider() {
    if (errors.isError === false) {
      resetErrors(setErrors);
      setInput({
        lastName: "",
        firstName: "",
        email: "",
        city: "",
        local: false,
        phone: "",
        project: "",
      });
    }
  }

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
          <form className={styles.form} onSubmit={handleOnSubmit}>
            <div className={styles.inputRowWrapper}>
              <div className={styles.inputWrapper}>
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
              <div className={styles.inputWrapper}>
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
            <div className={styles.inputWrapper}>
              <label className={styles.label} htmlFor="email">
                E-mail <span className={styles.required}>*</span>
              </label>
              <input
                className={styles.input}
                type="email"
                id="email"
                name="email"
                value={input.email}
                onChange={(event) => handleInputChange(event)}
              ></input>
              <ErrorMessage error={errors.email} type="email" />
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label} htmlFor="city">
                Ville d'implantation <span className={styles.required}>*</span>
              </label>
              <input
                className={styles.input}
                type="text"
                id="city"
                name="city"
                value={input.city}
                onChange={(event) => handleInputChange(event)}
              ></input>
              <ErrorMessage error={errors.city} type="generic" />
            </div>
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
            <div className={styles.inputWrapper}>
              <label className={styles.label} htmlFor="phone">
                Téléphone <span className={styles.required}>*</span>
              </label>
              <input
                className={styles.input}
                type="number"
                id="phone"
                name="phone"
                value={input.phone}
                onChange={(event) => handleInputChange(event)}
              ></input>
              <ErrorMessage error={errors.phone} type="phone" />
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label} htmlFor="project">
                Dites-nous en plus sur le projet ?{" "}
                <span className={styles.required}>*</span>
              </label>
              <textarea
                className={styles.textarea}
                type="text"
                id="project"
                name="project"
                value={input.project}
                onChange={(event) => handleInputChange(event)}
              ></textarea>
              <ErrorMessage error={errors.project} type="generic" />
            </div>
            <div className={styles.submitButtonWrapper}>
              <button
                className={styles.submitButton}
                type="submit"
                onClick={(event) => handleOnSubmit(event)}
              >
                Envoyer
              </button>
              <SubmitMessage isError={errors.isError} />
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
