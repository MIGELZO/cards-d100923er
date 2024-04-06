import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import StyleIcon from "@mui/icons-material/Style";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";
import ROUTES from "../../routs/routsModel";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0, zIndex: 1 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />
        <BottomNavigationAction
          label="Cards"
          icon={<StyleIcon />}
          onClick={() => navigate(ROUTES.CARDS)}
        />
      </BottomNavigation>
    </Paper>
  );
}
