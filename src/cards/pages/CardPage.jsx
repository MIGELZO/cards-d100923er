import React from "react";
import Cards from "../components/Cards";
import PageHeader from "../../components/PageHeader";

let title = "Cards";
let subtitle =
  "On this page you can find all bussines cards from all categories";

export default function CardPage() {
  return (
    <div>
      <PageHeader title={title} subtitle={subtitle} />
      <Cards />
    </div>
  );
}
