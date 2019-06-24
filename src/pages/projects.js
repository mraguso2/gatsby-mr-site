import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BreadCrumbs from '../components/breadcrumbs';
import { Hero, HeroTitle } from '../styles/section';
import ProjectImage from '../components/imageProject';

const ProjectsPage = () => (
  <Layout>
    <SEO
      title="Projects"
      keywords={[`mike raguso`, `raguso`, `slice of the web`, `portfolio`, `gatsby`, 'projects']}
    />
    <BreadCrumbs single />
    <Hero data-hero="projects">
      <ProjectImage style={{ height: '100%' }} />
    </Hero>
    <HeroTitle>Projects</HeroTitle>
  </Layout>
);

export default ProjectsPage;
