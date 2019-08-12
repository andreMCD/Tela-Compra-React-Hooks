import React from "react";

import { Content } from "../style/content";

import ImagesCarrosel from "../objects/imagesCarrosel";
import BoxProduto from "../objects/contentProduto";

export default function sectionContent() {
  return (
    <Content>
      <ImagesCarrosel />
      <BoxProduto />
    </Content>
  );
}
