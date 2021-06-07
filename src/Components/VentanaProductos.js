import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Button} from '@material-ui/core';
import {ProductAjusCard} from './ProductAjusCard';
import { getProductsAjuste } from "../helpers/Products";
import {VentanaInsertar} from './Insert.js';
import { Box } from "@material-ui/core";


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
    const { onClose, selectedValue, open, setDetalleProductos} = props;
    const [modal, setModal] = useState(false);

    const abrirCerrarModal = () => {
      setModal((modal) => !modal);
    };
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
            <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
          >
            <Button
              onClick={abrirCerrarModal}
              size="large"
              variant="contained"
              color="primary"
            >
              Insertar
            </Button>
          </Box>
        </DialogTitle>
        
        
        <DialogContent>
             
             {products.map(res => (<ProductAjusCard key={res.pro_id} product={res} setDetalleProductos={setDetalleProductos} setProducts={setProducts}></ProductAjusCard>))}
           
        </DialogContent>
        <VentanaInsertar
            setProducts={setProducts}
            modal={modal}
            setModal={setModal}
            insert={false}></VentanaInsertar>
    </Dialog>
    );
  }
  


