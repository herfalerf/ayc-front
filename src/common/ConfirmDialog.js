import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
const ConfirmDialog = (props) => {
  const { title, children, onConfirm, color } = props;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="contained" color={color} onClick={handleClickOpen}>
        Delete
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
