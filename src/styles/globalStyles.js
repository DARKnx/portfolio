import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
}
body {
  font-family: 'Ubuntu', sans-serif;
  background-color: ${({theme}) => theme.colors.primary};
}


`

export default GlobalStyle