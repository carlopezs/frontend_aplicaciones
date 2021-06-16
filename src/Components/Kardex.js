import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Modal, Button, Box } from "@material-ui/core";
import { ProductKardex } from "./ProductKardex";
import VentanaProductosKardex from "./VentanaProductosKardex";



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#3c54b5",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    width: "92%",
  },
  tableContainer: {
    display: "flex",
    justifyContent: "center",
  },
  box:{
    marginBottom:'17px'
  },
  button:{
    height:'60px',
    marginLeft:'3%'
  }
});

export const Kardex = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [detProductos, setDetProductos] = useState({});

  const [kardex,setKardex] = useState([]);


  const handleClickOpen = () => {
    console.log('se ejecuta');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box  display="flex" justifyContent="center" alignItems='center' className={classes.box}>
      <ProductKardex detProductos={detProductos}></ProductKardex>
      <Button onClick={handleClickOpen} className={classes.button}   color="primary" size="large" variant="contained">
          Buscar producto
      </Button>
    </Box>
    
      { kardex.length!==0&&<TableContainer className={classes.tableContainer}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Fecha</StyledTableCell>
              <StyledTableCell align="right">Documento</StyledTableCell>
              <StyledTableCell align="right">Descripción</StyledTableCell>
              <StyledTableCell align="right">Cantidad</StyledTableCell>
              <StyledTableCell align="right">Stock</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {kardex.map((res,index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {res.cab_fecha_factura.toString().split("T")[0]}
                </StyledTableCell>
                {res.cab_id_compras !== undefined&&<StyledTableCell align="right">Comp-{res.cab_id_compras}</StyledTableCell>}
                {res.cab_id_ventas  !== undefined&&<StyledTableCell align="right">Ven-{res.cab_id_ventas}</StyledTableCell>}
                {res.cab_id_ajustes  !== undefined&&<StyledTableCell align="right">{res.cab_id_ajustes}</StyledTableCell>}
                {res.cab_descripcion  !== undefined&&<StyledTableCell align="right">{res.cab_descripcion}</StyledTableCell>}
                {res.cab_descripcion  === undefined&& res.cab_id_compras !== undefined &&<StyledTableCell align="right">Fact. COMP {res.cab_id_compras}</StyledTableCell>}
                {res.cab_descripcion  === undefined&& res.cab_id_ventas !== undefined &&<StyledTableCell align="right">Fact. VENT {res.cab_id_ventas}</StyledTableCell>}
                <StyledTableCell align="right">{res.det_pro_cantidad}</StyledTableCell>
                <StyledTableCell align="right">{res.stock}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>}

      <VentanaProductosKardex
        open={open}
        setKardex={setKardex}
        setDetProductos={setDetProductos}
        onClose={handleClose}
      ></VentanaProductosKardex>
    </>
  );
};
