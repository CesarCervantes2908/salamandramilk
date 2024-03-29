import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Menu from "./components/Menu";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Route exact path="/" >
          <Inicio></Inicio>
        </Route>
        <Route path="/menu">
          <Menu></Menu>
        </Route>
        <Route path="/contacto">
          <Contacto></Contacto>
        </Route>
      </HashRouter>
    );
  }
}

export default App;