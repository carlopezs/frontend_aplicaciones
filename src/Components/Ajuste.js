import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import NavigationIcon from "@material-ui/icons/Navigation";
import { makeStyles } from "@material-ui/core/styles";
import VentanaProductos from "./VentanaProductos";
import CabeceraAjuste from "./CabeceraAjuste";
import DetalleAjuste from "./DetalleAjuste";
import { insertCabecera } from "../helpers/Ajustes";
import { insertDetalle } from "../helpers/Ajustes";
import { updateProductsConStock } from "../helpers/Products";
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

  const [cabDescripcion, setCabDescripcion] = useState('');

  const [detProductos, setDetProductos] = useState([]);

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
    let stockActualizado;
    detProductos.map((res) => {
      stockActualizado = res.product.pro_stock + parseInt(res.cantidad);
      if (res.cantidad === '0' || res.cantidad === '-0' || res.cantidad.length === 0) {
        noCant = {cant:'cantidad-invalida', nameProduct:res.product.pro_nombre}
        return;
      }
      else if( stockActualizado < 0){
        noCant = {cant:'cantidad-menor', nameProduct:res.product.pro_nombre}
        return;
      }
    });
    return noCant;
  };

  const insertCabeceraFuncion = async () => {
    validateProductCant()
    if (cabDescripcion.length === 0) {
      showMessage("Ingrese una descripción antes de guardar", setError);
    } else {
      const validateCant = validateProductCant();
      if (detProductos.length !== 0) {
        if (validateCant.cant === 'cantidad-invalida') {
          showMessage(`El producto ${validateCant.nameProduct} no tiene cantidad asignada`, setError)
        }
        else if(validateCant.cant === 'cantidad-menor')
        {
          showMessage(`Cantidad de stock de ${validateCant.nameProduct} insuficiente`, setError)
        }
        else{
          let stockactualizado;
          const objectCabecera = await insertCabecera(cabDescripcion);
          const idCabecera = objectCabecera.body.cabecera.idCabecera;
          detProductos.map(async (res) => {
            stockactualizado = res.product.pro_stock + parseInt(res.cantidad);
            await insertDetalle( res.cantidad, res.product.pro_id, stockactualizado);
           
          });
          setCabDescripcion('');
          setDetProductos([]);
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
        setDetProductos={setDetProductos}
        detProductos = {detProductos}
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
        setDetProductos={setDetProductos}
        onClose={handleClose}
      ></VentanaProductos>
    </div>
  );
};
