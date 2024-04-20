import { useCallback, useState } from "react";
import { useUser } from "../providers/UserProvider";
import {
  getUserData,
  loginService,
  signUpService,
} from "../services/usersApiService";
import {
  getUser,
  removeTokenFromLocalStorage,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import ROUTES from "../../routs/routsModel";
import normalizeUser from "../helpers/normalization/normalizedUser";
import { useSnackbar } from "../../providers/SnackbarProvider";
import { useNavigate } from "react-router-dom";

export default function useUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { setUser, setToken } = useUser();
  const { SnackbarActivation } = useSnackbar();

  const handleLogin = useCallback(
    async (userLogin, isSigned = false) => {
      try {
        setIsLoading(true);
        const token = await loginService(userLogin);
        setTokenInLocalStorage(token);
        setToken(token);
        setUser(getUser());
        navigate(ROUTES.CARDS);
        isSigned
          ? SnackbarActivation(
              "success",
              "filled",
              "SIGNED UP and LOGGED IN Successfully"
            )
          : SnackbarActivation("success", "filled", "LOGGED IN Successfuly");
        return;
      } catch (error) {
        setError(error.message);
        console.log(error);
        SnackbarActivation("error", "filled", error.message);
        setIsLoading(false);
      }
      setIsLoading(false);
    },
    [setToken, setUser, navigate, SnackbarActivation]
  );

  const handleLogout = useCallback(() => {
    removeTokenFromLocalStorage();
    setUser(null);
    SnackbarActivation("success", "filled", "LOGGEDOUT Succesfuly");
  }, [setUser, SnackbarActivation]);

  const handleSignup = useCallback(
    async (userFromClient) => {
      setIsLoading(true);
      try {
        const normalizedUser = normalizeUser(userFromClient);
        await signUpService(normalizedUser);
        await handleLogin(
          {
            email: userFromClient.email,
            password: userFromClient.password,
          },
          true
        );
      } catch (error) {
        setError(error.message);
        SnackbarActivation("error", "filled", error.message);
      }
      setIsLoading(false);
    },
    [handleLogin, SnackbarActivation]
  );

  const handleGetUser = useCallback(async (id) => {
    setIsLoading(true);
    try {
      const userData = await getUserData(id);
      setIsLoading(false);
      return userData;
    } catch (error) {
      setError(error.message);
    }
  }, []);

  return {
    error,
    isLoading,
    handleLogin,
    handleLogout,
    handleSignup,
    handleGetUser,
  };
}
