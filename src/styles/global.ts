import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body, html, #__next {
    background: #0F2027;
    font-size: 1.2rem;
    height: 100vh;
    font-family: Roboto;
    color: #eeeeee;
  }

  p {
    font-size: 2rem;
    line-height: 3rem;
  }

  a {
    color: black;
    font-weight: 600;
  }
`;

export default GlobalStyles;
