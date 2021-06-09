import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import VentanaProductos from './VentanaProductos';
import CabeceraAjuste from './CabeceraAjuste';
import DetalleAjuste from './DetalleAjuste';
import { insertCabecera } from "../helpers/Ajustes";
import { insertDetalle  } from "../helpers/Ajustes";
import { updateProducts, updateProductsConStock } from "../helpers/Products";

const useStyles = makeStyles((theme) => ({
    add: {
        position: "fixed",
        bottom: "5%",
        right: "5%"
    },
    save: {
        position: "fixed",
        bottom: "5%",
        left: "1%"
    }
}))


export const Ajuste = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const [detalleProductos, setDetalleProductos] = useState([]);

    const [cabDescripcion,setCabDescripcion]=useState([]);

    const [detCantidad,setDetCantidad]=useState([]);
   
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const insertCabeceraFuncion= async ()=>{
        
     const objectCabecera =await insertCabecera(cabDescripcion); 
       const idCabecera= objectCabecera.body.cabecera.idCabecera;
        let stockactualizado 
        detCantidad.map(res => {
            insertDetalle(res.cantidad,idCabecera,res.product.pro_id,res.product.pro_id)
            stockactualizado=res.product.pro_stock+parseInt(res.cantidad)
            updateProductsConStock(res.product.pro_id,res.product.pro_nombre,res.product.pro_descripcion,
                res.product.pro_iva,res.product.pro_costo,res.product.pro_pvp,res.product.pro_activo,stockactualizado)
        }); 
    }

    
    


    return ( 
        <div>
            <CabeceraAjuste setCabDescripcion={setCabDescripcion}></CabeceraAjuste>
            <DetalleAjuste detalleProductos={detalleProductos}  setDetCantidad={setDetCantidad}></DetalleAjuste>

            <Fab className={classes.add} position='absolute'
                bottom='theme.spacing(2)' right='theme.spacing(2)'
                color='primary' aria-label='add'
                onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
            <Fab className={classes.save} variant="extended" position='absolute' 
            bottom='theme.spacing(2)' right='theme.spacing(2)'
            color="primary" aria-label="add"
            onClick={insertCabeceraFuncion} >
                <NavigationIcon className={classes.extendedIcon} />
                Guardar
            </Fab>
            <VentanaProductos open={open} setDetalleProductos={setDetalleProductos} onClose={handleClose}>
            </VentanaProductos>


        </div>

    )
}
