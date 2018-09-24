import React from "react";
import Helmet from "react-helmet";

export default class Amabassadors extends React.Component{
    render(){
        return (
            <React.Fragment>
                < Helmet title = {
                    "Jobs - " + this.props.data.site.siteMetadata.title
                }
                />

            <div className="body">
                <h2>Jobs</h2>
                <div style={{display: 'flex', flexWrap: 'wrap', display: '-webkit-flex'}}>
                {this.props.data.allJobsJson.edges.map(({node: job}, key) => (
                    <div className="job">
                      <h3>{job.title}</h3>
                      <p>{job.description}</p>
                      <span>Open To: {job.openTo}</span>
                    </div>
                ))}
                </div>
            </div>
            </React.Fragment>
        );
    }
}
export const pageQuery = graphql `
    query JobsQuery{
        site {
            siteMetadata {
                title
                footer
            }
        }
        allJobsJson{
            edges{
                node{
                    title
                    description
                    openTo
                }
            }
        }
    }
`
