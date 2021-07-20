import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    font-family: Roboto, sans-serif;
  }
  
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
  
  #root {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    min-height: 100vh;
  }

  svg {
    fill: ${(props) => props.theme.colors.text};
  }
`;
