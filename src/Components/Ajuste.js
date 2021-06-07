import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import VentanaProductos from './VentanaProductos';
import CabeceraAjuste from './CabeceraAjuste';
import DetalleAjuste from './DetalleAjuste';

const useStyles = makeStyles((theme)=>({
    add:{
        position:"fixed",
        bottom: "5%",
        right: "5%"    
    }
}))


export const Ajuste = () => {
    const classes = useStyles();
    const [open, setOpen]= React.useState(false);
    const [detalleProductos,setDetalleProductos]=useState([]);
    console.log(detalleProductos)
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <div> 
            <CabeceraAjuste></CabeceraAjuste>
            <DetalleAjuste detalleProductos={detalleProductos} ></DetalleAjuste>
            <Fab className={classes.add} position= 'absolute' 
            bottom='theme.spacing(2)' right= 'theme.spacing(2)' 
             color='primary' aria-label='add'
             onClick={handleClickOpen}>
            <AddIcon/>
            
            </Fab>
            <VentanaProductos  open={open} setDetalleProductos={setDetalleProductos} onClose={handleClose}>
            </VentanaProductos>

            
        </div>

    )
}
