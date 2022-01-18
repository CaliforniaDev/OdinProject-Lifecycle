import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html {
  font-size: 62.5%;
  line-height: 1.6;
  position: relative;
  min-height: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

*, *:before, *:after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
}

body, textarea {
  font-family: 'Nunito Sans';
  font-size: 1.6rem;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.5em;
  letter-spacing: 2px;
}
h1 {
  font-size: 5.6rem;
}

h2 {
  font-size: 4rem;
}

h3 {
  font-size: 3.2rem;
}

h4 {
  font-size: 2.4rem;
}

h5 {
  font-size: 1.6rem;
}


main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`

export default GlobalStyle;
