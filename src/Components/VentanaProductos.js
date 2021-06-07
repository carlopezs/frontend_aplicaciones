import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent} from '@material-ui/core';
import {ProductAjusCard} from './ProductAjusCard';
import { getProductsAjuste } from "../helpers/Products";



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



export default function VentanaProductos(props) {
    const { onClose, selectedValue, open, setDetalleProductos} = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };

    const [products, setProducts] = useState([]);

   useEffect(() => {
       getProductsAjuste().then((arrayProducts) =>{
           setProducts(arrayProducts);
       })
   },[])
   
  
   
  
    return (
        <Dialog onClose={handleClose} open={open}>
        <DialogTitle>
            <div>Productos</div>
        </DialogTitle>
        <DialogContent>
             
             {products.map(res => (<ProductAjusCard key={res.pro_id} product={res} setDetalleProductos={setDetalleProductos} setProducts={setProducts}></ProductAjusCard>))}
           
        </DialogContent>
    </Dialog>
    );
  }
  


