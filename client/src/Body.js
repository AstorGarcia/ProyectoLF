import React from 'react';
import {Routes, Route} from "react-router-dom";
import Inicio from "./paginas/inicio"
import Productos from "./paginas/productos"
import Service from "./paginas/service"
const Body = () => {
  return (
    <Routes>
    <Route path="./paginas/inicio" element={<Inicio/>}/>
    </Routes>
  );
};

export default Body;
