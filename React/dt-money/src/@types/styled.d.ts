import 'styled-components'
import { defaultTheme } from '../styles/thtmes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}