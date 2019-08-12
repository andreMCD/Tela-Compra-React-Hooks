import React from "react";

import Header from "../components/header";
import Content from "../components/sectionContent";

import { Main } from "./styles";
import Footer from "../components/footer";

export default function Container() {
  return (
    <Main>
      <Header />
      <Content />
      <Footer />
    </Main>
  );
}
