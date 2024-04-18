import axios from "axios";

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";

const loginService = async (userLogin) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, userLogin);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

const signUpService = async (user) => {
  try {
    const { response } = await axios.post(apiUrl, user);
    return response;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

const getUserData = async (id) => {
  try {
    const { response } = await axios.get(`${apiUrl}/${id}`);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};



export { loginService, signUpService, getUserData };
