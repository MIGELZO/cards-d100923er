import axios from "axios";
import { useState } from "react";

export default function useCards(id) {
  const [cardsList, setCardsList] = useState([]);
  const [cardData, setCardData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();


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


  const handleCardDelete = (id) => {
    console.log("You deleted card No.", id);
  };

  const handleCardLike = (id) => {
    console.log("You liked card No.", id);
  };

  return {
    cardData,
    isLoading,
    error,
    cardsList,
    handleCardDelete,
    handleCardLike,
    getAllCards,
    getCardDetails
  };
}
