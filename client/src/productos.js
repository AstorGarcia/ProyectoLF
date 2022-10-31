import React from 'react';
import CssProductos from './productos.css';
import axios from 'axios';
import FOTO2 from "./lubricentro2.png"
import FOTO3 from "./lubricentro3.png"

const Productos = () => {
  return (
    <div class="body">
      <h1>MARCAS Y PRODUCTOS QUE OFRECEMOS:</h1>
      <div class="seg1">
      <div>
        <p>En este lubricentro ofrecemos todo tipos de producto y autoparte necesaria para un auto, algunas de las cuales ofrecemos son por ejemplo aceites de nuestra distribuidora shell, Los lubricantes sintéticos Shell Helix Ultra, están formulados con la exclusiva tecnología de limpieza activa PurePlus de Shell. Esta tecnología permite que el lubricante sintético logre producir el mayor nivel de limpieza y protección del motor.

          </p>
          <p>De autopartes algunas de las marcas que ofrecemos de forma directa de la distribuidora original es toyota, vendemos y reponemos la mayoría de autopartes brindadas por toyota según los modelos vendidos en argentina.
          El ejemplo de la foto sería una biela de un Toyota Corolla 1.8, stock del cual disponemos en nuestro lubricentro.</p></div>
          <img src={FOTO2} alt="Logo"  class=""></img>
      </div>
      <div class="seg1">
                <img src={FOTO3} alt="Logo"  class=""></img>
                <ul>
                <hr></hr>
                <li>Control y/o cambio de aceite de motor, caja y diferencial</li>
                <hr></hr>
                <li>Control y/o cambio de filtro de aire, aceite, combustible y/o habitáculo.</li>
                <hr></hr>
                <li>Control y/o cambio de anticongelante, refrigerante. Limpieza de circuito si fuese necesaria.</li>
                <hr></hr>
                <li>Control y/o cambio de aceite de dirección, liquido de freno, liquido lavaparabrisas</li>
                <hr></hr>
                <li>Control y/o cambio de pastillas de frenos</li>
                <hr></hr>
                <li>Control y calibre de neumáticos</li>
                <hr></hr>
                <li>Control de luces altas, bajas, de posición y stop</li>
                <hr></hr>
                <li>Control y/o cambio de escobillas</li>
                <hr></hr>
                </ul>

      </div>
    </div>
  );
};

export default Productos;
