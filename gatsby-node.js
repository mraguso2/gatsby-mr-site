const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx {
          edges {
            node {
              id
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      if (results.errors) {
        console.error(results.errors);
        reject(results.errors);
      }
      results.data.allMdx.edges.forEach(({ node }) => {
        createPage({
          path: `/projects${node.frontmatter.slug}`,
          component: path.resolve('./src/components/projectLayout.js'),
          context: {
            slug: node.frontmatter.slug
          }
        });
      });
      resolve();
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  });
};
