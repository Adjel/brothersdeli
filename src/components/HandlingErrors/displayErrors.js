import styles from "./errors.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";

const iconSize = `${18 / 16}rem`;

export function ErrorMEssage({ error }) {
  return (
    error === true && (
      <div className={styles.error}>
        <IoCloseOutline size={iconSize} /> Ce champ est nécéssaire.
      </div>
    )
  );
}

export function ErrorPhoneMessage({ error }) {
  return error.isEmpty ? (
    <ErrorMEssage error={error.isEmpty} />
  ) : (
    error.isRegexError && (
      <div className={styles.error}>
        <IoCloseOutline size={iconSize} />
        Le champ accepte uniquement les chiffres et les caractères téléphoniques
        (#, -, *, etc.).
      </div>
    )
  );
}

export function ErrorEmailMessage({ error }) {
  return error.isEmpty ? (
    <ErrorMEssage error={error.isEmpty} />
  ) : (
    error.isRegexError && (
      <div className={styles.error}>
        L'adresse email fournie n'a pas un format valide.
      </div>
    )
  );
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
