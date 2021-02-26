import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Menu from "./components/Menu";
import Footer from './components/Footer'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Inicio></Inicio>
        </Route>
        <Route  path="/menu">
          <Menu></Menu>
        </Route>
        <Route  path="/contacto">
          <Contacto></Contacto>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
