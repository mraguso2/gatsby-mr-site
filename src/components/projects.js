import React from 'react';
import styled from 'styled-components';
import { Link, StaticQuery, graphql } from 'gatsby';

import ImageIcons from './imagesProjectIcons';
import colors from '../utilities/colors';
import { above } from '../utilities/breakpoints';
import { SectionContainer, SectionContentStyled, SectionTitle } from '../styles/section';

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
  margin-top: 30px;
  span {
    color: #1663c7;
    font-size: 0.85rem;
    font-style: italic;
    background: linear-gradient(180deg, #f1f5f8, #d4e1f1);
    padding: 3px;
    border-radius: 5px;
  }
`;

const ProjectCard = styled.article`
  box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12);
  padding: 15px;
  background: #fff;
  margin: 10px auto 25px;
  border-radius: 10px;
  display: flex;
  max-width: 600px;
  width: 100%;
  border-top: 3px solid #92aed0;
  /* height: 179px; */
  ${above.small_1`
    height: auto;
  `}
  ${above.med_1`
    padding: 20px;
  `}
  ${above.med_2`
    font-size: 1.5rem;
    max-width: 425px;
    margin-right: 10px;
    padding: 8px;
  `}
`;
// background: #ddecff;

const ProjectTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
  margin: 5px 0 0;
  ${above.med_1`
    font-size: 1.5rem;
  `}
`;

const ProjectCollection = styled.div`
  display: flex;
  flex-direction: column;
  ${above.med_2`
    flex-direction: row;
    flex-wrap: wrap;
  `}
`;

const ProjectBioContainer = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 10px auto 10px;
  color: #293d50;
  ${above.med_1`
    margin: 10px auto 10px;
    font-size: 1.05rem;
  `}
  ${above.med_2`
    margin: 10px auto 10px;
    font-size: 1rem;
  `}
`;

const ProjectTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 90px;
  margin-right: 15px;
  ${above.small_1`
    max-width: 110px;
  `}
  ${above.med_1`
    max-width: 110px;
  `}
  ${above.med_1`
    max-width: 90px;
  `}
`;

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
`;

const PROJECT_LISTING = graphql`
  query ProjectListQuery {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
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
    render={({ allMdx }) => (
      <ProjectContainer id="projects">
        <SectionContentStyled>
          <ProjectSectionTitle width="105px" color="#102a42">
            <a href="/projects">
              Projects <span>~ Show All</span>
            </a>
          </ProjectSectionTitle>
          <p id="featured">FEATURED</p>
          <ProjectCollection>
            {allMdx.edges.map(({ node }) => (
              <ProjectCard key={node.frontmatter.slug}>
                <ImageContainer>
                  <ImageIcons
                    src={node.frontmatter.icon}
                    style={{
                      minWidth: '90px',
                      borderRadius: '10%',
                      boxShadow: '0 1px 3px hsla(0,0%,0%,0.12), 0 1px 2px hsla(0,0%,0%,0.24)'
                    }}
                  />
                </ImageContainer>
                <ProjectTextContainer>
                  <StyledLink to={`/projects${node.frontmatter.slug}`}>
                    <ProjectTitle>{node.frontmatter.title}</ProjectTitle>
                  </StyledLink>
                  <ProjectBioContainer>
                    {node.frontmatter.description}
                    {/* <Link className="tellMeMore" to={`/projects${node.frontmatter.slug}`}>
                      Tell Me More!
                    </Link> */}
                  </ProjectBioContainer>
                </ProjectTextContainer>
              </ProjectCard>
            ))}
          </ProjectCollection>
        </SectionContentStyled>
      </ProjectContainer>
    )}
  />
);

export default Projects;

// triangles
// background-color: #f1f5f8;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23829ab0' fill-opacity='0.19'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
