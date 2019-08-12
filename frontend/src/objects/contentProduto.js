import React from "react";

import { Produto } from "../style/produto";

export default function BoxProduto() {
  return (
    <Produto>
      <h1>Action figure Mario Top Top</h1>
      <div>
        <p>de R$ 189,90</p>
        <p>por: R$ 149,90</p>
      </div>
      <div>
        <h2>Calcule o frete</h2>
        <input type="text" />
        <input type="text" />
        <button type="button">Calcular</button>
      </div>
    </Produto>
  );
}
