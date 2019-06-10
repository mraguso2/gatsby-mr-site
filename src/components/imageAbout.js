import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const AboutImage = ({ style }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "BixbyBridge.jpg" }) {
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
        alt="Bixby Creek Bridge"
        style={style}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);

export default AboutImage;
