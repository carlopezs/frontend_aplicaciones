import React from "react";
import { getCabecerasWithOutImp } from "../helpers/Cabeceras";
import { useEffect, useState } from "react";
import { CabeceraCard } from "./CabeceraCard";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SearchCabeceras } from "./SearchCabeceras";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  content: {
    padding: 10,
  },
  box: {
    width: "100%",
    display:'flex',
    justifyContent:'center'
  },
  button:{
    color:'white'
  }
}));

export const Cabeceras = () => {
  const boxStyle = useStyles();
  const [cabecera, setCabeceras] = useState({ data: [], loading: false });

  useEffect(() => {
    getCabecerasWithOutImp().then((arrayCabeceras) => {
      setCabeceras({ data: arrayCabeceras, loading: true });
    });
  }, []);

  return (
    <>
      <div className={boxStyle.box}>
        {cabecera.loading && (
          <SearchCabeceras
            setCabeceras={setCabeceras}
            cabecera={cabecera}
          ></SearchCabeceras>
        )}
        <Button size="large" variant="contained" color="primary">
           <Link className={boxStyle.button}  to="/ajuste"> Ingresar ajuste</Link>
        </Button>
      </div>
      <Box
        className={boxStyle.content}
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
      >
        {cabecera.data.map((res) => (
          <CabeceraCard
            key={res.cab_id}
            cabecera={res}
            setCabeceras={setCabeceras}
          ></CabeceraCard>
        ))}
      </Box>
    </>
  );
};
