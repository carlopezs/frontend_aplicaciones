import CardAjusteDetalleUpdate from './CardAjusteDetalleUpdate';
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    content: {
      paddingLeft: 0,
    },
  }));

function DetalleAjusteUpdate( { detalles, setDetalles}) {
    const boxStyle = useStyles(); 
    return (
        <div >
            <Box className={boxStyle.content} display="flex" flexDirection="column" alignItems="center" flexWrap="wrap" justifyContent="center"  > 
            {detalles.map(res => (<CardAjusteDetalleUpdate key={res.det_id} cantidad={res.det_cantidad}   pro_id={res.pro_id}   setDetalles={setDetalles} ></CardAjusteDetalleUpdate>))}
            </Box>
        </div>
    )
}

export default DetalleAjusteUpdate;
