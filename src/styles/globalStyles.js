import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}
body {
  font-family: 'Roboto', sans-serif;
  background-color: ${({theme}) => theme.colors.primary};
}


`

export default GlobalStyle