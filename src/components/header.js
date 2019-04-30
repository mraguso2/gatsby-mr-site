import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import yourSVG from '../images/Logo-test.svg';

const Logo = () => (
  <>
    <img
      style={{
        width: '70px'
      }}
      src={yourSVG}
      alt="logo"
    />{' '}
  </>
);

// const Nav = (props) => <ul>{menu.map(item => `<li key=${item.slug}>${item.title}</li>`)}</ul>;
const Nav = ({ menu }) => (
  <nav>
    {menu.map(item => (
      <Link to={item.slug} key={item.slug}>
        {item.title}
      </Link>
    ))}
  </nav>
);

const Header = ({ menu }) => (
  <header
    style={{
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        <Logo
          style={{
            width: '50px'
          }}
        />
      </Link>
    </div>
    <Nav menu={menu} />
  </header>
);

Nav.propTypes = {
  menu: PropTypes.array.isRequired
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
