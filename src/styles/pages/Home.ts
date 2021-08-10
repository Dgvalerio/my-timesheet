import { transparentize } from 'polished';
import styled from 'styled-components';

const StyledHome = styled.main`
  &,
  nav,
  nav > button {
    display: flex;
  }

  > p {
    text-align: justify;
  }

  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.gap};

  nav > button {
    align-items: center;
    gap: 0.8rem;
    margin-left: auto;
    font-size: 1rem;
    padding: ${({ theme }) => theme.sizes.padding};

    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    outline: none;
    border-radius: 0.4rem;

    cursor: pointer;

    &:hover {
      background: linear-gradient(to right, #010326, #1a0d73, #010326);
      background-size: 400% 400%;
      animation: active linear 8s infinite;
      color: ${({ theme }) => theme.colors.text};
    }

    &:active {
      background: ${({ theme }) => theme.colors.actions.active};
    }
  }
`;

export const Item = styled.section<{ open: boolean }>`
  font-size: 1.2rem;
  line-height: 1.8rem;
  background-color: ${({ theme }) => theme.colors.actions.hover};
  padding: 0.6rem;
  border-radius: 0.4rem;
  box-shadow: 0 0 0.16rem #0a0a0a66;

  display: flex;

  &::before {
    content: '';
    background-color: ${({ theme }) => theme.colors.text};
    width: 0.4rem;
    height: auto;
    border-radius: 4px;
    margin-right: 1rem;
  }

  details {
    display: flex;
    flex: 1;
    summary {
      display: flex;
      align-items: center;
      gap: 0.4rem;

      list-style: none;
      cursor: pointer;

      em {
        color: ${({ theme }) => transparentize(0.4, theme.colors.text)};
      }

      svg {
        padding: 0.2rem 0.6rem;
        margin-left: auto;
      }
    }
  }

  small {
    color: ${({ theme }) => transparentize(0.4, theme.colors.text)};
  }
`;

export default StyledHome;
