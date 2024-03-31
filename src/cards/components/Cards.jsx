import { Container, Typography } from "@mui/material";
import React from "react";
import CardComponent from "./card/CardComponent";

export default function Cards({ cardsList, handleCardDelete, handleCardLike }) {
  return cardsList.length === 0 ? (
    <Typography>
      Oops.. it seems there are no business cards to display
    </Typography>
  ) : (
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
