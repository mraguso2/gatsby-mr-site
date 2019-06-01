import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import logoMR from '../images/logo-MR.svg';
import { below, above } from '../utilities/breakpoints';

const LogoStyled = styled.img`
  width: 55px;
  ${above.small_1`
    width: 65px;
  `}
  ${above.med_1`
    width: 75px;
  `}
`;

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  max-width: 1150px;
  margin: auto;
  padding: 10px;
  margin-bottom: 10px;
  ${below.small_1`
    justify-content: space-between;
    margin: 5px 5px 0px;
    flex-wrap: wrap;
  `}
  ::before {
    content: '';
    position: absolute;
    background: #fdfdfd;
    background: #ffffff;
    top: 0;
    bottom: 0;
    width: 40%;
    z-index: -1;
    transform: skew(15deg);
    height: 600px;
    max-width: 500px;
    ${below.small_1`
      transform: skew(10deg);
    `}
  }
`;

const NavStyled = styled.ul`
  display: flex;
  list-style: none;
  padding-left: inherit;

  .navItem {
    padding: 5px;

    a {
      text-decoration: none;
      font-size: 1.1rem;
      ${above.med_1`
        font-size: 1.2rem;
      `}
    }
  }
`;

const MyNameText = styled.p`
  height: 25px;
  background: white;
  padding-left: 10px;
  position: relative;
  display: flex;
  align-items: center;
  color: #1663c7;
  align-self: flex-end;
  margin-bottom: 13px;
  margin-left: 10px;
  width: 40%;

  ::after {
    content: '';
    position: absolute;
    background: white;
    top: 0;
    right: -10px;
    bottom: 0;
    width: 20px;
    -webkit-transform: skew(-20deg);
    -moz-transform: skew(-20deg);
    -ms-transform: skew(-20deg);
    transform: skew(-20deg);
  }
  ${below.small_1`
    margin: 0 10px 20px 0px;
    width: 100%;
    order: 2;
  `}
  ${above.small_1`
    margin-bottom: 10px;
  `}
  ${above.med_1`
    margin-bottom: 8px;
  `}
`;

const Logo = () => <LogoStyled src={logoMR} alt="logo" />;

const Nav = ({ menu }) => (
  <nav style={{ marginLeft: 'auto' }}>
    <NavStyled>
      {menu.map(item => (
        <li className="navItem" key={item.slug}>
          <Link to={item.slug}>{item.title}</Link>
        </li>
      ))}
    </NavStyled>
  </nav>
);

const Header = ({ menu }) => (
  <>
    <HeaderStyled>
      <Link to="/">
        <Logo />
      </Link>
      <MyNameText>Mike Raguso</MyNameText>
      <Nav menu={menu} />
    </HeaderStyled>
  </>
);

Nav.propTypes = {
  menu: PropTypes.array.isRequired
};

Header.propTypes = {
  menu: PropTypes.array.isRequired
};

export default Header;
