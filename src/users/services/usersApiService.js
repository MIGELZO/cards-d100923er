import axios from "axios";

const login = async (email,password) => {
  try {
    const response = await axios.post('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login',{email:email,password:password})
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export {login}