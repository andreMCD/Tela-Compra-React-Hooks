import React from "react";

import { Produto } from "../style/produto";

export default function BoxProduto() {
  return (
    <Produto>
      <h1>Action figure Mario Top Top</h1>
      <div className="boxPreco">
        <p>de R$ 189,90</p>
        <p>
          por: <strong>R$ 149,90</strong>
        </p>
        <button type="button">Comprar</button>
      </div>
      <div className="boxFrete">
        <h2>Calcule o frete</h2>
        <input type="text" />
        <input type="text" className="lastChild" />
        <button type="button">Calcular</button>
      </div>
    </Produto>
  );
}
