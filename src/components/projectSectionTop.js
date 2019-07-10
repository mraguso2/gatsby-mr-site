import React from 'react';
import styled from 'styled-components';

import { FullWidthContainer, SectionContentStyled } from '../styles/section';
import { below, above } from '../utilities/breakpoints';
import cogs from '../images/floating-cogs.svg';
import ImageIcons from './imagesProjectIcons';

const TopContainerStyled = styled(FullWidthContainer)`
  display: flex;
  justify-content: center;
  background-color: #f1f5f8;
  /* background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231663c7' fill-opacity='0.09'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); */
  background-image: url(${cogs});
  border-bottom: 3px solid #dde8f4;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
  ::after {
    /* content: ''; */
    width: 100%;
    height: 3px;
    background: linear-gradient(135deg, #dde8f4, #a3c7ef, #dde8f4, #a3c7ef, #dde8f4, #a3c7ef);
    position: absolute;
    right: 0;
    bottom: 0;
  }
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
  height: 250px;
  div {
    color: hsl(209, 61%, 16%);
    background: hsla(211, 51%, 91%, 0.5);
    padding: 5px;
    border-radius: 5px;
  }
`;

const ProjectSectionTop = ({ frontmatter }) => (
  <TopContainerStyled>
    <TopSection>
      <ImageIcons
        src={frontmatter.icon}
        style={{
          width: '150px',
          borderRadius: '10%',
          boxShadow: '0 1px 3px hsla(0,0%,0%,0.12), 0 1px 2px hsla(0,0%,0%,0.24)'
        }}
      />
      <div>{frontmatter.title}</div>
    </TopSection>
  </TopContainerStyled>
);

export default ProjectSectionTop;
