import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import AboutMe from '../components/aboutMe';

const IndexPage = () => (
  <Layout>
    <SEO
      title="About Me"
      keywords={[`mike raguso`, `raguso`, `slice of the web`, `portfolio`, `gatsby`]}
    />
    <AboutMe />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
