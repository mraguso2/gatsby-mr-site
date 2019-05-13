import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import logoMR from '../images/logo-MR.svg';

const LogoStyled = styled.img`
  width: 55px;
`;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 15px 0px;
  max-width: 960px;
`;

const NavStyled = styled.ul`
  display: flex;
  list-style: none;

  .navItem {
    padding: 5px;

    a {
      text-decoration: none;
    }
  }
`;

const MyNameText = styled.p`
  width: 80%;
  height: 25px;
  background: white;
  margin: 0 10px 10px 0px;
  padding-left: 10px;
  position: relative;
  display: flex;
  align-items: center;
  color: #1663c7;

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
`;

const Logo = () => <LogoStyled src={logoMR} alt="logo" />;

const Nav = ({ menu }) => (
  <nav>
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
      <Nav menu={menu} />
    </HeaderStyled>
    <MyNameText>Mike Raguso</MyNameText>
  </>
);

Nav.propTypes = {
  menu: PropTypes.array.isRequired
};

Header.propTypes = {
  menu: PropTypes.array.isRequired
};

export default Header;
