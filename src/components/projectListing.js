import React from 'react';
import PropTypes from 'prop-types';

import ImageIcons from './imagesProjectIcons';
import { FeatureText } from '../styles/section';
import {
  CardLink,
  ImageContainer,
  ProjectBioContainer,
  ProjectCard,
  ProjectTextContainer,
  ProjectTitle,
  TagsGroup
} from '../styles/projects';

const TagsList = ({ listing, tags }) => (
  <TagsGroup listing={listing}>
    {tags.map(tag => (
      <li key={tag}>{tag}</li>
    ))}
  </TagsGroup>
);

const ProjectListing = ({ node, type }) => (
  <ProjectCard type={type}>
    <CardLink to={`/projects${node.frontmatter.slug}`}>
      <ImageContainer>
        <ImageIcons
          src={node.frontmatter.icon}
          style={{
            width: '75px',
            borderRadius: '10%',
            boxShadow: '0 1px 3px hsla(0,0%,0%,0.12), 0 1px 2px hsla(0,0%,0%,0.24)'
          }}
        />
      </ImageContainer>
      <ProjectTextContainer>
        <ProjectTitle type={type}>{node.frontmatter.title}</ProjectTitle>
        <ProjectBioContainer type={type}>{node.frontmatter.description}</ProjectBioContainer>
      </ProjectTextContainer>
    </CardLink>
    {node.frontmatter.featured ? <FeatureText title="" /> : null}
    {node.frontmatter.tags ? <TagsList listing tags={node.frontmatter.tags} /> : ''}
  </ProjectCard>
);

ProjectListing.propTypes = {
  node: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

TagsList.propTypes = {
  listing: PropTypes.bool,
  tags: PropTypes.array
};

TagsList.defaultProps = {
  listing: true,
  tags: []
};

export default ProjectListing;
