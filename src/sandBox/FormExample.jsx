import { Box, Button, TextField } from "@mui/material";
import Joi from "joi";
import React, { useState } from "react";

const schema = Joi.object({
  firstName: Joi.string().min(2),
  lastName: Joi.string().min(2).max(10),
});

export default function FormExample() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    const validateObj = schema.validate(formData);
    console.log(validateObj);
  };

  return (
    <div>
      <Box>
        <TextField
          label="First name"
          value={formData.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <TextField
          label="Last name"
          value={formData.lastName}
          name="lastName"
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </div>
  );
}
