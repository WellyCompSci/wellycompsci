import React from "react";
import Thumbnail from 'react-thumbnail';
import Helmet from "react-helmet";

export default class Amabassadors extends React.Component{
    render(){
        return (
            <React.Fragment>
                < Helmet title = {
                    "Projects - " + this.props.data.site.siteMetadata.title
                }
                />

            <div className="body">
                <h2>Jobs</h2>
                <div style={{display: 'flex', flexWrap: 'wrap', display: '-webkit-flex'}}>
                {this.props.data.allProjectsJson.edges.map(({node: project}, key) => (
                    <div className="project">
                        {project.link && <a href={project.link}><Thumbnail width={250} height={250} page={project.link} scale={4} /></a>}
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                ))}
                </div>
            </div>
            </React.Fragment>
        );
    }
}
export const pageQuery = graphql `
    query ProjectsQuery{
        site {
            siteMetadata {
                title
                footer
            }
        }
        allProjectsJson{
            edges{
                node{
                    title
                    description
                    link
                }
            }
        }
    }
`
