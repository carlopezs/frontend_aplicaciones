import React from "react";
import { getProducts } from "../helpers/getProducts";
import { useEffect, useState } from "react";

export const Productos = () => {
  
   const [products, setproducts] = useState([]);
   useEffect(() => {
       getProducts().then((arrayProducts) =>{
           setproducts(arrayProducts);
       })
   },[])
   
  
  
  return (
    <>
      {products.map(res => (<li key={res.pro_id}>{res.pro_stock}</li>))}
    </>
  );
};
