import React from 'react';
import './App.css';
import Barra from './components/Barra';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import Flota from './components/pages/Flota';
import Contacto from './components/pages/Contacto';
import Cotiza from './components/Cotiza';
import Login from './components/login/Login';

function App() {
  return (
    <>
    <Router>
      {/*AQUI SE LLAMA A LA BARRA PRINCIPAL DE LA PAGINA*/}
    <Barra/>
    <Switch>
      {/*Se establece un significado a cada ruta de la pagina*/}
      <Route path='/' exact component={Inicio}/>
      <Route path='/flota' exact component={Flota}/>
      <Route path='/contacto' exacto component={Contacto}/>
      <Route path='/cotiza' exacto component={Cotiza}/>
      <Route path='/login' exacto component={Login}/>
    </Switch>
    </Router>
    
      </>
  );
}

export default App;
