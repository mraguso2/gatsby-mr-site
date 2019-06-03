import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SliceHero from '../components/sliceHero';
import AboutMe from '../components/aboutMe';
import Projects from '../components/projects';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`mike raguso`, `raguso`, `slice of the web`, `portfolio`, `gatsby`]}
    />
    <SliceHero />
    <AboutMe />
    <Projects />
    <Contact />
  </Layout>
);

export default IndexPage;
