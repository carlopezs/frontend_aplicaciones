import React, { useEffect, useState } from 'react';
import CardAjusteDetalle from './CardAjusteDetalle';
import { getProductsAjuste } from "../helpers/Products";
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  
    content: {
      paddingLeft: 0,
    },
  }));

function DetalleAjuste( {detalleProductos}) {
    const boxStyle = useStyles(); 
    
    
    

   
   
    return (
        <div >
            <Box className={boxStyle.content} display="flex" flexDirection="column" alignItems="center" flexWrap="wrap" justifyContent="center"  > 
            {detalleProductos.map(res => (<CardAjusteDetalle key={res.pro_id} product={res}  ></CardAjusteDetalle>))}
            </Box>
        </div>
    )
}

export default DetalleAjuste;