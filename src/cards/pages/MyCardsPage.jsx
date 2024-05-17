import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedBack from "../components/CardsFeedBack";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/AddNewCardButton";


export default function MyCardsPage() {
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
            title="My cards"
            subtitle="On this page you can find all the bussines cards you create"
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
