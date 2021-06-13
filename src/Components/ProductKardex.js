import React from "react";
import { Row, Item } from "@mui-treasury/components/flex";
import { makeStyles } from "@material-ui/core/styles";
import { Info, InfoTitle, InfoSubtitle } from "@mui-treasury/components/info";
import { useTutorInfoStyles } from "@mui-treasury/styles/info/tutor";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";
import Avatar from "@material-ui/core/Avatar";
import carrito from "../assets/carrito.png";


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
        width:'70%'
      }
  }));
  

export const ProductKardex = () => {
   const styles = useStyles();
   const avatarStyles = useDynamicAvatarStyles({ radius: 12, size: 48 });
  return (
    <Row className={styles.card} p={1.5} gap={2} bgcolor={"#E5EBEC"} borderRadius={16}>
      <Item>
        <Avatar classes={avatarStyles} src={carrito} />
      </Item>
      <Info position={"middle"} useStyles={useTutorInfoStyles}>
        <InfoTitle>De click en el buton para buscar el producto</InfoTitle>
      </Info>
    </Row>
  );
};
