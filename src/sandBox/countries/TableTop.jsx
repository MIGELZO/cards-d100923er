import { Button, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

export default function TableTop({ countriesList, refreshFunc }) {
  return (
    <div>
      {countriesList.length === 0 ? (
        <TableHead>
          <TableRow>
            <TableCell>Country name:</TableCell>
            <TableCell>
              <Button variant="contained" disabled>
                Refrash list
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
      ) : (
        <TableHead>
          <TableRow>
            <TableCell>Country name:</TableCell>
            <TableCell>
              <Button
                variant="contained"
                onClick={() => {refreshFunc();
                }}
              >
                Refrash list
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
      )}
    </div>
  );
}
