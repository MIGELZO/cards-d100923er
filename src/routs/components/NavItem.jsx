import { Button, Typography } from "@mui/material";
import React from "react";
import NavBarLink from "./NavBarLink";

export default function NavItem({ to, lable, sx }) {
  return (
    <NavBarLink sx={sx} to={to}>
      <Button color="inherit">
        <Typography>{lable}</Typography>
      </Button>
    </NavBarLink>
  );
}
