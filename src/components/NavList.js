import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { GiPresent } from "react-icons/gi";
import { GiDolphin } from "react-icons/gi";
import { TfiPencilAlt } from "react-icons/tfi";
import { GiSandSnake } from "react-icons/gi";
// import { GiCardPickup } from "react-icons/gi";

const NavList = ({ open, activeGame, setActiveGame }) => {
  return (
    <List>
      <ListItem
        disablePadding
        sx={{ display: "block" }}
        onClick={() => setActiveGame("christmas")}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <GiPresent
              size={"2em"}
              color={activeGame === "christmas" ? "orange" : "grey"}
            />
          </ListItemIcon>
          <ListItemText
            primary={"Christmas Hunt"}
            sx={{ opacity: open ? 1 : 0 }}
          />
        </ListItemButton>
      </ListItem>
      <ListItem
        disablePadding
        sx={{ display: "block" }}
        onClick={() => setActiveGame("memory")}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <GiDolphin
              size={"2em"}
              color={activeGame === "memory" ? "orange" : "grey"}
            />
          </ListItemIcon>
          <ListItemText
            primary={"Marine Memory"}
            sx={{ opacity: open ? 1 : 0 }}
          />
        </ListItemButton>
      </ListItem>
      <ListItem
        disablePadding
        sx={{ display: "block" }}
        onClick={() => setActiveGame("crossword")}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <TfiPencilAlt
              size={"2em"}
              color={activeGame === "crossword" ? "orange" : "grey"}
            />
          </ListItemIcon>
          <ListItemText primary={"Crossword"} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
      <ListItem
        disablePadding
        sx={{ display: "block" }}
        onClick={() => setActiveGame("snake")}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <GiSandSnake
              size={"2em"}
              color={activeGame === "snake" ? "orange" : "grey"}
            />
          </ListItemIcon>
          <ListItemText primary={"Snake Game"} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default NavList;
