import React from "react";
import { getProducts } from "../helpers/Products";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SearchProducts } from "./SearchProducts";
import noSearch from "../assets/noSearch.png";

const useStyles = makeStyles(() => ({
  content: {
    padding: 10,
  },
}));

export const Productos = () => {
  const boxStyle = useStyles();
  const [products, setProducts] = useState({ data: [], loading: false });

  useEffect(() => {
    getProducts().then((arrayProducts) => {
      setProducts({ data: arrayProducts, loading: true });
    });
  }, []);


  return (
    <>
      {products.loading && (
        <SearchProducts
          setProducts={setProducts}
          products={products}
        ></SearchProducts>
      )}
      {products.data.length !== 0 && (
        <Box
          className={boxStyle.content}
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
        >
          {products.data.map((res) => (
            <ProductCard
              key={res.pro_id}
              product={res}
              setProducts={setProducts}
            ></ProductCard>
          ))}
        </Box>
      )}
      {products.data.length === 0 && (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" >
          <img style={{ width: "430px" }} src={noSearch} />
          <h2>No se encuentran productos</h2>
        </Box>
      )}
    </>
  );
};
