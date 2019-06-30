import React from 'react';
import PropTypes from 'prop-types';

import ImageIcons from './imagesProjectIcons';
import { StyledLink } from '../styles/section';
import {
  ProjectCard,
  ProjectTitle,
  ProjectBioContainer,
  ProjectTextContainer,
  ImageContainer
} from '../styles/projects';

const ProjectListing = ({ node, excel }) => (
  <StyledLink to={`/projects${node.frontmatter.slug}`}>
    <ProjectCard excel={excel}>
      <ImageContainer>
        <ImageIcons
          src={node.frontmatter.icon}
          style={{
            width: '90px',
            borderRadius: '10%',
            boxShadow: '0 1px 3px hsla(0,0%,0%,0.12), 0 1px 2px hsla(0,0%,0%,0.24)'
          }}
        />
      </ImageContainer>
      <ProjectTextContainer>
        <ProjectTitle excel={excel}>{node.frontmatter.title}</ProjectTitle>
        <ProjectBioContainer>{node.frontmatter.description}</ProjectBioContainer>
      </ProjectTextContainer>
    </ProjectCard>
  </StyledLink>
);

ProjectListing.propTypes = {
  node: PropTypes.object.isRequired,
  excel: PropTypes.string
};

ProjectListing.defaultProps = {
  excel: ''
};

export default ProjectListing;
