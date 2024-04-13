import axios from "axios";

export const getAllCardsService = async () => {
  try {
    const response = await axios.get(
      "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCardDetailsService = async (id) => {
  try {
    const response = await axios.get(
      `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
