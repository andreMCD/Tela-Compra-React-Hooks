import React from "react";

import { Carrosel } from "../style/carrosel";

import imgMario from "../assets/superMario.jpg";

export default function ImagesCarrosel() {
  return (
    <Carrosel>
      <ul>
        <li>
          <img src={imgMario} alt="Action Figure Super Mario" />
        </li>
        <li>
          <img src={imgMario} alt="Action Figure Super Mario" />
        </li>
        <li>
          <img src={imgMario} alt="Action Figure Super Mario" />
        </li>
      </ul>
      <div className="boxImage">
        <img src={imgMario} alt="Action Figure Super Mario" />
      </div>
    </Carrosel>
  );
}
