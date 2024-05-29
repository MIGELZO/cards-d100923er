import { Box } from "@mui/material";
import React from "react";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";
import ROUTES from "../../../../routs/routsModel";
import NavItem from "../../../../routs/components/NavItem";
import { useUser } from "../../../../users/providers/UserProvider";

export default function LeftNavBar() {
  const { user } = useUser();

  return (
    <Box>
      <LogoIcon />
      <Logo />
      <NavItem to={ROUTES.ABOUT} lable={"About"} />
      <NavItem to={ROUTES.CARDS} lable={"Card"} />
      {user && (user.isAdmin || user.isBusiness === true) ? (
        <NavItem to={ROUTES.MY_CARDS} lable={"my cards"} />
      ) : null}
      {user ? <NavItem to={ROUTES.FAV_CARDS} lable={"favorit cards"} /> : null}
      <NavItem to={ROUTES.SANDBOX} lable={"Sandbox"} />
    </Box>
  );
}
