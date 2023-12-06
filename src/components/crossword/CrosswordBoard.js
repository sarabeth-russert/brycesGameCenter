import React, { useCallback, useRef, useState } from "react";
import { Button } from "@mui/material";
import {
  CrosswordProvider,
  CrosswordGrid,
  DirectionClues,
} from "@jaredreisinger/react-crossword";
import { data } from "./crosswordData";
import SolvedDialogue from "../SolvedDialogue";
import CrosswordOptions from "./CrosswordOptions";
// import ConfirmToggle from "./ConfirmToggle";
import "./crossword.css";

const CrosswordBoard = () => {
  const [won, setWon] = useState(false);
  const [selectOption, setSelectOption] = useState("");
  const crossword = useRef(null);

  // const onCorrect = useCallback(
  //   (direction, number, answer) => {
  //     if (confirmCorrect) {
  //       setAlertMessage(`"${answer}" is correct!`);
  //       setShowAlert(true);
  //     }
  //   },
  //   [confirmCorrect]
  // );

  const reset = useCallback(() => {
    crossword.current?.reset();
  }, []);

  // const fillAllAnswers = useCallback(() => {
  //   crossword.current?.fillAllAnswers();
  // }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <CrosswordOptions
          handleChange={(selection) => setSelectOption(selection)}
          selectOption={selectOption}
          options={Object.keys(data)}
        />
        <Button disabled={!selectOption} variant="contained" onClick={reset}>
          Reset Puzzle
        </Button>
      </div>
      {selectOption && (
        <CrosswordProvider
          onCrosswordCorrect={() => setWon(true)}
          // onCorrect={onCorrect}
          data={data[selectOption]}
          ref={crossword}
        >
          {won && (
            <SolvedDialogue
              open={won}
              handleClose={() => {
                reset();
                setWon(false);
              }}
            />
          )}
          {/* <button onClick={fillAllAnswers}>fill</button> */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div style={{ width: "500px" }}>
              <CrosswordGrid />
            </div>
            <DirectionClues direction="across" />
            <DirectionClues direction="down" />
          </div>
        </CrosswordProvider>
      )}
    </>
  );
};

export default CrosswordBoard;
