import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import { SweetBorderTitle } from '../styles/section';
import { ProjectCollection } from '../styles/projects';
import ProjectListing from './projectListing';

export const PROJECT_LISTING_WEB = graphql`
  query WebProjectQuery {
    allMdx(
      filter: { frontmatter: { type: { eq: "web" } } }
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
            featured
          }
        }
      }
    }
  }
`;

export const WebTitle = styled(SweetBorderTitle)`
  color: hsl(214, 72%, 32%);
  ::after {
    background-image: linear-gradient(
      to right,
      hsl(210, 36%, 96%),
      hsl(214, 64%, 64%) 30%,
      hsl(214, 79%, 44%) 50%,
      hsl(214, 64%, 64%) 70%,
      hsl(210, 36%, 96%)
    );
  }
  ::before {
    background-image: linear-gradient(
      to right,
      hsl(210, 36%, 96%),
      hsl(214, 64%, 64%) 30%,
      hsl(214, 79%, 44%) 50%,
      hsl(214, 64%, 64%) 70%,
      hsl(210, 36%, 96%)
    );
  }
`;

const WebProjects = () => (
  <StaticQuery
    query={PROJECT_LISTING_WEB}
    render={({ allMdx }) => (
      <ProjectCollection>
        {allMdx.edges.map(({ node }) => (
          <ProjectListing type={node.frontmatter.type} key={node.frontmatter.slug} node={node} />
        ))}
      </ProjectCollection>
    )}
  />
);

export default WebProjects;
