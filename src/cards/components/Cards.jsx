import { Container, Typography } from "@mui/material";
import React from "react";
import CardComponent from "./card/CardComponent";
import { useLocation } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";

export default function Cards({ cardsList, handleCardDelete, handleCardLike }) {
  const location = useLocation();
  const { user } = useUser();

  const getFilteredCards = () => {
    switch (location.pathname) {
      case "/my-cards":
        return cardsList.filter((card) => card.user_id === user._id);
      case "/fav-cards":
        return cardsList.filter((card) => card.likes.includes(user._id));
      default:
        return cardsList;
    }
  };

  const getNoCardsMessage = () => {
    switch (location.pathname) {
      case "/my-cards":
        return "Oops.. it seems there are no existing business cards to display";
      case "/fav-cards":
        return "Oops.. it seems there are no favorite business cards to display";
      default:
        return "Oops.. it seems there are no business cards to display";
    }
  };

  const displayCards = getFilteredCards();

  return displayCards.length === 0 ? (
    <Typography>{getNoCardsMessage()}</Typography>
  ) : (
    <Container sx={{ display: "flex", flexWrap: "wrap" }}>
      {displayCards.map((card) => (
        <CardComponent
          key={card._id}
          card={card}
          handleCardDelete={handleCardDelete}
          handleCardLike={handleCardLike}
        />
      ))}
    </Container>
  );
}
