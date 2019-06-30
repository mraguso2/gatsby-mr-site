import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import { SweetBorderTitle } from '../styles/section';
import { ProjectCollection } from '../styles/projects';
import ProjectListing from './projectListing';

export const PROJECT_LISTING_EXCEL = graphql`
  query ExcelProjectQuery {
    allMdx(
      filter: { frontmatter: { type: { eq: "excel" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            description
            icon
            type
            tags
          }
        }
      }
    }
  }
`;

export const ExcelTitle = styled(SweetBorderTitle)`
  color: hsl(170, 97%, 15%);
  ::after {
    background-image: linear-gradient(
      to right,
      hsl(210, 36%, 96%),
      hsl(162, 63%, 41%) 30%,
      hsl(168, 80%, 23%) 50%,
      hsl(162, 63%, 41%) 70%,
      hsl(210, 36%, 96%)
    );
  }
  ::before {
    background-image: linear-gradient(
      to right,
      hsl(210, 36%, 96%),
      hsl(162, 63%, 41%) 30%,
      hsl(168, 80%, 23%) 50%,
      hsl(162, 63%, 41%) 70%,
      hsl(210, 36%, 96%)
    );
  }
`;

const ExcelProjects = () => (
  <StaticQuery
    query={PROJECT_LISTING_EXCEL}
    render={({ allMdx }) => (
      <ProjectCollection>
        {allMdx.edges.map(({ node }) => (
          <ProjectListing key={node.frontmatter.slug} node={node} type={node.frontmatter.type} />
        ))}
      </ProjectCollection>
    )}
  />
);

export default ExcelProjects;
