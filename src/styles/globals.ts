import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
    --background: #E5E5E5;
    --bg-white: #FFFFFF;
    --brandcolor-primary-default: #4F46BB;
    --border-tag: ##8E85FF;
    --textcolor-primary: #302E45;
    --textcolor-secondary: #6D6C7B;
    --outline-gray-dark: #BBB8D9;
    
  }



* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
@media(max-width: 1080px){
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
body, input, textarea, select, button {
  font: 400  1rem  'Inter', sans-serif; 
}
body {
  -webkit-font-smoothing: antialiased;
  background: var(--background);
}
button {
  cursor: pointer;
  border: 0;
}
a {
  color: inherit;
  text-decoration: none;
}

`;
