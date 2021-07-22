import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import Icon from './Icon';

const SHeader = styled.header<{ auth: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ auth }) => (!auth ? 'center' : 'space-between')};
  gap: ${({ theme }) => theme.sizes.gap};
  padding: ${({ theme }) => theme.sizes.padding};

  h1 {
    font-size: 1.4rem;
  }

  svg:nth-child(2) {
    margin-left: auto;
  }
`;

const Header: FC = () => {
  const { signed } = useSelector((state) => state.auth);

  return (
    <SHeader auth={signed}>
      <h1>My Timesheet</h1>
      {signed && (
        <>
          <Icon name="config" size={20} />
          <Icon name="sign out" size={20} />
        </>
      )}
    </SHeader>
  );
};

export default Header;
