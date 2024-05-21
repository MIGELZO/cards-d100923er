import { useCallback, useState } from "react";
import { useUser } from "../providers/UserProvider";
import {
  getUserData,
  loginService,
  signUpService,
  updateUser,
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
import normalizedExistingUser from "../helpers/normalization/normalizedExistingUser";

export default function useUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { setUser, setToken, user } = useUser();
  const { snackbarActivation } = useSnackbar();
  const [existingUser, setExistingUser] = useState([]);

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
          ? snackbarActivation(
              "success",
              "filled",
              "SIGNED UP and LOGGED IN Successfully"
            )
          : snackbarActivation("success", "LOGGED IN Successfuly", "filled");
        return;
      } catch (error) {
        setError(error.message);
        console.log(error);
        snackbarActivation("error", error.message, "filled");
        setIsLoading(false);
      }
      setIsLoading(false);
    },
    [setToken, setUser, navigate, snackbarActivation]
  );

  const handleLogout = useCallback(() => {
    removeTokenFromLocalStorage();
    setUser(null);
    snackbarActivation("success", "LOGGEDOUT Succesfuly", "filled");
    window.location.reload();
  }, [setUser, snackbarActivation]);

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
        snackbarActivation("error", error.message, "filled");
      }
      setIsLoading(false);
    },
    [handleLogin, snackbarActivation]
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

  const handleUpdateUser = useCallback(
    async (userFromClient) => {
      setIsLoading(true);

      try {
        const normalizedUser = await updateUser(
          user._id,
          normalizedExistingUser(userFromClient)
        );
        setExistingUser(normalizedUser);
        snackbarActivation(
          "success",
          `${normalizedUser.name.first} your details has been successfully updated`
        );
        setTimeout(() => {
          navigate(ROUTES.ROOT);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [snackbarActivation, navigate, user._id]
  );

  return {
    error,
    isLoading,
    existingUser,
    handleLogin,
    handleLogout,
    handleSignup,
    handleGetUser,
    handleUpdateUser,
    setExistingUser,
  };
}
