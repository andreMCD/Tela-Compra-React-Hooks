import styled from "styled-components";

export const Carrosel = styled.div`
  display: flex;
  justify-content: space-around;

  > ul {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    list-style: none;
    width: 15%;

    > li {
      margin: 0 0 5px 0;

      > img {
        width: 50px;
        height: 50px;
        border: 1px solid gray;
      }
    }
  }
  .boxImage {
    padding: 0;
    margin: 0;

    > img {
      width: 200px;
      height: 200px;
      border: 1px solid gray;
    }
  }
`;
