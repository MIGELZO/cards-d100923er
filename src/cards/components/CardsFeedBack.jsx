import React from "react";
import Cards from "./Cards";
import Spinner from "../../components/Spinner";
import { Typography } from "@mui/material";
import Error from "../../components/Error";

export default function CardsFeedBack({
  isLoading,
  cardsList,
  error,
  handleCardDelete,
  handleCardLike,
}) {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cardsList && cardsList.length === 0) {
    return (
      <Typography m={2}>
        Oops... it seems there are no business cards to display
      </Typography>
    );
  }
  if (cardsList) {
    return (
      <Cards
        cardsList={cardsList}
        handleCardDelete={handleCardDelete}
        handleCardLike={handleCardLike}
      />
    );
  }
}
