import React, { useCallback, useEffect, useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import memoryData from "./memoryData.json";
import MemoryCard from "./MemoryCard";
import SolvedDialogue from "../SolvedDialogue";

const shuffle = (array) => {
  return array
    .sort(() => Math.random() - 0.5)
    .map((el) => ({ ...el, matched: false }));
};

const MemoryBoard = () => {
  const [size, setSize] = useState(9);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    if (flipped.length < 2) return;
    setTimeout(() => {
      if (flipped[0].id === flipped[1].id) {
        const matches = cards.map((c) => {
          if (c.id === flipped[0].id) {
            return { ...c, matched: true };
          } else return c;
        });
        setCards(matches);
        const unmatched = matches.filter((c) => !c.matched);
        if (memoryData.length - unmatched.length === size * 2) setSolved(true);
      }
      setFlipped([]);
    }, 2000);
  }, [cards, flipped, size]);

  const handleFlip = useCallback(
    (card) => {
      if (flipped.length < 2) {
        setFlipped([...flipped, card]);
      }
    },
    [flipped]
  );

  const randomizeCards = () => {
    const randomMemoryData = shuffle(memoryData);
    setCards(randomMemoryData);
  };
  useEffect(() => {
    randomizeCards();
  }, []);

  const handleSize = (val) => {
    randomizeCards();
    setSize(val);
  };

  return (
    <>
      {solved && (
        <SolvedDialogue
          open={solved}
          handleClose={() => {
            setSolved(false);
            randomizeCards();
          }}
        />
      )}
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        fullWidth
        style={{ marginBottom: "8px" }}
      >
        <Button
          disabled={size === 3 ? true : false}
          onClick={() => handleSize(3)}
        >
          Easy
        </Button>
        <Button
          disabled={size === 6 ? true : false}
          onClick={() => handleSize(6)}
        >
          Medium
        </Button>
        <Button
          disabled={size === 9 ? true : false}
          onClick={() => handleSize(9)}
        >
          Hard
        </Button>
      </ButtonGroup>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cards
          .filter((c) => c.id <= size)
          .map((card) => (
            <MemoryCard
              key={card.uniqueId}
              card={card}
              handleFlip={handleFlip}
              flipped={flipped}
            />
          ))}
      </div>
    </>
  );
};

export default MemoryBoard;
