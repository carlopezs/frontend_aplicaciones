import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import carrito from "../assets/carrito.png";
import { Row, Item } from "@mui-treasury/components/flex";
import { Info, InfoTitle, InfoSubtitle } from "@mui-treasury/components/info";
import { useTutorInfoStyles } from "@mui-treasury/styles/info/tutor";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from '@material-ui/icons/Delete';
import { getProductById } from "../helpers/Products";

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

export const CardAjusteDetalleUpdate = ({ pro_id, cantidad, setDetalles }) => {
  const avatarStyles = useDynamicAvatarStyles({ radius: 12, size: 48 });
  const styles = useStyles();

  const [product, setProduct] = useState([])

  useEffect(() => {
      getProductById(pro_id).then(res=>{
          setProduct(res);
      })
      
  }, [])

  const changeCantidad = (e) => {
    setDetalles(detalle =>{
        console.log(detalle);
        detalle[findIndex(detalle)].det_cantidad = e.target.value;
        detalle[findIndex(detalle)]['modified'] = true;
        return detalle;
    })
  };

  const findIndex=(detalle)=>{
    let indexFind;
    detalle.map((res,index)=>{
      if (res.pro_id === pro_id) {
        indexFind = index;
      }
    })
    return indexFind;
   
  }

  const deleteDetail = () =>{
  /*   setDetProductos(detalleCantidad =>{
      const detCantidad = detalleCantidad.filter(element => element.product.pro_id !== product.pro_id)
      return detCantidad;
    }) */
  }

  return (
      <>
    {product.length!==0&&<Row
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
        <InfoTitle>{product[0].pro_nombre} </InfoTitle>
        <InfoSubtitle>Stock: {product[0].pro_stock}</InfoSubtitle>
        <InfoSubtitle>PVP: ${product[0].pro_pvp}</InfoSubtitle>
        <InfoSubtitle>Iva: {product[0].pro_iva?'Si':'No'}</InfoSubtitle>
      </Info>
      <Item ml={1} position={"middle"} style={{ marginLeft: "auto" }}>
        <TextField
          onChange={changeCantidad}
          id="standard-number"
          label="Cantidad"
          type="number"
          defaultValue={cantidad}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Item>
      <Item ml={1} position={"middle"} >
        <DeleteIcon onClick={deleteDetail} color="secondary"></DeleteIcon>
      </Item>
    </Row>}
    </>
  );
};

export default CardAjusteDetalleUpdate;
