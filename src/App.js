import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routs/Router";
import Layout from "./layout/Layout";
import UserProvider from "./users/providers/UserProvider";
import CustomThemeProvider from "./providers/CustomThemeProvider";
import SnackbarProvider from "./providers/SnackbarProvider";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <SnackbarProvider>
          <CustomThemeProvider>
            <Layout>
              <Router />
            </Layout>
          </CustomThemeProvider>
        </SnackbarProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
