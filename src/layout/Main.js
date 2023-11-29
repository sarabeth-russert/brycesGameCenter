import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import MemoryBoard from "../components/memory/MemoryBoard";
import CrosswordBoard from "../components/crossword/CrosswordBoard";

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
      {activeGame === "memory" && <MemoryBoard />}
      {activeGame === "crossword" && <CrosswordBoard />}
    </Box>
  );
};

export default Main;
