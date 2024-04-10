import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import CountriesTable from "./CountriesTable";

export default function Countries() {
  const [countriesList, setCountriesList] = useState([]);
  const [effectTriger, setEffectTriger] = useState(0);
  const refreshFunc = useCallback(() => {
    setCountriesList([]);
    setEffectTriger((prev) => !prev);
  }, []);

  useEffect(() => {
    //   const getAllCountries = async () => {
    //     const response = await axios.get("https://restcountries.com/v3.1/all");
    //     const data = response.data;
    //     setCountriesList(data);
    //   };

    // הדמיה של קוד למניעת תקיעה של התוכנה במקרה של תקלה במשיכת הנתונים:

    const getAllCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const data = response.data;
        setCountriesList(data);
      } catch (error) {
        console.log("error ", error);
      }
    };

    getAllCountries();
  }, [effectTriger]);

  return (
    <CountriesTable countriesList={countriesList} refreshFunc={refreshFunc} />
  );
}
