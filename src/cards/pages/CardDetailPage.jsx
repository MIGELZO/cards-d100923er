import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";
import axios from "axios";
import OneCardData from "../components/card/OneCardData";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";

export default function CardDetailPage() {
  const [cardData, setCardData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getCardDetails = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`
        );
        const data = response.data;
        setCardData(data);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
      setIsLoading(false);
    };
    getCardDetails();
  }, [id]);

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
