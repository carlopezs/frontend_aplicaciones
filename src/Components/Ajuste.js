import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import VentanaProductos from './VentanaProductos';

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
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <div>
            <Fab className={classes.add} position= 'absolute' 
            bottom='theme.spacing(2)' right= 'theme.spacing(2)' 
             color='primary' aria-label='add'
             onClick={handleClickOpen}>
            <AddIcon/>
            
            </Fab>
            <VentanaProductos  open={open} onClose={handleClose}>
            </VentanaProductos>
            
        </div>
    )
}
