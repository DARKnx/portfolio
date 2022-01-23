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

::-webkit-scrollbar-track {
    background-color: ${({theme}) => theme.colors.grey};

}
::-webkit-scrollbar {
    width: 6px;
  
   

}
::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.colors.secondary};
    border-radius: 6px;
}

`

export default GlobalStyle