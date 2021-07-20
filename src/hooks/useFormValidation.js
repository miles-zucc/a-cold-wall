import { useEffect, useState } from "react";

// https://www.youtube.com/watch?v=8yo44xN7-nQ
function useFormValidation(initialState, validate, authenticate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        authenticate(values);
        setSubmitting(false);
      } else {
        console.log("Validation error", errors);
        setSubmitting(false);
      }
    }
  }, [isSubmitting, errors, authenticate, values]);

  function handleChange(event) {
    const { target } = event;
    // If it's a checkbox use the checked property, otherwise use value.
    const value = target.type === "checkbox" ? target.checked : target.value;
    setValues({
      ...values,
      [target.name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  };
}

export default useFormValidation;
