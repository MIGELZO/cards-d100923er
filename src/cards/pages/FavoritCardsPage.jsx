import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedBack from "../components/CardsFeedBack";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/AddNewCardButton";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routs/routsModel";
import { useUser } from "../../users/providers/UserProvider";

export default function FavoritCardsPage() {
  const {user}=useUser();

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
    
      if(!user) return <Navigate to={ROUTES.ROOT} replace />

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
