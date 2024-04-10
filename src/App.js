import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routs/Router";
import Layout from "./layout/Layout";
import UserProvider from "./users/providers/UserProvider";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Layout>
          <Router />
        </Layout>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
