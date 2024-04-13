import React from "react";
import useForm from "../../forms/hooks/useForm";
import signupSchema from "../models/signupSchema";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import SignupForm from "../components/SignUpForm";
import Container from "@mui/material/Container";
import { useUser } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routs/routsModel";

const handleSubmit = (data) => {
  console.log(data);
};

export default function SignupPage() {
  const {
    data,
    errors,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
    handleChangeCheckBox,
  } = useForm(initialSignupForm, signupSchema, handleSubmit);

  const userContext = useUser();

  return userContext._id === "" ? (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignupForm
        onSubmit={onSubmit}
        onReset={handleReset}
        validateForm={validateForm}
        title={"register form"}
        errors={errors}
        data={data}
        onInputChange={handleChange}
        handleChangeCheckBox={handleChangeCheckBox}
      />
    </Container>
  ) : (
    <Navigate to={ROUTES.ROOT} replace={true} />
  );
}
