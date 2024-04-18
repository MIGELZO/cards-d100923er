import { useCallback, useState } from "react";
import {
  getAllCardsService,
  getCardDetailsService,
} from "../services/cardsApiService";
import { useSnackbar } from "../../providers/SnackbarProvider";

export default function useCards(id) {
  const [cardsList, setCardsList] = useState([]);
  const [cardData, setCardData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const { SnackbarActivation } = useSnackbar();

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

  const handleCardDelete = useCallback(
    (id) => {
      SnackbarActivation("primary", "filled", "You deleted card No. " + id);
    },
    [SnackbarActivation]
  );

  const handleCardLike = useCallback(
    (id) => {
      SnackbarActivation("primary", "filled", "You liked card No. " + id);
    },
    [SnackbarActivation]
  );

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
