import React, { useEffect, useState } from 'react';
import CardAjusteDetalle from './CardAjusteDetalle';
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    content: {
      paddingLeft: 0,
    },
  }));

function DetalleAjuste( { detCantidad, setDetCantidad}) {
    const boxStyle = useStyles(); 
    return (
        <div >
            <Box className={boxStyle.content} display="flex" flexDirection="column" alignItems="center" flexWrap="wrap" justifyContent="center"  > 
            {detCantidad.map(res => (<CardAjusteDetalle key={res.product.pro_id} cantidad={res.cantidad} detCantidad={detCantidad}  product={res.product}   setDetCantidad={setDetCantidad} ></CardAjusteDetalle>))}
            </Box>
        </div>
    )
}

export default DetalleAjuste;
