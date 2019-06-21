import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BreadCrumbs from '../components/breadcrumbs';
import { Hero, AboutTitle } from '../styles/section';
import ProjectImage from '../components/imageProject';

const ProjectsPage = () => (
  <Layout>
    <SEO
      title="About Me"
      keywords={[`mike raguso`, `raguso`, `slice of the web`, `portfolio`, `gatsby`]}
    />
    <BreadCrumbs home single />
    <Hero projects>
      <ProjectImage style={{ height: '100%' }} />
    </Hero>
    <AboutTitle>Projects</AboutTitle>
  </Layout>
);

export default ProjectsPage;
