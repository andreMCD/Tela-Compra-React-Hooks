import styled from "styled-components";

export const Vistos = styled.section`
  margin: 10px 0 0 0;
  padding: 10px 10px;
  grid-area: vistos;

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
      background: rgb(207, 207, 207);
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
  @media (min-width: 600px), (orientarion: landscape) {
    margin: 10px auto 0 auto;

    > ul {
      display: flex;
      flex-flow: row;

      > li {
        display: flex;
        flex-flow: column;
        align-items: center;
        background: rgb(207, 207, 207);
        margin: 0 5px 10px 5px;
        padding: 5px 5px 20px 5px;

        > img {
          width: 150px;
          height: 150px;
        }

        > .dados-box {
          padding: 5px;

          > h2 {
            font-family: "Raleway", sans-serif;
            color: gray;
            font-size: 0.8rem;
            font-weight: bold;
            margin: 10px 0 20px 0;
            width: 100%;
          }
        }
      }
    }
  }
`;
