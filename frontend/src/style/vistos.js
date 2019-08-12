import styled from "styled-components";

export const Vistos = styled.section`
  margin: 10px 0 0 0;
  padding: 10px 10px;
  > h1 {
    font-family: "Raleway", sans-serif;
    color: gray;
    font-size: 1.3rem;
    margin-bottom: 15px;
    text-align: center;
  }
  > ul {
    display: flex;
    flex-flow: column;

    border: 1px solid lime;
    > li {
      display: flex;
      background: gray;
      margin: 0 0 10px 0;

      > img {
        width: 80px;
        height: 80px;
      }
    }
  }
`;
