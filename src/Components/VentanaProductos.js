import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@material-ui/core";
import { ProductAjusCard } from "./ProductAjusCard";
import { getProductsAjuste } from "../helpers/Products";
import { VentanaInsertar } from "./Insert.js";
import { Box } from "@material-ui/core";
import {SearchProducts} from './SearchProducts';

/* export default function VentanaProductos(props){
    
    const{openWindow, setOpenWindow}= props;
    return(
        <Dialog open={openWindow}>
            <DialogTitle>
                <div>Productos</div>
            </DialogTitle>
            <DialogContent>
                <div>ListadoProductos</div>
            </DialogContent>
        </Dialog>
    );
}; */

export default function VentanaProductos(props, product) {
  const { onClose, selectedValue, open, setDetalleProductos } = props;
  const [modal, setModal] = useState(false);

  const abrirCerrarModal = () => {
    setModal((modal) => !modal);
  };
  const handleClose = () => {
    onClose(selectedValue);
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
            setDetalleProductos={setDetalleProductos}
            setProducts={setProducts}
          ></ProductAjusCard>
        ))}
      </DialogContent>
      <VentanaInsertar
        setProducts={setProducts}
        modal={modal}
        setModal={setModal}
        insert={false}
      ></VentanaInsertar>
    </Dialog>
  );
}
