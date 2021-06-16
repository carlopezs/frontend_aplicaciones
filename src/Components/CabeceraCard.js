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
import { getCabecerasWithOutImp, getDetallesByCab, updateCabeceraImp } from "../helpers/Ajustes";
import { AlertPrint } from "./AlertPrint";




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
  button: {
    marginBottom: '5px',
    marginTop: '5px',
  },
}));

export const CabeceraCard = ({ cabecera, setCabeceras }) => {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();

  useEffect(async () => {
    const detalles = await getDetallesByCab(cabecera.cab_id);
    setDetail(detalles);
  }, []);

  const documentRef = useRef();

  const [detail, setDetail] = useState([]);

  const [openAlert, setOpenAlert] = useState(false);

  const updatePrintAjus = async () =>{
    await updateCabeceraImp(cabecera.cab_id);
    getCabecerasWithOutImp().then((arrayCabeceras) => {
      setCabeceras({ data: arrayCabeceras, loading: true });
    });
  } 

  const handleClickOpen = () => {
    setOpenAlert(true);
  };

  const handleClose = () => {
    setOpenAlert(false);
  };

  const handlePrint = useReactToPrint({
    content: () => documentRef.current,
  });

 

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

          {detail.length !==0 && (
            <div style={{ display: "none" }}>
              <Document
                cabecera={cabecera}
                detail={detail}
                ref={documentRef}
              ></Document>
            </div>
          )}

          <Box
            display="flex"
            flexWrap="wrap"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Button
              className={cardStyles.button}
              onClick={handleClickOpen}
              size="large"
              variant="contained"
              color="primary"
            >
              Imprimir
            </Button>

            {cabecera.cab_imp===false&&<Button size="large" variant="contained" color="primary">
              <Link to={`/actualizarajuste/${cabecera.cab_id}`} style={{color:'white'}}>Actualizar</Link>
            </Button>}
          </Box>
        </CardContent>
      </Card>
      <AlertPrint handleClose={handleClose } updatePrintAjus={updatePrintAjus} handlePrint={handlePrint} openAlert={openAlert}></AlertPrint>
    </>
  );
};
