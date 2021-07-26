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

  form {
    flex-direction: column;
    margin: auto;
    max-width: 40%;

    gap: ${({ theme }) => theme.sizes.gap};

    h1 {
      font-size: 2.4rem;
    }

    input,
    button {
      padding: 0.6rem 0.8rem;
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.2rem;
      border-radius: 0.4rem;
      border: 1px solid ${({ theme }) => theme.colors.border};
    }

    button {
      cursor: pointer;
      outline: none;
      justify-content: center;

      &:hover {
        background-color: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.background};
      }

      &:active {
        background-color: #fff;
        color: #000;
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
