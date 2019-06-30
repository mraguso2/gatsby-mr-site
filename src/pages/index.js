import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SliceHero from '../components/sliceHero';
import AboutMeBlock from '../components/aboutMeBlock';
import ProjectsBlock from '../components/projectsBlock';
import ContactBlock from '../components/contactBlock';

const IndexPage = () => (
  <Layout pageLocation="homePage">
    <SEO
      title="Home"
      keywords={[`mike raguso`, `raguso`, `slice of the web`, `portfolio`, `gatsby`]}
    />
    <SliceHero />
    <AboutMeBlock />
    <ProjectsBlock />
    <ContactBlock />
  </Layout>
);

export default IndexPage;
