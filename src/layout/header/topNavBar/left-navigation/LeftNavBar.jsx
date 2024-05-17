import { Box } from "@mui/material";
import React from "react";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";
import ROUTES from "../../../../routs/routsModel";
import NavItem from "../../../../routs/components/NavItem";

export default function LeftNavBar() {
  return (
    <Box>
      <LogoIcon />
      <Logo />
      <NavItem to={ROUTES.ABOUT} lable={"About"} />
      <NavItem to={ROUTES.CARDS} lable={"Card"} />
      <NavItem to={ROUTES.MY_CARDS} lable={"my cards"} />
      <NavItem to={ROUTES.FAV_CARDS} lable={"favorit cards"} />
      <NavItem to={ROUTES.SANDBOX} lable={"Sandbox"} />
    </Box>
  );
}
