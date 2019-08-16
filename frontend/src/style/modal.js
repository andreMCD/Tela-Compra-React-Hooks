import styled from "styled-components";

export const Modal = styled.section`
  justify-content: center;
  justify-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;

  > .modalContent {
    display: flex;
    flex-flow: column;
    justify-content: center;
    position: absolute;
    top: 15%;
    left:50%;
    transform:translate(-50%, -15%);
    max-width: 200px;
    max-height: 200px;
    width: 50%;
    background: rgb(255, 255, 255);
    border: none;
    border-radius: 5px;
    padding: 10px 40px;

    > p {
      font-size: 1.5rem;
      color: rgb(78, 194, 221);
      margin: 5px 0 10px 0;
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
  }
  .display-flex {
    display: flex;
  }

  .display-none {
    display: none;
  }
`;
