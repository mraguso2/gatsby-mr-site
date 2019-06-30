import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import colors from '../utilities/colors';
import { above } from '../utilities/breakpoints';
import { SectionContainer, SectionContentStyled, SectionTitle } from '../styles/section';
import { ProjectCollection } from '../styles/projects';
import ProjectListing from './projectListing';

const ProjectContainer = styled(SectionContainer)`
  color: ${colors.neutral.black};
  #featured {
    letter-spacing: 0.3px;
    color: #5a687b;
    font-size: 0.95rem;
    font-weight: 600;
    text-align: center;
    margin: 0 auto 10px;
    ${above.med_2`
      text-align: left;
      margin-left: 1.75rem;
      margin-top: 5px
    `}
  }
`;

const ProjectSectionTitle = styled(SectionTitle)`
  span {
    color: #1663c7;
    font-size: 0.85rem;
    font-style: italic;
    padding: 3px;
    border-radius: 5px;
  }
`;

const PROJECT_LISTING_FEATURED = graphql`
  query FeaturedProjectListQuery {
    allMdx(
      filter: { frontmatter: { featured: { eq: true } } }
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

const ProjectsBlock = () => (
  <StaticQuery
    query={PROJECT_LISTING_FEATURED}
    render={({ allMdx }) => (
      <ProjectContainer id="projects">
        <SectionContentStyled>
          <ProjectSectionTitle width="120px" color="#102a42" colorLine="#1763c7">
            <a href="/projects">
              Projects <span>~ Show All</span>
            </a>
          </ProjectSectionTitle>
          <p id="featured">FEATURED</p>
          <ProjectCollection>
            {allMdx.edges.map(({ node }) => (
              <ProjectListing
                key={node.frontmatter.slug}
                node={node}
                type={node.frontmatter.type}
              />
            ))}
          </ProjectCollection>
        </SectionContentStyled>
      </ProjectContainer>
    )}
  />
);

export default ProjectsBlock;
