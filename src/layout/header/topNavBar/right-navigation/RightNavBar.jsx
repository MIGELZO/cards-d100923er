import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routs/components/NavItem";
import ROUTES from "../../../../routs/routsModel";

export default function RightNavBar() {
  return (
    <Box>
      <NavItem to={ROUTES.LOGIN} lable={"Login"} />
      <NavItem to={ROUTES.SIGNUP} lable={"Signup"} />
    </Box>
  );
}
