import React, { useEffect, useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import NavigationIcon from "@material-ui/icons/Navigation";
import { makeStyles } from "@material-ui/core/styles";
import VentanaProductos from "./VentanaProductos";
import CabeceraAjusteUpdate from "./CabeceraAjusteUpdate";
import DetalleAjusteUpdate from "./DetalleAjusteUpdate";
import { getCabeceraById, getDetallesByCab, updateCabecera, updateDetalle } from "../helpers/Ajustes";
import { Alert } from "@material-ui/lab";
import { useParams } from "react-router-dom";
import { getProductById } from "../helpers/Products";

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

export const ActualizarAjuste = () => {
  const classes = useStyles();

  const {cab_id} = useParams();
  const [cabecera, setCabecera] = useState([]);
  const [detallesNoModi, setDetallesNoModi] = useState([]);
  const [detalles, setDetalles] = useState([]);



  useEffect(() => {
   getCabeceraById(cab_id).then(res=>{
      setCabecera(res);
   })
   getDetallesByCab(cab_id).then(res=>{
     console.log(res);
     setDetalles(res);
   })
  }, [])

  const getProductStock = async (pro_id) =>{
    const product = await getProductById(pro_id);
    return product;
    
  } 




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
  
  const verifyModify = ({det_id,det_cantidad}) =>{
    getDetallesByCab(cab_id).then(res=>{
      setDetalles(res);
    })
    const modify = detallesNoModi.find(res=>res.det_cantidad == det_cantidad)
    return modify;
  }

  const updateCabeceraFuncion = async () => {
    let stockActualizado;
    await updateCabecera(cab_id,cabecera[0].cab_descripcion);
    detalles.map((detalle)=>{
      console.log(verifyModify(detalle));
       getProductStock(detalle.pro_id).then(res=>{
          stockActualizado = parseInt(res[0].pro_stock) + parseInt(detalle.det_cantidad);
       })
   
      /* await updateDetalle(res.det_id,res.det_cantidad) */
    })
    /* await updateDetalle() */
         
  };

  return (
    <div>
      {cabecera.length!==0&&<CabeceraAjusteUpdate cabecera={cabecera} setCabecera={setCabecera}></CabeceraAjusteUpdate>}

      {detalles.length!==0&&<DetalleAjusteUpdate 
        setDetalles={setDetalles}
        detalles = {detalles}
      ></DetalleAjusteUpdate>}

   {/*    <Fab
        className={classes.add}
        position="absolute"
        bottom="theme.spacing(2)"
        right="theme.spacing(2)"
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab> */}
      <Fab
        className={classes.save}
        variant="extended"
        position="absolute"
        bottom="theme.spacing(2)"
        right="theme.spacing(2)"
        color="primary"
        aria-label="add"
        onClick={updateCabeceraFuncion}
      >
        <NavigationIcon className={classes.extendedIcon} />
        Actualizar
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
{/*       <VentanaProductos
        open={open}
        className
        setDetProductos={setDetProductos}
        onClose={handleClose}
      ></VentanaProductos> */}
    </div>
  );
};
