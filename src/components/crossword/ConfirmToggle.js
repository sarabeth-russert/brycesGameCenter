import React from "react";
import { FormControlLabel, Switch } from "@mui/material";

const ConfirmToggle = ({ value, handleChange }) => {
  return (
    <FormControlLabel
      control={
        <Switch
          value={value}
          onChange={(e) => {
            handleChange(e.target.checked);
          }}
          color="warning"
        />
      }
      label="Confirm Correct Answers"
    />
  );
};

export default ConfirmToggle;
