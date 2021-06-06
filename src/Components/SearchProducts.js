import React from 'react'
import {TextField} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

  
const useStyles = makeStyles(() => ({
    containerSearch: {
      display:'flex',
      justifyContent:'center'
    },
    textField:{
        width:'80%'
        
    }
  }));
export const SearchProducts = ({setProducts,products}) => {
    const styles = useStyles();

    const filterProductsByName = () =>{

    }

    return (
        <div className={styles.containerSearch}>
             <TextField className={styles.textField} id="standard-search" label="Buscar productos" type="search" />
        </div>
    )
}
