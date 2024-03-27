import { Container, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";

export default function CardDetailPage() {
  const { id } = useParams();
  return (
    <Container>
      <PageHeader title="Card Details" subtitle="Here you..." />
      <Typography>Details of card - {id}</Typography>
    </Container>
  );
}
