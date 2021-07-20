import React, { FC } from 'react';

import styled from 'styled-components';

const SFooter = styled.footer`
  margin-top: auto;
  text-align: center;
  padding: ${({ theme }) => theme.sizes.padding};
`;

const Footer: FC = () => <SFooter>Davi Gonçalves Valério, 2021</SFooter>;

export default Footer;
