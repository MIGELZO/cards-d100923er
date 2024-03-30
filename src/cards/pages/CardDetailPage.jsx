import { Avatar, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";
import axios from "axios";
import OneCardData from "../components/card/OneCardData";

export default function CardDetailPage() {
  const [cardData, setCardData] = useState();

  useEffect(() => {
    const getCardDetails = async () => {
      try {
        const response = await axios.get(
          `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`
        );
        const data = response.data;
        setCardData(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getCardDetails();
  }, []);

  const { id } = useParams();
  return (
    <Container>
      <PageHeader title="Card Details" subtitle="Here you..." />
      <Avatar/>
      <OneCardData cardData={cardData}/>
    </Container>
  );
}
