import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const ImageTest = ({ src, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  const match = useMemo(() => data.allFile.edges.find(({ node }) => src === node.relativePath), [
    data,
    src
  ]);

  if (match === undefined) return null;

  const { fluid } = match.node.childImageSharp || '';

  return fluid ? <Img fluid={fluid} Tag="div" {...props} /> : null;
};

export default ImageTest;
