import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { FullWidthContainer, SectionContentStyled } from '../styles/section';
import { TagsGroup } from '../styles/projects';
import { below, above } from '../utilities/breakpoints';
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
  background-color: #f1f5f8;
  /* background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231663c7' fill-opacity='0.09'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); */
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
  h3 {
    font-size: 1.4rem;
    color: #102a42;
    padding: 5px;
    border-radius: 8px;
    font-weight: 600;
    margin-bottom: 0.3rem;
    font-family: 'Muli', sans-serif;
    ${above.small_1`
      font-size: 1.6rem;
    `}
    ${above.med_0`
      font-size: 2rem;
    `}
  }
`;

const TopDetails = styled.div`
  color: hsl(209, 61%, 16%);
  background: hsla(211, 51%, 91%, 0.5);
  padding: 5px;
  border-radius: 5px;
  max-width: 185px;
  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;

const FeatureTextStyled = styled.p`
  letter-spacing: 0.3px;
  color: #5a687b;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
  margin: 0 auto 10px;
`;

const FeatureText = () => <FeatureTextStyled>FEATURED</FeatureTextStyled>;

const LinkToLive = styled.a`
  position: relative;
  padding: 8px;
  display: block;
  font-size: 1.1rem;
  text-align: center;
  ::after {
    content: url(${externalLink});
    position: absolute;
    width: 22px;
    margin-left: 10px;
    bottom: 4px;
  }
`;

const TagsList = ({ listing, tags }) => (
  <TagsGroup listing={listing}>
    {tags.map(tag => (
      <li key={tag}>{tag}</li>
    ))}
  </TagsGroup>
);

const ProjectSectionTop = ({ frontmatter }) => (
  <TopContainerStyled frontmatter={frontmatter}>
    <TopSection>
      <ImageIcons
        src={frontmatter.icon}
        style={{
          width: '115px',
          borderRadius: '10%',
          boxShadow: '0 1px 3px hsla(0,0%,0%,0.12), 0 1px 2px hsla(0,0%,0%,0.24)'
        }}
      />
      <TopText>
        <h3>{frontmatter.title}</h3>
        <TopDetails>
          {frontmatter.featured ? <FeatureText /> : ''}
          <LinkToLive href={frontmatter.link}>See It Live</LinkToLive>
        </TopDetails>
      </TopText>
    </TopSection>
    {frontmatter.tags ? <TagsList listing={false} tags={frontmatter.tags} /> : ''}
  </TopContainerStyled>
);

TagsList.propTypes = {
  listing: PropTypes.bool,
  tags: PropTypes.array
};

TagsList.defaultProps = {
  listing: true,
  tags: []
};

export default ProjectSectionTop;
