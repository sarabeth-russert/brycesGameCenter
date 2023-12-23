import React, { useCallback, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import hunts from "./hunts.json";

const Christmas = () => {
  const [currentHuntIndex, setCurrentHuntIndex] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [error, setError] = useState(false);
  const handleGuess = useCallback(() => {
    if (currentGuess === hunts[currentHuntIndex].answer) {
      setCurrentHuntIndex(currentHuntIndex + 1);
      setCurrentGuess("");
    } else {
      setError(true);
    }
  }, [currentGuess, currentHuntIndex]);

  return (
    <div>
      <Typography
        variant="h3"
        textAlign="center"
        style={{ marginBottom: "24px" }}
      >
        2023 Christmas Scavenger Hunt!
      </Typography>
      {hunts[currentHuntIndex].dialogue && (
        <Typography variant="h5" textAlign="center">
          {hunts[currentHuntIndex].dialogue}
        </Typography>
      )}
      {hunts[currentHuntIndex].clue && (
        <Typography
          variant="h6"
          textAlign="center"
          style={{ marginTop: "24px" }}
          color="secondary"
        >
          {hunts[currentHuntIndex].clue}
        </Typography>
      )}
      {hunts[currentHuntIndex].answer && !error && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "24px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="guess"
            variant="outlined"
            onChange={(e) => setCurrentGuess(e.target.value.toLowerCase())}
            value={currentGuess}
          />
          <Button
            type="button"
            variant="contained"
            style={{ marginLeft: "4px" }}
            onClick={handleGuess}
          >
            ENTER
          </Button>
        </div>
      )}
      {error && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "24px",
          }}
        >
          <Typography
            variant="h6"
            textAlign="center"
            style={{ marginTop: "24px" }}
            color="error"
          >
            Uh oh! Guess again!
          </Typography>
          <Button
            type="button"
            variant="contained"
            style={{ marginLeft: "4px" }}
            onClick={() => {
              setCurrentGuess("");
              setError(false);
            }}
          >
            OK
          </Button>
        </div>
      )}
      {currentHuntIndex === 0 && (
        <div
          style={{ margin: "8px", display: "flex", justifyContent: "center" }}
        >
          <Button variant="contained" onClick={() => setCurrentHuntIndex(1)}>
            Begin!
          </Button>
        </div>
      )}
    </div>
  );
};

export default Christmas;
