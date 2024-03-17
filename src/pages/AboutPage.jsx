import { Box, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

let title = "About Page";
let subtitle =
  "On this page you can find explanations about using the application";

export default function AboutPage() {
  return (
    <Box>
      <PageHeader title={title} subtitle={subtitle} />
      <Typography>AboutPage</Typography>
    </Box>
  );
}
