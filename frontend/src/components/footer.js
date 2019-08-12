import React from "react";

import { Rodape } from "../style/rodape";

import logoRodape from "../assets/logo.png";

export default function Footer() {
  return (
    <Rodape>
      <div className="logo-rodape">
        <img src={logoRodape} alt="Agência N1" />
      </div>
      <div className="content-rodape">
        <p>Agência N1 - Todos os direitos reservados.</p>
      </div>
    </Rodape>
  );
}
