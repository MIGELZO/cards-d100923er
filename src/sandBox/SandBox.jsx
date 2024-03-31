import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";
import NavItem from "../routs/components/NavItem";
import { Outlet } from "react-router-dom";

export default function SendBox() {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem to="counter" lable="Counter page" sx={{ color: "black" }} />
          <NavItem
            to="LifeCycle"
            lable="Life Cycle"
            sx={{ color: "black" }}
          />
          <NavItem to="countries" lable="Countries list" sx={{ color: "black" }} />
          <NavItem to="form" lable="form example" sx={{ color: "black" }} />
        </Toolbar>
      </AppBar>

      <Container>
        <Outlet />
      </Container>
    </>
  );
}
