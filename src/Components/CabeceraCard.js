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
import ajuste from "../assets/ajuste.png";
import { Box } from "@material-ui/core";
import { Update } from "./Update"; 
import { Link } from "react-router-dom";



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

export const CabeceraCard = ({ cabecera, setCabeceras }) => {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();
  const boxStyle = useStyles();

  const [modal, setModal] = useState(false);

  const abrirCerrarModal = () => {
    setModal((modal) => !modal);
  };

  return (
    <>
      <Card className={cx(cardStyles.root, shadowStyles.root)}>
        <BrandCardHeader image={ajuste} extra={cabecera.cab_id} />
        <CardContent className={cardStyles.content}>
          <TextInfoContent
            classes={styles}
            overline={cabecera.cab_num}
            heading={`${cabecera.cab_fecha.toString().split('T')[0]}`}
          />
          <p>
            <strong>Descripción:</strong> {cabecera.cab_descripcion}{" "}
          </p>
          <p>
            <strong>Impresión:</strong> {cabecera.cab_imp.toString()}{" "}
          </p>
          <Box
            className={cardStyles.containerButton}
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
          >
            <Button size="large" variant="contained" color="primary">
           <Link className={boxStyle.button}  to="/actualizarajuste"> Actualizar Ajuste</Link>
        </Button>
          </Box>
        </CardContent>
       
      </Card>
     {/*  <Update
        setProducts={setProducts}
        modal={modal}
        setModal={setModal}
        product={product}
        update={false}
      ></Update> */}
    </>
  );
};
