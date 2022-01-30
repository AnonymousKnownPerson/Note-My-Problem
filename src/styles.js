import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

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
  h2:visited {
    color: black;
    text-decoration: none;
  }
  a:visited {
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
export const Element2 = styled.div`
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
  h2:visited {
    color: black;
    text-decoration: none;
  }
  a:visited {
    color: black;
    text-decoration: none;
  }
  margin: 30px;
  background-color: white;
  border-radius: 6px 20px 6px 20px;
  backdrop-filter: blur(2rem);
  display: grid;
  opacity: 1;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  padding: 30;
  &:hover {
    opacity: 1;
  }
`;
export const Element3 = styled.article`
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
  h2:visited {
    color: black;
    text-decoration: none;
  }
  a:visited {
    color: black;
    text-decoration: none;
  }
  margin: 30px;
  background-color: white;
  border-radius: 6px 20px 6px 20px;
  backdrop-filter: blur(2rem);
  display: grid;
  opacity: 1;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  padding: 30;
  &:hover {
    opacity: 1;
  }
`;
export const SortButton = styled.button`
margin-top: 10px;
button {
    background: #ffc880;
    color: #fff;
    border: 0;
    padding: 5px;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover{
    text-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    color:#4d320e;

  }
  font-weight:bolder;

`
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
export const SortAndFilter = styled.nav`
background-color: #ffe4c1;
background:#ffe4c1;
font-weight:lighter;

text-decoration: none;
border-width: 1px;
border-left: none;
border-right: none;
border-color: black;
margin-top: 15px;
margin-bottom: 15px;
justify-content:space-between;
min-height: 50px;
justify-content: center;
  align-items: center;
  display: flex;

`;
export const bodyToColor = styled.body`
background-color: white;
background: white;

`
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
export const GlobalStyle = createGlobalStyle`
body{
  background: rgb(235,235,235);
background: linear-gradient(171deg, rgba(235,235,235,1) 7%, rgba(255,166,48,1) 100%);
color: #111; font-family: 'Helvetica Neue', sans-serif; font-size: 14x; font-weight: bold; letter-spacing: -1px; line-height: 1;
button {
    background: #ffc880;
    color: #fff;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover{
    text-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  }
}
`;
export const NewNoteStyle = styled.div`
  max-width: 250px;
  margin: 20px auto;
  text-align: center;
  label {
    text-align: left;
    display: block;
  }
  h2 {
    font-size: 20px;
    color: #ffa630;
    margin-bottom: 30px;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
    resize: none;
  }
  textarea {
    height: 200px;
  }
  button {
    background: #ffa630;
    color: #fff;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover {
    text-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  }
`;
