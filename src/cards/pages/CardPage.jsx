import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import axios from "axios";
import CardsFeedBack from "../components/card/CardsFeedBack";

let title = "Cards";
let subtitle =
  "On this page you can find all bussines cards from all categories";

export default function CardPage() {
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    const getAllCards = async () => {
      try {
        const response = await axios.get(
          "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
        );
        const data = response.data;
        setCardsList(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    getAllCards();
  }, []);

  return (
    <div>
      <PageHeader title={title} subtitle={subtitle} />
      <CardsFeedBack cardsList={cardsList} />
    </div>
  );
}
