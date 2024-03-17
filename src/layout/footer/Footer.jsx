import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import StyleIcon from "@mui/icons-material/Style";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";

export default function Footer() {
  return (
    <Box>
      <Paper
        sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction label="About" icon={<InfoIcon />} />
          <BottomNavigationAction label="Cards" icon={<StyleIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
