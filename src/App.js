import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Main from "./layout/Main";
import Header from "./layout/Header";
import DrawerElem from "./layout/Drawer";

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const [activeGame, setActiveGame] = React.useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <DrawerElem
        open={open}
        handleDrawerClose={handleDrawerClose}
        activeGame={activeGame}
        setActiveGame={setActiveGame}
      />
      <Main activeGame={activeGame} />
    </Box>
  );
}
