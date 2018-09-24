import React from "react";
import Ambassador from "../data/ambassador";
import Helmet from "react-helmet";

export default class Amabassadors extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Helmet title={"Ambassadors - " + this.props.data.site.siteMetadata.title}/>

            <div className="body">
                <h2>Ambassadors</h2>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {this.props.data.allAmbassadorsJson.edges.map(({node: ambassador}, key) => (
                    <Ambassador ambassador={ambassador} key={key}/>
                ))}
                </div>
            </div>
            </React.Fragment>
        );
    }
}
export const pageQuery = graphql `
    query AmbassadorsQuery{
        site {
            siteMetadata {
                title
                footer
            }
        }
          allAmbassadorsJson(sort: {fields: priority, order: ASC}){
            edges {
                node {
                    name
                    titles
                    house
                    startingYear
                    endingYear
                    subjectsTaken
                    languages
                    subjectInterest
                    about
                    profilePic
                }
            }
        }
    }
`