import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function ChartsModal({openDialog, setOpenDialog}) {
    console.log(openDialog);

    return (
        <Dialog
            open={openDialog}
        >
           <DialogTitle>
               Podsumowanie oceny celów 
               <IconButton onClick={() => setOpenDialog(false)}>
                   <CloseIcon />
               </IconButton>
           </DialogTitle>
           <DialogContent dividers>
               
           </DialogContent>
           <DialogActions>
               <Button onClick={() => setOpenDialog(false)}>
                   Zamknij
               </Button>
           </DialogActions>
       </Dialog>
    )
}
