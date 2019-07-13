import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import Layout from './layout';
import BreadCrumbs from './breadcrumbs';

function ProjectTemplate({ data, pageLocation }) {
  const { mdx } = data;
  return (
    <Layout pageLocation={pageLocation}>
      <BreadCrumbs projects />
      <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.code.body}</MDXRenderer>
    </Layout>
  );
}

export const query = graphql`
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
      }
      code {
        body
      }
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
