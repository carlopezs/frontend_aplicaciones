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

  const [cabDescripcion, setCabDescripcion] = useState([]);

  const [detCantidad, setDetCantidad] = useState([]);

  const [ajusIngresado, setAjusIngresado] = useState(false);

  const [noDetalles, setnoDetalles] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const insertCabeceraFuncion = async () => {
    if (detCantidad.length !== 0) {
      const objectCabecera = await insertCabecera(cabDescripcion);
      const idCabecera = objectCabecera.body.cabecera.idCabecera;
      let stockactualizado;
      detCantidad.map((res) => {
        stockactualizado = res.product.pro_stock + parseInt(res.cantidad);
        insertDetalle(
          res.cantidad,
          idCabecera,
          res.product.pro_id,
          stockactualizado
        );
        updateProductsConStock(
          res.product.pro_id,
          res.product.pro_nombre,
          res.product.pro_descripcion,
          res.product.pro_iva,
          res.product.pro_costo,
          res.product.pro_pvp,
          res.product.pro_activo,
          stockactualizado
        );
      });
      setAjusIngresado(true);
      setTimeout(() => {
        setAjusIngresado(false);
      }, 1500);
    } else {
      setnoDetalles(true);
      setTimeout(() => {
        setnoDetalles(false);
      }, 1500);
    }
  };

  return (
    <div>
      <CabeceraAjuste setCabDescripcion={setCabDescripcion}></CabeceraAjuste>
      <DetalleAjuste
        setDetalleProductos={setDetalleProductos}
        detalleProductos={detalleProductos}
        setDetCantidad={setDetCantidad}
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
      {noDetalles && (
        <Alert variant="filled" severity="warning"className={classes.alert}>
          Ingrese productos al ajuste antes de guardar
        </Alert>
      )}
      <VentanaProductos
        open={open}
        className
        setDetalleProductos={setDetalleProductos}
        onClose={handleClose}
      ></VentanaProductos>
    </div>
  );
};
