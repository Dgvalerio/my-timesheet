import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../store/auth/actions';
import { toggleThemeMode } from '../store/ui/actions';
import Wrapper from '../styles/components/Header';
import Icon from './Icon';

const Header: FC = () => {
  const dispatch = useDispatch();
  const { signed } = useSelector((state) => state.auth);

  const handleSignOut = () => dispatch(signOut());

  const handleToggleThemeMode = () => dispatch(toggleThemeMode());

  return (
    <Wrapper>
      <h1>My Timesheet</h1>
      <button
        type="button"
        onClick={handleToggleThemeMode}
        aria-label="Alternar entre tema claro e escuro"
        title="Alternar entre tema claro e escuro"
      >
        <Icon name="lamp on" size={20} />
      </button>
      {signed && (
        <>
          <button
            type="button"
            aria-label="Abrir configurações de conta"
            title="Abrir configurações de conta"
          >
            <Icon name="config" size={20} />
          </button>
          <button
            type="button"
            onClick={handleSignOut}
            aria-label="Sair da conta"
            title="Sair da conta"
          >
            <Icon name="sign out" size={20} />
          </button>
        </>
      )}
    </Wrapper>
  );
};

export default Header;
