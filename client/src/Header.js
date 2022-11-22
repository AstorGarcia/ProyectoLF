import React from 'react';
import {Link} from "react-router-dom";
import CssHeader from "./Header.css"
import Logo from "./logo.png"
const Header = ({ title }) => {
  return (
    <nav class="navbar navbar-expand-lg navegador">
      <div class="container-fluid navegador ">
        <div class="collapse navbar-collapse  navegador" id="navbarNav ">
          <ul class="navbar-nav ">
            <div class="navegador">
              <li class="nav-item ">
                <Link class="nav-link active text-white btnmio" aria-current="page" to="/" >INICIO</Link>
                </li>
                  <li class="nav-item ">
                <Link class="nav-link active text-white btnmio" aria-current="page" to="/Service">SERVICE</Link>
                </li>
                  <li class="nav-item ">
                <Link class="nav-link active text-white btnmio" aria-current="page" to="/Productos">PRODUCTOS</Link>
                </li>
              </div>
              <div>

            </div>
      </ul>

      <a class="navbar-brand logolink" href="#">
      <img src={Logo} alt="Logo"  class="d-inline-block align-text-top logo"></img>
      </a>
    </div>
  </div>
</nav>
  );
};

export default Header;
