import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import NavigationIcon from "@material-ui/icons/Navigation";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import VentanaProductos from "./VentanaProductos";
import CabeceraAjuste from "./CabeceraAjuste";
import DetalleAjuste from "./DetalleAjuste";
import { insertCabecera } from "../helpers/Ajustes";
import { insertDetalle } from "../helpers/Ajustes";
import { updateProducts, updateProductsConStock } from "../helpers/Products";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  add: {
    position: "fixed",
    bottom: "5%",
    right: "5%",
  },
  alert: {
    position: "fixed",
    bottom: "5%",
    right: "15%",
    width: "70%",
  },
  save: {
    position: "fixed",
    bottom: "5%",
    left: "1%",
  },
}));

export const Ajuste = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [detalleProductos, setDetalleProductos] = useState([]);

  const [cabDescripcion, setCabDescripcion] = useState('');

  const [detCantidad, setDetCantidad] = useState([]);

  const [ajusIngresado, setAjusIngresado] = useState(false);

  const [error, setError] = useState(false);

  const [alertMsg, setAlertMsg] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const showMessage = (message, state) => {
    setAlertMsg(message);
    state(true);
    setTimeout(() => {
      state(false);
    }, 3000);
  };

  const validateProductCant = () => {
    let noCant = {cant:false, nameProduct:null};
  
    detCantidad.map((res) => {
      console.log(res.cantidad)
      if (res.cantidad.length === 0) {
        noCant = {cant:true, nameProduct:res.pro_nombre}
        return;
      }
    });
    return noCant;
  };

  const insertCabeceraFuncion = async () => {
    if (cabDescripcion.length === 0) {
      showMessage("Ingrese una descripción antes de guardar", setError);
    } else {
      if (detCantidad.length !== 0) {
        const objectCabecera = await insertCabecera(cabDescripcion);
        const idCabecera = objectCabecera.body.cabecera.idCabecera;
        let stockactualizado;
        if (validateProductCant().cant) {
          showMessage(`El producto ${validateProductCant.nameProduct} no tiene cantidad asignada`, setError)
        }
        else{
          detCantidad.map((res) => {
            stockactualizado = res.product.pro_stock + parseInt(res.cantidad);
            insertDetalle( res.cantidad, idCabecera, res.product.pro_id, stockactualizado);
            updateProductsConStock( res.product.pro_id, res.product.pro_nombre, res.product.pro_descripcion,res.product.pro_iva,
                                    res.product.pro_costo,res.product.pro_pvp, res.product.pro_activo,stockactualizado);
          });
          setCabDescripcion('');
          setAjusIngresado(true);
          setTimeout(() => {
            setAjusIngresado(false);
          }, 1500);
        }
        
      } else {
        showMessage("Verifique que haya productos en el ajuste", setError);
      }
    }
  };

  return (
    <div>
      <CabeceraAjuste setCabDescripcion={setCabDescripcion}></CabeceraAjuste>
      <DetalleAjuste
        setDetCantidad={setDetCantidad}
        detCantidad = {detCantidad}
      ></DetalleAjuste>

      <Fab
        className={classes.add}
        position="absolute"
        bottom="theme.spacing(2)"
        right="theme.spacing(2)"
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <Fab
        className={classes.save}
        variant="extended"
        position="absolute"
        bottom="theme.spacing(2)"
        right="theme.spacing(2)"
        color="primary"
        aria-label="add"
        onClick={insertCabeceraFuncion}
      >
        <NavigationIcon className={classes.extendedIcon} />
        Guardar
      </Fab>
      {ajusIngresado && (
        <Alert variant="filled" severity="success" className={classes.alert}>
          Ajuste ingresado correctamente
        </Alert>
      )}
      {error && (
        <Alert variant="filled" severity="warning" className={classes.alert}>
          {alertMsg}
        </Alert>
      )}
      <VentanaProductos
        open={open}
        className
        setDetalleProductos={setDetalleProductos}
        setDetCantidad={setDetCantidad}
        onClose={handleClose}
      ></VentanaProductos>
    </div>
  );
};
