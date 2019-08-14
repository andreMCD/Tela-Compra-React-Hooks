import styled from "styled-components";

export const Produto = styled.section`
  margin: 10px 0 0 0;
  padding: 0 10px;
  grid-area: produto;

  > h1 {
    font-family: "Raleway", sans-serif;
    color: gray;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  > .boxPreco {
    background: rgb(207, 207, 207);
    border: none;
    border-radius: 10px;
    margin: 10px 0;
    padding: 10px 10px;
    max-width: 320px;

    > p {
      margin: 10px 0;
      font-size: 0.8rem;
      color: gray;
      font-family: "Raleway", sans-serif;

      > strong {
        color: rgb(78, 194, 221);
        font-size: 2rem;
        font-weight: bold;
      }
    }
    > button {
      background: rgb(113, 206, 75);
      border: none;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
      font-size: 1.3rem;
      text-transform: uppercase;
      padding: 5px 15px;
      margin: 10px 0;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    > .cart {
      background: rgb(78, 194, 221);
    }
  }
  > .boxFrete {
    background: rgb(78, 194, 221);
    border: none;
    border-radius: 10px;
    margin: 10px 0;
    padding: 10px 10px;
    display: flex;
    flex-wrap: wrap;
    max-width: 300px;

    > h2 {
      font-family: "Raleway", sans-serif;
      color: #fff;
      font-size: 0.8rem;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 10px;
      width: 100%;
    }
    > input {
      display: inline-block;
      border: none;
      border-radius: 5px;
      height: 30px;
      width: 130px;
      margin: 0 5px 0 0;
      box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
    }
    > .lastChild {
      width: 50px;
    }

    > button {
      background: rgb(15, 65, 86);
      border: none;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
      font-size: 0.8rem;
      text-transform: uppercase;
      padding: 5px 10px;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }
`;
