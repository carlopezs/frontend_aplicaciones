import React from "react";
import { getProducts } from "../helpers/Products";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { SearchProducts } from "./SearchProducts";

  
const useStyles = makeStyles(() => ({
  
    content: {
      padding: 10,
    },
  }));


export const Productos = () => {
    const boxStyle = useStyles(); 
   const [products, setProducts] = useState({data:[],loading:false});

   useEffect(() => {
       getProducts().then((arrayProducts) =>{
           setProducts({data:arrayProducts,loading:true});
       })
   },[])

  return (
    <>
    {products.loading &&<SearchProducts setProducts={setProducts} products={products}></SearchProducts>}
    <Box className={boxStyle.content} display="flex" flexWrap="wrap" justifyContent="center"  > 
      {products.data.map(res => (<ProductCard key={res.pro_id} product={res} setProducts={setProducts}></ProductCard>))}
    </Box>
    </>
  );
};
