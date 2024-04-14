import axios from "axios";

const loginService = async (email, password) => {
  try {
    const response = await axios.post(
      "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login",
      {
        email: email,
        password: password,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const signUpService = async (user) => {
  try {
    const response = await axios.post(
      "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users",
      {}
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserData = async (id) => {
  try {
    const response = await axios.get(
      `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { loginService, signUpService, getUserData };
