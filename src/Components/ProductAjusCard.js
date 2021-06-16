import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/Add";
import carrito from "../assets/carrito.png";
import { Row, Item } from "@mui-treasury/components/flex";
import { Info, InfoTitle, InfoSubtitle } from "@mui-treasury/components/info";
import { useTutorInfoStyles } from "@mui-treasury/styles/info/tutor";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";
import { getKardex } from "../helpers/Ajustes";

const useStyles = makeStyles(() => ({
  action: {
    backgroundColor: "#fff",
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.12)",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
  },
}));

export const ProductAjusCard = ({ product, setDetProductos, setAlertMsg, setError, module, setKardex }) => {
  const styles = useStyles();
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 6 });
  const avatarStyles = useDynamicAvatarStyles({ radius: 12, size: 48 });

  const showMessage = (message, state) => {
    setAlertMsg(message);
    state(true);
    setTimeout(() => {
      state(false);
    }, 3000);
  };

  const addDetails = () => {
    if (module === 'kardex') {
      setDetProductos(product);
      getKardex(product.pro_id).then(res=>{
        console.log(res);
        setKardex(res);
      })
    }
    else{
      setDetProductos((res) => {
        if(validateDetProducts(res) === undefined){
          return [{ product, cantidad: 1 }, ...res];
        }
        else{
          showMessage("Producto ya ingresado al ajuste",setError)
          return [...res];
        }
       
      });
    }
   
  };

  const validateDetProducts = (detProducts) => {
    const found = detProducts.find(
      ({ product:detProduct }) => detProduct.pro_id === product.pro_id
    );
    return found;
  };
  return (
    <Row marginBottom={1} p={1.5} gap={2} bgcolor={"#E5EBEC"} borderRadius={16}>
      <Item>
        <Avatar classes={avatarStyles} src={carrito} />
      </Item>
      <Info position={"middle"} useStyles={useTutorInfoStyles}>
        <InfoTitle>{product.pro_nombre} </InfoTitle>
        <InfoSubtitle>{product.pro_stock} en stock</InfoSubtitle>
      </Info>
      <Item ml={1} position={"middle"} style={{ marginLeft: "auto" }}>
        <IconButton
          className={styles.action}
          classes={iconBtnStyles}
          onClick={addDetails}
        >
          <Add />
        </IconButton>
      </Item>
    </Row>
  );
};
