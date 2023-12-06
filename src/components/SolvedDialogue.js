import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const SolvedDialogue = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Congratulations!</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          You solved the puzzle!!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Play Again
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SolvedDialogue;
