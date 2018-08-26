import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
export default class Tutorials extends React.Component{
    render(){
        const { edges: tutorials } = this.props.data.allMarkdownRemark;
        var final = [];
        var currentArr = [];
        var currentGroup = tutorials[0].node.frontmatter.group;
        tutorials.map(({node: tutorial}) => {
            if(currentGroup !== tutorial.frontmatter.group){
                final.push({group: currentGroup, tutorials: currentArr});
                currentArr = [];
                currentGroup = tutorial.frontmatter.group;
            }
            currentArr.push(tutorial);
        });
        final.push({group: currentGroup, tutorials: currentArr});
        return (
            <React.Fragment>
                <Helmet title = {
                    "Tutorials - " + this.props.data.site.siteMetadata.title
                }
                />

            <div className="body">
                <div className="tutorials">
                    {final.map(({tutorials, group}) => {
                            return(
                                <div className="tutorial-group">
                                    <h2>{group}</h2>
                                    {tutorials.map((tutorial, key) => <Link to={tutorial.frontmatter.path}>{tutorial.frontmatter.title}</Link>)}
                                </div>
                            )
                    })}
                </div>
            </div>
            </React.Fragment>
        );
    }
}
export const pageQuery = graphql `
  query IndexQuery {
      site {
          siteMetadata {
              title
              footer
          }
      }
    allMarkdownRemark(sort: {
                fields: [frontmatter___group,frontmatter___order],
                order: DESC
            }){
      edges {
        node {
          id
          frontmatter {
            title
            path
            group
          }
        }
      }
    }
  }
`;