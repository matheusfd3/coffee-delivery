import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-light']};
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;

    overflow-y: scroll;
  }

  body::-webkit-scrollbar {
    width: 1.6rem;
    background-color: transparent;
  } 

  body::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: hsl(0,0%,85%);
    border-radius: 16px;
    border: 8px solid transparent;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  #root {
    box-sizing: content-box;
    max-width: 70rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  button {
    cursor: pointer;
  }
`
