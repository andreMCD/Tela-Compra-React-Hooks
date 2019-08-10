import styled from "styled-components";

export const Head = styled.header`
  grid-area: head;
  width: 100vw;
  height: 30%;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  padding: 10px 0 0 0;

  > .logo {
    height: 60px;
  }
  > .menu {
    padding: 15px 0 0 0;
    > ul {
      list-style: none;
      display: flex;

      > li:first-child {
        margin-left: 0;
      }
      > li {
        font-size: 1.2rem;
        font-family: "Raleway", sans-serif;
        font-weight: bold;
        margin: 0 5px;
        > a {
          color: rgb(78, 194, 221);
          text-decoration: none;
        }
      }
    }
  }
  .search {
    order: 4;
    margin: 10px 0 0 0;
    width: 80%;
    height: 40px;
    background: rgb(78, 194, 221);
    border: none;
    border-radius: 10px;
  }
  > .logoCart {
    height: 30px;
    margin: 10px 0 0 0;
    padding-left: 10px;
  }
`;
