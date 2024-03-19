import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import StyleIcon from "@mui/icons-material/Style";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";
import ROUTES from "../../routs/routsModel";

export default function Footer() {
  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction label="About" icon={<InfoIcon />} href={ROUTES.ABOUT} />
        <BottomNavigationAction label="Cards" icon={<StyleIcon />} href={ROUTES.CARDS}/>
      </BottomNavigation>
    </Paper>
  );
}
