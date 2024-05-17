import React, { useEffect, useState } from "react";
import { Box, IconButton, CardActions } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import { useUser } from "../../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routs/routsModel";

export default function CardActionBar({
  handleCardDelete,
  handleCardLike,
  cardId,
  userId,
  cardLikes,
}) {
  const { user } = useUser();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState("empty");

  // useEffect(
  //   () => {
  //     cardLikes.includes(user._id) ? setIsLiked("red") : setIsLiked("grey");
  //   },
  //   [cardLikes,user._id]
  // );

  const handleCardEdit = (id) => {
    console.log("Navigate to edit page for card", id);
    navigate(ROUTES.EDIT_CARD + "/" + id);
  };

  return (
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      <Box>
        {user && (user.isAdmin || user._id === userId) ? (
          <>
            <IconButton onClick={() => handleCardDelete(cardId)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => handleCardEdit(cardId)}>
              <ModeEditIcon />
            </IconButton>
          </>
        ) : null}
      </Box>
      <Box>
        <IconButton>
          <CallIcon />
        </IconButton>
        {user ? (
          <IconButton onClick={() => handleCardLike(cardId, user)}>
            <Favorite sx={{ color: isLiked }} />
          </IconButton>
        ) : null}
      </Box>
    </CardActions>
  );
}
