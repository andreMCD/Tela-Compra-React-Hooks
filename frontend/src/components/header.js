import React from "react";

import logo from "../assets/logo-header.png";
import shoppingCart from "../assets/shopping-cart.svg";
import lupaSearch from "../assets/search.svg";

import { Head } from "../style/head";

export default function Header() {
  return (
    <Head>
      <img src={logo} alt="Agência N1" className="logo" />

      <div id="menuArea">
        <input type="checkbox" id="menuToggle" />
        <label htmlFor="menuToggle" className="menuOpen">
          <div className="open" />
        </label>
        <div className="menu menuEffects">
          <label htmlFor="menuToggle" />
          <nav className="navegation">
            <ul className="menu">
              <li>
                <a href="index.html">Game</a>
              </li>
              <li>
                <a href="about/index.html">Presente</a>
              </li>
              <li>
                <a href="contact/index.html">Sales</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <img src={lupaSearch} alt="Lupa pesquisar" className="lupaSearch" />
      <input type="text" className="search" placeholder="search" />
      <div className="boxCart">
        <img
          src={shoppingCart}
          alt="Carrinho de Compras"
          className="logoCart"
        />
        <span className="countCart" />
      </div>
    </Head>
  );
}
