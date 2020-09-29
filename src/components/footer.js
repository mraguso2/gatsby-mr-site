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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  & div {
    max-width: 960px;
    margin: auto;
    /* width: 100%; */
  }
  & a {
    color: #b7ddff;
  }
  & a:visited {
    color: #d8aefd;
  }
`;

// hsl(212, 100%, 90%);

const Footer = () => (
  <FooterStyled>
    <div style={{ minHeight: '3rem' }}>
      © {new Date().getFullYear()}, Built with ❤️ by&nbsp;
      <a href="/">MR</a>
    </div>
  </FooterStyled>
);

export default Footer;
