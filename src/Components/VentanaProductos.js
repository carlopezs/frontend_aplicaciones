import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@material-ui/core";
import { ProductAjusCard } from "./ProductAjusCard";
import { getProductsAjuste } from "../helpers/Products";
import { VentanaInsertar } from "./Insert.js";
import { Box } from "@material-ui/core";
import {SearchProducts} from './SearchProducts';
import { Alert } from "@material-ui/lab";


export default function VentanaProductos(props) {
  const { onClose, selectedValue, open, setDetProductos } = props;
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const abrirCerrarModal = () => {
    setModal((modal) => !modal);
  };

  const handleClose = () => {
    onClose(selectedValue);
    getProductsAjuste().then((arrayProducts) => {
      setProducts({ data: arrayProducts, loading: true });
    });
  };
  const [products, setProducts] = useState({ data: [], loading: false });

  useEffect(() => {
    getProductsAjuste().then((arrayProducts) => {
      setProducts({ data: arrayProducts, loading: true });
    });
  }, []);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="space-between">
          <h4>Productos</h4>
          <Button
            onClick={abrirCerrarModal}
            size="large"
            variant="contained"
            color="primary"
          >
            Insertar
          </Button>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
        {products.loading && (
        <SearchProducts
          setProducts={setProducts}
          products={products}
        ></SearchProducts>
      
      )}
       </Box>
      </DialogTitle>

      <DialogContent>
        {products.data.map((res) => (
          <ProductAjusCard
            key={res.pro_id}
            product={res}
            setAlertMsg={setAlertMsg}
            setError={setError}
            setDetProductos={setDetProductos}
          ></ProductAjusCard>
        ))}
      </DialogContent>
      {error && (
        <Alert variant="filled" severity="warning" >
          {alertMsg}
        </Alert>
      )}
      <VentanaInsertar
        setProducts={setProducts}
        modal={modal}
        setModal={setModal}
        insert={false}
      ></VentanaInsertar>
    </Dialog>
  );
}
