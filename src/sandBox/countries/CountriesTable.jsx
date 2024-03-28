import { Paper, Table, TableContainer } from "@mui/material";
import React from "react";
import TableTop from "./TableTop";
import TableContent from "./TableContent";

export default function CountriesTable({ countriesList, refreshFunc }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableTop countriesList={countriesList} refreshFunc={refreshFunc} />
        <TableContent countriesList={countriesList} />
      </Table>
    </TableContainer>
  );
}
