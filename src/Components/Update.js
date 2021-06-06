import React from "react";
import { useState } from "react";
import {
  Modal,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { updateProducts } from "../helpers/Products";
import { getProducts } from "../helpers/Products";
import { Alert } from '@material-ui/lab';


/* Nos permite realizar estilos mediante un json */
const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: "white",
    borderRadius:"20px",
    boxShadow: theme.shadows[5], //Manera de agregar sombras por defecto
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  select:{
    width: "100%",
  },

  textField: {
    width: "100%",
  },
  
}));

export const Update = ({ modal, setModal, product,setProducts,update }) => {
  const styles = useStyles();

  const [isUpdate,setIsUpdate] = useState(update)    
  const [name, setName] = useState(product.pro_nombre );
  const [description, setDescription] = useState(product.pro_descripcion );
  const [cost, setCost] = useState(product.pro_costo );
  const [pvp, setPvp] = useState(product.pro_pvp );
  const [iva, setIva] = useState(product.pro_iva );
  const [status, setStatus] = useState(product.pro_activo);

  const abrirCerrarModal = () => {
    setModal((modal) => !modal);
    setIsUpdate(false);
  };

  const updateProductos= async (e)=>{
    e.preventDefault();
    await updateProducts(product.pro_id,name,description,iva,cost,pvp,status);
    getProducts().then((arrayProducts) =>{
        setProducts(arrayProducts);
        setIsUpdate(true);
    })
    setTimeout(() => {
        abrirCerrarModal();
    }, 600); 
  }
  
  
  const body = (
    <form className={styles.modal} onSubmit={updateProductos} >
      <div align="center">
        <h3>Actualizar {product.pro_nombre}</h3>
      </div>
      <TextField value={name} onChange={(e)=>{setName(e.target.value)}} label="Nombre" className={styles.textField} />
      <br />
      <TextField value={description} onChange={(e)=>{setDescription(e.target.value)}} label="Descripción" className={styles.textField} />
      <br />
      <TextField  value={cost} onChange={(e)=>{setCost(e.target.value)}}  type="number" label="Costo" className={styles.textField} />
      <br />
      <TextField value={pvp}  onChange={(e)=>{setPvp(e.target.value)}} type="number" label="PVP" className={styles.textField} />
      <br />
      <FormControl className={styles.select}>
      <InputLabel id="select-iva">IVA</InputLabel>
      <Select value={iva} onChange={(e)=>{setIva(e.target.value)}} labelId="select-iva" >
        <MenuItem value={true}>Si</MenuItem>
        <MenuItem value={false}>No</MenuItem>
      </Select>
      </FormControl>
      <br />
      <FormControl className={styles.select}>
      <InputLabel id="select-iva">Estado</InputLabel>
      <Select value={status} onChange={(e)=>{setStatus(e.target.value)}} labelId="select-iva" >
        <MenuItem value={true}>Activo</MenuItem>
        <MenuItem value={false}>Inactivo</MenuItem>
      </Select>
      </FormControl>
      <br /> <br />
      <div align="right">
        <Button type="submit" onClick={updateProductos}>Actualizar</Button>
        <Button  onClick={abrirCerrarModal}>Cancelar</Button>
      </div>
      {isUpdate && <Alert severity="success">Producto actualizado correctamente</Alert>}
    </form >
  );
  return (
    <>
      <Modal open={modal} onClose={abrirCerrarModal}>{body}</Modal>
    </>
  );
};
