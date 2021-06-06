import React from "react";
import cx from "clsx";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN03TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n03";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import Button from "@material-ui/core/Button";
import carrito from "../assets/carrito.png";
import { Box } from "@material-ui/core";
import { Update } from "./Update";



const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    borderRadius: 20,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 40,
  },
  content: {
    padding: 24,
  },
  containerButton: {
    position: "relative",
  },
}));

export const ProductCard = ({ product, setProducts }) => {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();

  const [modal, setModal] = useState(false);

  const abrirCerrarModal = () => {
    setModal((modal) => !modal);
  };

  return (
    <>
      <Card className={cx(cardStyles.root, shadowStyles.root)}>
        <BrandCardHeader image={carrito} extra={`$ ${product.pro_pvp}`} />
        <CardContent className={cardStyles.content}>
          <TextInfoContent
            classes={styles}
            overline={product.pro_nombre}
            heading={`${product.pro_stock} en stock`}
          />
          <p>
            <strong>Descripción:</strong> {product.pro_descripcion}{" "}
          </p>
          <p>
            <strong>Costo:</strong> ${product.pro_costo}{" "}
          </p>
          <p>
            <strong>Iva:</strong> {product.pro_iva ? "Si" : "No"}{" "}
          </p>
          <p>
            <strong>Estado:</strong>{" "}
            {product.pro_activo ? "Activo" : "Inactivo"}{" "}
          </p>
          <Box
            className={cardStyles.containerButton}
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
              Actualizar
            </Button>
          </Box>
        </CardContent>
       
      </Card>
      <Update
        setProducts={setProducts}
        modal={modal}
        setModal={setModal}
        product={product}
        update={false}
      ></Update>
    </>
  );
};
