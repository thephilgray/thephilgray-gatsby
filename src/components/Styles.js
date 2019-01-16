import { createGlobalStyle } from 'styled-components'

export const theme = {
  white: '#fff',
  lightBlue: '#c2eae9',
  darkBlue: '#35468d',
  yellow: '#f8efb6',
  pink: 'rgba(250,207,215,.5)',
  orange: '#da795c',
  black: '#262427',
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lora:400,400i,700');
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  body {
    font: 100%/1.6 'Lora', serif;
    font-weight: 400;
    
    text-align: left;
    font-kerning: normal;
  }
  
  p,
  li {
    font-size: 1.2em;
    line-height: 1.6;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  
  li {
    margin-left: 1em;
  }
  
  a {
    text-decoration: none;
    color: ${theme.darkBlue};
  }
  
  a:hover {
    color: ${theme.orange};
  }
  
  img {
    max-width: 100%;
  }
  
  /* modular scale */
  
  h1 {
    font-size: 2.488em;
    letter-spacing: 0.1em;
  }
  
  h2 {
    font-size: 2.074em;
    line-height: 1.6;
    margin: 1em 0;
  }
  
  h3 {
    font-size: 1.728em;
    margin: 1em 0;
    line-height: 1.4;
  }
  
  h4 {
    font-size: 1.44em;
    margin: 0.25em 0;
    line-height: 1.4;
  }
  
  h5 {
    font-size: 1.2em;
    margin: 0.25em 0;
  }
  
  h6 {
    font-size: 1em;
    margin: 0.25em 0;
  }
  
  span {
    font-variant-numeric: oldstyle-nums;
  }
  

  `
