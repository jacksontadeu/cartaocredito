import React, { useState } from "react";


import './App.css'
import Cartao from "./components/Cartao";
import NomeTitular from "./components/NomeTitular";

function App() {
  
  return (
    <>
      <div className="titulo-container">
        <h1>Cartão de Crédito</h1>
      </div>
      <div>
        <Cartao />
      </div>
    </>
  );
}
export default App;
