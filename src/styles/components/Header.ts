import styled from 'styled-components';

const StyledHeader = styled.header`
  &,
  button {
    display: flex;
  }

  align-items: stretch;
  justify-content: space-between;

  h1,
  button {
    padding: ${({ theme }) => theme.sizes.padding};
  }

  h1 {
    font-size: 1.4rem;
  }

  button {
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: transparent;

    &:nth-child(2) {
      margin-left: auto;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.actions.hover};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.actions.active};
    }
  }
`;

export default StyledHeader;
