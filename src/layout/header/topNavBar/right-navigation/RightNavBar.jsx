import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useUser } from "../../../../users/providers/UserProvider";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import { useTheme } from "../../../../providers/CustomThemeProvider";
import MoreButton from "./MoreButton";
import SearchBar from "./ShearchBar";
import { useLocation } from "react-router-dom";
import useUsers from "../../../../users/hooks/useUsers";

export default function RightNavBar() {
  const { user } = useUser();
  const { isDark, toggleDarkMode } = useTheme();
  const location = useLocation();
  const { handleGetUser, handleUpdateUser } = useUsers();
  const [userData, setUserData] = useState(false);

  useEffect(() => {
    user
      ? handleGetUser(user._id).then((data) => {
          setUserData(data);
        })
      : setUserData(false);
  }, [handleGetUser, user, handleUpdateUser]);

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
        }}
      >
        {location.pathname === "/" ||
        location.pathname === "/cards" ||
        location.pathname === "/my-cards" ||
        location.pathname === "/fav-cards" ? (
          <SearchBar />
        ) : null}

        <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {user && <Logged userData={userData} />}
        {!user && <NotLogged />}
      </Box>
      <MoreButton sx={{ display: { md: "none", sx: "inline-flex" } }} />
    </>
  );
}
