import React from "react";
import { getCabecerasWithOutImp } from "../helpers/Cabeceras";
import { useEffect, useState } from "react";
import { CabeceraCard } from "./CabeceraCard";
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { SearchCabeceras } from "./SearchCabeceras";

  
const useStyles = makeStyles(() => ({
  
    content: {
      padding: 10,
    },
  }));


export const Cabeceras = () => {
    const boxStyle = useStyles(); 
   const [cabecera, setCabeceras] = useState({data:[],loading:false});

   useEffect(() => {
       getCabecerasWithOutImp().then((arrayCabeceras) =>{
          console.log(arrayCabeceras)
           setCabeceras({data:arrayCabeceras,loading:true});
       })
   },[])

  return (
    <>
    {cabecera.loading &&<SearchCabeceras setCabeceras={setCabeceras} cabecera={cabecera}></SearchCabeceras>}
    <Box className={boxStyle.content} display="flex" flexWrap="wrap" justifyContent="center"  > 
      {cabecera.data.map(res => (<CabeceraCard key={res.cab_id} cabecera={res} setCabeceras={setCabeceras}></CabeceraCard>))}
    </Box>
    </>
  );
};
