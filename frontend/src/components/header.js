import React from "react";

import logo from "../assets/logo-header.png";
import shoppingCart from "../assets/shopping-cart.svg";

import { Head } from "../components/styles";

export default function Header() {
  return (
    <Head>
      <img src={logo} alt="Agência N1" className="logo" />

      <nav className="menu">
        <ul>
          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">Presentes</a>
          </li>
          <li>
            <a href="#" className="link">
              Sales
            </a>
          </li>
        </ul>
      </nav>

      <img src={shoppingCart} alt="Carrinho de Compras" className="logoCart" />
    </Head>
  );
}
