import React from 'react';
import styled from 'styled-components';
import { Link, StaticQuery, graphql } from 'gatsby';

import Image from './image';
import colors from '../utilities/colors';
import { above, below } from '../utilities/breakpoints';
import { SectionContainer, SectionContentStyled, SectionTitle } from '../styles/section';

const ProjectContainer = styled(SectionContainer)`
  color: ${colors.neutral.black};
`;

const ProjectsTitle = styled(SectionTitle)`
  &::after {
    width: 91px;
    background: ${colors.neutral.black};
  }
`;

const ProjectBioContainer = styled.p`
  line-height: 1.5;
  max-width: 660px;
  margin: 10px auto 10px;
  ${above.med_1`
    max-width: 660px;
    margin: 10px auto 10px;
    font-size: 1.02rem;
  `}
  ${above.med_2`
    max-width: 750px;
    margin: 10px auto 10px;
    font-size: 1.08rem;
  `}
`;

const PROJECT_LISTING = graphql`
  query ProjectListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            slug
            description
            icon
          }
        }
      }
    }
  }
`;

const Projects = () => (
  <StaticQuery
    query={PROJECT_LISTING}
    render={({ allMarkdownRemark }) => (
      <ProjectContainer id="projects">
        <SectionContentStyled>
          <ProjectsTitle>Projects</ProjectsTitle>
          <div>
            {allMarkdownRemark.edges.map(({ node }) => (
              <article key={node.frontmatter.slug}>
                <Link to={`/projects${node.frontmatter.slug}`}>
                  <h2>{node.frontmatter.title}</h2>
                </Link>
                <p>{node.frontmatter.description}</p>
                <Link className="tellMeMore" to={`/projects${node.frontmatter.slug}`}>
                  Tell Me More
                </Link>
              </article>
            ))}
          </div>
        </SectionContentStyled>
      </ProjectContainer>
    )}
  />
);

export default Projects;

// triangles
// background-color: #690cb0;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23e9d4f9' fill-opacity='0.12'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

// hexagons
// background-color: #690cb0;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23e9d4f9' fill-opacity='0.12' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

// temple
// background-color: #690cb0;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23e9d4f9' fill-opacity='0.12'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
