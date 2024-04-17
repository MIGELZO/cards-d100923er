import { useCallback, useState } from "react";
import { useUser } from "../providers/UserProvider";
import { loginService, signUpService } from "../services/usersApiService";
import {
  getUser,
  removeTokenFromLocalStorage,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import ROUTES from "../../routs/routsModel";
import { Navigate } from "react-router-dom";
import normalizeUser from "../helpers/normalization/normalizedUser";

export default function useUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const { setUser, setToken } = useUser();

  const handleLogin = useCallback(
    async (userLogin) => {
      try {
        setIsLoading(true);
        const token = await loginService(userLogin);
        setToken(token);
        setTokenInLocalStorage(token);
        setUser(getUser());
        return Navigate(ROUTES.CARDS);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
      setIsLoading(false);
    },
    [setToken, setUser]
  );

  const handleLogout = useCallback(() => {
    removeTokenFromLocalStorage();
    setUser(null);
  }, [setUser]);

  const handleSignup = useCallback(
    async (userFromClient) => {
      setIsLoading(true);
      try {
        const normalizedUser = normalizeUser(userFromClient);
        await signUpService(normalizedUser);
        await handleLogin({
          email: userFromClient.email,
          password: userFromClient.password,
        });
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [handleLogin]
  );

  return { error, isLoading, handleLogin, handleLogout, handleSignup };
}
