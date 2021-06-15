import React from "react";
import { getDetallesByCab } from "../helpers/Ajustes";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Card } from "@material-ui/core";

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

export class Document extends React.PureComponent {
  constructor(props) {
    super(props);
    this.cabecera = props.cabecera;
    this.detail = props.detail;
  }



  render() {
    return (
      <div style={{ padding: "20px" }}>
        <Card style={{ marginBottom: "20px", marginTop: "20px" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            style={{ marginBottom: "20px" }}
          >
            <h2>Código del ajuste:{this.cabecera.cab_num}</h2>
            <h2>Fecha: {this.cabecera.cab_fecha.split("T")[0]}</h2>
          </Box>
          <h2>Descripción: {this.cabecera.cab_descripcion}</h2>
        </Card>
        <hr />
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Producto</StyledTableCell>
                <StyledTableCell align="right">Cantidad</StyledTableCell>
                <StyledTableCell align="right">Stock</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.detail.map(({det_cantidad,pro_nombre,pro_id,det_stock_registro}) => (
                <StyledTableRow key={pro_id}>
                  <StyledTableCell align="left">{pro_nombre}</StyledTableCell>
                  <StyledTableCell align="right">{det_cantidad}</StyledTableCell>
                  <StyledTableCell align="right">{det_stock_registro}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
