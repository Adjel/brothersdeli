import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import styles from "../styles/contact.module.css";
import { FaCaretDown } from "react-icons/fa";

export default function Contact() {
  const [input, setInput] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    isError: undefined,
    isPhoneError: undefined,
    isEmailError: undefined,
  });

  const iconSize = `${18 / 16}rem`;

  function handleInputChange(event) {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    // reset errors
    setErrors({
      isError: false,
      isPhoneError: false,
      isEmailError: false,
    });
    const phoneRegex =
      /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/gm;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (input.city === "") {
      setInput({
        ...input,
        city: "NANTES",
      });
    }
    if (input.email === "" || input.subject === "" || input.message === "")
      return setErrors((prevState) => ({ ...prevState, isError: true }));
    if (!emailRegex.test(input.email))
      return setErrors((prevState) => ({ ...prevState, isEmailError: true }));
    if (!phoneRegex.test(input.phone))
      return setErrors((prevState) => ({ ...prevState, isPhoneError: true }));
    fakeHandleSubmitInProvider();
  }

  async function fakeHandleSubmitInProvider() {
    if (!errors.isError && !errors.isPhoneError && !errors.isEmailError) {
      setErrors({
        isError: false,
        isPhoneError: false,
        isEmailError: false,
      });
    }
  }

  function ErrorMEssage() {
    return (
      errors.isError && (
        <div className={styles.error}>
          <IoCloseOutline size={iconSize} /> Ce champ est nécéssaire.
        </div>
      )
    );
  }

  function ErrorPhoneMessage() {
    return (
      errors.isPhoneError && (
        <div className={styles.error}>
          <IoCloseOutline size={iconSize} />
          Le champ accepte uniquement les chiffres et les caractères
          téléphoniques (#, -, *, etc.).
        </div>
      )
    );
  }

  function SubmitErrorMessage() {
    return (
      errors.isError !== undefined && (
        <div className={errors.isError ? styles.submitError : styles.submitted}>
          {errors.isError ? (
            <>
              <IoCloseOutline size={iconSize} />
              Oups ! Une erreur est survenue.
            </>
          ) : (
            <>
              <IoCheckmark size={iconSize} />
              Merci pour votre message !
            </>
          )}
        </div>
      )
    );
  }

  function ErrorEmailMessage() {
    return (
      errors.isEmailError && (
        <div className={styles.error}>
          L'adresse email fournie n'a pas un format valide.
        </div>
      )
    );
  }

  return (
    <section className={styles.wrapper}>
      <section className={styles.responsiveWrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contactez-nous</h1>
          <p className={styles.subTitle}>
            Dites-nous ce que vous avez sur le cœur et on s’occupe de vous
            répondre au plus vite, promis.
          </p>
        </header>
        <section className={styles.formWrapper}>
          <form className={styles.form}>
            <div className={styles.inputRowWrapper}>
              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="lastName">
                  Nom <span className={styles.required}>*</span>
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={input.lastName}
                  onChange={(event) => handleInputChange(event)}
                ></input>
                <ErrorMEssage />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="firstName">
                  Prénom <span className={styles.required}>*</span>
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={input.firstName}
                  onChange={(event) => handleInputChange(event)}
                ></input>
                <ErrorMEssage />
              </div>
            </div>
            <div className={styles.inputRowWrapper}>
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
                <ErrorEmailMessage />
                <ErrorMEssage />
              </div>
              <div className={styles.inputWrapper}>
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
                <ErrorPhoneMessage />
              </div>
            </div>
            <div className={styles.inputRowWrapper}>
              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="city">
                  Restaurant
                </label>
                <FaCaretDown className={styles.selectIcon} />
                <select
                  className={styles.select}
                  id="city"
                  name="city"
                  value={input.city}
                  onChange={(event) => handleInputChange(event)}
                >
                  <option value="NANTES">NANTES</option>
                </select>
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="subject">
                  Sujet <span className={styles.required}>*</span>
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="subject"
                  name="subject"
                  value={input.subject}
                  onChange={(event) => handleInputChange(event)}
                ></input>
                <ErrorMEssage />
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label} htmlFor="message">
                Message <span className={styles.required}>*</span>
              </label>
              <textarea
                className={styles.textarea}
                type="text"
                id="message"
                name="message"
                value={input.message}
                onChange={(event) => handleInputChange(event)}
              ></textarea>
              <ErrorMEssage />
            </div>
            <div className={styles.submitButtonWrapper}>
              <button
                className={styles.submitButton}
                type="submit"
                onClick={(event) => handleOnSubmit(event)}
              >
                Envoyer
              </button>
              <SubmitErrorMessage />
            </div>
          </form>
        </section>
      </section>
    </section>
  );
}
