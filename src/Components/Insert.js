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
import { insertProduct } from "../helpers/Products";
import { getProducts } from "../helpers/Products";
import { Alert } from "@material-ui/lab";

/* Nos permite realizar estilos mediante un json */
const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: theme.shadows[5], //Manera de agregar sombras por defecto
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  select: {
    width: "100%",
  },

  textField: {
    width: "100%",
  },
}));

export const VentanaInsertar = ({ modal, setModal, setProducts, insert }) => {
  const styles = useStyles();
  const classes = useStyles();

  const [isInsert, setIsInsert] = useState(insert);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState(0);
  const [pvp, setPvp] = useState(0);
  const [iva, setIva] = useState(false);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const showMessage = (message, state) => {
    setAlertMsg(message);
    state(true);
    setTimeout(() => {
      state(false);
    }, 3000);
  };

  const abrirCerrarModal = () => {
    setModal((modal) => !modal);
    setIsInsert(false);
  };

  const insertProductos = async (e) => {
    e.preventDefault();
    if (name.length === 0) {
      showMessage("Ingrese un nombre al producto", setError);
    } else if (name.length > 50) {
      showMessage(
        "El nombre del producto debe ser de máximo 50 caracteres",
        setError
      );
    } else if (description.length === 0) {
      showMessage("Ingrese una descripción al producto", setError);
    } else if (description.length > 100) {
      showMessage(
        "La descripción del producto debe ser de máximo 100 caracteres",
        setError
      );
    } else if (cost <= 0) {
      showMessage(
        "El costo del producto no puede ser menor que cero",
        setError
      );
    } else if (pvp <= 0) {
      showMessage(
        "El costo de venta del producto no puede ser menor que cero",
        setError
      );
    } else {
      console.log("Entra")
      
      setProducts((productos) => {
        return { data: productos.data, loading: false };
      });
      await insertProduct(name, description, iva, cost, pvp, status, 0);
      const arrayProducts = await getProducts();
      setProducts({ data: arrayProducts, loading: true });
      setIsInsert(true);
      setTimeout(() => {
        abrirCerrarModal();
      }, 600);
    }
  };

  const body = (
    <form className={styles.modal} onSubmit={insertProductos}>
      <div align="center">
        <h3>Insertar</h3>
      </div>
      {name.length}
      <TextField
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        label="Nombre"
        className={styles.textField}
      />
      <br />
      <TextField
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        label="Descripción"
        className={styles.textField}
      />
      <br />
      <TextField
        value={cost}
        onChange={(e) => {
          setCost(e.target.value);
        }}
        type="number"
        label="Costo"
        className={styles.textField}
      />
      <br />
      <TextField
        value={pvp}
        onChange={(e) => {
          setPvp(e.target.value);
        }}
        type="number"
        label="PVP"
        className={styles.textField}
      />
      <br />
      <FormControl className={styles.select}>
        <InputLabel id="select-iva">IVA</InputLabel>
        <Select
          value={iva}
          onChange={(e) => {
            setIva(e.target.value);
          }}
          labelId="select-iva"
        >
          <MenuItem value={true}>Si</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl className={styles.select}>
        <InputLabel id="select-iva">Estado</InputLabel>
        <Select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          labelId="select-iva"
        >
          <MenuItem value={true}>Activo</MenuItem>
          <MenuItem value={false}>Inactivo</MenuItem>
        </Select>
      </FormControl>
      {/* <br />
      <TextField value={stock}  onChange={(e)=>{setStock(e.target.value)}} type="number" label="Stock" className={styles.textField} />
      <br /> */}
      <br /> <br />
      <div align="right">
        <Button type="submit" onClick={insertProductos}>
          Insertar
        </Button>
        <Button onClick={abrirCerrarModal}>Cancelar</Button>
      </div>
      {isInsert && (
        <Alert severity="success">Producto insertado correctamente</Alert>
      )}
      {error && (
        <Alert variant="filled" severity="warning" className={classes.alert}>
          {alertMsg}
        </Alert>
      )}
    </form>
  );
  return (
    <>
      <Modal open={modal} onClose={abrirCerrarModal}>
        {body}
      </Modal>
    </>
  );
};
