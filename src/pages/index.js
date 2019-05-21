import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SliceHero from '../components/sliceHero';
import AboutMe from '../components/aboutMe';
import Projects from '../components/projects';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`mike raguso`, `raguso`, `slice of the web`, `portfolio`, `gatsby`]}
    />
    <SliceHero />
    <AboutMe />
    <Projects />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
