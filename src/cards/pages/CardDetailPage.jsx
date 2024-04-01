import { Container } from "@mui/material";
import React from "react";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";
import OneCardData from "../components/card/OneCardData";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import useCards from "../../hooks/useCards";

export default function CardDetailPage() {
  const { id } = useParams();
  const { cardData, isLoading, error } = useCards(id);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cardData) {
    return (
      <Container>
        <PageHeader
          title="Card Details"
          subtitle="Here you can find all the details about specific card"
        />
        <OneCardData cardData={cardData} />
      </Container>
    );
  }
}
