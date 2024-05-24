import React, { useEffect } from "react";
import useForm from "../../forms/hooks/useForm";
import Container from "@mui/material/Container";
import useUsers from "../hooks/useUsers";
import editSchema from "../models/editSchema";
import EditForm from "../components/EditForm";
import initialEditForm from "../helpers/initialForms/initialEditForm";
import userToModel from "../helpers/initialForms/userToModel";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routs/routsModel";
import { getUser } from "../services/localStorageService";

export default function EditUserPage() {
  const { handleUpdateUser, handleGetUser } = useUsers();

  const user = getUser();
  if (!user) <Navigate replace to={ROUTES.CARDS} />;
  const {
    data,
    setData,
    errors,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
  } = useForm(initialEditForm, editSchema, (newUser) => {
    handleUpdateUser(user, newUser);
  });

  useEffect(() => {
    handleGetUser(user._id).then((data) => {
      const modelUser = userToModel(data);
      setData(modelUser);
    });
  }, [handleGetUser, setData, user._id]);

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <EditForm
        onSubmit={onSubmit}
        onReset={handleReset}
        validateForm={validateForm}
        title={"edit form"}
        errors={errors}
        data={data}
        onInputChange={handleChange}
      />
    </Container>
  );
}
