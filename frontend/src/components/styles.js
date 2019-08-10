import styled from "styled-components";

export const Head = styled.header`
  grid-area: head;
  display: flex;
  width: 100%;

  > .logo {
    height: 60%;

    border: 1px solid purple;
  }
  > .menu {
    > ul {
      list-style: none;
      display: flex;
      padding: 0;
      margin: 10px 0 0 0;

      > li:first-child {
        margin-left: 0;
      }
      > li {
        font-size: 1.2rem;
        font-family: "Raleway", sans-serif;
        font-weight: bold;
        margin: 0 10px;
        > a {
          color: $corSecundaria;
          text-decoration: none;
        }
      }
    }
    border: 1px solid red;
  }
  > .logoCart {
    height: 30%;
    margin: 10px 0 0 0;
    border: 1px solid purple;
  }
`;
