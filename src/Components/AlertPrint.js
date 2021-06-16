import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const AlertPrint = ({handleClose,openAlert,handlePrint,updatePrintAjus}) => {
    
   const printReport = () =>{
       handlePrint();
       handleClose();
       updatePrintAjus();
   }
  
    return (
      <div>
        
        <Dialog
          open={openAlert}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Esta seguro que desea imprimir?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Recuerde que despues de imprimir no podrá actualizar el ajuste
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={printReport} color="primary">
              Aceptar
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Cancelar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}
