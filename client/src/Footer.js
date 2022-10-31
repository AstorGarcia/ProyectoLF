import React from 'react';
import CssFooter from "./Footer.css"
import Github from "./github.png"
import Instagram from "./instagram.png"
import Twitter from "./twitter.png"
import Facebook from "./facebook.png"

// footer component
const Footer = () => {
  return (
    <div className="footer">
    <div class="contfooter">
    <a target="_blank" href="https://github.com/astortomasgarcia"><div class="redes">  <img src={Github} alt="Logo"  class="d-inline-block align-text-top logofoot"></img><h3>Github</h3></div></a>
    <a target="_blank" href=""> <div class="redes"> <img src={Instagram} alt="Logo"  class="d-inline-block align-text-top logofoot"></img><h3>Instagram</h3></div></a>
    <a target="_blank" href=""> <div class="redes">  <img src={Twitter} alt="Logo"  class="d-inline-block align-text-top logofoot"></img><h3>Twitter</h3></div></a>
    <a target="_blank" href=""> <div class="redes"> <img src={Facebook} alt="Logo"  class="d-inline-block align-text-top logofoot"></img><h3>Facebook</h3></div></a>

    </div>
    </div>
  );
};

export default Footer;
