import { Box } from "@mui/material";
import React from "react";
import { useUser } from "../../../../users/providers/UserProvider";
import Logged from "./Logged";
import NotLogged from "./NotLogged";

export default function RightNavBar() {
  const { user } = useUser();
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
        }}
      >
        {user && <Logged />}
        {!user && <NotLogged />}
      </Box>
    </>
  );
}
