import styled from "styled-components";

export const Rodape = styled.section`
  display: flex;
  align-items: center;
  padding: 10px 0;

  > .logo-rodape {
    background: rgb(15, 65, 86);
    padding: 10px;
    height: 100%;
    align-items: center;
    display: flex;
    align-items: center;
    min-width: 20%;
  }
  > .content-rodape {
    background: rgb(78, 194, 221);
    padding: 10px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    > p {
      color: #fff;
    }
  }
`;
