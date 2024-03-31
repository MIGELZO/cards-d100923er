import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import axios from "axios";
import CardsFeedBack from "../components/CardsFeedBack";

export default function CardPage() {
  const [cardsList, setCardsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const getAllCards = async () => {
      try {
        setError(null);
        setIsLoading(true);
        const response = await axios.get(
          "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
        );
        const data = response.data;
        setCardsList(data);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
      setIsLoading(false);
    };

    getAllCards();
  }, []);

  const handleCardDelete = (id) => {
    console.log("You deleted card No.", id);
  };

  const handleCardLike = (id) => {
    console.log("You liked card No.", id);
  };

  return (
    <div>
      <PageHeader
        title="Cards"
        subtitle="On this page you can find all bussines cards from all categories"
      />
      <CardsFeedBack
        cardsList={cardsList}
        handleCardDelete={handleCardDelete}
        handleCardLike={handleCardLike}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}
