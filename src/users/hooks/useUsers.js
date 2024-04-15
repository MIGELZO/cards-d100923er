import { useCallback, useState } from "react";
import { useUser } from "../providers/UserProvider";
import { loginService } from "../services/usersApiService";
import { removeTokenFromLocalStorage, setTokenInLocalStorage } from "../services/localStorageService";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routs/routsModel";

export default function useUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const { user, setUser, token, setToken } = useUser();

  const handleLogin = useCallback(
    async (user) => {
      try {
        setIsLoading(true);
        const response = await loginService(user);
        setToken(response);
        setTokenInLocalStorage(response);
        setUser(user);
        return <Navigate to={ROUTES.CARDS} replace />;
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
      setIsLoading(false);
    },
    [setToken,setUser]
  );

  const handleLogout = useCallback((token)=>{
    removeTokenFromLocalStorage(token)
    setUser(undefined)
  },[token])

  

  return { error, isLoading, handleLogin };
}
