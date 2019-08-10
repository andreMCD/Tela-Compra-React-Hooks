import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template:
    "head"
    "content"
    "carousel"
    "rodape"
    / 100%;
  position: relative;
  height: 100%;
  box-sizing: border-box;
  background: $corSecundaria;

  border: 1px solid aqua;
`;
