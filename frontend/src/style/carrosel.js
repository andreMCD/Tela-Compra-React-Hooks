import styled from "styled-components";

export const Carrosel = styled.div`
  display: flex;
  justify-content: center;
  grid-area: carrosel;

  > ul {
    display: flex;
    flex-flow: column;
    justify-content: initial;
    list-style: none;
    width: 15%;
    padding: 0 10px 0 0;

    > li {
      margin: 0 0 5px 0;

      > img {
        width: 50px;
        height: 50px;
        border: 1px solid rgb(207, 207, 207);
      }
    }
  }
  .boxImage {
    padding: 0;
    margin: 0;

    > img {
      width: 100%;
      border: 1px solid rgb(207, 207, 207);
    }
  }
`;
