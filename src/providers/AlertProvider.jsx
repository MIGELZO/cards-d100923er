import { Alert, AlertTitle, Backdrop, Box, Button, Stack } from "@mui/material";
import React, { createContext, useCallback, useContext, useState } from "react";

const AlertContext = createContext();

export default function AlertProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("info");
  const [title, setTitle] = useState("Info");
  const [message, setMessage] = useState("");
  const [operation, setOperation] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setOperation(null);
  };

  const handleOk = () => {
    if (operation) operation();
    handleClose();
  };

  const handleCopyToClipboard = () => {};

  const alertActivation = useCallback(
    (color, title, message, operation = null) => {
      setOpen(true);
      setColor(color);
      setTitle(title);
      setMessage(message);
      setOperation(() => operation);
    },
    []
  );

  return (
    <Box>
      <AlertContext.Provider value={{ alertActivation }}>
        {children}
      </AlertContext.Provider>
      <Backdrop open={open} sx={{ zIndex: 1 }}>
        <Stack
          sx={{ width: "20%", position: "reletive", zIndex: 2 }}
          spacing={2}
        >
          <Alert severity={color}>
            <AlertTitle>{title}</AlertTitle>
            {message}
            <Box sx={{ display: "flex" }}>
              {operation ? (
                <Button color="inherit" size="small" onClick={handleOk}>
                  OK
                </Button>
              ) : (
                <Button
                  color="inherit"
                  size="small"
                  onClick={handleCopyToClipboard}
                >
                  Copy
                </Button>
              )}
              <Button color="inherit" size="small" onClick={handleClose}>
                {!operation ? "ok" : "cancel"}
              </Button>
            </Box>
          </Alert>
        </Stack>
      </Backdrop>
    </Box>
  );
}

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) throw new Error("useSnackbar must be used within a Provider");
  return context;
};