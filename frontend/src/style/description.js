import styled from "styled-components";

export const Description = styled.aside`
  margin: 30px 0 0 0;
  padding: 20px 20px;
  grid-area: description;

  > h1 {
    font-family: "Raleway", sans-serif;
    color: gray;
    font-size: 1.3rem;
    margin-bottom: 15px;
    text-align: center;
  }
  > p {
    margin: 10px auto;
    font-size: 0.8rem;
    color: gray;
    font-family: "Raleway", sans-serif;
    line-height: 1.2rem;
    text-align: justify;
    max-width: 700px;
  }
`;
