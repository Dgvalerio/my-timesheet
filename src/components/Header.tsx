import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import { signOut } from '../store/auth/actions';
import { toggleThemeMode } from '../store/ui/actions';
import Icon from './Icon';

const SHeader = styled.header`
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

const Header: FC = () => {
  const dispatch = useDispatch();
  const { signed } = useSelector((state) => state.auth);

  const handleSignOut = () => dispatch(signOut());

  const handleToggleThemeMode = () => dispatch(toggleThemeMode());

  return (
    <SHeader>
      <h1>My Timesheet</h1>
      <button type="button" onClick={handleToggleThemeMode}>
        <Icon name="lamp on" size={20} />
      </button>
      {signed && (
        <>
          <button type="button">
            <Icon name="config" size={20} />
          </button>
          <button type="button" onClick={handleSignOut}>
            <Icon name="sign out" size={20} />
          </button>
        </>
      )}
    </SHeader>
  );
};

export default Header;
