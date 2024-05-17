import { Container, Typography } from "@mui/material";
import React from "react";
import CardComponent from "./card/CardComponent";
import { useLocation } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";

export default function Cards({ cardsList, handleCardDelete, handleCardLike }) {
  const location = useLocation();
  const { user } = useUser();

  if (cardsList.length === 0) {
    return (
      <Typography>
        Oops.. it seems there are no business cards to display
      </Typography>
    );
  }

  if (location.pathname === "/cards") {
    return (
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {cardsList.map((card) => (
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

  if (location.pathname === "/my-cards") {
    const filterdCards = cardsList.filter((card) =>
      card.user_id === user._id
    );

    return (
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {filterdCards.map((card) => (
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

  if (location.pathname === "/fav-cards") {
    const filterdCards = cardsList.filter((card) =>
      card.likes.includes(user._id)
    );

    return (
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {filterdCards.map((card) => (
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
}
