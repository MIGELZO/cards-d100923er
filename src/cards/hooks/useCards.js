import { useCallback, useState } from "react";
import {
  createCard,
  editCard,
  getAllCardsService,
  getCardDetailsService,
} from "../services/cardsApiService";
import { useSnackbar } from "../../providers/SnackbarProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routs/routsModel";
import normalizeCard from "../helpers/normalization/normalizeCard";
import useAxios from "../../hooks/useAxios";

export default function useCards(id) {
  const [cardsList, setCardsList] = useState([]);
  const [cardData, setCardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const { snackbarActivation } = useSnackbar();
  const navigate = useNavigate();
  useAxios();

  const getAllCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getAllCardsService();
      setCardsList(data);
      snackbarActivation("success", "All the cards are here");
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
    setIsLoading(false);
  }, [snackbarActivation]);

  const getCardDetails = useCallback(async (id) => {
    try {
      setIsLoading(true);
      const data = await getCardDetailsService(id);
      setCardData(data);
      setIsLoading(false);
      return data;
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const handleCreateCard = useCallback(
    async (cardFromClient) => {
      setError(null);
      setIsLoading(true);

      try {
        const card = await createCard(normalizeCard(cardFromClient));
        setCardData(card);
        snackbarActivation("success", "A new business card has been created");
        setTimeout(() => {
          navigate(ROUTES.ROOT);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [snackbarActivation, navigate]
  );

  const handleUpdateCard = useCallback(
    async (cardId, cardFromClient) => {
      setIsLoading(true);

      try {
        const card = await editCard(cardId, normalizeCard(cardFromClient));
        setCardData(card);
        snackbarActivation(
          "success",
          "The business card has been successfully updated"
        );
        setTimeout(() => {
          navigate(ROUTES.ROOT);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [snackbarActivation, navigate]
  );

  const handleCardDelete = useCallback(
    (id) => {
      snackbarActivation("primary", "You deleted card No. " + id, "filled");
    },
    [snackbarActivation]
  );

  const handleCardLike = useCallback(
    (id) => {
      snackbarActivation("primary", "You liked card No. " + id, "filled");
    },
    [snackbarActivation]
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
    handleCreateCard,
    handleUpdateCard,
  };
}
