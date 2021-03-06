import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import { Header } from "./Components/Header";
import { Productos } from "./Components/Productos";
import { Cabeceras } from "./Components/Cabeceras";
import { Kardex } from "./Components/Kardex";
import {Ajuste} from './Components/Ajuste'
import { Update } from "./Components/Update";
import {ActualizarAjuste} from "./Components/ActualizarAjuste";
function App() {
  return (
    <Router>
      <div className="App">
        {/* De lo mas especifico a lo mas general */}
        <Header></Header>
        <Switch>
          <Route path="/productos">
            <Productos />
          </Route>
          <Route path="/cabecera">
            <Cabeceras />
          </Route>
          <Route path="/kardex">
            <Kardex />
          </Route>
          <Route path="/ajuste">
            <Ajuste />
          </Route>
          <Route path="/update">
            <Update/>
          </Route>
          <Route path="/actualizarajuste/:cab_id">
            <ActualizarAjuste />
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
