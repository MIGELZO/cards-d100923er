import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedBack from "../components/CardsFeedBack";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/AddNewCardButton";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routs/routsModel";
import { Navigate } from "react-router-dom";


export default function MyCardsPage() {
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
