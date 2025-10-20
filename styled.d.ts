import 'styled-components';
import { Theme } from './src/styles/theme';

declare module 'styled-components' {
  // Sobrescreve a DefaultTheme com a sua interface Theme
  export interface DefaultTheme extends Theme {}
}
