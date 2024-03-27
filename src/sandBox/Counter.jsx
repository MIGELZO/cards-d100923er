import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter % 7 === 0 || counter.toString().includes("7")) {
      console.log("Boom");
    }
  }, [counter]);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <Box>
      <Button variant="contained" onClick={increment}>
        +
      </Button>
      <Button variant="contained" onClick={decrement}>
        -
      </Button>
      <Typography variant="h3">{counter}</Typography>
    </Box>
  );
}
