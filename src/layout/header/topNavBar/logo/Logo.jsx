import { Typography } from "@mui/material";
import React from "react";
import NavBarLink from "../../../../routs/components/NavBarLink";
import ROUTES from "../../../../routs/routsModel";

export default function Logo() {
  return (
    <NavBarLink to={ROUTES.ROOT}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "fantasy",
          mr: 2,
          display: { xs: "none", md: "inline-flex" },
          color: "#fff",
        }}
      >
        BCard
      </Typography>
    </NavBarLink>
  );
}
