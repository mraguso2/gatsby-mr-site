import React from 'react';
import styled from 'styled-components';

import { below } from '../utilities/breakpoints';
import sign from '../images/heroicon-sign-sm.svg';
import tools from '../images/heroicon-tools-sm.svg';
import clipboard from '../images/heroicon-form-sm.svg';

const IconGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;
  img {
    margin-right: 0.6rem;
    width: 35px;
    ${below.med_1`
      width: 30px;
    `}
  }
  p {
    line-height: 1.4;
    /* letter-spacing: 1px; */
    font-weight: 400;
    /* color: hsl(168, 80%, 23%); */
    color: hsl(209, 61%, 16%);
    font-size: 1.7rem;
    margin: 1.5rem auto;
    ${below.med_0`
      font-size: 1.5rem;
    `}
  }
  ${below.med_1`
    margin-right: 0;
  `}
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

const Description = styled.section`
  display: flex;
  padding-top: 50px;
  padding-bottom: 50px;
  justify-content: center;
  align-items: center;
  ${below.med_1`
    flex-direction: column;
  `}
`;

const DescText = styled.p`
  max-width: 450px;
  line-height: 1.6;
  padding: 15px;
  position: relative;
  border-radius: 2px;
  margin: 0;
  background: white;
  p {
    margin: 0;
  }
  ::after {
    content: ${props => (props.sectionHeader === 'Background' ? "''" : 'none')};
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(-3deg);
    background: #f7c948;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 2px;
  }
  ${below.small_1`
    font-size: 0.95rem;
  `}
`;

const ProjectSectionIconGroup = ({ iconInfo, sectionHeader, children }) => (
  <Description>
    <IconGroup>
      <img src={imageSrc(iconInfo)} alt={iconInfo} />
      <p>{sectionHeader}</p>
    </IconGroup>
    <DescText sectionHeader={sectionHeader}>{children}</DescText>
  </Description>
);

export default ProjectSectionIconGroup;
