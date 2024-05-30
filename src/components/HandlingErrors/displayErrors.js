import styles from "./errors.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";

const iconSize = `${18 / 16}rem`;

export function ErrorMessage({ error, type }) {
  let message = "";

  if (type === "general" && error === true) {
    message = "Ce champ est nécessaire.";
  } else if (type === "phone") {
    if (error.isEmpty) {
      message = "Ce champ est nécessaire.";
    } else if (error.isRegexError) {
      message =
        "Le champ accepte uniquement les chiffres et les caractères téléphoniques (#, -, *, etc.).";
    }
  } else if (type === "email") {
    if (error.isEmpty) {
      message = "Ce champ est nécessaire.";
    } else if (error.isRegexError) {
      message = "L'adresse email fournie n'a pas un format valide.";
    }
  }

  return message ? (
    <div className={styles.error}>
      <IoCloseOutline size={iconSize} /> {message}
    </div>
  ) : null;
}

export function SubmitMessage({ isError }) {
  let className;
  let message;
  if (isError === undefined) {
    return;
  } else if (isError === true) {
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
