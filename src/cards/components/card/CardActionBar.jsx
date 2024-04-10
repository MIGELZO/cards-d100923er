import React from "react";
import { Box, IconButton, CardActions } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import { useUser } from "../../../users/providers/UserProvider";

export default function CardActionBar({
  handleCardDelete,
  handleCardLike,
  cardId,
  userId,
}) {
  const userContext = useUser();

  const handleCardEdit = (id) => {
    console.log("Navigate to edit page for card", id);
  };

  return userContext.isAdmin || userContext._id === userId ? (
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      <Box>
        <IconButton onClick={() => handleCardDelete(cardId)}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => handleCardEdit(cardId)}>
          <ModeEditIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton>
          <CallIcon />
        </IconButton>
        <IconButton onClick={() => handleCardLike(cardId)}>
          <Favorite />
        </IconButton>
      </Box>
    </CardActions>
  ) : (
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      <Box>
        <IconButton>
          <CallIcon />
        </IconButton>
        <IconButton onClick={() => handleCardLike(cardId)}>
          <Favorite />
        </IconButton>
      </Box>
    </CardActions>
  );
}
