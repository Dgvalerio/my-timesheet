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

export const Item = styled.section`
  font-size: 1.2rem;
  line-height: 1.8rem;
  background-color: ${({ theme }) => theme.colors.actions.hover};
  padding: ${({ theme }) => theme.sizes.padding};
  border-radius: 0.4rem;
  box-shadow: 0 0 0.16rem #0a0a0a66;

  summary {
    list-style: none;
    cursor: pointer;
  }

  em {
    color: ${({ theme }) => transparentize(0.4, theme.colors.text)};
  }
`;

export default StyledHome;
