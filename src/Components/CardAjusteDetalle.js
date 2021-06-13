import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import carrito from "../assets/carrito.png";
import { Row, Item } from "@mui-treasury/components/flex";
import { Info, InfoTitle, InfoSubtitle } from "@mui-treasury/components/info";
import { useTutorInfoStyles } from "@mui-treasury/styles/info/tutor";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
  action: {
    backgroundColor: "#fff",
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.12)",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
  },
  card:{
    width:'72%'
  }
}));

export const CardAjusteDetalle = ({ product, setDetProductos }) => {
  const avatarStyles = useDynamicAvatarStyles({ radius: 12, size: 48 });
  const styles = useStyles();

  const changeCantidad = (e) => {
    const cantidad = e.target.value;
    setDetProductos(cantidadState=>{
      const isExist = verifyExistence(cantidadState)
      let cantidadState2 = cantidadState;
      if (isExist.exist) {
        cantidadState2[isExist.index].cantidad = cantidad;
        return cantidadState2;
      }else{
        return [{ product, cantidad: cantidad }, ...cantidadState];
      }
      
    })
  };

  const verifyExistence=(cantidadState)=>{
    let isExist = {exist:false,index:-1};
    cantidadState.map((res,index)=>{
      if (res.product.pro_id === product.pro_id) {
        isExist.exist = true
        isExist.index = index;
      }
    })
    return isExist;
   
  }

  const deleteDetail = () =>{
    setDetProductos(detalleCantidad =>{
      const detCantidad = detalleCantidad.filter(element => element.product.pro_id !== product.pro_id)
      return detCantidad;
    })
  }

  return (
    <Row
      marginBottom={1}
      p={1.5}
      gap={2}
      bgcolor={"#E5EBEC"}
      borderRadius={16}
      width={400}
      className={styles.card}
    >
      <Item>
        <Avatar classes={avatarStyles} src={carrito} />
      </Item>
      <Info position={"middle"} useStyles={useTutorInfoStyles}>
        <InfoTitle>{product.pro_nombre} </InfoTitle>
        <InfoSubtitle>Stock: {product.pro_stock}</InfoSubtitle>
        <InfoSubtitle>PVP: ${product.pro_pvp}</InfoSubtitle>
        <InfoSubtitle>Iva: {product.pro_iva?'Si':'No'}</InfoSubtitle>
      </Info>
      <Item ml={1} position={"middle"} style={{ marginLeft: "auto" }}>
        <TextField
          onChange={changeCantidad}
          id="standard-number"
          label="Cantidad"
          type="number"
          defaultValue="1"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Item>
      <Item ml={1} position={"middle"} >
        <DeleteIcon onClick={deleteDetail} color="secondary"></DeleteIcon>
      </Item>
    </Row>
  );
};

export default CardAjusteDetalle;
