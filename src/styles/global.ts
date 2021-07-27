import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    outline: none;
    font-family: Roboto, sans-serif;
    transition: all 128ms;
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
  
  *::selection {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
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

  h1 {
    font-size: 60px;
    font-weight: lighter;
    letter-spacing: -0.5px;
  }
`;
