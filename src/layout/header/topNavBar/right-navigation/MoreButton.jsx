import { Box } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function MoreButton({ sx }) {
  return (
    <Box sx={sx}>
      <MoreVertIcon />
    </Box>
  );
}
