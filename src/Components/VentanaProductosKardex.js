import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@material-ui/core";
import { ProductAjusCard } from "./ProductAjusCard";
import { getProductsAjuste } from "../helpers/Products";
import { Box } from "@material-ui/core";
import { SearchProducts } from "./SearchProducts";

export default function VentanaProductosKardex(props) {
  const { onClose, selectedValue, open, setDetProductos, setKardex } = props;

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
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <h4>Productos</h4>
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
            setKardex={setKardex}
            key={res.pro_id}
            product={res}
            module="kardex"
            setDetProductos={setDetProductos}
          ></ProductAjusCard>
        ))}
      </DialogContent>
    </Dialog>
  );
}
