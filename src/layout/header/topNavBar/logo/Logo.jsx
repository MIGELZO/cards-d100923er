import { Box, Typography } from "@mui/material";
import React from "react";
import LogoIcon from "./LogoIcon";

export default function Logo() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, padding: 1 }}>
      <LogoIcon
        sx={{
          display: "inline-block",
          width: 100,
          height: 100,
        }}
      />
      <Typography
        variant="h4"
        sx={{
          fontFamily: "fantasy",
          mr: 2,
          display: { xs: "none", sm: "inline" },
        }}
      >
        BCard
      </Typography>
    </Box>
  );
}
