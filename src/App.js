import React from 'react';
import './css/App.css';
import Header from './componentes/Header';
import Front from './componentes/Front';
import Router from './componentes/Router';

function App() {
  return (
      <div className="container-fluid">
        <Router/>
      </div>   
  );
}

export default App;
