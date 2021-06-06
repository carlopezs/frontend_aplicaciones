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
export const SearchProducts = ({ setProducts, products }) => {
  const styles = useStyles();
  
  
  const [productsOriginal,] = useState(products.data);

  

  const filterProductsByName = (e) => {
    const productsResult = productsOriginal.filter((productsOriginal) =>
    productsOriginal.pro_nombre.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProducts({data:productsResult,loading:true});
  };

  return (
    <div className={styles.containerSearch}>
      <TextField
        onChange={filterProductsByName}
        className={styles.textField}
        id="standard-search"
        label="Buscar productos"
        type="search"
      />
    </div>
  );
};
