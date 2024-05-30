import { Box, IconButton, Tooltip, Zoom } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useMenu } from "../menu/MenuProvider";

export default function MoreButton({ sx }) {
  const setOpen = useMenu();
  return (
    <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
      <IconButton
        onClick={() => setOpen(true)}
        size="large"
        color="inherit"
        aria-label="menu"
        sx={{ display: { xs: "inline-flex", md: "none" } }}
      >
        <Tooltip title="Open Menu" TransitionComponent={Zoom} arrow>
          <MoreVertIcon />
        </Tooltip>
      </IconButton>
    </Box>
  );
}
