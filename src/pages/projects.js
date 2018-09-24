import React from "react";
import Helmet from "react-helmet";
import {Project} from '../data';
export default class Amabassadors extends React.Component{
    render(){
        return (
            <React.Fragment>
                < Helmet title = {
                    "Projects - " + this.props.data.site.siteMetadata.title
                }
                />

            <div className="body">
                <h2>Projects</h2>
                <div style={{display: 'flex', flexWrap: 'wrap', display: '-webkit-flex'}}>
                {this.props.data.allProjectsJson.edges.map(({node: project}, key) => (
                    <Project project={project} />
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
                    image
                }
            }
        }
    }
`
