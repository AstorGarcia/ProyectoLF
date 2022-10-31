import React from 'react';
import CssProductos from './productos.css';
import axios from 'axios';

const Productos = () => {
  return (
    <div>
      <h1>MARCAS Y PRODUCTOS QUE OFRECEMOS:</h1>
      <div>
        <p>En este lubricentro ofrecemos todo tipos de producto y autoparte necesaria para un auto, algunas de las cuales ofrecemos son por ejemplo aceites de nuestra distribuidora shell, Los lubricantes sintéticos Shell Helix Ultra, están formulados con la exclusiva tecnología de limpieza activa PurePlus de Shell. Esta tecnología permite que el lubricante sintético logre producir el mayor nivel de limpieza y protección del motor.
          </p>
          <img>
          </img>
      </div>
      <div>
        <p>De autopartes algunas de las marcas que ofrecemos de forma directa de la distribuidora original es toyota, vendemos y reponemos la mayoría de autopartes brindadas por toyota según los modelos vendidos en argentina.
        El ejemplo de la foto sería una biela de un Toyota Corolla 1.8, stock del cual disponemos en nuestro lubricentro.
          </p>
          <img>
          </img>
      </div>
    </div>
  );
};

export default Productos;
