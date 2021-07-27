import styled from 'styled-components';

const StyledSignIn = styled.main`
  form,
  label,
  input,
  div {
    display: flex;
    width: 100%;
  }

  justify-content: center;
  padding: ${({ theme }) => theme.sizes.padding};
  margin-top: auto;
  margin-bottom: auto;

  form {
    flex-direction: column;
    margin: auto;
    max-width: 40%;

    gap: ${({ theme }) => theme.sizes.gap};

    h1 {
      text-align: center;
    }

    input,
    button {
      padding: 0.6rem 0.8rem;
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.2rem;
      border: none;
    }

    label {
      flex-direction: column;

      &:focus-within::after {
        animation: active linear 8s infinite;
      }

      &::after {
        content: '';
        background: linear-gradient(to right, #020659, #a6f9fd, #020659);
        background-size: 400% 400%;

        height: 2px;
      }

      input {
        width: auto;
      }
    }

    @keyframes active {
      0% {
        background-position: 0 50%;
      }
      50% {
        background-position: 200% 50%;
      }
      100% {
        background-position: 400% 50%;
      }
    }

    button {
      cursor: pointer;
      outline: none;
      justify-content: center;
      border-radius: 0.4rem;

      &:hover {
        background: linear-gradient(to right, #010326, #1a0d73, #010326);
        background-size: 400% 400%;
        animation: active linear 8s infinite;
      }

      &:active {
        background-color: ${({ theme }) => theme.colors.actions.active};
      }
    }

    div {
      justify-content: space-between;
      gap: 0.8rem;
      width: 100%;

      > :nth-child(2) {
        margin-left: auto;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.sizes.width.sm}) {
    form {
      max-width: 80%;

      & > div {
        flex-direction: column-reverse;

        & > :nth-child(2) {
          margin: 0;
        }
      }
    }
  }
`;

export default StyledSignIn;
