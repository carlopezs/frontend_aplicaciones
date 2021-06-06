import React from 'react';
import { Dialog, DialogTitle, DialogContent} from '@material-ui/core';




/* export default function VentanaProductos(props){
    
    const{openWindow, setOpenWindow}= props;
    return(
        <Dialog open={openWindow}>
            <DialogTitle>
                <div>Productos</div>
            </DialogTitle>
            <DialogContent>
                <div>ListadoProductos</div>
            </DialogContent>
        </Dialog>
    );
}; */

export default function VentanaProductos(props) {
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
   
  
    return (
        <Dialog onClose={handleClose} open={open}>
        <DialogTitle>
            <div>Productos</div>
        </DialogTitle>
        <DialogContent>
            <div>ListadoProductos</div>
        </DialogContent>
    </Dialog>
    );
  }
  


