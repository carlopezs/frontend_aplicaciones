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
    const [detCantidad,setDetCantidad]=useState(0);
   
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const insertCabeceraFuncion= async ()=>{
        
        const objectCabecera =await insertCabecera(cabDescripcion);
        const idCabecera= objectCabecera.body.cabecera.idCabecera;
        console.log(idCabecera);
        let stockactualizado
        detalleProductos.map(res => {
            console.log(detCantidad)
            insertDetalle(detCantidad,idCabecera,res.pro_id,res.pro_id)
            console.log("res",res.pro_stock)
            stockactualizado=res.pro_stock+parseInt(detCantidad)
            
            console.log(stockactualizado)
            updateProductsConStock(res.pro_id,res.pro_nombre,res.pro_descripcion,
                res.pro_iva,res.pro_costo,res.pro_pvp,res.pro_activo,stockactualizado)
        });

         
        console.log(idCabecera);
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
