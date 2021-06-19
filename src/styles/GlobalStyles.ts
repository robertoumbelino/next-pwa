import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-display: initial;
    outline: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  html, body, #root {
    height: 100%;
    background-color: ${props => props.theme.colors.black};
    @media(max-width: 1080px) { font-size: 93.75% }
    @media(max-width: 720px) { font-size: 87.5% }
  }
  
  *, button, input {
    border: 0;
    font-family: 'Montserrat', sans-serif;
  }
`

/**
 * Application theme.
 */
export const theme: DefaultTheme = {
  colors: {
    black: '#312b47',
    white: '#F8F8F8',

    primary: '#EB6475',
    primaryLight: '#EA8A96',

    secondary: '#6E6D6D',
    secondaryLight: '#868B8F',

    tertiary: '#CCCCCC',
    tertiaryLight: '#EDEDED'
  }
}
