import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import './layout.css';

const LayoutStyled = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteMenuQuery {
        site {
          siteMetadata {
            menu {
              slug
              title
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header menu={data.site.siteMetadata.menu} />
        <LayoutStyled>
          <main>{children}</main>
        </LayoutStyled>
        <footer>
          © {new Date().getFullYear()}, Built with 💙 by&nbsp;
          <a href="/">MR</a>
        </footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
