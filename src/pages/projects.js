import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BreadCrumbs from '../components/breadcrumbs';
import { Hero, HeroTitle, SweetBorderTitle, SectionContainer } from '../styles/section';
import ProjectImage from '../components/imageProject';
import projSVG from '../images/nT_2640644.svg';
import { above, below } from '../utilities/breakpoints';
import briefcase from '../images/heroicon-briefcase-sm.svg';
import ExcelProjects, { ExcelTitle } from '../components/projectsExcel';
import WebProjects, { WebTitle } from '../components/projectsWeb';

const Top = styled.div`
  position: relative;
  max-width: 850px;
  margin: auto;
  ::after {
    content: url(${projSVG});
    opacity: 0.15;
    width: 210px;
    position: absolute;
    top: -60px;
    right: 0;
    z-index: -1;
    transform: rotate(-180deg);
    ${above.med_1`
      width: 270px;
      `}
  }
`;

const Description = styled.section`
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 60px;
  justify-content: space-around;
  .dadjoke {
    display: block;
    margin-top: 8px;
    font-size: 0.8rem;
  }
  ${below.med_1`
    flex-direction: column;
  `}
`;

const IconGroup = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    margin-right: 15px;
  }
  p {
    line-height: 1.4;
    letter-spacing: 1px;
    font-weight: 500;
    color: hsl(168, 80%, 23%);
  }
  ${below.med_1`
    margin-bottom: 1.5rem;
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

const ProjectsPage = () => (
  <Layout>
    <SEO
      title="Projects"
      keywords={[`mike raguso`, `raguso`, `slice of the web`, `portfolio`, `gatsby`, 'projects']}
    />
    <BreadCrumbs single />
    <Top>
      <Hero data-hero="projects">
        <ProjectImage style={{ height: '100%' }} />
      </Hero>
      <HeroTitle>Projects</HeroTitle>
    </Top>
    <Description>
      <IconGroup>
        <img src={briefcase} alt="A briefcase" />
        <p>
          MY DIGITAL <br />
          BRIEFCASE
        </p>
      </IconGroup>
      <DescText>
        A collection of projects that I have built. They are grouped into Web and Microsoft Excel
        buckets. Projects range in complexity, size, tech used and whether or not still actively
        being developed. Check them out and contact me with any questions! <br />
        <span className="dadjoke">
          This list is not exhaustive but some were definitely <em>tiring</em>.{' '}
          <span role="img" aria-label="Smiley Face">
            😁
          </span>
          <em>[really??]</em>
        </span>
      </DescText>
    </Description>
    <SectionContainer>
      <WebTitle>Web Projects</WebTitle>
      <WebProjects />
    </SectionContainer>
    <SectionContainer>
      <ExcelTitle>Excel Projects</ExcelTitle>
      <ExcelProjects />
    </SectionContainer>
  </Layout>
);

export default ProjectsPage;
