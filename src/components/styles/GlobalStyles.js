import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
        --container-margin: 80px;
  }
  body {
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
