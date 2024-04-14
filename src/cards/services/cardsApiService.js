import axios from "axios";
const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";

export const getAllCardsService = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCardDetailsService = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
