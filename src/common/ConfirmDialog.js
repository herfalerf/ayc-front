import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

// Reusable confirmation dialog component
//
// Displays a confirmation popup when a button is clicked

const ConfirmDialog = (props) => {
  const { name, title, children, onConfirm, color, startIcon } = props;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        startIcon={startIcon}
        variant="contained"
        color={color}
        onClick={handleClickOpen}
      >
        {name}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="confirm-dialog"
      >
        <DialogTitle id="confirm-dialog">{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} color="secondary">
            No
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setOpen(false);
              onConfirm();
            }}
            color="default"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ConfirmDialog;
