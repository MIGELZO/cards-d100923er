import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import { useUser } from "../../users/providers/UserProvider";
import CardForm from "../components/CardForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import mapCardToModel from "../helpers/normalization/mapToModel";
import useCards from "../hooks/useCards";
import cardSchema from "../models/cardSchema";
import ROUTES from "../../routs/routsModel";

export default function EditCardPage() {
  //what do we need in this page
  //id of the card - useParams
  const { id } = useParams();
  //handleUpdateCard & handleGetCard & card - useCards
  const { handleUpdateCard, getCardDetails, cardData } = useCards();

  //user - useUser (provider)
  const { user } = useUser();
  //useForm (initialForm,schema,onSubmit)
  const {
    data,
    errors,
    setData,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
  } = useForm(initialCardForm, cardSchema, (newCard) =>
    handleUpdateCard(cardData._id, newCard)
  );
  //useEffect - update the form data to this card data
  useEffect(() => {
    getCardDetails(id).then((data) => {
      const modelCard = mapCardToModel(data);
      setData(modelCard);
    });
  }, [getCardDetails, setData, id]);

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data && (
        <CardForm
          title="edit card"
          onSubmit={onSubmit}
          onReset={handleReset}
          errors={errors}
          validateForm={validateForm}
          onInputChange={handleChange}
          data={data}
        />
      )}
    </Container>
  );
}
