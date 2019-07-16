import React from 'react';
import styled from 'styled-components';

import { below } from '../utilities/breakpoints';
import briefcase from '../images/heroicon-briefcase-sm.svg';
import sign from '../images/heroicon-sign-sm.svg';
import tools from '../images/heroicon-tools-sm.svg';
import clipboard from '../images/heroicon-form-sm.svg';

const Description = styled.section`
  display: flex;
  padding-bottom: 50px;
  justify-content: center;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
  align-items: flex-start;
  ${below.med_1`
    align-items: flex-start;
  `}
`;

const IconGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;
  img {
    margin-right: 1rem;
    width: 40px;
    ${below.med_1`
      width: 30px;
    `}
  }
  p {
    line-height: 1.4;
    letter-spacing: 1px;
    font-weight: 500;
    color: hsl(168, 80%, 23%);
    color: hsl(209, 61%, 16%);
    font-size: 1.7rem;
    margin: 1.5rem auto;
  }
  ${below.med_1`
    font-size: 1.4rem;
    margin-right: 0;
  `}
`;

const DescText = styled.p`
  max-width: 500px;
  line-height: 1.6;
  padding-left: 15px;
  position: relative;
  border-radius: 2px;
  margin: 0;
  p {
    margin: 0;
  }
  ::after {
    /* content: ''; */
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(-3deg);
    background: #53b59e;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 2px;
  }
`;

const imageSrc = iconName => {
  let source;
  switch (iconName) {
    case 'clipboard':
      source = clipboard;
      break;
    case 'tools':
      source = tools;
      break;
    case 'sign':
      source = sign;
      break;
    default:
      source = '';
  }
  return source;
};

const ProjectSectionIconGroup = ({ iconInfo, sectionHeader, children }) => (
  <Description>
    <IconGroup>
      <img style={{ fill: '#fff' }} src={imageSrc(iconInfo)} alt="A Briefcase" />
      <p>{sectionHeader}</p>
    </IconGroup>
    <DescText>{children}</DescText>
  </Description>
);

export default ProjectSectionIconGroup;
