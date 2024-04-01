import React from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedBack from "../components/CardsFeedBack";
import useCards from "../../hooks/useCards";

export default function CardPage() {

  const {isLoading, error, cardsList, handleCardDelete, handleCardLike} = useCards()

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
