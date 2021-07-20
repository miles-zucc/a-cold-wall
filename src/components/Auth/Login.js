import React, { useCallback, useState } from "react";
import useFormValidation from "@/hooks/useFormValidation";
// import { isValidEmail } from "@/utils/regex";
import Router from "next/router";
import * as Form from "@/components/Templates/FormTemplate";
import useGlobalState from "@/hooks/useGlobalState";
import { authenticateUser } from "@/utils/state";

const INITIAL_STATE = {
  password: ""
};

const PASSPHRASE = "brutalist";

function validate(values) {
  const errors = {};
  // If password wasn't provided:
  if (!values.password) {
    errors.password = "Please provide your password";
  }

  return errors;
}

function Login() {
  const [error, setError] = useState();
  const { state, dispatch } = useGlobalState();
  const { authenticated } = state;

  // Submit request to firebase, then redirect to homepage
  const authenticate = useCallback(
    function({ password }) {
      if (password === PASSPHRASE) {
        dispatch(authenticateUser(true));
        Router.push("/");
      } else {
        setError("Incorrect password. Please try again.");
      }
    },
    [setError]
  );

  const { handleSubmit, handleChange, values, errors } = useFormValidation(
    INITIAL_STATE,
    validate,
    authenticate
  );

  return (
    <Form.Form onSubmit={handleSubmit}>
      <Form.Field>
        <Form.Input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          error={!!errors.password}
          autoComplete="off"
          placeholder="ENTER PASSWORD"
        />
        {errors.password && <Form.Error>{errors.password}</Form.Error>}
      </Form.Field>
      {error && <Form.Error>{error}</Form.Error>}
    </Form.Form>
  );
}

export default Login;
