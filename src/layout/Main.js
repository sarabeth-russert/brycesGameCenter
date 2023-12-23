import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MemoryBoard from "../components/memory/MemoryBoard";
import CrosswordBoard from "../components/crossword/CrosswordBoard";
import SnakeBoard from "../components/snake/snakeBoard";
import Christmas from "../components/christmas";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Main = ({ activeGame }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      {!activeGame && (
        <div>
          <Typography variant="h6">12/22/23</Typography>
          <Typography variant="body">
            Hi Bryce! I hope you are having a good time with your games. I added
            a new crossword for you about DINOSAURS! I hope you have fun.
            Remember to let me know about 10 min before you face time me on
            Christmas Game and I will release your scavenger hunt to the web!
          </Typography>
        </div>
      )}
      {activeGame === "memory" && <MemoryBoard />}
      {activeGame === "crossword" && <CrosswordBoard />}
      {activeGame === "snake" && <SnakeBoard />}
      {activeGame === "christmas" && <Christmas />}
    </Box>
  );
};

export default Main;
