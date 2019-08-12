import React from "react";

import { Content } from "../style/content";

import ImagesCarrosel from "../objects/imagesCarrosel";
import BoxProduto from "../objects/contentProduto";
import BoxDescription from "../objects/contentDescription";

export default function sectionContent() {
  return (
    <Content>
      <ImagesCarrosel />
      <BoxProduto />
      <BoxDescription />
    </Content>
  );
}
