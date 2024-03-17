import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routs/Router";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
