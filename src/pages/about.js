import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BreadCrumbs from '../components/breadcrumbs';
import AboutImage from '../components/imageAbout';
import { SectionTitle } from '../styles/section';
import { above } from '../utilities/breakpoints';

const AboutTitle = styled(SectionTitle)`
  background: white;
  border-radius: 10px;
  padding: 8px;
  position: relative;
  top: -20px;
  left: 15px;
  box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12);
`;

const Hero = styled.div`
  position: relative;
  margin-top: 5px;
  height: 200px;
  ::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    width: 100%;
    height: 100%;
    border: 2px solid #92aed0;
  }
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, hsla(0, 0%, 0%, 0.15) 80%, hsla(0, 0%, 0%, 0.55));
  }
  ${above.med_1`
    height: 300px;
  `}
`;

const Greeting = styled.h3`
  position: absolute;
  top: 20px;
  color: hsl(200, 67%, 98%);
  z-index: 10;
  text-align: center;
  text-shadow: 0 0 50px hsla(0, 0%, 0%, 0.4);
  background: hsla(209, 61%, 16%, 0.45);
  right: 20px;
  padding: 5px;
  border-radius: 8px;
`;

const AboutPage = () => (
  <Layout>
    <SEO
      title="About Me"
      keywords={[`mike raguso`, `raguso`, `slice of the web`, `portfolio`, `gatsby`]}
    />
    <BreadCrumbs home single />
    <Hero>
      <AboutImage style={{ height: '100%' }} />
      <Greeting>
        Hi my <br />
        name is <br />
        Mike Raguso
      </Greeting>
    </Hero>
    <AboutTitle>About Me</AboutTitle>
  </Layout>
);

export default AboutPage;
