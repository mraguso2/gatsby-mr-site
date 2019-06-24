import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

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

const homePageStripe = css`
  width: 40%;
  transform: skew(15deg);
  height: 600px;
  ${below.small_1`
    transform: skew(10deg)
  `};
`;

const pageStripe = css`
  width: 30%;
  transform: skew(-40deg);
  height: 104px;
  ${above.small_1`
    height: 75px;
  `};
  ${below.small_1`
    transform: skew(-50deg);
    height: 94px;
  `};
`;

const HeaderStyled = styled.header`
  width: 100%;
  position: relative;
  box-shadow: ${props =>
    props.pageLocation === 'homePage' ? '' : '0px 2px 10px hsla(0, 0%, 0%, 0.05)'};
  margin-bottom: ${props => (props.pageLocation === 'homePage' ? '80px' : '15px')};
  overflow-y: ${props => (props.pageLocation === 'homePage' ? 'visible' : 'hidden')};
  .inner {
    display: flex;
    align-items: center;
    max-width: 1150px;
    padding: 10px;
    margin: auto;
    padding-bottom: ${props => (props.pageLocation === 'homePage' ? '' : 0)};
    ${below.small_1`
      justify-content: space-between;
      flex-wrap: wrap;
      padding-left: 5px;
      padding-right: 5px;
    `}
    ::before {
      content: '';
      position: absolute;
      background: #ffffff;
      top: 0;
      bottom: 0;
      z-index: -1;
      max-width: 500px;
      ${props => (props.pageLocation === 'homePage' ? homePageStripe : pageStripe)};
    }
  }
`;

const NavStyled = styled.ul`
  display: flex;
  list-style: none;
  padding-left: inherit;
  margin-bottom: 0.625rem;
  ${below.small_1`
    margin-top: 0.7rem;
    margin-bottom: 0.7rem;
  `}
  .navItem {
    padding: 5px;
    a {
      text-decoration: none;
      font-size: 1.15rem;
      ${above.med_1`
        font-size: 1.2rem;
      `}
    }
  }
`;

const MyNameText = styled.p`
  height: 30px;
  background: white;
  padding-left: 10px;
  padding-bottom: 3px;
  position: relative;
  display: flex;
  align-items: center;
  color: #1663c7;
  align-self: flex-end;
  margin-bottom: 0px;
  margin-left: 10px;
  width: 40%;
  font-size: 1.1rem;
  ${above.med_1`
      padding-bottom: 0px;
  `}
  ${below.small_1`
    height: 25px;
    margin: 0 10px 0 0;
    width: 100%;
    order: 2;
  `}
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

const Header = ({ menu, pageLocation = '' }) => (
  <>
    <HeaderStyled pageLocation={pageLocation}>
      <div className="inner">
        <Link to="/">
          <Logo />
        </Link>
        <MyNameText>Mike Raguso</MyNameText>
        <Nav menu={menu} />
      </div>
    </HeaderStyled>
  </>
);

Nav.propTypes = {
  menu: PropTypes.array.isRequired
};

Header.propTypes = {
  menu: PropTypes.array.isRequired,
  pageLocation: PropTypes.string
};

Header.defaultProps = {
  pageLocation: ''
};

export default Header;
