import styled from "styled-components";

export const Rodape = styled.section`
  display: flex;
  align-items: center;
  padding: 10px;

  > .logo-rodape {
    background: blueviolet;
    padding: 10px;
    height: 100%;
    align-items: center;
    display: flex;
    align-items: center;
  }
  > .content-rodape {
    background: rgb(78, 194, 221);
    padding: 10px;
    height: 100%;
    width: 70%;
    display: flex;
    align-items: center;
    > p {
      color: #fff;
    }
  }
`;
