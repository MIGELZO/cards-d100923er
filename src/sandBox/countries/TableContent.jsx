import { TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import Spinner from "../../components/Spinner";

export default function TableContent({ countriesList }) {
  return (
    <div>
      {countriesList.length === 0 ? (
        <TableBody>
          <TableRow>
            <Spinner/>
          </TableRow>
        </TableBody>
      ) : (
        <TableBody>
          {countriesList.map((Country, index) => (
            <TableRow key={index}>
              <TableCell sx={{ width: "15rem" }}>
                {Country.name.common}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      )}
    </div>
  );
}
