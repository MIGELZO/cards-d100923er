import React from "react";
import {
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

export default function CardBody({
  title,
  subtitle,
  phone,
  address,
  cardNumber,
}) {
  return (
    <>
      <CardHeader title={title} subheader={subtitle} />
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <strong>Phone: </strong>
          {phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Address: </strong>
          {address.city} {address.street} {address.houseNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Card Number: </strong>
          {cardNumber}
        </Typography>
      </CardContent>
    </>
  );
}
