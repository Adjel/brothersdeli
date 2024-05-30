export function resetErrors(setErrors) {
  setErrors({
    isError: false,
    firstName: false,
    lastName: false,
    email: {
      isEmpty: false,
      isRegexError: false,
    },
    phone: {
      isEmpty: undefined,
      isRegexError: undefined,
    },
    subject: false,
    message: false,
  });
}

export function handleError(setErrors, mainErrorKey, subErrorKey) {
  setErrors((prevState) => {
    if (!subErrorKey) {
      return {
        ...prevState,
        isError: true,
        [mainErrorKey]: true,
      };
    } else {
      return {
        ...prevState,
        isError: true,
        [mainErrorKey]: {
          ...prevState[mainErrorKey],
          [subErrorKey]: true,
        },
      };
    }
  });
}
