import CardAjusteDetalle from './CardAjusteDetalle';
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    content: {
      paddingLeft: 0,
    },
  }));

function DetalleAjuste( { detProductos, setDetProductos}) {
    const boxStyle = useStyles(); 
    return (
        <div >
            <Box className={boxStyle.content} display="flex" flexDirection="column" alignItems="center" flexWrap="wrap" justifyContent="center"  > 
            {detProductos.map(res => (<CardAjusteDetalle key={res.product.pro_id} cantidad={res.cantidad}   product={res.product}   setDetProductos={setDetProductos} ></CardAjusteDetalle>))}
            </Box>
        </div>
    )
}

export default DetalleAjuste;
