import React from 'react';
import styled from 'styled-components';

import colors from '../utilities/colors';

const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  margin: auto;
  padding: 10px;
  background: ${colors.neutral.neutral10};
  color: ${colors.neutral.neutral2};
  & div {
    max-width: 960px;
    margin: auto;
    width: 100%;
  }
`;

// hsl(212, 100%, 90%);

const Footer = () => (
  <FooterStyled>
    <div>
      © {new Date().getFullYear()}, Built with ❤️ by&nbsp;
      <a href="/">MR</a>
    </div>
  </FooterStyled>
);

export default Footer;
