import styled from "styled-components";

export const Content = styled.section`
  grid-area: content;
  display: grid;
  grid-template:
    "carrosel"
    "produto"
    "description"
    "vistos";
  width: 90vw;
  position: relative;
  padding: 20px 0;
  margin: 0 auto;

  @media (min-width: 600px), (orientarion: landscape) {
    display: grid;
    grid-template:
      "carrosel produto"
      "description description"
      "vistos vistos";
  }
`;
