import React from 'react';
import {Link} from "react-router-dom";
import CssHeader from "./Header.css"
const Header = ({ title }) => {
  return (
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item ">
          <Link class="nav-link active text-white btnmio" aria-current="page" to="./paginas/inicio.js" >INICIO</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link active text-white btnmio" aria-current="page" to="./paginas/service.js">SERVICE</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link active text-white btnmio" aria-current="page" to="./paginas/productos.js">PRODUCTOS</Link>
        </li>
        <a class="navbar-brand" href="#">
          <img src="logo.png" alt="Logo"  class="d-inline-block align-text-top"></img>
        </a>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Header;
