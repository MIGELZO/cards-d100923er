import React, { useEffect } from "react";
import useForm from "../../forms/hooks/useForm";
import Container from "@mui/material/Container";
import useUsers from "../hooks/useUsers";
import editSchema from "../models/editSchema";
import EditForm from "../components/EditForm";
import { getUser } from "../services/localStorageService";
import initialEditForm from "../helpers/initialForms/initialEditForm";
import userToModel from "../helpers/initialForms/userToModel";

export default function EditUserPage() {
  const { handleUpdateUser, handleGetUser } = useUsers();

  const user = getUser();
  const {
    data,
    setData,
    errors,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
  } = useForm(initialEditForm, editSchema, (newUser) => {
    handleUpdateUser(newUser);
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
