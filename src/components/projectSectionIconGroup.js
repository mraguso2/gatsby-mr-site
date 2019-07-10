import React from 'react';
import styled from 'styled-components';

import { below } from '../utilities/breakpoints';
import briefcase from '../images/heroicon-briefcase-sm.svg';

const Description = styled.section`
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 60px;
  justify-content: center;
  ${below.med_1`
    flex-direction: column;
  `}
`;

const IconGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;
  img {
    margin-right: 1rem;
  }
  p {
    line-height: 1.4;
    letter-spacing: 1px;
    font-weight: 500;
    color: hsl(168, 80%, 23%);
  }
  ${below.med_1`
    margin-bottom: 1.5rem;
    margin-right: 0;
  `}
`;

const DescText = styled.p`
  max-width: 500px;
  line-height: 1.6;
  padding: 25px 15px;
  background: white;
  position: relative;
  border-radius: 2px;
  ::after {
    content: '';
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

const ProjectSectionIconGroup = ({ iconInfo }) => (
  <Description>
    <IconGroup>
      <img src={briefcase} alt="A Briefcase" />
      <p>
        MY DIGITAL <br />
        BRIEFCASE
      </p>
    </IconGroup>
    <DescText>
      A collection of projects that I have built. They are grouped into Web and Microsoft Excel
      buckets. Projects range in complexity, size, tech used and whether or not still actively being
      developed. Check them out and contact me with any questions!
    </DescText>
  </Description>
);

export default ProjectSectionIconGroup;
