import React from 'react';
import CssFooter from "./Footer.css"
import Github from "./github.png"
import Instagram from "./instagram.png"
import Twitter from "./twitter.png"
import Facebook from "./facebook.png"
import Youtube from "./youtube.png"
import Marca from "./marca.png"

const Footer = () => {
  return (
    <div className="footer">
    <div class="contfooter">
    <a class="fancy" href="https://github.com/AstorGarcia">
      <img src={Github} alt="Logo"  class="d-inline-block align-text-top logofoot"></img>
      <span class="top-key"></span>
      <span class="text">Github</span>
      <span class="bottom-key-1"></span>
      <span class="bottom-key-2"></span>
    </a>
    <a class="fancy" href="https://github.com/AstorGarcia">
      <img src={Instagram} alt="Logo"  class="d-inline-block align-text-top logofoot"></img>
      <span class="top-key"></span>
      <span class="text">Instagram</span>
      <span class="bottom-key-1"></span>
      <span class="bottom-key-2"></span>
    </a>
    <a class="fancy" href="https://github.com/AstorGarcia">
      <img src={Twitter} alt="Logo"  class="d-inline-block align-text-top logofoot"></img>
      <span class="top-key"></span>
      <span class="text">Twitter</span>
      <span class="bottom-key-1"></span>
      <span class="bottom-key-2"></span>
    </a>
    <a class="fancy" href="https://github.com/AstorGarcia">
      <img src={Facebook} alt="Logo"  class="d-inline-block align-text-top logofoot"></img>
      <span class="top-key"></span>
      <span class="text">Facebook</span>
      <span class="bottom-key-1"></span>
      <span class="bottom-key-2"></span>
    </a>
    <a class="fancy" href="https://github.com/AstorGarcia">
      <img src={Youtube} alt="Logo"  class="d-inline-block align-text-top logofoot"></img>
      <span class="top-key"></span>
      <span class="text">Youtube</span>
      <span class="bottom-key-1"></span>
      <span class="bottom-key-2"></span>
    </a>
  
    <p>CopyRight By</p><img src={Marca}alt="Logo"  class="d-inline-block align-text-top marca"></img>
    </div>
    </div>
  );
};

export default Footer;
