import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CrosswordOptions = ({ handleChange, selectOption, options }) => {
  return (
    <FormControl style={{ marginBottom: "16px", width: "400px" }}>
      <InputLabel id="demo-simple-select-label">Selected Puzzle</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectOption}
        label="Selected Puzzle"
        onChange={(e) => handleChange(e.target.value)}
      >
        {options.map((opt) => (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CrosswordOptions;
