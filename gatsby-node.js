/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const path = require('path');

 exports.createPages = ({ boundActionCreators, graphql }) => {
     const {createPage} = boundActionCreators;

     const tutorialPageTemplate = path.resolve('src/templates/tutorialTemplate.js');

     return graphql(`{
        allMarkdownRemark {
            edges{
                node{
                    frontmatter{
                        path
                        title
                    }
                }
            }
        }
    }`).then(result => {
        if(result.errors){
            return Promise.reject(result.errors);
        }
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({ path: node.frontmatter.path, component: tutorialPageTemplate, context: {}})
        })
    });
 }
