import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SliceHero from '../components/sliceHero';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`mike raguso`, `portfolio`, `gatsby`]} />
    <SliceHero />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
