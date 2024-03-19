import { Avatar } from "@mui/material";
import avatarImage from "../../../../assets/imgs/avatar.png";
import React from "react";

export default function LogoIcon() {
  return (
    <Avatar
      alt="business icon"
      src={avatarImage}
      sx={{ border: "2px solid #DDEBF6", width: 40, height: 40 }}
    />
  );
}
