import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Countries() {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    const getAllCountries = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const data = response.data;
      setCountriesList(data);
    };

    // הדמיה של קוד למניעת תקיעה של התוכנה במקרה של תקלה במשיכת הנתונים:

    // const getAllCountries = async () => {
    //     try {
    //       const response = await axios.get("https://restcountries.com/v3.1/all1");
    //       const data = response.data;
    //       setCountriesList(data);
    //     } catch (error) {
    //       console.log("error ", error);
    //     }
    //   };

    getAllCountries();
  }, []);

  return (
    <div>
      {countriesList.length === 0 ? (
        <Typography>טוען...</Typography>
      ) : (
        countriesList.map((Country, index) => (
          <Box key={index}>
            <Typography>{Country.name.common}</Typography>
          </Box>
        ))
      )}
    </div>
  );
}
