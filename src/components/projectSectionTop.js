import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { FullWidthContainer, FeatureText } from '../styles/section';
import { TagsGroup } from '../styles/projects';
import { above, below } from '../utilities/breakpoints';
import webCogs from '../images/floating-cogs.svg';
import excelCogs from '../images/floating-cogs-excel.svg';
import externalLink from '../images/icon-external-window.svg';
import ImageIcons from './imagesProjectIcons';

const excelProjectTop = css`
  background-image: url(${excelCogs});
  border-bottom: 3px solid #e2eff0;
  ::before {
    background: #53b59e;
  }
  ::after {
    background: #53b59e;
  }
`;

const TopContainerStyled = styled(FullWidthContainer)`
  display: flex;
  justify-content: center;
  /* background-color: #f1f5f8; */
  /* background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231663c7' fill-opacity='0.09'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); */
  background-color: hsla(206, 33%, 99%, 1);
  background-image: url(${webCogs});
  border-bottom: 3px solid #dde8f4;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  height: 210px;
  ::before {
    content: '';
    width: 15px;
    height: 340px;
    background: #1763c7;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: rotate(135deg);
    z-index: -5;
  }
  ::after {
    content: '';
    width: 15px;
    height: 320px;
    background: #1763c7;
    position: absolute;
    left: 0;
    transform: rotate(135deg);
    z-index: -5;
  }
  ${props => (props.frontmatter.type === 'excel' ? excelProjectTop : '')}
  ${above.med_1`
    width: 100%;
    left: auto;
    right: auto;
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
    max-width: 650px;
  `}
`;

const TopSection = styled.div`
  position: relative;
  max-width: 850px;
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  max-width: 600px;
`;

const TopText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 227px;
  align-items: center;
  h3 {
    font-size: 1.6rem;
    color: #102a42;
    padding: 5px;
    border-radius: 8px;
    font-weight: 600;
    margin-bottom: 0.3rem;
    font-family: 'Muli', sans-serif;
    text-align: center;
    ${above.small_1`
      font-size: 1.8rem;
    `}
    ${above.med_0`
      font-size: 2rem;
    `}
  }
`;

const TopDetailsStyled = styled.div`
  color: hsl(209, 61%, 16%);
  background: hsla(211, 51%, 91%, 0.5);
  background: linear-gradient(90deg, hsla(44, 100%, 90%, 0.58), hsla(230, 100%, 90%, 0.7));
  border-radius: 5px;
  min-width: 135px;
  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;

const LinkToLiveStyled = styled.a`
  position: relative;
  padding: 8px;
  display: block;
  font-size: 1.1rem;
  text-align: center;
  margin-right: 1.2rem;
  ::after {
    content: url(${externalLink});
    position: absolute;
    width: 22px;
    margin-left: 10px;
    bottom: 3px;
    ${below.small_1`
      width: 20px;
      bottom: 1px;
    `}
  }
  ${below.small_1`
    font-size: 1rem;
    padding: 5px;
  `}
`;

const LinkToLive = ({ frontmatter }) => (
  <LinkToLiveStyled href={frontmatter.link}>See It Live</LinkToLiveStyled>
);

const TopDetails = ({ frontmatter }) => (
  <TopDetailsStyled>
    {frontmatter.type === 'web' ? <LinkToLive frontmatter={frontmatter} /> : null}
  </TopDetailsStyled>
);

const TagsList = ({ listing, tags }) => (
  <TagsGroup listing={listing}>
    {tags.map(tag => (
      <li key={tag}>{tag}</li>
    ))}
  </TagsGroup>
);

const ImageContainer = styled.div`
  max-width: 125px;
  width: 100%;
  ${below.small_1`
    max-width: 95px;
  `}
`;

const ProjectSectionTop = ({ frontmatter }) => (
  <TopContainerStyled frontmatter={frontmatter}>
    <TopSection>
      <ImageContainer>
        <ImageIcons
          src={frontmatter.icon}
          style={{
            width: '100%',
            borderRadius: '10%',
            boxShadow: '0 1px 3px hsla(0,0%,0%,0.12), 0 1px 10px hsla(0,0%,0%,0.24)'
          }}
        />
      </ImageContainer>
      <TopText>
        <h3>{frontmatter.title}</h3>
        {frontmatter.link ? <TopDetails frontmatter={frontmatter} /> : ''}
      </TopText>
    </TopSection>
    {frontmatter.featured ? <FeatureText title="FEATURED" /> : null}
    {frontmatter.tags ? <TagsList listing={false} tags={frontmatter.tags} /> : ''}
  </TopContainerStyled>
);

ProjectSectionTop.propTypes = {
  frontmatter: PropTypes.object.isRequired
};

LinkToLive.propTypes = {
  frontmatter: PropTypes.object.isRequired
};

TopDetails.propTypes = {
  frontmatter: PropTypes.object.isRequired
};

TagsList.propTypes = {
  listing: PropTypes.bool,
  tags: PropTypes.array
};

TagsList.defaultProps = {
  listing: true,
  tags: []
};

export default ProjectSectionTop;
