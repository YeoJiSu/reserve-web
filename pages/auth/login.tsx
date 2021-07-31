import Layout from "components/Layout";
import React, { useState } from "react";
import Router from "next/router";
import LoginForm from "@/components/Common/Login/LoginForm";
import Cookies from "js-cookie";

const emailRegEx =
  /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
/* login schemas */
const FORM_DATA_LOGIN = {
  email: {
    value: "",
    label: "Email",
    min: 10,
    max: 36,
    required: true,
    validator: {
      regEx: emailRegEx,
      error: "Please insert valid email",
    },
  },
  password: {
    value: "",
    label: "Password",
    min: 6,
    max: 36,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: "Please insert valid password",
    },
  },
};

const LoginPage = (): JSX.Element => {
  const baseApiUrl = "http://strapi.kspark.link/auth/local";
  const [stateFormData, setStateFormData] = useState(FORM_DATA_LOGIN);
  const [stateFormError, setStateFormError] = useState([]);
  const [stateFormValid, setStateFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stateFormMessage, setStateFormMessage] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.currentTarget;

    setStateFormData({
      ...stateFormData,
      [name]: {
        ...stateFormData[name],
        value,
      },
    });

    /* validation handler */
    validationHandler(stateFormData, e);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    let formData: any = { ...stateFormData };

    /* email */
    formData = { ...formData, identifier: formData.email.value || "" };
    /* password */
    formData = { ...formData, password: formData.password.value || "" };

    /* validation handler */
    const isValid = validationHandler(stateFormData);

    if (isValid) {
      // Call an external API endpoint to get posts.
      // You can use any data fetching library
      setLoading(!loading);
      const getData = await fetch(`${baseApiUrl}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((r) => r.json());

      if (getData.user && getData.jwt) {
        Cookies.set("strapi-login", getData.jwt);
        // window.location.href = referer ? referer : "/";
        // const pathUrl = referer ? referer.lastIndexOf("/") : "/";
        Router.push("/");
      } else {
        setStateFormMessage(getData);
      }
      setLoading(false);
    }
  };

  const validationHandler = (states, e?) => {
    const input = (e && e.target.name) || "";
    const errors = [];
    let isValid = true;

    if (input) {
      if (states[input].required) {
        if (!states[input].value) {
          errors[input] = {
            hint: `${states[e.target.name].label} required`,
            isInvalid: true,
          };
          isValid = false;
        }
      }
      if (
        states[input].value &&
        states[input].min > states[input].value.length
      ) {
        errors[input] = {
          hint: `Field ${states[input].label} min ${states[input].min}`,
          isInvalid: true,
        };
        isValid = false;
      }
      if (
        states[input].value &&
        states[input].max < states[input].value.length
      ) {
        errors[input] = {
          hint: `Field ${states[input].label} max ${states[input].max}`,
          isInvalid: true,
        };
        isValid = false;
      }
      if (
        states[input].validator !== null &&
        typeof states[input].validator === "object"
      ) {
        if (
          states[input].value &&
          !states[input].validator.regEx.test(states[input].value)
        ) {
          errors[input] = {
            hint: states[input].validator.error,
            isInvalid: true,
          };
          isValid = false;
        }
      }
    } else {
      Object.entries(states).forEach((item) => {
        item.forEach((field: any) => {
          errors[item[0]] = "";
          if (field.required) {
            if (!field.value) {
              errors[item[0]] = {
                hint: `${field.label} required`,
                isInvalid: true,
              };
              isValid = false;
            }
          }
          if (field.value && field.min >= field.value.length) {
            errors[item[0]] = {
              hint: `Field ${field.label} min ${field.min}`,
              isInvalid: true,
            };
            isValid = false;
          }
          if (field.value && field.max <= field.value.length) {
            errors[item[0]] = {
              hint: `Field ${field.label} max ${field.max}`,
              isInvalid: true,
            };
            isValid = false;
          }
          if (field.validator !== null && typeof field.validator === "object") {
            if (field.value && !field.validator.regEx.test(field.value)) {
              errors[item[0]] = {
                hint: field.validator.error,
                isInvalid: true,
              };
              isValid = false;
            }
          }
        });
      });
    }
    if (isValid) {
      setStateFormValid(isValid);
    }
    setStateFormError({
      ...errors,
    });
    return isValid;
  };
  return (
    <Layout>
      <div>
        <LoginForm
          onSubmitHandler={onSubmitHandler}
          onChangeHandler={onChangeHandler}
          loading={loading}
          stateFormData={stateFormData}
          stateFormError={stateFormError}
          stateFormMessage={stateFormMessage}
        />
      </div>
    </Layout>
  );
};

export default LoginPage;
