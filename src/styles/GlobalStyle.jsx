import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Playfair Display";
    src: url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
  }

  :root {
    --color-white: #f6f6f7;
    --color-purple: #613fe5;
    --color-black: #120e16;
    --color-grey: #b5b5b5
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


`;

export default GlobalStyle;
