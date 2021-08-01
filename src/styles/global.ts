import { darken } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    outline: none;
    font-family: Roboto, sans-serif;
    transition: all 128ms;

    &::-webkit-scrollbar {
      width: 0.4rem;
    }

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => darken(0.06, theme.colors.background)};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.text};
      border-radius: 0.4rem;
    }
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

  main {
    padding: ${({ theme }) => theme.sizes.padding};
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
