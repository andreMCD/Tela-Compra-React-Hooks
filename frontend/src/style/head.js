import styled from "styled-components";

export const Head = styled.header`
  grid-area: head;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  padding: 10px 0 0 0;

  border-bottom: 1px solid rgb(207, 207, 207);

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
  > .boxCart {
    order: 4;
    position: relative;
    margin: 15px 0 0 0;

    > .logoCart {
      height: 25px;
    }
    > .countCart {
      position: absolute;
      top: -10px;
      right: -6px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      border: none;
      border-radius: 50%;
      background: rgb(78, 194, 221);
      color: rgb(255, 255, 255);
      font-size: 0.8rem;
      font-weight: bold;
    }
  }

  @media (max-width: 599px) {
    .open {
      background-color: rgb(15, 65, 86);
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
        background-color: rgb(15, 65, 86);
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
        background-color: rgb(15, 65, 86);
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
      position: fixed;
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

      li:first-child {
        border-top: 1px solid rgb(15, 65, 86);
      }

      li {
        display: flex;
        font-size: 1.5em;
        letter-spacing: 1.8px;
        font-family: "Raleway", sans-serif;
        border-bottom: 1px solid rgb(15, 65, 86);
        transition: 1.5s all;

        a {
          width: 100%;
          text-align: center;
          padding: 20px 0;
          color: rgb(255, 255, 255);
          font-weight: bold;
          text-decoration: none;
          transition: 1s all;

          &::after {
            display: none;
          }
        }
      }
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
      background-color: $colorGray;
      transform: rotate(45deg);
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
    }

    #menuToggle:checked ~ .menuOpen .open:after {
      content: "";
      background-color: $colorGray;
      transform: rotate(-45deg);
      position: relative;
      top: 0;
      right: 0;
      z-index: 1;
    }

    #menuToggle:not(:checked) ~ .menuEffects ul {
      transform: translateY(-30%);
    }
  }

  @media (min-width: 600px), (orientarion: landscape) {
    grid-area: head;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    align-items: center;
    padding: 10px 0 0 0;

    border-bottom: 1px solid rgb(207, 207, 207);

    > .logo {
      order: -1;
    }
    > .lupaSearch {
      display: none;
    }
    > .boxCart {
      order: 4;
      height: 30px;
      margin: 10px 0 0 0;
      padding-left: 10px;
    }

    .menu {
      display: flex;

      > li {
        font-family: "Raleway", sans-serif;
        font-size: 1.2rem;
        font-weight: bold;
        margin: 0 10px 0 0;

        > a {
          color: rgb(78, 194, 221);
          text-decoration: none;
          transition: 0.5s all;
        }
        > a:hover {
          color: rgb(15, 65, 86);
        }
      }
    }

    .search {
      display: inline-block;
      border: none;
      border-radius: 5px;
      height: 30px;
      width: 300px;
      margin: 0 5px 0 0;
      padding-left: 10px;
      box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);

      &::placeholder {
        color: rgb(207, 207, 207);
      }
    }
  }
`;
