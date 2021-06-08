import React from "react";
import { useState , useEffect} from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  containerSearch: {
    display: "flex",
    justifyContent: "center",
  },
  textField: {
    width: "80%",
  },
}));
export const SearchCabeceras = ({ setCabeceras, cabecera }) => {
  const styles = useStyles();
  
  
  const [cabecerasOriginal,] = useState(cabecera.data);

  

  const filterCabecerasByID = (e) => {
    const cabecerasResult = cabecerasOriginal.filter((cabecerasOriginal) =>
    cabecerasOriginal.cab_num.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCabeceras({data:cabecerasResult,loading:true});
  };

  return (
    <div className={styles.containerSearch}>
      <TextField
        onChange={filterCabecerasByID}
        className={styles.textField}
        id="standard-search"
        label="Buscar cabeceras"
        type="search"
      />
    </div>
  );
};
