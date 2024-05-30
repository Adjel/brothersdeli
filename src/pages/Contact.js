"use client";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import styles from "../styles/contact.module.css";
import { FaCaretDown } from "react-icons/fa";
import { emailRegex } from "@/utils/regex";

export default function Contact() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    isError: undefined,
    firstName: undefined,
    lastName: undefined,
    email: {
      isEmpty: undefined,
      isRegexError: undefined,
    },
    subject: undefined,
    message: undefined,
  });

  const iconSize = `${18 / 16}rem`;

  function handleInputChange(event) {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  function resetErrors() {
    setErrors({
      isError: false,
      firstName: false,
      lastName: false,
      email: {
        isEmpty: false,
        isRegexError: false,
      },
      subject: false,
      message: false,
    });
  }

  function handleError({ errorKey }) {
    setErrors((prevState) => ({
      ...prevState,
      isError: true,
      [errorKey]: true,
    }));
  }

  function handleOnSubmit(event) {
    console.log("handleOnSubmit");
    event.preventDefault();
    // reset errors
    resetErrors();

    // set a default city
    if (input.city === "") {
      setInput({
        ...input,
        city: "NANTES",
      });
    }
    if (input.firstName === "") {
      setErrors((prevState) => ({
        ...prevState,
        isError: true,
        firstName: true,
      }));
    }
    if (input.lastName === "") {
      setErrors((prevState) => ({
        ...prevState,
        isError: true,
        lastName: true,
      }));
    }
    if (!emailRegex.test(input.email))
      setErrors((prevState) => ({
        ...prevState,
        isError: true,
        email: {
          isEmpty: false,
          isRegexError: true,
        },
      }));
    if (input.email === "")
      setErrors((prevState) => ({
        ...prevState,
        isError: true,
        email: {
          // if email is empty, regex can't be true
          isEmpty: true,
          isRegexError: false,
        },
      }));
    if (input.subject === "")
      setErrors((prevState) => ({
        ...prevState,
        isError: true,
        subject: true,
      }));
    if (input.message === "")
      setErrors((prevState) => ({
        ...prevState,
        isError: true,
        message: true,
      }));

    if (!errors.isError) fakeHandleSubmitInProvider();
  }

  async function fakeHandleSubmitInProvider() {
    if (errors.isError === false) {
      resetErrors();
    }
  }

  function ErrorMEssage({ inputId }) {
    return (
      errors[inputId] && (
        <div className={styles.error}>
          <IoCloseOutline size={iconSize} /> Ce champ est nécéssaire.
        </div>
      )
    );
  }

  function SubmitMessage() {
    let className;
    let message;
    console.log(errors);
    if (errors.isError === undefined) {
      return;
    } else if (errors.isError === true) {
      className = styles.submitError;
      message = (
        <>
          <IoCloseOutline size={iconSize} />
          Oups ! Une erreur est survenue.
        </>
      );
    } else {
      className = styles.submitted;
      message = (
        <>
          <IoCheckmark size={iconSize} />
          Merci pour votre message !
        </>
      );
    }
    return <div className={className}>{message}</div>;
  }

  function ErrorPhoneMessage() {
    return (
      errors.isPhoneError.isRegexError && (
        <div className={styles.error}>
          <IoCloseOutline size={iconSize} />
          Le champ accepte uniquement les chiffres et les caractères
          téléphoniques (#, -, *, etc.).
        </div>
      )
    );
  }

  function ErrorEmailMessage() {
    return errors.email.isEmpty ? (
      <ErrorMEssage inputId="email" />
    ) : (
      errors.email.isRegexError && (
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
                <ErrorMEssage inputId="lastName" />
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
                <ErrorMEssage inputId="firstName" />
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
                <ErrorMEssage inputId="subject" />
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
              <ErrorMEssage inputId="message" />
            </div>
            <div className={styles.submitButtonWrapper}>
              <button
                className={styles.submitButton}
                type="submit"
                onClick={(event) => handleOnSubmit(event)}
              >
                Envoyer
              </button>
              <SubmitMessage />
            </div>
          </form>
        </section>
      </section>
    </section>
  );
}
