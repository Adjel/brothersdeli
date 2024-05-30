"use client";
import React, { useState } from "react";
import styles from "../styles/contact.module.css";
import { FaCaretDown } from "react-icons/fa";
import { emailRegex } from "@/utils/regex";
import {
  resetErrors,
  handleError,
} from "@/components/HandlingErrors/handleErrors";
import {
  ErrorMessage,
  SubmitMessage,
} from "@/components/HandlingErrors/displayErrors";

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

  function handleInputChange(event) {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  // place regex before empty tests because regex will also be true if
  // input is empty, but we want to show empty
  function handleOnSubmit(event) {
    console.log("handleOnSubmit");
    event.preventDefault();
    // reset errors
    resetErrors(setErrors);

    // set a default city
    if (input.city.trim("") === "") {
      setInput({
        ...input,
        city: "NANTES",
      });
    }
    if (input.firstName.trim("") === "") {
      handleError(setErrors, "firstName");
    }
    if (input.lastName.trim("") === "") {
      handleError(setErrors, "lastName");
    }
    if (!emailRegex.test(input.email))
      handleError(setErrors, "email", "isRegexError");

    if (input.email.trim("") === "") handleError(setErrors, "email", "isEmpty");
    if (input.subject.trim("") === "") handleError(setErrors, "subject");
    if (input.message.trim("") === "") handleError(setErrors, "message");

    if (!errors.isError) fakeHandleSubmitInProvider();
  }

  async function fakeHandleSubmitInProvider() {
    if (errors.isError === false) {
      resetErrors(setErrors);
      setInput({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        subject: "",
        message: "",
      });
    }
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
                <ErrorMessage error={errors.lastName} type="generic" />
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
                <ErrorMessage error={errors.firstName} type="generic" />
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
                <ErrorMessage error={errors.email} type="email" />
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
                <ErrorMessage error={errors.subject} type="generic" />
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
              <ErrorMessage error={errors.message} type="generic" />
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
    </section>
  );
}
