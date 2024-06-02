import React from "react";
import LeftNavBar from "./left-navigation/LeftNavBar";
import { AppBar, Toolbar } from "@mui/material";
import RightNavBar from "./right-navigation/RightNavBar";
import { MenuProvider } from "./menu/MenuProvider";
import { useLocation } from "react-router-dom";
import SearchBar from "./right-navigation/SearchBar";

export default function NavBar() {
  const location = useLocation();
  return (
    <MenuProvider>
      <AppBar position="sticky" color="primary" elevation={10}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <LeftNavBar />
          <RightNavBar />
        </Toolbar>

        {location.pathname === "/cards" ||
        location.pathname === "/my-cards" ||
        location.pathname === "/fav-cards" ? (
          <Toolbar
            sx={{
              display: { xs: "inline-flex", md: "none" },
              justifyContent: "center",
            }}
          >
            <SearchBar />{" "}
          </Toolbar>
        ) : null}
      </AppBar>
    </MenuProvider>
  );
}
