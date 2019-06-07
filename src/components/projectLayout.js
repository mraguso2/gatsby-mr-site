import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import Layout from './layout';

function ProjectTemplate(props) {
  const { mdx } = props.data;
  const { location } = props;
  return (
    <Layout location={location}>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </Layout>
  );
}

// export default class projectLayout extends Component {
//   render() {
//     const { markdownRemark } = this.props.data;
//     const { location } = this.props;
//     return (
//       <Layout location={location}>
//         <h1>{markdownRemark.frontmatter.title}</h1>
//         <div
//           dangerouslySetInnerHTML={{
//             __html: markdownRemark.html
//           }}
//         />
//       </Layout>
//     );
//   }
// }

export const query = graphql`
  query ProjectQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        slug
      }
      code {
        body
      }
    }
  }
`;

export default ProjectTemplate;
