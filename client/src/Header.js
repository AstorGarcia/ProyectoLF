import React from 'react';

const Header = ({ title }) => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="paginas/inicio.js">INICIO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">SERVICE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">PRODUCTOS</a>
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
