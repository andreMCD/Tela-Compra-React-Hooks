import React from "react";

import Header from "../components/header";
import Content from "../components/sectionContent";

import { Main } from "./styles";

export default function Container() {
  return (
    <Main>
      <Header />
      <h1>Agência N1 - Compras</h1>
      <Content />
    </Main>
  );
}
