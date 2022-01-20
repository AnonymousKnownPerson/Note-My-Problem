import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const MainStyle = ({ children }) => {
  return <Test>{children}</Test>;
};

export const Test = styled.div`
  min-height: 95vh;
  width: 800px;
  margin: auto;
  background-color: #ffa630;
  border-radius: 30px 100px 30px 100px;
  display: list-item;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  flex-direction: column;
  text-align: center;
  padding-bottom: 30px;
`;
export const Element1 = styled.div`
  align-content: center;
  align-self: center;
  a:link {
    color: black;
    text-decoration: none;
  }
  h2:link {
    color: black;
    text-decoration: none;
  }
  h2:visited{
    color: black;
    text-decoration: none;
  }
  a:visited{
    color: black;
    text-decoration: none;
  }
  
  margin: 15px;
  background-color: white;
  border-radius: 6px 20px 6px 20px;
  backdrop-filter: blur(2rem);
  display: grid;
  opacity: 0.7;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  padding: 30;
  &:hover {
    opacity: 1;
  }
`;
export const TextSmall = styled.text`
  color: #000;
  text-decoration: none;
  margin: 50;
  text-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  h1 {
    color: #111;
    font-family: "Helvetica Neue", sans-serif;
    font-size: 14x;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 1;
  }
  a {
    text-decoration: none;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  a:active {
    text-decoration: none;
  }
`;
export const TextHead = styled.text`
  color: #000;
  text-decoration: none;
  margin: 50px;
  text-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  h1 {
    color: #111;
    font-family: "Helvetica Neue", sans-serif;
    font-size: 40px;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 1;
  }
  a {
    text-decoration: none;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  a:active {
    text-decoration: none;
  }
`;
const NavLink = styled(Link)`
  padding: 20px;
  color: white;
  text-decoration: none;
  &:hover {
    color: red;
    background: blue;
  }
`;
export const GlobalStyle = createGlobalStyle`
body{
  background: rgb(235,235,235);
background: linear-gradient(171deg, rgba(235,235,235,1) 7%, rgba(255,166,48,1) 100%);
color: #111; font-family: 'Helvetica Neue', sans-serif; font-size: 14x; font-weight: bold; letter-spacing: -1px; line-height: 1;
}
`;
