import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';
import './layout.css';

const LayoutStyled = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem;
  padding-top: 0;
  min-height: 100vh;
`;

const Layout = ({ children, pageLocation = '' }) => (
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
        <Header pageLocation={pageLocation} menu={data.site.siteMetadata.menu} />
        <LayoutStyled>
          <main>{children}</main>
        </LayoutStyled>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageLocation: PropTypes.string
};

Layout.defaultProps = {
  pageLocation: ''
};

export default Layout;
