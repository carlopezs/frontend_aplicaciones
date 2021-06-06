import React from "react";
import { getProducts } from "../helpers/getProducts";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

  
const useStyles = makeStyles(() => ({
  
    content: {
      padding: 10,
    },
  }));


export const Productos = () => {
    const boxStyle = useStyles(); 
   const [products, setproducts] = useState([]);
   useEffect(() => {
       getProducts().then((arrayProducts) =>{
           setproducts(arrayProducts);
       })
   },[])
   

  
  return (
    <Box className={boxStyle.content} display="flex" flexWrap="wrap" justifyContent="center"  > 
      {products.map(res => (<ProductCard key={res.pro_id} product={res}></ProductCard>))}
    </Box>
  );
};
