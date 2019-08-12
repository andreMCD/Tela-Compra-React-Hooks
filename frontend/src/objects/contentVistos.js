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
          <h2>Nome do action figure</h2>
          <p>de R$ xxx.xx</p>
          <p>
            por R$ <strong>xxx.xx</strong>
          </p>
        </li>
        <li>
          <img src={superMario} alt="Super Mario" />
          <h2>Nome do action figure</h2>
          <p>de R$ xxx.xx</p>
          <p>
            por R$ <strong>xxx.xx</strong>
          </p>
        </li>
        <li>
          <img src={ryu} alt="Ryu do street fight" />
          <h2>Nome do action figure</h2>
          <p>de R$ xxx.xx</p>
          <p>
            por R$ <strong>xxx.xx</strong>
          </p>
        </li>
      </ul>
    </Vistos>
  );
}
