import { useCallback, useState } from "react";
import {
  getAllCardsService,
  getCardDetailsService,
} from "../services/cardsApiService";

export default function useCards(id) {
  const [cardsList, setCardsList] = useState([]);
  const [cardData, setCardData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const getAllCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getAllCardsService();
      setCardsList(data);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const getCardDetails = useCallback(async (id) => {
    try {
      setIsLoading(true);
      const data = await getCardDetailsService(id);
      setCardData(data);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const handleCardDelete = useCallback((id) => {
    console.log("You deleted card No.", id);
  }, []);

  const handleCardLike = useCallback((id) => {
    console.log("You liked card No.", id);
  }, []);

  return {
    cardData,
    isLoading,
    error,
    cardsList,
    handleCardDelete,
    handleCardLike,
    getAllCards,
    getCardDetails,
  };
}
