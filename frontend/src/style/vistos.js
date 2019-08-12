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

    > li {
      display: flex;
      background: #9f9f9f;
      margin: 0 0 10px 0;
      padding: 5px;

      > img {
        width: 80px;
        height: 80px;
      }
      > .dados-box {
        padding: 5px;

        > h2 {
          font-family: "Raleway", sans-serif;
          color: gray;
          font-size: 0.8rem;
          font-weight: bold;
          margin-bottom: 10px;
          width: 100%;
        }
        > p {
          margin: 0 0 5px 0;
          font-size: 0.8rem;
          color: gray;
          font-family: "Raleway", sans-serif;

          > strong {
            color: rgb(78, 194, 221);
            font-size: 1.5rem;
            font-weight: bold;
          }
        }
      }
    }
  }
`;
