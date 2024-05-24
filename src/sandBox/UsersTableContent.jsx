import React, { useState } from "react";
import {
  Avatar,
  Checkbox,
  Fab,
  FormControlLabel,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function UsersTableContent({
  user,
  handleChangeCheckBox,
  handleDeleteUser,
}) {
  const [checkedStatus, setCheckedStatus] = useState(user.isBusiness);
  const toggleBusiness = () => {
    setCheckedStatus(!checkedStatus);
    handleChangeCheckBox(user);
  };
  return (
    <TableRow key={user._id}>
      <TableCell>
        <Avatar src={user.image.url} alt={user.image.alt} />
      </TableCell>
      <TableCell sx={{ whiteSpace: "normal", wordWrap: "break-word" }}>
        <Typography>{`${user.name.first} ${user.name.middle} ${user.name.last}`}</Typography>
      </TableCell>
      <TableCell
        sx={{ maxWidth: "150px", whiteSpace: "normal", wordWrap: "break-word" }}
      >
        <Typography>{user.email}</Typography>
      </TableCell>
      <TableCell
        sx={{ maxWidth: "120px", whiteSpace: "normal", wordWrap: "break-word" }}
      >
        <Typography>{user.phone}</Typography>
      </TableCell>
      <TableCell sx={{ whiteSpace: "normal", wordWrap: "break-word" }}>
        <Typography>{`${user.address.street} ${user.address.houseNumber}, ${user.address.city}, ${user.address.country}`}</Typography>
      </TableCell>
      <TableCell>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedStatus}
              onChange={() => toggleBusiness(user)}
              color="primary"
            />
          }
          label="Is Business"
        />
      </TableCell>
      <TableCell>
        <FormControlLabel
          control={
            <Checkbox
              checked={user.isAdmin}
              disabled={true}
              sx={{ color: "#ccc" }}
            />
          }
          label={<Typography sx={{ color: "#ccc" }}>Is Admin</Typography>}
        />
      </TableCell>
      <TableCell>
        <Fab
          disabled={user.isAdmin}
          onClick={() => handleDeleteUser(user)}
          sx={{ color: "red" }}
        >
          <DeleteIcon />
        </Fab>
      </TableCell>
    </TableRow>
  );
}
