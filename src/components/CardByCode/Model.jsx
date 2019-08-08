import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Model(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Modify your Data</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter Credential Information.</DialogContentText>

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          name="selectedName"
          value={props.name}
          onChange={props.OnUpdate}
          fullWidth
          required
        />
        <TextField
          margin="dense"
          id="Email"
          label="Email Address"
          type="email"
          name="selectedEmail"
          onChange={props.OnUpdate}
          value={props.email}
          fullWidth
          required
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={props.OnButtonClick}
          color="primary"
          disabled={(props.name && props.email) == null ? true : false}
        >
          {props.modalValue}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
