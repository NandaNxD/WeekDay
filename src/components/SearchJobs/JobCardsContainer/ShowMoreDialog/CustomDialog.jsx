import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CustomDialog({dialogTitle,dialogBody,closeDialog,isOpen}) {
  /**
   * Lifted the isOpen state up
   */
  return (
      <Dialog
        open={isOpen}
        onClose={closeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {dialogTitle}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogBody}
          </DialogContentText>
        </DialogContent>
      </Dialog>
  );
}