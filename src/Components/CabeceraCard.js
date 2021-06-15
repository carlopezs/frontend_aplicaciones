import React, { useEffect, useState } from "react";
import cx from "clsx";
import { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN03TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n03";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import ajuste from "../assets/ajuste.png";
import { useReactToPrint } from "react-to-print";
import { Document } from "./Document";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getDetallesByCab } from "../helpers/Ajustes";

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

export const CabeceraCard = ({ cabecera }) => {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();

  const documentRef = useRef();

  const [detail, setDetail] = useState([])

  const handlePrint = useReactToPrint({
    content: () => documentRef.current,
  });


  useEffect( async () => {
      const detalles = await getDetallesByCab(cabecera.cab_id);
      setDetail(detalles);
  }, [])

  return (
    <>
      <Card className={cx(cardStyles.root, shadowStyles.root)}>
        <BrandCardHeader image={ajuste} extra={cabecera.cab_id} />
        <CardContent className={cardStyles.content}>
          <TextInfoContent
            classes={styles}
            overline={cabecera.cab_num}
            heading={`${cabecera.cab_fecha.toString().split("T")[0]}`}
          />
          <p>
            <strong>Descripción:</strong> {cabecera.cab_descripcion}{" "}
          </p>
          <p>
            <strong>Impresión:</strong> {cabecera.cab_imp.toString()}{" "}
          </p>

          {detail.length&&<div style={{ display: "none" }}>
            <Document cabecera={cabecera} detail={detail} ref={documentRef}></Document>
          </div>}

          <Box
            className={cardStyles.containerButton}
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
          >
            <Button
              onClick={handlePrint}
              size="large"
              variant="contained"
              color="primary"
            >
              Imprimir
            </Button>
          <Link  to="/actualizarajuste">
            <Button size="large" variant="contained" color="primary">  
                Actualizar Ajuste
            </Button>
          </Link>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
