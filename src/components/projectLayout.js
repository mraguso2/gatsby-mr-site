import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import Layout from './layout';
import BreadCrumbs from './breadcrumbs';

function ProjectTemplate({ data: { mdx }, pageLocation }) {
  return (
    <Layout pageLocation={pageLocation}>
      <BreadCrumbs projects />
      <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ProjectQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        slug
        icon
        type
        tags
        featured
        link
        github
      }
      body
    }
  }
`;

ProjectTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageLocation: PropTypes.string
};

ProjectTemplate.defaultProps = {
  pageLocation: ''
};

export default ProjectTemplate;
