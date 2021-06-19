import 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      black: string
      white: string
      primary: string
      tertiary: string
      secondary: string
      primaryLight: string
      tertiaryLight: string
      secondaryLight: string
    }
  }
}
