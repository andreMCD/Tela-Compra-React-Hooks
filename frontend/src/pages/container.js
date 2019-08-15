import React, { useState, useEffect } from "react";

// Importações dos container e seus objetos
import { Main } from "./styles";
import SectionModal from "../objects/modal";
import Header from "../components/header";
import { Content } from "../style/content";
import { Carrosel } from "../style/carrosel";
import { Produto } from "../style/produto";
import { Description } from "../style/description";
import { Vistos } from "../style/vistos";
import Footer from "../components/footer";

// Importações de imagens
import imgMario from "../assets/superMario.jpg";
import superMario from "../assets/superMario.jpg";
import ryu from "../assets/ryu.jpg";
import doctorStranger from "../assets/doctor-strange.jpg";

export default function Container() {
  const [count, setCount] = useState(0);
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {});

  function toggle() {
    setCount(count + 1);
    setIsShowing(!isShowing);

    return {
      isShowing,
      toggle
    };
  }

  const contador = e => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <Main>
      <Header count={count} updateCount={setCount} />
      <SectionModal isShowing={isShowing} hide={toggle} />
      <Content>
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
        <Produto>
          <h1>Action figure Mario Top Top</h1>
          <div className="boxPreco">
            <p>de R$ 189,90</p>
            <p>
              por: <strong>R$ 149,90</strong>
            </p>
            <button type="button" onClick={toggle}>
              Comprar
            </button>
            <button type="button" className="cart" onClick={contador}>
              Add ao Carrinho
            </button>
          </div>

          <div className="boxFrete">
            <h2>Calcule o frete</h2>
            <input type="text" />
            <input type="text" className="lastChild" />

            <button type="button">Calcular</button>
          </div>
        </Produto>
        <Description>
          <h1>Descrição do Produto</h1>
          <p>
            Esse action figure do Super Mario Bros é muito maneiro, Esse action
            figure do Super Mario Bros é muito maneiro Esse action figure do
            Super Mario Bros é muito maneiro. Esse action figure do Super Mario
            Bros é muito maneiro, Esse action figure do Super Mario Bros é muito
            maneiro
          </p>
        </Description>
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
      </Content>
      <Footer />
    </Main>
  );
}
