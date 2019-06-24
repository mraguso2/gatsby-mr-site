import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ProjectImage = ({ style }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "projects-hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        alt="Picture for the projects page"
        style={style}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);

export default ProjectImage;
