import React from "react";

import { Vistos } from "../style/vistos";

import superMario from "../assets/superMario.jpg";
import ryu from "../assets/ryu.jpg";
import doctorStranger from "../assets/doctor-strange.jpg";

export default function BoxVistos() {
  return (
    <Vistos>
      <h1>Também viram</h1>
      <ul>
        <li>
          <img src={doctorStranger} alt="doctor stranger" />
          <div className="dados-box">
            <h2>Nome do action figure</h2>
            <p>de R$ 90,60</p>
            <p>
              por R$ <strong>169,90</strong>
            </p>
          </div>
        </li>
        <li>
          <img src={superMario} alt="Super Mario" />
          <div className="dados-box">
            <h2>Nome do action figure</h2>
            <p>de R$ 159,50</p>
            <p>
              por R$ <strong>189,90</strong>
            </p>
          </div>
        </li>
        <li>
          <img src={ryu} alt="Ryu do street fight" />
          <div className="dados-box">
            <h2>Nome do action figure</h2>
            <p>de R$ 119,90</p>
            <p>
              por R$ <strong>139,90</strong>
            </p>
          </div>
        </li>
      </ul>
    </Vistos>
  );
}
