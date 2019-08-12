import styled from "styled-components";

export const Head = styled.header`
  grid-area: head;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  padding: 10px 0 0 0;

  border-bottom: 1px solid #999;

  > .logo {
    height: 60px;
    order: 3;
  }
  > .lupaSearch {
    order: 2;
    height: 25px;
    margin: 13px 0 0 -20px;
    cursor: pointer;
  }
  > .logoCart {
    order: 4;
    height: 30px;
    margin: 10px 0 0 0;
    padding-left: 10px;
  }

  .open {
    background-color: gray;
    width: 30px;
    height: 4px;
    display: block;
    border-radius: 2px;
    cursor: pointer;
    position: absolute;
    top: 27px;
    left: 20px;
    animation: showLeft ease-in-out 0.8s;

    &:before {
      content: "";
      background-color: gray;
      width: 30px;
      height: 4px;
      display: block;
      border-radius: 2px;
      position: absolute;
      top: 8px;
      transform: rotate(0deg);
      transition: all 0.3s ease;
    }

    &::after {
      content: "";
      background-color: gray;
      width: 30px;
      height: 4px;
      display: block;
      border-radius: 2px;
      position: absolute;
      top: -8px;
      transform: rotate(0deg);
      transition: all 0.3s ease;
    }
  }

  .menuOpen {
    width: 30px;
    height: 30px;
    display: block;
    padding: 15px;
    cursor: pointer;
    top: 10px;
    left: 0;
    z-index: 3;
    background-color: transparent;
    border-radius: 30px;

    &:hover .open::before {
      top: -8px;
    }

    &:hover .open::after {
      top: 8px;
    }
  }

  .navegation {
    order: 1;
    background-color: rgb(78, 194, 221);
    position: absolute;
    width: 100%;
    height: 100vh;
    -o-transition: 0.7s all;
    transition: 0.7s all;

    .menu {
      display: flex;
      flex-flow: column;
      justify-content: center;
      width: 100vw;
      height: 30vh;
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -30%);
      list-style: none;
    }
  }

  .menu {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgb(78, 194, 221);
    z-index: 2;

    label {
      width: 30px;
      height: 30px;
      padding: 15px;
      position: absolute;
      background-size: 100%;
      cursor: pointer;
    }

    li {
      display: flex;
      font-size: 1.5em;
      letter-spacing: 1.8px;
      font-family: "Raleway", sans-serif;
      margin: 0;
      border-top: 1px solid rgb(255, 255, 255);
      border-bottom: 1px solid rgb(255, 255, 255);
      transition: 1.5s all;

      &:nth-child(1) {
        order: -1;
        border-bottom: none;
      }

      &:nth-child(3) {
        order: 1;
        border-top: none;
      }

      &:hover {
        background: rgba(78, 194, 221);
      }

      a {
        width: 100%;
        text-align: center;
        padding: 20px 0;
        color: gray;
        font-weight: bold;
        text-decoration: none;
        transition: 1s all;

        &::after {
          display: none;
        }
      }
    }
  }

  .menu > li:hover > a {
    color: rgb(255, 255, 255);
  }

  .menuEffects {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s, visibility 0.1s;

    ul {
      transform: translateY(0%);
      transition: all 0.2s;
    }
  }

  #menuToggle:checked ~ .menuEffects {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.2s;
  }

  #menuToggle:checked ~ .menuEffects ul {
    opacity: 1;
  }

  #menuToggle:checked ~ .menuOpen .open {
    background-color: transparent;
  }

  #menuToggle:checked ~ .menuOpen .open:before {
    content: "";
    background-color: gray;
    transform: rotate(45deg);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }

  #menuToggle:checked ~ .menuOpen .open:after {
    content: "";
    background-color: gray;
    transform: rotate(-45deg);
    position: relative;
    top: 0;
    right: 0;
    z-index: 1;
  }

  #menuToggle:not(:checked) ~ .menuEffects ul {
    transform: translateY(-30%);
  }
`;
