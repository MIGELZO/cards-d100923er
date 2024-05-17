import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedBack from "../components/CardsFeedBack";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/AddNewCardButton";

export default function FavoritCardsPage() {
    const {
        isLoading,
        error,
        cardsList,
        handleCardDelete,
        handleCardLike,
        getAllCards,
      } = useCards();
    
      useEffect(() => {
        getAllCards();
      }, [getAllCards]);
    
      return (
        <div>
          <PageHeader
            title="Favorit cards"
            subtitle="On this page you can find all bussines cards you liked"
          />
          <CardsFeedBack
            cardsList={cardsList}
            handleCardDelete={handleCardDelete}
            handleCardLike={handleCardLike}
            isLoading={isLoading}
            error={error}
          />
          <AddNewCardButton/>
        </div>
      );
}
